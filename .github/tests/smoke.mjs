import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";
import { chromium } from "playwright";

const root=process.cwd();
const origin="http://127.0.0.1:4173";
const types={
 ".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",
 ".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",
 ".png":"image/png",".svg":"image/svg+xml",".ico":"image/x-icon"
};
const server=createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,origin).pathname);
  const path=resolve(root,"."+ (pathname==="/"?"/index.html":pathname));
  if(!path.startsWith(root+sep)){res.writeHead(403);res.end();return;}
  const data=await readFile(path);
  res.writeHead(200,{"Content-Type":types[extname(path)]||"application/octet-stream","Cache-Control":"no-store"});
  res.end(data);
 }catch(error){res.writeHead(404);res.end("Não encontrado");}
});
await new Promise(resolve=>server.listen(4173,"127.0.0.1",resolve));
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,serviceWorkers:"allow"});
const page=await context.newPage();
const errors=[];
page.on("pageerror",error=>errors.push(error.message));
const result=[];
async function check(name,run){
 try{await run();result.push(["OK",name]);console.log("✓",name)}
 catch(e){result.push(["FALHOU",name]);console.error("✗",name, e.message);errors.push(name+": "+e.message);}
}
const screenshotDir=resolve(root,".github/test-results");
await mkdir(screenshotDir,{recursive:true});

await check("Página inicial e 12 tutoriais de clientes",async()=>{
 await page.goto(origin+"/index.html",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelectorAll("#topicGrid [data-topic]").length===12);
 assert.equal(await page.locator("#topicCount").innerText(),"12 tutoriais");
 assert.equal(await page.locator("#topicGrid [data-topic]").count(),12);
});
await check("13 tutoriais da profissional e filtros",async()=>{
 await page.getByRole("button",{name:/Para a profissional/}).click();
 assert.equal(await page.locator("#topicGrid [data-topic]").count(),13);
 await page.locator("#topicSearch").fill("Assistente");
 assert.equal(await page.locator("#topicGrid [data-topic]").count(),2);
 await page.locator("#topicSearch").fill("texto inexistente xyz");
 assert.equal(await page.locator("#topicEmpty").isVisible(),true);
 await page.locator("#topicSearch").fill("");
});
await check("Todos os 25 tutoriais: percurso real com cliques",async()=>{
 const ids=await page.evaluate(()=>TOPICS.map(topic=>({id:topic.id,steps:topic.steps.length})));
 assert.equal(ids.length,25);
 assert.equal(ids.reduce((n,t)=>n+t.steps,0),119);
 for(const topic of ids){
  await page.goto(origin+"/index.html#tutorial="+topic.id,{waitUntil:"domcontentloaded"});
  await page.locator("#tutorialView").waitFor({state:"visible"});
  for(let n=0;n<topic.steps;n++){
   const highlighted=page.locator("#phoneScroll .tour-target");
   await highlighted.waitFor({state:"visible",timeout:4000});
   await highlighted.click({timeout:4000});
  }
  assert.equal(await page.locator("#completeView").isVisible(),true,"Não concluiu "+topic.id);
 }
});
await check("Compartilhamento e deep-link de profissional",async()=>{
 await page.goto(origin+"/index.html#tutorial=pro-assistente",{waitUntil:"domcontentloaded"});
 await page.locator("#tutorialView").waitFor({state:"visible"});
 assert.match(await page.locator("#tutorialTitle").innerText(),/Assistente/);
 await page.locator("#backToHome").click();
 assert.equal(await page.locator("#topicGrid [data-topic]").count(),13);
 await page.goto(origin+"/index.html#tutorial=senha",{waitUntil:"domcontentloaded"});
 assert.match(await page.locator("#tutorialTitle").innerText(),/senha/i);
});
await check("Layout em Android pequeno e desktop",async()=>{
 for(const size of [{width:360,height:740},{width:390,height:844},{width:1366,height:900}]){
  await page.setViewportSize(size);
  await page.goto(origin+"/index.html",{waitUntil:"domcontentloaded"});
  const values=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-window.innerWidth,topics:document.querySelectorAll("#topicGrid [data-topic]").length}));
  assert.ok(values.overflow<=2,"Barra horizontal em "+size.width+": "+values.overflow+"px");
  assert.equal(values.topics,12);
  if(size.width===390)await page.screenshot({path:resolve(screenshotDir,"guia-mobile.png"),fullPage:true});
  if(size.width===1366)await page.screenshot({path:resolve(screenshotDir,"guia-desktop.png"),fullPage:true});
 }
});
await check("Manifesto, ícones e PWA offline",async()=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto(origin+"/index.html",{waitUntil:"load"});
 const manifest=await page.evaluate(async()=>{
  const link=document.querySelector('link[rel="manifest"]');
  return await (await fetch(link.href)).json();
 });
 assert.ok(manifest.icons.some(x=>x.sizes==="192x192"));
 assert.ok(manifest.icons.some(x=>x.sizes==="512x512"));
 await page.waitForFunction(async()=>{
  if(!("serviceWorker" in navigator))return false;
  const reg=await navigator.serviceWorker.getRegistration();
  return Boolean(reg?.active);
 },null,{timeout:15000});
 await page.waitForFunction(async()=>(await caches.keys()).includes("guia-isabele-static-v3"),null,{timeout:15000});
 await context.setOffline(true);
 try{
  await page.reload({waitUntil:"domcontentloaded",timeout:12000});
  assert.equal(await page.locator("#topicGrid [data-topic]").count(),12);
  await page.goto(origin+"/index.html#tutorial=pro-calendario",{waitUntil:"domcontentloaded",timeout:12000});
  assert.match(await page.locator("#tutorialTitle").innerText(),/calendário/i);
 }finally{
  await context.setOffline(false);
 }
});
if(errors.length)console.error("Erros registrados:",errors);
await browser.close();
await new Promise(resolve=>server.close(resolve));
console.log("\n",result.filter(r=>r[0]==="OK").length,"/",result.length,"grupos de testes aprovados.");
if(errors.length)process.exitCode=1;

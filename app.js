"use strict";

/**
 * Tutorial Isabele Mariana Nails — DOM estático e dados inventados.
 * Sem fetch, APIs, autenticação, Firebase, pagamentos ou armazenamento.
 * Visual baseado em telas do app original; nenhum JS operacional é importado.
 */

const TOPICS = [
  {
    id:"agendar", icon:"✦", title:"Como fazer meu agendamento?",
    description:"Aprenda a escolher o serviço, a data, o horário e a entender o sinal PIX.",
    steps:[
      {screen:"login", target:"login-enter", title:"Acesse o aplicativo", body:"No aplicativo real, a cliente entra na conta para encontrar seus agendamentos. Aqui não precisamos de e-mail ou senha.", tip:"Toque em Entrar para simular o acesso."},
      {screen:"home", target:"category-gel", title:"Escolha uma categoria", body:"As categorias organizam os procedimentos. Vamos escolher Unhas em Gel para ver os serviços disponíveis.", tip:"Toque em Unhas em Gel."},
      {screen:"services", target:"service-blindagem", title:"Selecione um serviço", body:"Leia a descrição, confira o valor e a duração do procedimento antes de continuar.", tip:"Toque no card Blindagem para selecioná-lo."},
      {screen:"services", selected:true, target:"continue-service", title:"Continue para a agenda", body:"Depois de marcar o procedimento, use o botão que leva ao calendário de agendamento.", tip:"Toque em Continuar para agendamento."},
      {screen:"booking", phase:"date", target:"booking-day", title:"Escolha a data", body:"O aplicativo real mostra os dias permitidos pelas regras da profissional. A data nesta tela é apenas um exemplo fictício.", tip:"Toque na quinta-feira, dia 12."},
      {screen:"booking", phase:"time", target:"booking-time", title:"Escolha seu horário", body:"Os horários reais dependem do serviço, das reservas existentes, dos bloqueios e dos intervalos de segurança. Aqui os horários são ilustrativos.", tip:"Toque em 14h30 para continuar."},
      {screen:"booking", phase:"confirm", target:"booking-confirm", title:"Confira a reserva", body:"No aplicativo real, a cliente confere os dados e pode informar comentários adicionais antes da confirmação.", tip:"Toque em Confirmar agendamento (simulação)."},
      {screen:"pix", target:"pix-understood", title:"Entenda o sinal PIX", body:"Se a reserva exigir sinal, o aplicativo real apresenta uma cobrança PIX. Neste tutorial, não existe QR Code válido, cobrança ou movimentação de dinheiro.", tip:"Toque em Entendi para conhecer a próxima etapa."},
      {screen:"confirmation", target:"final-done", title:"Saiba quando a reserva foi confirmada", body:"O aplicativo real confirma após validar o pagamento ou a isenção. Esta tela é uma ilustração, não é um agendamento efetivado.", tip:"Toque em Concluir tutorial."}
    ]
  },
  {
    id:"pix", icon:"◇", title:"Como funciona o sinal PIX?",
    description:"Entenda a cobrança do sinal, o QR Code e a confirmação do agendamento.",
    steps:[
      {screen:"booking", phase:"confirm", target:"booking-confirm", title:"Revise a reserva", body:"Ao terminar a escolha do serviço e horário, a cliente confere os dados antes de seguir para o sinal, quando ele for exigido.", tip:"Toque em Confirmar agendamento (simulação)."},
      {screen:"pix", target:"pix-understood", title:"Conheça a tela de pagamento", body:"Na versão real, o QR Code e a opção de copiar PIX representam uma cobrança válida. Nesta simulação mostramos apenas onde ficam essas informações.", tip:"Toque em Entendi. Não há pagamento aqui."},
      {screen:"confirmation", target:"final-done", title:"Entenda a confirmação", body:"O pagamento real é verificado automaticamente antes de confirmar a reserva. O tutorial não simula recebimento de dinheiro.", tip:"Toque em Concluir tutorial."}
    ]
  },
  {
    id:"reagendar", icon:"↻", title:"Como reagendar um horário?",
    description:"Veja como escolher outro dia e horário sem criar uma reserva do zero.",
    steps:[
      {screen:"home", target:"profile-tab", title:"Abra o Meu Perfil", body:"Se você já tem um agendamento, o primeiro passo é entrar na área onde ele aparece.", tip:"Toque em Perfil na barra inferior."},
      {screen:"profile", target:"filter-agendados", title:"Encontre seu agendamento", body:"A seção Meus atendimentos organiza as reservas por status. Comece pela aba Agendados.", tip:"Toque em Agendados."},
      {screen:"profile", target:"appointment-reschedule", title:"Escolha Reagendar", body:"No app real, o reagendamento exige disponibilidade para a mesma duração e respeita bloqueios, buffers e regras do dia.", tip:"Toque em Reagendar no atendimento fictício."},
      {screen:"edit", phase:"date", target:"reschedule-day", title:"Escolha um novo dia", body:"O sistema real só aceita datas permitidas e disponíveis. A reserva anterior continua protegida durante a validação.", tip:"Toque no dia 19 da simulação."},
      {screen:"edit", phase:"time", target:"reschedule-time", title:"Selecione um novo horário", body:"A duração do serviço e as condições da agenda são verificadas novamente. O sinal já pago permanece vinculado ao agendamento.", tip:"Toque no horário 15h30."},
      {screen:"edit", phase:"confirm", target:"reschedule-confirm", title:"Confirme a mudança", body:"Na operação real, o aplicativo precisa validar e sincronizar a alteração antes de apresentar o sucesso.", tip:"Toque em Confirmar reagendamento (simulação)."}
    ]
  },
  {
    id:"perfil", icon:"♙", title:"O que meu Perfil oferece?",
    description:"Explore dados cadastrais, sugestões de manutenção e as opções da sua agenda.",
    steps:[
      {screen:"home", target:"profile-tab", title:"Entre no Meu Perfil", body:"O Perfil reúne informações da conta, atalhos e os atendimentos cadastrados.", tip:"Toque em Perfil na navegação inferior."},
      {screen:"profile", target:"profile-contact", title:"Veja seus dados", body:"Aqui ficam as informações de contato da cliente. Os dados exibidos nesta simulação são inventados e não são editáveis.", tip:"Toque no bloco Dados de contato para conhecer a seção."},
      {screen:"profile", target:"profile-maintenance", title:"Veja a sugestão de manutenção", body:"Após serviços de gel elegíveis, o aplicativo pode sugerir manutenção em 21 dias, como referência e não como obrigação.", tip:"Toque em Agendar manutenção (ilustrativo)."},
      {screen:"profile", target:"profile-new", title:"Crie outro agendamento", body:"O botão Novo Agendamento leva a cliente de volta à escolha de procedimentos.", tip:"Toque em Novo Agendamento."}
    ]
  },
  {
    id:"acompanhar", icon:"▤", title:"Como acompanhar meus atendimentos?",
    description:"Veja os agendamentos, filtros e informações de cada procedimento.",
    steps:[
      {screen:"home", target:"profile-tab", title:"Vá para o Perfil", body:"Acompanhar sua agenda começa na área de perfil da cliente.", tip:"Toque em Perfil."},
      {screen:"profile", target:"filter-agendados", title:"Filtre os agendamentos", body:"Use as abas Agendados, Realizados, Cancelados e Todos para organizar a visualização.", tip:"Toque em Agendados."},
      {screen:"profile", target:"appointment-details", title:"Abra os detalhes", body:"Cada card reúne dados do atendimento, como serviço, data, horário e situação.", tip:"Toque em Ver detalhes no card de exemplo."},
      {screen:"details", target:"details-back", title:"Retorne aos seus atendimentos", body:"Ao terminar de consultar os detalhes, você pode voltar para os demais registros.", tip:"Toque em Voltar aos agendamentos."}
    ]
  }
];

const $ = (id) => document.getElementById(id);
const runtime = {topic:null,index:0};
let lastTarget = null;

function appNav(title, right) {
  return '<div class="mock-nav"><button type="button" class="mock-nav-btn" aria-label="Voltar">‹</button><span>'+title+'</span><span>'+ (right||"⌂") +'</span></div>';
}
function subNav(title){
  return '<header class="mock-subnav"><button type="button" aria-label="Voltar">‹</button><strong>'+title+'</strong><button type="button" aria-label="Início">⌂</button></header>';
}
function tabNav(active){
  const tabs=[["⌂","Início","home-tab"],["✧","Serviços","service-tab"],["▣","Agenda","agenda-tab"],["♙","Perfil","profile-tab"]];
  return '<nav class="mock-tabs" aria-label="Navegação ilustrativa">'+tabs.map(([icon,title,id])=>'<button type="button" data-tour="'+id+'" class="'+(title===active?'is-current':'')+'"><b aria-hidden="true">'+icon+'</b>'+title+'</button>').join("")+'</nav>';
}
function screenLogin(){
  return '<div class="mock-page mock-login">'+
   '<img class="mock-official-logo" src="./assets/logo-isabele-mariana.png" alt="Isabele Mariana Nails" width="155" height="109">'+
   '<span class="mock-eyebrow">Área da cliente</span><h2>Bem-vinda de volta.</h2>'+
   '<p>Entre na sua conta para acessar seus agendamentos.</p>'+
   '<span class="mock-label">E-mail</span><div class="mock-field">✉ &nbsp; seu@email.com</div>'+
   '<span class="mock-label">Senha</span><div class="mock-field">♧ &nbsp; ••••••••</div>'+
   '<button type="button" class="mock-primary" data-tour="login-enter">Entrar &nbsp; →</button>'+
   '<div class="mock-google">Entrar com o Google</div>'+
   '<p class="mock-notice"><strong>Tutorial:</strong> não digite dados reais. O acesso é apenas visual.</p></div>';
}
function screenHome(){
  return '<div class="mock-page">'+
   '<header class="mock-hero">'+appNav("Principal","♧")+
   '<div class="mock-profile"><div><span class="tiny">Seja bem-vinda · CLIENTE</span><h3>Cliente Exemplo</h3><p>Escolha seu cuidado e acompanhe seus agendamentos.</p></div><div class="avatar">CE</div></div>'+
   '<div class="search-faux"><span>O que você procura hoje?</span><span>⌕</span></div></header>'+
   '<main class="mock-content"><span class="mock-eyebrow">Atendimentos</span><h3>Escolha seu serviço</h3><p>Selecione uma categoria para visualizar as opções disponíveis.</p>'+
   '<button type="button" class="mock-category" data-tour="category-gel"><span class="category-icon">✧</span><span class="category-body"><strong>Unhas em Gel</strong><small>Aplicação, manutenção e acabamento</small></span><span class="chev">›</span></button>'+
   '<button type="button" class="mock-category"><span class="category-icon">♧</span><span class="category-body"><strong>Manicure</strong><small>Cuidado, esmaltação e acabamento</small></span><span class="chev">›</span></button>'+
   '<button type="button" class="mock-category"><span class="category-icon">✿</span><span class="category-body"><strong>Pedicure</strong><small>Cuidado completo para os seus pés</small></span><span class="chev">›</span></button></main>'+tabNav("Início")+'</div>';
}
function serviceCard(icon,title,description,duration,price,id,selected){
 return '<button type="button" class="mock-service-option'+(selected?' is-selected':'')+'"'+(id?' data-tour="'+id+'"':'')+'><div class="mock-service-top"><span class="service-ornament">'+icon+'</span><div><strong>'+title+'</strong><small>'+description+'</small></div></div><div class="mock-service-meta"><span>◷ '+duration+'</span><strong>'+price+'</strong></div></button>';
}
function screenServices(step){
 const selected=!!step.selected;
 return '<div class="mock-page">'+subNav("Unhas em Gel")+
 '<main class="mock-content"><span class="mock-eyebrow">Categoria</span><h3>Escolha o cuidado ideal para suas unhas</h3><p>Conheça cada técnica e selecione o procedimento.</p>'+
 '<div class="mock-section-heading"><div><span class="mock-eyebrow">Procedimentos</span><h3>Serviços disponíveis</h3></div><span class="mock-count">3 serviços</span></div>'+
 serviceCard("✦","Blindagem","Proteção aplicada sobre a unha natural, para ajudar a reduzir quebras e descamações.","1h30min","R$ 90,00","service-blindagem",selected)+
 serviceCard("✧","Remoção + Alongamento","Remoção e nova aplicação, com cuidados personalizados.","2h30min","R$ 220,00","",false)+
 serviceCard("◇","Remoção de gel","Remoção técnica do produto com cuidado das unhas.","30min","R$ 50,00","",false)+
 '<div class="mock-notice"><strong>Confira antes de agendar:</strong> leia a descrição e selecione o procedimento correto.</div>'+
 '<button type="button" class="mock-primary'+(selected?'':' is-muted')+'" data-tour="continue-service">Continuar para agendamento &nbsp; ›</button></main>'+tabNav("Serviços")+'</div>';
}
function stepHeader(num,eyebrow,title){
 return '<div class="mock-step-header"><span class="mock-step-badge">'+num+'</span><div><small>'+eyebrow+'</small><strong>'+title+'</strong></div></div>';
}
function days(selected,next){
 const data=[["Seg","09"],["Ter","10"],["Qua","11"],["Qui",next?"19":"12"],["Sex","13"]];
 return '<div class="mock-day-strip">'+data.map((d,i)=>'<button type="button" class="mock-day '+(i===3 && selected?'is-selected':'')+'"'+(i===3?' data-tour="'+(next?'reschedule-day':'booking-day')+'"':'')+'><small>'+d[0]+'</small><strong>'+d[1]+'</strong></button>').join("")+'</div>';
}
function times(selected,next){
 const hours=next?["09:00","09:30","10:00","14:00","15:00","15:30","16:00","16:30","17:00"]:["09:00","09:30","10:00","11:30","13:00","14:00","14:30","15:00","16:00"];
 const marked=next?"15:30":"14:30";
 return '<div class="mock-times">'+hours.map((h,i)=>'<button type="button" class="mock-time'+(i===2?' is-unavailable':'')+(h===marked&&selected?' is-selected':'')+'"'+(h===marked?' data-tour="'+(next?'reschedule-time':'booking-time')+'"':'')+'>'+h+'</button>').join("")+'</div>';
}
function screenBooking(step){
 const phase=step.phase||"date",hasDay=phase!=="date",hasTime=phase==="confirm";
 return '<div class="mock-page">'+subNav("Agendamento")+
 '<main class="mock-content"><div class="mock-summary"><span class="mock-eyebrow">Serviço selecionado</span><strong>✦ Blindagem</strong><small>1h30min · R$ 90,00</small></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Reserve seu horário</span><h3>Escolha a melhor data para você</h3><p>Selecione a data e depois escolha um dos horários disponíveis.</p>'+
 stepHeader("1","Data","Escolha o dia")+
 '<div class="mock-section-heading"><span class="mock-eyebrow">Novembro de 2026</span><span class="mock-count">Mês atual</span></div>'+days(hasDay,false)+
 '<p class="mock-inline-help mock-mt-9">Datas fictícias para o tutorial.</p>'+
 '<div class="mock-line"></div>'+stepHeader("2","Horário","Escolha um horário")+
 '<p class="mock-inline-help">Disponível / Ocupado</p>'+times(hasTime,false)+
 '<div class="mock-line"></div>'+stepHeader("3","Seus dados","Finalize sua reserva")+
 '<span class="mock-label">Nome completo</span><div class="mock-field">Cliente Exemplo</div>'+
 '<span class="mock-label">Comentários adicionais <small>(opcional)</small></span><div class="mock-field mock-field--large">Conte se deseja algum cuidado específico...</div>'+
 '<div class="mock-summary"><span class="mock-eyebrow">Resumo da reserva</span><strong>Blindagem</strong><small>Quinta-feira, 12 de novembro · 14h30</small></div>'+
 '<button class="mock-primary" type="button" data-tour="booking-confirm">Confirmar agendamento</button></div>'+
 '</main></div>';
}
function screenPix(){
 return '<div class="mock-page">'+subNav("Pagamento PIX")+
 '<main class="mock-content"><div class="mock-payment-head"><span class="mock-eyebrow">Sinal para reserva</span><h3>Pagamento PIX</h3><p>No aplicativo real, pague o sinal para confirmar o agendamento.</p></div>'+
 '<div class="mock-card mock-center"><span class="mock-eyebrow">Cobrança ilustrativa</span><div class="fake-qr" aria-label="Imagem fictícia não escaneável"></div>'+
 '<strong class="mock-block-title">QR Code fictício</strong><p class="mock-mt-7">Nenhum QR Code válido foi gerado.</p><div class="mock-field">Código PIX não disponível neste tutorial</div></div>'+
 '<div class="mock-notice"><strong>Regras para Sinal:</strong> o aplicativo real informa as condições do pagamento, do cancelamento e do reagendamento.</div>'+
 '<button class="mock-primary" data-tour="pix-understood" type="button">Entendi · Continuar tutorial</button></main></div>';
}
function screenConfirmation(){
 return '<div class="mock-page">'+subNav("Confirmação")+
 '<main class="mock-content mock-center"><div class="mock-check">✓</div><span class="mock-eyebrow">Exemplo de confirmação</span><h3>É assim que você acompanha a confirmação</h3><p>O aplicativo real exibe a situação após validar o sinal PIX ou uma condição de isenção.</p>'+
 '<div class="mock-summary mock-left"><span class="mock-eyebrow">Atendimento demonstrativo</span><strong>Blindagem</strong><small>12/11/2026 · 14h30 · Cliente Exemplo</small></div>'+
 '<div class="mock-notice"><strong>Simulação apenas:</strong> nenhum atendimento foi agendado e nenhum pagamento aconteceu.</div>'+
 '<button type="button" class="mock-primary" data-tour="final-done">Concluir tutorial</button></main></div>';
}
function profileFilters(){
 const filters=[["Agendados","1","filter-agendados"],["Realizados","2","filter-realizados"],["Cancelados","0","filter-cancelados"],["Todos","3","filter-todos"]];
 return '<div class="mock-filters">'+filters.map(([label,count,id])=>'<button type="button" data-tour="'+id+'" class="mock-filter '+(id==="filter-agendados"?'is-selected':'')+'">'+label+'<b>'+count+'</b></button>').join("")+'</div>';
}
function screenProfile(){
 return '<div class="mock-page">'+subNav("Meu Perfil")+
 '<main class="mock-content"><div class="mock-card"><span class="mock-eyebrow">Minha conta</span><div class="mock-profile-info"><div><p class="mock-m-0">Seja bem-vinda</p><h3>Cliente Exemplo</h3></div><div class="avatar">CE</div></div>'+
 '<button type="button" class="mock-link mock-mt-12" data-tour="profile-contact">Dados de contato · telefone e e-mail</button>'+
 '<p class="mock-mt-9">Nenhuma informação real é utilizada.</p></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Cuidado com suas unhas</span><h3>Sua próxima manutenção</h3><p>Após aplicação de gel, uma sugestão pode ser apresentada para 21 dias depois.</p>'+
 '<div class="mock-summary"><strong>Sugestão de manutenção</strong><small>21 dias após a aplicação · apenas exemplo</small></div>'+
 '<button class="mock-link" type="button" data-tour="profile-maintenance">+ Agendar manutenção</button></div>'+
 '<div class="mock-card"><div class="mock-section-heading"><div><span class="mock-eyebrow">Agenda</span><h3>Meus atendimentos</h3></div><span class="mock-count">3</span></div>'+
 '<p>Acompanhe seus agendamentos e consulte seu histórico.</p>'+
 '<button type="button" class="mock-link" data-tour="profile-new">+ Novo Agendamento</button>'+
 profileFilters()+
 '<div class="mock-appointment"><span class="mock-pill">Agendado</span><strong class="mock-block">Blindagem</strong><small>Quinta-feira, 12/11 · 14h30 · 1h30min</small><div class="mock-actions"><button type="button" data-tour="appointment-details">Ver detalhes</button><button type="button" class="primary" data-tour="appointment-reschedule">Reagendar</button></div></div></div></main>'+tabNav("Perfil")+'</div>';
}
function screenEdit(step){
 const phase=step.phase||"date",hasDay=phase!=="date",hasTime=phase==="confirm";
 return '<div class="mock-page">'+subNav("Reagendamento")+
 '<main class="mock-content"><div class="mock-summary"><span class="mock-eyebrow">Agendamento atual</span><strong>Blindagem</strong><small>12/11/2026 · 14h30 · sinal já pago (exemplo)</small></div>'+
 '<div class="mock-card"><h3>Escolha outra data e horário</h3><p>A duração do serviço é mantida.</p>'+stepHeader("1","Nova data","Escolha o dia")+
 '<span class="mock-eyebrow">Novembro de 2026</span>'+days(hasDay,true)+
 '<div class="mock-line"></div>'+stepHeader("2","Novo horário","Escolha um horário")+times(hasTime,true)+
 '<div class="mock-summary"><span class="mock-eyebrow">Resumo fictício</span><strong>Blindagem · 1h30min</strong><small>Quinta-feira, 19 de novembro · 15h30</small></div>'+
 '<button type="button" class="mock-primary" data-tour="reschedule-confirm">Confirmar reagendamento</button></div>'+
 '<div class="mock-notice">Nenhum horário é modificado no aplicativo real. O sinal PIX não é consultado neste tutorial.</div></main></div>';
}
function screenDetails(){
 return '<div class="mock-page">'+subNav("Detalhes do atendimento")+
 '<main class="mock-content"><span class="mock-pill">Agendado</span><h3>Blindagem</h3><p>Detalhes de um atendimento fictício, sem dados pessoais reais.</p>'+
 '<div class="mock-card"><span class="mock-eyebrow">Serviço</span><strong>Blindagem · 1h30min</strong></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Data e horário</span><strong>12/11/2026 · 14h30</strong></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Pagamento</span><strong>Sinal PIX (exemplo)</strong></div>'+
 '<div class="mock-notice">As informações desta tela são demonstrativas.</div>'+
 '<button type="button" class="mock-primary" data-tour="details-back">Voltar aos agendamentos</button></main></div>';
}
function screenFor(step){
 switch(step.screen){
  case "login": return screenLogin();
  case "home": return screenHome();
  case "services": return screenServices(step);
  case "booking": return screenBooking(step);
  case "pix": return screenPix();
  case "confirmation": return screenConfirmation();
  case "profile": return screenProfile();
  case "edit": return screenEdit(step);
  case "details": return screenDetails();
  default: return "";
 }
}
function topicFor(id){return TOPICS.find((t)=>t.id===id)}
function showHome(){
 runtime.topic=null;runtime.index=0;lastTarget=null;
 $("intro").hidden=false;$("tutorialView").hidden=true;$("completeView").hidden=true;
 $("phoneScroll").innerHTML="";$("coachBubble").hidden=true;
 window.scrollTo({top:0,behavior:"auto"});
}
function startTopic(id){
 const topic=topicFor(id);if(!topic)return;
 runtime.topic=topic;runtime.index=0;
 $("intro").hidden=true;$("completeView").hidden=true;$("tutorialView").hidden=false;
 window.scrollTo({top:0,behavior:"auto"});renderStep();
}
function completeTopic(){
 $("tutorialView").hidden=true;$("completeView").hidden=false;
 window.scrollTo({top:0,behavior:"auto"});
}
function nextStep(){
 if(!runtime.topic)return;
 if(runtime.index>=runtime.topic.steps.length-1){completeTopic();return;}
 runtime.index++;renderStep();
}
function previousStep(){if(!runtime.topic)return;if(runtime.index>0){runtime.index--;renderStep();}}
function restart(){if(!runtime.topic)return;runtime.index=0;$("completeView").hidden=true;$("tutorialView").hidden=false;renderStep();window.scrollTo({top:0,behavior:"auto"})}
function renderStep(){
 const topic=runtime.topic;if(!topic)return;
 const step=topic.steps[runtime.index];const n=runtime.index+1;const total=topic.steps.length;
 $("tutorialTitle").textContent=topic.title;
 $("tutorialDescription").textContent=topic.description;
 $("stepCounter").textContent="Passo "+n+" de "+total;
 const pct=Math.round(n/total*100);
 $("progressFill").style.width=pct+"%";$("progressTrack").setAttribute("aria-valuenow",String(pct));
 $("instructionNumber").textContent=String(n).padStart(2,"0");
 $("instructionTitle").textContent=step.title;
 $("instructionBody").textContent=step.body;
 $("instructionAction").textContent=step.tip;
 $("previousStep").disabled=runtime.index===0;
 $("nextStep").textContent=n===total?"Finalizar →":"Pular etapa →";
 $("phoneScroll").innerHTML=screenFor(step);
 $("phoneScroll").scrollTop=0;
 $("coachBubble").hidden=false;
 $("bubbleNumber").textContent=String(n);
 $("bubbleText").textContent=step.tip;
 lastTarget=null;
 // Espera o navegador calcular as dimensões, então rola a tela fictícia
 // até o ponto indicado e posiciona o balão junto do elemento.
 requestAnimationFrame(()=>requestAnimationFrame(()=>positionCoach(true)));
}
function positionCoach(shouldScroll){
 if(!runtime.topic||$("tutorialView").hidden)return;
 const step=runtime.topic.steps[runtime.index];
 const frame=$("phoneFrame"),scroll=$("phoneScroll"),bubble=$("coachBubble");
 const target=[...scroll.querySelectorAll("[data-tour]")].find(el=>el.getAttribute("data-tour")===step.target);
 scroll.querySelectorAll(".tour-target").forEach(el=>el.classList.remove("tour-target"));
 if(!target){bubble.hidden=true;return;}
 bubble.hidden=false;target.classList.add("tour-target");lastTarget=target;
 if(shouldScroll){
  const sr=scroll.getBoundingClientRect(),tr=target.getBoundingClientRect();
  scroll.scrollTop+=tr.top-sr.top-scroll.clientHeight*.42;
 }
 const fr=frame.getBoundingClientRect(),tr=target.getBoundingClientRect();
 const width=bubble.offsetWidth,height=bubble.offsetHeight;
 let left=tr.left-fr.left+tr.width/2-width/2;
 left=Math.max(9,Math.min(left,frame.clientWidth-width-9));
 const below=tr.bottom-fr.top+12,above=tr.top-fr.top-height-12;
 let top=(below+height<frame.clientHeight-9)?below:above;
 if(top<8)top=Math.min(frame.clientHeight-height-8,below);
 bubble.style.left=Math.round(left)+"px";
 bubble.style.top=Math.round(Math.max(8,Math.min(top,frame.clientHeight-height-8)))+"px";
}
function nudge(){
 const f=$("phoneFrame");f.classList.remove("is-nudging");
 void f.offsetWidth;f.classList.add("is-nudging");
}
function renderTopics(){
 $("topicGrid").innerHTML=TOPICS.map((t)=>{
  return '<button type="button" class="topic-card" data-topic="'+t.id+'">'+
   '<span class="topic-icon" aria-hidden="true">'+t.icon+'</span>'+
   '<span class="topic-title">'+t.title+'</span>'+
   '<span class="topic-desc">'+t.description+'</span>'+
   '<span class="topic-footer"><span>'+t.steps.length+' passos guiados</span><span class="topic-arrow" aria-hidden="true">→</span></span></button>';
 }).join("");
}
renderTopics();
$("topicGrid").addEventListener("click",(event)=>{
 const card=event.target.closest("[data-topic]");
 if(card)startTopic(card.getAttribute("data-topic"));
});
$("phoneScroll").addEventListener("click",(event)=>{
 if(!runtime.topic)return;
 const target=event.target.closest("[data-tour]");
 const expected=runtime.topic.steps[runtime.index].target;
 if(target && target.getAttribute("data-tour")===expected)nextStep();
 else if(event.target.closest("button"))nudge();
});
$("phoneScroll").addEventListener("keydown",(event)=>{
 const target=event.target.closest("[data-tour]");
 if(!target || !["Enter"," "].includes(event.key))return;
 if(target.tagName!=="BUTTON"){event.preventDefault();target.click();}
});
$("phoneScroll").addEventListener("scroll",()=>{if(runtime.topic)requestAnimationFrame(()=>positionCoach(false))},{passive:true});
window.addEventListener("resize",()=>{if(runtime.topic)requestAnimationFrame(()=>positionCoach(false))});
$("previousStep").addEventListener("click",previousStep);
$("nextStep").addEventListener("click",nextStep);
$("restartTutorial").addEventListener("click",restart);
$("backToHome").addEventListener("click",showHome);
$("finishTutorial").addEventListener("click",showHome);
$("replayTutorial").addEventListener("click",restart);
showHome();

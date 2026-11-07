"use strict";

/**
 * Tutorial Isabele Mariana Nails — DOM estático e dados inventados.
 * Sem fetch, APIs, autenticação, Firebase, pagamentos ou armazenamento.
 * Visual baseado em telas do app original; nenhum JS operacional é importado.
 */

const TOPICS = [
  {
    id:"agendar", category:"agendamentos", icon:"✦", title:"Como fazer meu agendamento?",
    description:"Aprenda a escolher o serviço, a data, o horário e a entender o sinal PIX.",
    steps:[
      {screen:"login", target:"login-enter", title:"Acesse o aplicativo", body:"No aplicativo real, a cliente entra na conta para encontrar seus agendamentos. Aqui não precisamos de e-mail ou senha.", tip:"Toque em Entrar para simular o acesso."},
      {screen:"home", target:"category-gel", title:"Escolha uma categoria", body:"As categorias organizam os procedimentos. Vamos escolher Unhas em Gel para ver os serviços disponíveis.", tip:"Toque em Unhas em Gel."},
      {screen:"services", target:"service-blindagem", title:"Selecione um serviço", body:"Leia a descrição, confira o valor e a duração do procedimento antes de continuar.", tip:"Toque no card Blindagem para selecioná-lo."},
      {screen:"services", selected:true, target:"continue-service", title:"Continue para a agenda", body:"Depois de marcar o procedimento, use o botão que leva ao calendário de agendamento.", tip:"Toque em Continuar para agendamento."},
      {screen:"booking", phase:"date", target:"booking-day", title:"Escolha a data", body:"O aplicativo real mostra os dias permitidos pelas regras da profissional. A data nesta tela é apenas um exemplo fictício.", tip:"Toque na quinta-feira, dia 12."},
      {screen:"booking", phase:"time", target:"booking-time", title:"Escolha seu horário", body:"O app exibe inícios possíveis a cada 15 minutos, respeitando a duração do serviço, os horários já ocupados, os bloqueios e as regras de cada dia. Aqui os horários são ilustrativos.", tip:"Toque em 14h30 para continuar."},
      {screen:"booking", phase:"confirm", target:"booking-confirm", title:"Confira a reserva", body:"No aplicativo real, confira serviço, data e horário. Você também pode informar comentários adicionais. Quando houver sinal, revise o valor antes de gerar o PIX.", tip:"Toque em Confirmar agendamento (simulação)."},
      {screen:"pix", target:"pix-understood", title:"Entenda o sinal PIX", body:"O sinal é descontado do total do serviço. No aplicativo real, confira o valor do serviço, o sinal e quanto restará para pagar no atendimento. Aqui nenhum PIX é gerado.", tip:"Toque em Entendi para conhecer a próxima etapa."},
      {screen:"confirmation", target:"final-done", title:"Saiba quando a reserva foi confirmada", body:"O aplicativo real confirma após validar o pagamento ou a isenção. Esta tela é uma ilustração, não é um agendamento efetivado.", tip:"Toque em Concluir tutorial."}
    ]
  },
  {
    id:"pix", category:"pix", icon:"◇", title:"Como funciona o sinal PIX?",
    description:"Entenda a cobrança do sinal, o QR Code e a confirmação do agendamento.",
    steps:[
      {screen:"booking", phase:"confirm", target:"booking-confirm", title:"Revise a reserva", body:"Antes de gerar o PIX, o app apresenta o preço do serviço, o sinal exigido e o restante para pagar no atendimento. A reserva temporária tem prazo para pagamento.", tip:"Toque em Confirmar agendamento (simulação)."},
      {screen:"pix", target:"pix-understood", title:"Conheça a tela de pagamento", body:"No app real, você pode escanear o QR Code ou usar PIX Copia e Cola. Consulte também as regras de 24 horas: cancelamentos e reagendamentos respeitam as condições dos Termos de Uso.", tip:"Toque em Entendi. Não há pagamento aqui."},
      {screen:"confirmation", target:"final-done", title:"Entenda a confirmação", body:"Depois do pagamento, aguarde a confirmação automática. Se houver erro, consulte a situação antes de tentar pagar novamente. Aqui não ocorre nenhum pagamento.", tip:"Toque em Concluir tutorial."}
    ]
  },
  {
    id:"reagendar", category:"agendamentos", icon:"↻", title:"Como reagendar um horário?",
    description:"Veja como escolher outro dia e horário sem criar uma reserva do zero.",
    steps:[
      {screen:"home", target:"profile-tab", title:"Abra o Meu Perfil", body:"Se você já tem um agendamento, o primeiro passo é entrar na área onde ele aparece.", tip:"Toque em Perfil na barra inferior."},
      {screen:"profile", target:"filter-agendados", title:"Encontre seu agendamento", body:"A seção Meus atendimentos organiza as reservas por status. Comece pela aba Agendados.", tip:"Toque em Agendados."},
      {screen:"profile", target:"appointment-reschedule", title:"Escolha Reagendar", body:"No app real, o reagendamento depende da disponibilidade para a duração do serviço e das regras do dia. Confira a política de antecedência de 24 horas.", tip:"Toque em Reagendar no atendimento fictício."},
      {screen:"edit", phase:"date", target:"reschedule-day", title:"Escolha um novo dia", body:"O sistema real só aceita datas permitidas e disponíveis. A reserva anterior continua protegida durante a validação.", tip:"Toque no dia 19 da simulação."},
      {screen:"edit", phase:"time", target:"reschedule-time", title:"Selecione um novo horário", body:"O sistema verifica novamente a duração e a disponibilidade. Quando a operação com PIX pago estiver habilitada e for autorizada, o sinal já pago continua vinculado ao agendamento, sem uma nova cobrança.", tip:"Toque no horário 15h30."},
      {screen:"edit", phase:"confirm", target:"reschedule-confirm", title:"Confirme a mudança", body:"No app real, a mudança só é concluída após validação e sincronização. Se houver erro ou solicitação pendente, não considere o horário alterado sem confirmação.", tip:"Toque em Confirmar reagendamento (simulação)."}
    ]
  },
  {
    id:"perfil", category:"perfil", icon:"♙", title:"O que meu Perfil oferece?",
    description:"Explore dados cadastrais, sugestões de manutenção e as opções da sua agenda.",
    steps:[
      {screen:"home", target:"profile-tab", title:"Entre no Meu Perfil", body:"O Perfil reúne informações da conta, atalhos e os atendimentos cadastrados.", tip:"Toque em Perfil na navegação inferior."},
      {screen:"profile", target:"profile-contact", title:"Veja seus dados", body:"O app mostra celular e e-mail da cliente para consulta. Também é possível atualizar a foto de perfil, com ajuste de recorte e zoom; este exemplo não usa dados reais.", tip:"Toque no bloco Foto de perfil, telefone e e-mail."},
      {screen:"profile", target:"profile-maintenance", title:"Veja a sugestão de manutenção", body:"Depois que uma aplicação de gel elegível é concluída, o app pode sugerir uma manutenção para 21 dias depois. A data é indicativa e depende da disponibilidade.", tip:"Toque em Agendar manutenção (ilustrativo)."},
      {screen:"profile", target:"profile-new", title:"Crie outro agendamento", body:"O botão Novo Agendamento leva à escolha de serviços. Você também pode consultar agendamentos, reagendar, cancelar e compartilhar o horário pelo WhatsApp.", tip:"Toque em Novo Agendamento."}
    ]
  },
  {
    id:"acompanhar", category:"agendamentos", icon:"▤", title:"Como acompanhar meus atendimentos?",
    description:"Confira os filtros, as informações do card e as opções para compartilhar ou reagendar.",
    steps:[
      {screen:"home", target:"profile-tab", title:"Vá para o Perfil", body:"Acompanhar sua agenda começa na área de perfil da cliente.", tip:"Toque em Perfil."},
      {screen:"profile", target:"filter-agendados", title:"Filtre os agendamentos", body:"Use as abas Agendados, Realizados, Cancelados e Todos para organizar a visualização.", tip:"Toque em Agendados."},
      {screen:"profile", target:"appointment-whatsapp", title:"Compartilhe o atendimento", body:"O card mostra o serviço, a data, o horário e a situação. Use Enviar pelo WhatsApp para compartilhar os dados do agendamento.", tip:"Toque em Enviar pelo WhatsApp (simulação)."},
      {screen:"profile", target:"appointment-reschedule", title:"Confira as opções da agenda", body:"Um atendimento agendado também permite solicitar reagendamento ou cancelamento, sujeito às regras do app e do sinal PIX.", tip:"Toque em Reagendar para encerrar este exemplo."}
    ]
  }
  ,
  {
    id:"cadastro", category:"conta", icon:"✎", title:"Como criar minha conta?",
    description:"Veja os dados necessários, os Termos e as opções de acesso com e-mail ou Google.",
    steps:[
      {screen:"login",target:"login-create",title:"Abra a área de cadastro",body:"No aplicativo real, quem ainda não possui acesso pode escolher Criar conta. Esta tela é uma simulação: não preencha dados pessoais.",tip:"Toque em Criar conta."},
      {screen:"signup",target:"signup-fields",title:"Confira os dados solicitados",body:"O cadastro pede nome completo, e-mail, celular, senha e confirmação. A senha deve ter pelo menos oito caracteres; aqui usamos textos demonstrativos.",tip:"Toque na seção de dados fictícios."},
      {screen:"signup",target:"signup-terms",title:"Leia e aceite os Termos",body:"Antes de se cadastrar, leia os Termos de Uso e a Política de Privacidade do aplicativo real e marque o aceite quando concordar.",tip:"Toque em Li e aceito (simulação)."},
      {screen:"signup",target:"signup-submit",title:"Finalize o cadastro",body:"Ao concluir os dados e aceitar os Termos, a opção Criar conta fica disponível no aplicativo. Nenhuma conta é criada neste guia.",tip:"Toque em Criar conta (simulação)."},
      {screen:"signup",target:"signup-google",title:"Conheça a opção Google",body:"Como alternativa ao cadastro por e-mail e senha, o aplicativo disponibiliza Criar conta com o Google. O login real poderá pedir confirmação na sua conta Google.",tip:"Toque em Criar conta com o Google (ilustrativo)."},
      {screen:"login",target:"login-enter",title:"Acesse sua conta",body:"Depois do cadastro, entre no aplicativo com seu e-mail e senha ou utilize o Google. Aqui não há autenticação.",tip:"Toque em Entrar para concluir."}
    ]
  },
  {
    id:"senha",category:"conta",icon:"✧",title:"Esqueci minha senha. E agora?",
    description:"Aprenda a solicitar o link para redefinir a senha da conta.",
    steps:[
      {screen:"login",target:"login-forgot",title:"Encontre Esqueceu a senha?",body:"Na tela de login, existe um atalho próprio para recuperação de senha.",tip:"Toque em Esqueceu a senha?"},
      {screen:"forgot",target:"forgot-email",title:"Informe seu e-mail cadastrado",body:"No app real, digite o e-mail utilizado no cadastro. Neste tutorial não há campo editável nem envio de dados.",tip:"Toque no campo de e-mail fictício."},
      {screen:"forgot",target:"forgot-send",title:"Solicite as instruções",body:"O aplicativo real envia instruções de redefinição para o e-mail informado. Confira sua caixa de entrada e spam; aqui nenhum e-mail é enviado.",tip:"Toque em Enviar Link (simulação)."}
    ]
  },
  {
    id:"instalar",category:"instalacao",icon:"▣",title:"Como instalar o aplicativo no celular?",
    description:"Passo a passo para adicionar o app à tela inicial no Android e no iPhone.",
    steps:[
      {screen:"install",phase:"choose",target:"install-android",title:"Instalação no Android",body:"Abra o aplicativo real no Chrome. A opção de instalar pode aparecer no menu do navegador, dependendo do aparelho e das condições de instalação.",tip:"Toque em Android para simular o caminho."},
      {screen:"install",phase:"android",target:"install-android-menu",title:"Use o menu do Chrome",body:"No Chrome para Android, abra o menu e procure Instalar aplicativo ou Adicionar à tela inicial. Confirme quando solicitado.",tip:"Toque em Instalar aplicativo (simulação)."},
      {screen:"install",phase:"choose",target:"install-ios",title:"Instalação no iPhone",body:"No iPhone, abra o aplicativo real pelo Safari. A orientação de instalação é diferente do Android.",tip:"Toque em iPhone (Safari)."},
      {screen:"install",phase:"ios",target:"install-ios-share",title:"Abra Compartilhar",body:"No Safari, toque no botão Compartilhar para acessar as opções da página.",tip:"Toque em Compartilhar (simulação)."},
      {screen:"install",phase:"ios-add",target:"install-ios-add",title:"Adicione à Tela de Início",body:"Escolha Adicionar à Tela de Início e confirme. Depois, abra o app pelo ícone instalado; notificações podem exigir essa instalação no iPhone.",tip:"Toque em Adicionar à Tela de Início (simulação)."}
    ]
  },
  {
    id:"cancelar",category:"agendamentos",icon:"⊘",title:"Como cancelar um agendamento?",
    description:"Veja o caminho de cancelamento e o que acontece com o sinal PIX.",
    steps:[
      {screen:"home",target:"profile-tab",title:"Entre no Meu Perfil",body:"Se precisar cancelar, encontre primeiro o atendimento no Meu Perfil.",tip:"Toque em Perfil."},
      {screen:"profile",target:"filter-agendados",title:"Abra seus agendamentos ativos",body:"Selecione Agendados para encontrar os próximos procedimentos.",tip:"Toque em Agendados."},
      {screen:"profile",target:"appointment-cancel",title:"Selecione Cancelar",body:"O aplicativo real oferece a ação Cancelar no card do atendimento ativo. A operação exige confirmação.",tip:"Toque em Cancelar no atendimento fictício."},
      {screen:"cancel",phase:"review",target:"cancel-confirm",title:"Revise as consequências",body:"Antes de confirmar, confira o atendimento e o aviso: cancelar pelo aplicativo não estorna automaticamente o sinal PIX. Os Termos orientam sobre 24 horas e possíveis reembolsos.",tip:"Toque em Confirmar cancelamento (simulação)."},
      {screen:"cancel",phase:"done",target:"cancel-done",title:"Confira o resultado",body:"No app real, aguarde o resultado do cancelamento. Se existir sinal pago, eventual reembolso deverá ser tratado com a profissional conforme as regras aplicáveis. Nenhum agendamento foi alterado aqui.",tip:"Toque em Entendi para finalizar."}
    ]
  },
  {
    id:"pix-status",category:"pix",icon:"◷",title:"Meu PIX está pendente ou expirou?",
    description:"Entenda as mensagens de pagamento, confirmação e reserva expirada.",
    steps:[
      {screen:"pixstatus",phase:"waiting",target:"pixstatus-waiting",title:"Aguardando identificação do PIX",body:"Depois que a cobrança é gerada, o sistema consulta a situação automaticamente. Enquanto estiver aguardando, seu atendimento ainda não deve ser tratado como confirmado.",tip:"Toque na situação Aguardando pagamento."},
      {screen:"pixstatus",phase:"processing",target:"pixstatus-processing",title:"PIX creditado, confirmação em andamento",body:"Quando o pagamento foi identificado, a confirmação da agenda pode levar mais um momento. Não faça um segundo pagamento por conta própria.",tip:"Toque em PIX creditado (exemplo)."},
      {screen:"pixstatus",phase:"expired",target:"pixstatus-expired",title:"Reserva expirada ou cancelada",body:"Quando a reserva temporária ou cobrança expira, o app informa que ela não está mais disponível. Será necessário iniciar uma nova reserva, verificando a disponibilidade novamente.",tip:"Toque em Tentar nova reserva (simulação)."},
      {screen:"pixstatus",phase:"review",target:"pixstatus-review",title:"Se houver análise ou erro",body:"Se aparecer revisão financeira ou falha de confirmação, não pague novamente sem verificar. Utilize Consultar novamente ou fale com a profissional. Os exemplos representam situações diferentes, não etapas obrigatórias de um mesmo PIX.",tip:"Toque em Consultar novamente (simulação)."}
    ]
  },
  {
    id:"notificacoes",category:"notificacoes",icon:"♧",title:"Como ativar as notificações?",
    description:"Ative os avisos de agendamento e conheça a Central de Notificações.",
    steps:[
      {screen:"home",target:"push-enable",title:"Encontre Ativar notificações",body:"Na página principal, o app pode mostrar um card solicitando a ativação dos avisos sobre seus agendamentos.",tip:"Toque em Ativar notificações."},
      {screen:"notifications",phase:"permission",target:"notification-allow",title:"Autorize no dispositivo",body:"Quando o navegador solicitar permissão, escolha Permitir se desejar receber avisos. No iPhone, as notificações web podem exigir o app instalado na Tela de Início. Esta simulação não solicita permissão real.",tip:"Toque em Permitir (simulação)."},
      {screen:"home",target:"notification-bell",title:"Acesse a Central de Notificações",body:"No aplicativo real, toque no sino disponível na página principal para abrir os avisos da sua conta.",tip:"Toque no sino da simulação."},
      {screen:"notifications",phase:"center",target:"notification-read",title:"Acompanhe seus avisos",body:"Na Central, você pode visualizar informações sobre seus agendamentos e marcar avisos como lidos. A disponibilidade dos alertas depende das permissões e da conexão.",tip:"Toque em Marcar todas como lidas (simulação)."}
    ]
  },
  {
    id:"foto",category:"perfil",icon:"♙",title:"Como trocar minha foto de perfil?",
    description:"Saiba como escolher, ajustar, salvar ou remover a foto da conta.",
    steps:[
      {screen:"home",target:"profile-tab",title:"Abra seu Perfil",body:"A foto de perfil pode ser alterada nas informações da sua conta.",tip:"Toque em Perfil."},
      {screen:"profile",target:"photo-edit",title:"Selecione Editar foto",body:"Na área do perfil, toque na foto ou no botão Editar para iniciar a escolha da imagem.",tip:"Toque em Editar foto."},
      {screen:"photo",phase:"select",target:"photo-select",title:"Escolha uma foto",body:"No aplicativo real, selecione uma imagem compatível do seu dispositivo (PNG, JPG ou WebP). O guia não solicita acesso à galeria.",tip:"Toque em Selecionar foto (simulação)."},
      {screen:"photo",phase:"adjust",target:"photo-adjust",title:"Ajuste o enquadramento",body:"Na prévia, é possível recortar e ajustar o zoom antes de aplicar. Nada é enviado ou processado neste tutorial.",tip:"Toque no controle de zoom ilustrativo."},
      {screen:"photo",phase:"save",target:"photo-save",title:"Salve a nova foto",body:"Depois de aplicar o recorte, o app real permite salvar a foto. Também é possível remover uma foto personalizada.",tip:"Toque em Salvar nova foto (simulação)."}
    ]
  },
  ...ADMIN_TOPICS
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
   '<button type="button" class="mock-google" data-tour="login-google">Entrar com o Google</button><button type="button" class="mock-link mock-mt-12" data-tour="login-forgot">Esqueceu a senha?</button><button type="button" class="mock-link mock-mt-12" data-tour="login-create">Criar conta</button>'+
   '<p class="mock-notice"><strong>Tutorial:</strong> não digite dados reais. O acesso é apenas visual.</p></div>';
}
function screenHome(){
  return '<div class="mock-page">'+
   '<header class="mock-hero">'+appNav("Principal","♧")+
   '<div class="mock-profile"><div><span class="tiny">Seja bem-vinda · CLIENTE</span><h3>Cliente Exemplo</h3><p>Escolha seu cuidado e acompanhe seus agendamentos.</p></div><div class="avatar" aria-label="Iniciais fictícias">CE</div></div>'+
   '<div class="search-faux"><span>O que você procura hoje?</span><span>⌕</span></div><button class="mock-bell" type="button" data-tour="notification-bell" aria-label="Abrir central de notificações">♧ Notificações</button></header>'+
   '<main class="mock-content"><span class="mock-eyebrow">Atendimentos</span><h3>Escolha seu serviço</h3><p>Selecione uma categoria para visualizar as opções disponíveis.</p>'+
   '<div class="mock-card mock-push-card"><strong>Ative suas notificações</strong><p>Receba novidades sobre seus agendamentos.</p><button type="button" class="mock-link" data-tour="push-enable">Ativar notificações</button></div><button type="button" class="mock-category" data-tour="category-gel"><span class="category-icon">✧</span><span class="category-body"><strong>Unhas em Gel</strong><small>Aplicação, manutenção e acabamento</small></span><span class="chev">›</span></button>'+
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
 const data=next?[["Seg","16"],["Ter","17"],["Qua","18"],["Qui","19"],["Sex","20"]]:[["Seg","09"],["Ter","10"],["Qua","11"],["Qui","12"],["Sex","13"]];
 return '<div class="mock-day-strip">'+data.map((d,i)=>'<button type="button" class="mock-day '+(i===3 && selected?'is-selected':'')+'"'+(i===3?' data-tour="'+(next?'reschedule-day':'booking-day')+'"':'')+'><small>'+d[0]+'</small><strong>'+d[1]+'</strong></button>').join("")+'</div>';
}
function times(selected,next){
 const hours=next?["09:00","09:15","09:30","14:00","14:15","15:15","15:30","15:45","16:00"]:["09:00","09:15","09:30","11:30","13:00","14:15","14:30","14:45","15:00"];
 const marked=next?"15:30":"14:30";
 return '<div class="mock-times">'+hours.map((h,i)=>'<button type="button" class="mock-time'+(i===2?' is-unavailable':'')+(h===marked&&selected?' is-selected':'')+'"'+(h===marked?' data-tour="'+(next?'reschedule-time':'booking-time')+'"':'')+'>'+h+'</button>').join("")+'</div>';
}
function screenBooking(step){
 const phase=step.phase||"date",hasDay=phase!=="date",hasTime=phase==="confirm";
 return '<div class="mock-page">'+subNav("Agendamento")+
 '<main class="mock-content"><div class="mock-summary"><span class="mock-eyebrow">Serviço selecionado</span><strong>✦ Blindagem</strong><small>1h30min · R$ 90,00</small></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Reserve seu horário</span><h3>Escolha a melhor data para você</h3><p>Selecione a data e depois escolha um dos horários disponíveis.</p>'+
 stepHeader("1","Data","Escolha o dia")+
 '<div class="mock-section-heading"><span class="mock-eyebrow">Novembro de 2026 (exemplo)</span><span class="mock-count">Calendário ilustrativo</span></div>'+days(hasDay,false)+
 '<p class="mock-inline-help mock-mt-9">Datas fictícias para o tutorial.</p>'+
 '<div class="mock-line"></div>'+stepHeader("2","Horário","Escolha um horário")+
 '<p class="mock-inline-help">Inícios a cada 15 minutos · Disponível / Ocupado</p>'+times(hasTime,false)+
 '<div class="mock-line"></div>'+stepHeader("3","Seus dados","Finalize sua reserva")+
 '<span class="mock-label">Nome completo</span><div class="mock-field">Cliente Exemplo</div>'+
 '<span class="mock-label">Comentários adicionais <small>(opcional)</small></span><div class="mock-field mock-field--large">Conte se deseja algum cuidado específico...</div>'+
 '<div class="mock-summary"><span class="mock-eyebrow">Resumo da reserva</span><strong>Blindagem</strong><small>Quinta-feira, 12 de novembro · 14h30</small></div>'+
 '<button class="mock-primary" type="button" data-tour="booking-confirm">Confirmar agendamento</button></div>'+
 '</main></div>';
}
function screenPix(){
 return '<div class="mock-page">'+subNav("Pagamento PIX")+
 '<main class="mock-content"><div class="mock-payment-head"><span class="mock-eyebrow">Confira o valor do sinal</span><h3>Pagamento PIX</h3><p>Valores demonstrativos. O sinal pago é abatido do preço do serviço.</p></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Resumo do agendamento · simulação</span>'+
 '<div class="mock-payment-row"><span>Valor do serviço</span><strong>R$ 90,00</strong></div>'+
 '<div class="mock-payment-row"><span>Sinal para confirmar</span><strong>R$ 30,00</strong></div>'+
 '<div class="mock-payment-row"><span>Restante no atendimento</span><strong>R$ 60,00</strong></div>'+
 '<p class="mock-inline-help">Valores exclusivamente ilustrativos. No app real, confira o resumo antes de gerar o PIX.</p></div>'+
 '<div class="mock-card mock-center"><span class="mock-eyebrow">Cobrança ilustrativa</span><div class="fake-qr" role="img" aria-label="Imagem fictícia, não escaneável"></div>'+
 '<strong class="mock-block-title">QR Code fictício</strong><p class="mock-mt-7">O app real também oferece PIX Copia e Cola.</p><div class="mock-field">Código PIX indisponível neste tutorial</div></div>'+
 '<div class="mock-notice"><strong>Regras para Sinal:</strong> solicite cancelamentos e reagendamentos com pelo menos 24h de antecedência. Em situações excepcionais, consulte as regras e a profissional. O cancelamento no app não faz estorno automático.</div>'+
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
 '<button type="button" class="mock-link mock-mt-12" data-tour="profile-contact">Foto de perfil, telefone e e-mail</button><button type="button" class="mock-link mock-mt-12" data-tour="photo-edit">✎ Editar foto</button>'+
 '<p class="mock-mt-9">Nenhuma informação real é utilizada.</p></div>'+
 '<div class="mock-card"><span class="mock-eyebrow">Cuidado com suas unhas</span><h3>Sua próxima manutenção</h3><p>Após aplicação de gel, uma sugestão pode ser apresentada para 21 dias depois.</p>'+
 '<div class="mock-summary"><strong>Sugestão de manutenção</strong><small>21 dias após a aplicação · apenas exemplo</small></div>'+
 '<button class="mock-link" type="button" data-tour="profile-maintenance">+ Agendar manutenção</button></div>'+
 '<div class="mock-card"><div class="mock-section-heading"><div><span class="mock-eyebrow">Agenda</span><h3>Meus atendimentos</h3></div><span class="mock-count">3</span></div>'+
 '<p>Acompanhe seus agendamentos e consulte seu histórico.</p>'+
 '<button type="button" class="mock-link" data-tour="profile-new">+ Novo Agendamento</button>'+
 profileFilters()+
 '<div class="mock-appointment"><span class="mock-pill">Agendado</span><strong class="mock-block">Blindagem</strong><small>Quinta-feira, 12/11 · 14h30 · 1h30min</small><div class="mock-actions mock-actions--stack"><button type="button" data-tour="appointment-whatsapp">Enviar pelo WhatsApp</button><div class="mock-actions"><button type="button" class="primary" data-tour="appointment-reschedule">Reagendar</button><button type="button" data-tour="appointment-cancel">Cancelar</button></div></div></div></div></main>'+tabNav("Perfil")+'</div>';
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
 '<div class="mock-notice">Esta simulação não altera nenhum agendamento real, nem consulta pagamentos. No app real, aguarde a confirmação da alteração.</div></main></div>';
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

function screenSignup(){
 return '<div class="mock-page">'+subNav("Cadastro")+
 '<main class="mock-content"><span class="mock-eyebrow">Sua conta</span><h3>Crie sua conta.</h3><p>Preencha seus dados para agendar e acompanhar seus atendimentos.</p>'+
 '<button type="button" class="mock-fields-group" data-tour="signup-fields" aria-label="Dados solicitados no cadastro"><span class="mock-label">Nome completo</span><span class="mock-field">Cliente Exemplo</span><span class="mock-label">E-mail</span><span class="mock-field">exemplo@dominio.invalid</span><span class="mock-label">Celular</span><span class="mock-field">(00) 00000-0000</span><span class="mock-label">Senha e confirmação</span><span class="mock-field">Mínimo de 8 caracteres</span></button>'+
 '<button type="button" class="mock-link mock-mt-12" data-tour="signup-terms">☐ Li e aceito os Termos de Uso e a Política de Privacidade</button>'+
 '<button type="button" class="mock-primary mock-mt-12" data-tour="signup-submit">Criar conta</button>'+
 '<button type="button" class="mock-google mock-mt-12" data-tour="signup-google">Criar conta com o Google</button>'+
 '<p class="mock-notice">Não há campos de cadastro reais neste guia.</p></main></div>';
}
function screenForgot(){
 return '<div class="mock-page">'+subNav("Recuperar senha")+
 '<main class="mock-content"><div class="mock-card"><h3>Esqueceu sua senha?</h3><p>Informe o e-mail usado no cadastro para receber as instruções de redefinição.</p>'+
 '<span class="mock-label">E-mail</span><button type="button" class="mock-field mock-field-button" data-tour="forgot-email">exemplo@dominio.invalid</button>'+
 '<button type="button" class="mock-primary mock-mt-12" data-tour="forgot-send">Enviar Link</button></div>'+
 '<p class="mock-notice">Nenhum e-mail será enviado nesta simulação.</p></main></div>';
}
function screenInstall(step){
 const phase=step.phase||"choose";
 if(phase==="choose")return '<div class="mock-page">'+subNav("Instalar aplicativo")+
 '<main class="mock-content"><h3>Tenha o app na sua Tela de Início</h3><p>Escolha seu celular para ver a orientação de instalação.</p>'+
 '<button type="button" class="mock-category" data-tour="install-android"><span class="category-icon">▣</span><span class="category-body"><strong>Android</strong><small>Instalar pelo Google Chrome</small></span><span class="chev">›</span></button>'+
 '<button type="button" class="mock-category" data-tour="install-ios"><span class="category-icon">✧</span><span class="category-body"><strong>iPhone (Safari)</strong><small>Adicionar à Tela de Início</small></span><span class="chev">›</span></button>'+
 '<div class="mock-notice">Abra o aplicativo real pelo navegador. Não é necessário instalar este guia para seguir as instruções.</div></main></div>';
 if(phase==="android")return '<div class="mock-page">'+subNav("Instalar no Android")+
 '<main class="mock-content"><h3>Menu do Chrome</h3><div class="mock-card"><p>⋮ Menu do navegador</p><button type="button" class="mock-link" data-tour="install-android-menu">▣ Instalar aplicativo</button><p>Em alguns aparelhos aparece “Adicionar à tela inicial”.</p></div><p class="mock-notice">Os nomes das opções podem variar conforme a versão do Chrome.</p></main></div>';
 return '<div class="mock-page">'+subNav("Instalar no iPhone")+
 '<main class="mock-content"><h3>Safari · Compartilhar</h3><div class="mock-card"><p>Abra o app real no Safari e acesse o menu de compartilhamento.</p>'+
 '<button type="button" class="mock-link" data-tour="install-ios-share">▣ Compartilhar</button><button type="button" class="mock-link mock-mt-12" data-tour="install-ios-add">＋ Adicionar à Tela de Início</button></div>'+
 '<div class="mock-notice">Depois, abra o app pelo novo ícone da Tela de Início.</div></main></div>';
}
function screenCancel(step){
 const done=step.phase==="done";
 return '<div class="mock-page">'+subNav("Cancelar atendimento")+
 '<main class="mock-content mock-center">'+(done?'<span class="mock-check">✓</span><h3>Exemplo de cancelamento concluído</h3><p>O atendimento da simulação não foi alterado.</p>':'<h3>Cancelar agendamento?</h3><p>Deseja cancelar Blindagem em 12/11/2026 às 14h30?</p>')+
 '<div class="mock-card mock-left"><strong>Importante sobre o sinal PIX</strong><p>O cancelamento no app não estorna automaticamente o PIX. Reembolso, quando devido, deverá ser tratado com a profissional segundo os Termos de Uso.</p></div>'+
 '<button type="button" class="mock-primary" data-tour="'+(done?'cancel-done':'cancel-confirm')+'">'+(done?'Entendi · Concluir tutorial':'Confirmar cancelamento (simulação)')+'</button>'+
 '<p class="mock-notice">Nenhum agendamento ou pagamento real é modificado.</p></main></div>';
}
function screenPixStatus(step){
 const states={
  waiting:{title:"Aguardando pagamento PIX",body:"Aguardando a identificação do pagamento PIX...",target:"pixstatus-waiting",action:"Aguardando pagamento",kind:"pending"},
  processing:{title:"PIX creditado",body:"Pagamento identificado! Finalizando a confirmação do horário...",target:"pixstatus-processing",action:"PIX creditado · confirmação pendente",kind:"pending"},
  expired:{title:"Cobrança indisponível",body:"A reserva temporária expirou ou foi cancelada. Inicie uma nova reserva para consultar a disponibilidade.",target:"pixstatus-expired",action:"Tentar nova reserva",kind:"error"},
  review:{title:"Confirmação não concluída",body:"Não faça outro pagamento sem verificar a situação. Consulte novamente ou fale com a profissional.",target:"pixstatus-review",action:"Consultar novamente",kind:"error"}
 };
 const state=states[step.phase]||states.waiting;
 return '<div class="mock-page">'+subNav("Status do PIX")+
 '<main class="mock-content"><span class="mock-eyebrow">Exemplo demonstrativo</span><div class="mock-card mock-status '+state.kind+'"><h3>'+state.title+'</h3><p>'+state.body+'</p><button type="button" class="mock-primary" data-tour="'+state.target+'">'+state.action+'</button></div>'+
 '<div class="mock-notice">Estes estados são cenários separados. Nenhuma transação ou consulta é realizada aqui.</div></main></div>';
}
function screenNotifications(step){
 const center=step.phase==="center";
 return '<div class="mock-page">'+subNav(center?"Central de notificações":"Permissão de notificações")+
 '<main class="mock-content"><div class="mock-card"><h3>'+(center?"Seus avisos":"Receber notificações?")+'</h3><p>'+(center?"Acompanhe atualizações de agendamentos. Exemplo fictício.":"Permita avisos no dispositivo quando o app real solicitar.")+'</p>'+
 (center?'<div class="mock-notification"><strong>Agendamento atualizado</strong><p>Blindagem · 12/11/2026 · 14h30 (exemplo)</p></div><button type="button" class="mock-primary" data-tour="notification-read">Marcar todas como lidas</button>':'<button type="button" class="mock-primary" data-tour="notification-allow">Permitir (simulação)</button>')+'</div>'+
 '<div class="mock-notice">Não solicitamos permissão nem enviamos notificações neste tutorial.</div></main></div>';
}
function screenPhoto(step){
 const phase=step.phase||"select";
 return '<div class="mock-page">'+subNav("Minha foto de perfil")+
 '<main class="mock-content mock-center"><span class="mock-avatar-preview" aria-label="Foto fictícia com iniciais">CE</span><h3>Editar foto de perfil</h3>'+
 '<div class="mock-card"><p>Escolha uma foto do dispositivo, ajuste o enquadramento e salve.</p>'+
 '<button type="button" class="mock-link" data-tour="photo-select">Selecionar foto (simulação)</button>'+
 '<button type="button" class="mock-link mock-mt-12" data-tour="photo-adjust">Zoom e recorte ▰▰▰</button>'+
 '<button type="button" class="mock-primary mock-mt-12" data-tour="photo-save">Salvar nova foto</button>'+
 '<p class="mock-inline-help">Também é possível remover a foto personalizada no aplicativo real.</p></div>'+
 '<div class="mock-notice">Etapa '+(phase==="select"?"1":phase==="adjust"?"2":"3")+' de 3 · Nenhuma foto é solicitada, processada ou enviada.</div></main></div>';
}

function screenFor(step){
 if(step.screen.startsWith("admin-"))return screenAdmin(step);
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
  case "signup": return screenSignup();
  case "forgot": return screenForgot();
  case "install": return screenInstall(step);
  case "cancel": return screenCancel(step);
  case "pixstatus": return screenPixStatus(step);
  case "notifications": return screenNotifications(step);
  case "photo": return screenPhoto(step);
  default: return "";
 }
}
function topicFor(id){return TOPICS.find((t)=>t.id===id)}

/* Apenas estado transitório em memória e URL. Não há cookies nem armazenamento. */
const CATEGORY_SETS = {
 cliente:[
  ["todos","Todos"],["agendamentos","Agendamentos"],["pix","PIX"],
  ["conta","Conta"],["perfil","Meu Perfil"],["notificacoes","Notificações"],
  ["instalacao","Instalação"]
 ],
 profissional:[
  ["todos","Todos"],["visao","Gestão"],["agenda","Agenda"],
  ["assistente","Assistente"],["clientes","Clientes"],["servicos","Serviços"],
  ["pix","PIX"],["indicadores","Dashboard"],["notificacoes","Notificações"]
 ]
};
const topicState = {audience:"cliente",category:"todos",query:""};
function normalizeSearch(text){
 return String(text||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}
function topicUrl(id){
 const url=new URL(window.location.href);
 url.hash="tutorial="+encodeURIComponent(id);
 return url.href;
}
function updateRoute(id){
 const url=new URL(window.location.href);
 url.hash=id?"tutorial="+encodeURIComponent(id):"";
 window.history.pushState({tutorial:id||null},"",url.pathname+url.search+url.hash);
}
function syncRoute(){
 const found=window.location.hash.match(/^#tutorial=([a-z0-9-]+)$/i);
 const id=found ? found[1] : "";
 if(topicFor(id))startTopic(id,false);
 else showHome(false);
}
function renderFilters(){
 $("topicFilters").innerHTML=CATEGORY_SETS[topicState.audience].map(([id,label])=>
   '<button type="button" class="topic-filter'+(topicState.category===id?' is-active':'')+
   '" data-category="'+id+'" aria-pressed="'+(topicState.category===id)+'">'+label+'</button>'
 ).join("");
}
async function copyTopicLink(){
 if(!runtime.topic)return;
 const url=topicUrl(runtime.topic.id);
 const feedback=$("shareFeedback");
 try{
  if(!navigator.clipboard || !window.isSecureContext)throw new Error("clipboard");
  await navigator.clipboard.writeText(url);
  feedback.textContent="Link copiado!";
 }catch(error){
  feedback.textContent="Não foi possível copiar automaticamente. Copie o endereço da barra do navegador.";
 }
}

function showHome(changeRoute=true){
 runtime.topic=null;runtime.index=0;lastTarget=null;
 if(changeRoute)updateRoute(null);
 $("shareFeedback").textContent="";
 $("intro").hidden=false;$("tutorialView").hidden=true;$("completeView").hidden=true;
 $("phoneScroll").innerHTML="";$("coachBubble").hidden=true;
 window.scrollTo({top:0,behavior:"auto"});
}
function startTopic(id,changeRoute=true){
 const topic=topicFor(id);if(!topic)return;
 const audience=topic.audience||"cliente";
 if(audience!==topicState.audience){
  topicState.audience=audience;
  topicState.category="todos";
  topicState.query="";
  $("topicSearch").value="";
  renderTopics();
 }
 runtime.topic=topic;runtime.index=0;
 if(changeRoute)updateRoute(id);
 $("shareFeedback").textContent="";
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
 const audience=topicState.audience;
 const all=TOPICS.filter(t=>(t.audience||"cliente")===audience);
 const query=normalizeSearch(topicState.query.trim());
 const filtered=all.filter(t=>
   (topicState.category==="todos"||t.category===topicState.category) &&
   (!query||normalizeSearch(t.title+" "+t.description+" "+t.category).includes(query))
 );
 $("topicGrid").innerHTML=filtered.map(t=>
   '<button type="button" class="topic-card" data-topic="'+t.id+'">'+
   '<span class="topic-icon" aria-hidden="true">'+t.icon+'</span>'+
   '<span class="topic-title">'+t.title+'</span>'+
   '<span class="topic-desc">'+t.description+'</span>'+
   '<span class="topic-footer"><span>'+t.steps.length+' passos guiados</span><span class="topic-arrow" aria-hidden="true">→</span></span></button>'
 ).join("");
 $("topicEmpty").hidden=filtered.length!==0;
 $("topicResultCount").textContent=filtered.length+" de "+all.length+" tutoriais";
 $("topicCount").textContent=all.length+" tutoriais";
 $("topicAudienceNote").textContent=audience==="profissional"
  ?"Guias da área administrativa. Todas as telas e informações abaixo são simulações."
  :"Guias para aprender a usar o aplicativo como cliente.";
 $("topicSearch").placeholder=audience==="profissional"
  ?"Ex.: calendário, assistente, clientes, PIX..."
  :"Ex.: PIX, cancelar, senha, notificações...";
 document.querySelectorAll("[data-audience]").forEach(button=>{
  const active=button.dataset.audience===audience;
  button.classList.toggle("is-active",active);
  button.setAttribute("aria-pressed",String(active));
 });
 renderFilters();
}
renderTopics();
$("audienceSwitcher").addEventListener("click",event=>{
 const button=event.target.closest("[data-audience]");
 if(!button)return;
 const selected=button.dataset.audience;
 if(!CATEGORY_SETS[selected]||selected===topicState.audience)return;
 topicState.audience=selected;
 topicState.category="todos";
 topicState.query="";
 $("topicSearch").value="";
 renderTopics();
});
$("topicSearch").addEventListener("input",event=>{
 topicState.query=event.target.value;
 renderTopics();
});
$("topicFilters").addEventListener("click",event=>{
 const button=event.target.closest("[data-category]");
 if(!button)return;
 topicState.category=button.dataset.category;
 renderTopics();
});
$("shareTutorial").addEventListener("click",()=>void copyTopicLink());
window.addEventListener("popstate",syncRoute);
window.addEventListener("hashchange",syncRoute);
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
syncRoute();

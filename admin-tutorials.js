"use strict";

/**
 * Guias da profissional: apenas dados e telas fictícias.
 * Nenhuma API, autenticação, operação financeira ou vínculo com a agenda real.
 * Carregado ANTES de app.js, como script clássico defer.
 */
const ADMIN_TOPICS = [
  {
    id:"pro-gestao",audience:"profissional",category:"visao",icon:"▦",
    title:"Conhecendo a área de gestão",
    description:"Encontre os atalhos administrativos e entenda a organização do aplicativo.",
    steps:[
      {screen:"admin-home",target:"pro-link-agenda",title:"Acesse os agendamentos",body:"A área administrativa é exibida somente para contas autorizadas no aplicativo real. O atalho Agendamentos reúne os atendimentos.",tip:"Toque em Agendamentos."},
      {screen:"admin-home",target:"pro-link-clientes",title:"Conheça a Gestão de Clientes",body:"A seção Clientes reúne perfis, históricos, observações internas e a isenção individual do sinal PIX.",tip:"Toque em Clientes."},
      {screen:"admin-home",target:"pro-link-servicos",title:"Organize os serviços",body:"No catálogo administrativo, configure procedimentos, categorias, preços, duração e valores de sinal.",tip:"Toque em Serviços."},
      {screen:"admin-home",target:"pro-link-calendario",title:"Controle a disponibilidade",body:"Gerenciar Calendário permite fechar ou reabrir intervalos sem alterar reservas já feitas.",tip:"Toque em Gerenciar Calendário."},
      {screen:"admin-home",target:"pro-link-assistente",title:"Conheça o Assistente",body:"O Assistente Preventivo consulta lacunas pouco aproveitáveis e sugere avaliações. Ele nunca bloqueia horários automaticamente.",tip:"Toque em Assistente de Agenda."},
      {screen:"admin-home",target:"pro-link-dashboard",title:"Consulte seus resultados",body:"O Dashboard consolida os indicadores e gráficos do negócio; os valores aqui são inventados.",tip:"Toque em Dashboard."}
    ]
  },
  {
    id:"pro-agendamentos",audience:"profissional",category:"agenda",icon:"▣",
    title:"Consultar e administrar agendamentos",
    description:"Aprenda a usar os filtros e localizar as ações de um atendimento.",
    steps:[
      {screen:"admin-agenda",phase:"list",target:"pro-ag-filter",title:"Escolha um status",body:"A tela oferece filtros como Todos, Agendados, Concluídos e Cancelados para organizar os registros.",tip:"Toque em Agendados."},
      {screen:"admin-agenda",phase:"list",target:"pro-ag-search",title:"Pesquise pelo atendimento",body:"É possível buscar pelo nome da cliente ou serviço e utilizar o filtro de data.",tip:"Toque no campo de busca ilustrativo."},
      {screen:"admin-agenda",phase:"list",target:"pro-ag-open",title:"Abra o registro",body:"O atendimento abre um painel com informações e ações disponíveis conforme seu status.",tip:"Toque em Consultar atendimento."},
      {screen:"admin-agenda",phase:"detail",target:"pro-ag-actions",title:"Conheça as opções",body:"Dependendo do status e da configuração ativa, há ações para confirmar, reagendar, alterar o serviço, concluir ou cancelar. Nem todas ficam disponíveis em qualquer situação.",tip:"Toque no conjunto de ações da simulação."}
    ]
  },
  {
    id:"pro-calendario",audience:"profissional",category:"agenda",icon:"▦",
    title:"Fechar e reabrir horários no calendário",
    description:"Selecione blocos de 15 minutos para administrar a disponibilidade.",
    steps:[
      {screen:"admin-calendario",phase:"fechar",target:"pro-cal-date",title:"Escolha o dia",body:"Selecione um dia permitido na janela administrativa. As regras de expediente e reservas permanecem respeitadas.",tip:"Toque no dia ilustrativo."},
      {screen:"admin-calendario",phase:"fechar",target:"pro-cal-mode-close",title:"Mantenha Fechar horários",body:"O modo Fechar horários é usado para reservar intervalos para atendimentos combinados diretamente com a profissional.",tip:"Toque em Fechar horários."},
      {screen:"admin-calendario",phase:"fechar",target:"pro-cal-slot-close",title:"Selecione intervalos de 15 minutos",body:"Cada marcação representa 15 minutos. Horários ocupados por reservas reais não podem ser alterados livremente.",tip:"Toque em 14h15 (disponível na simulação)."},
      {screen:"admin-calendario",phase:"fechar",target:"pro-cal-confirm-close",title:"Confirme o fechamento",body:"No aplicativo real, confira as datas e os intervalos selecionados antes de confirmar. Aqui nada é bloqueado.",tip:"Toque em Fechar horários selecionados."},
      {screen:"admin-calendario",phase:"reabrir",target:"pro-cal-mode-open",title:"Mude para Reabrir horários",body:"Para liberar um bloqueio administrativo existente, selecione o modo Reabrir horários.",tip:"Toque em Reabrir horários."},
      {screen:"admin-calendario",phase:"reabrir",target:"pro-cal-slot-open",title:"Selecione o horário fechado",body:"Marque somente o intervalo que deseja reabrir. Bloqueios antigos podem ser fracionados de acordo com as regras do sistema.",tip:"Toque em 14h15 (fechado na simulação)."},
      {screen:"admin-calendario",phase:"reabrir",target:"pro-cal-confirm-open",title:"Confirme a reabertura",body:"Confirme o resumo no sistema real. Reabrir um bloqueio não altera atendimentos existentes.",tip:"Toque em Reabrir horários selecionados."}
    ]
  },
  {
    id:"pro-assistente",audience:"profissional",category:"assistente",icon:"◇",
    title:"Como usar o Assistente Preventivo de Agenda",
    description:"Consulte lacunas e avalie sugestões sem fechar horários automaticamente.",
    steps:[
      {screen:"admin-assistente",phase:"consulta",target:"pro-ass-today",title:"Faça uma consulta rápida",body:"O Assistente permite perguntar sobre hoje, amanhã e períodos disponíveis na janela administrativa.",tip:"Toque em Hoje."},
      {screen:"admin-assistente",phase:"consulta",target:"pro-ass-question",title:"Conheça as perguntas",body:"Você também pode perguntar quais intervalos merecem atenção. O Assistente consulta informações da agenda real no sistema principal, mas este tutorial não faz consultas.",tip:"Toque na pergunta demonstrativa."},
      {screen:"admin-assistente",phase:"resultado",target:"pro-ass-review",title:"Entenda a sugestão",body:"Uma lacuna pode ser pouco aproveitável por duração ou por incompatibilidade com serviços elegíveis. As sugestões são consultivas e podem mudar.",tip:"Toque na sugestão de bloqueio."},
      {screen:"admin-assistente",phase:"resultado",target:"pro-ass-calendar",title:"Confira no calendário",body:"O atalho leva ao dia para revisão manual. O Assistente não cria, fecha ou reabre horários. Alertas automáticos dependem da configuração de notificações do servidor.",tip:"Toque em Conferir dia no calendário (simulação)."}
    ]
  },
  {
    id:"pro-servicos",audience:"profissional",category:"servicos",icon:"✧",
    title:"Cadastrar e organizar serviços",
    description:"Veja como trabalhar com categorias, preço, duração e serviços ativos.",
    steps:[
      {screen:"admin-servicos",phase:"lista",target:"pro-srv-new",title:"Crie um serviço",body:"Na Gestão de Serviços, a ação de cadastro abre o formulário de um novo procedimento.",tip:"Toque em Cadastrar novo serviço."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-name",title:"Defina nome e categoria",body:"Escolha um nome claro e a categoria correspondente. Os dados do tutorial são inventados.",tip:"Toque nos campos de identificação."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-duration",title:"Informe preço e duração",body:"O preço e a duração, em minutos, influenciam a cobrança e a disponibilidade na agenda. Confira esses dados com atenção.",tip:"Toque no campo de duração."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-active",title:"Controle a exibição",body:"A opção Serviço ativo determina se o procedimento fica disponível no catálogo das clientes.",tip:"Toque no controle Serviço ativo."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-save",title:"Salve o serviço",body:"No aplicativo real, revise os campos antes de salvar. Aqui a ação não grava nada.",tip:"Toque em Salvar serviço (simulação)."},
      {screen:"admin-servicos",phase:"categorias",target:"pro-srv-categories",title:"Gerencie categorias",body:"Também é possível adicionar ou editar categorias usadas para organizar os serviços.",tip:"Toque em Gerenciar categorias."}
    ]
  },
  {
    id:"pro-sinal",audience:"profissional",category:"pix",icon:"◇",
    title:"Configurar o sinal PIX por serviço",
    description:"Entenda o campo de sinal no cadastro ou na edição de um serviço.",
    steps:[
      {screen:"admin-servicos",phase:"lista",target:"pro-srv-new",title:"Entre no cadastro do serviço",body:"O sinal PIX é configurado dentro da Gestão de Serviços, junto das informações do procedimento.",tip:"Toque em Cadastrar novo serviço."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-pix-type",title:"Escolha a forma de cálculo",body:"A tela permite definir a configuração do sinal em valor fixo ou percentual, conforme as opções disponíveis no formulário real.",tip:"Toque em Forma de cálculo."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-pix-value",title:"Confira o valor do sinal",body:"Defina um valor coerente com o preço do serviço. O formulário apresenta uma prévia; o saldo é pago no atendimento.",tip:"Toque no campo Valor do sinal."},
      {screen:"admin-servicos",phase:"editor",target:"pro-srv-save",title:"Revise e salve",body:"Alterações comerciais devem ser verificadas antes de salvar e não representam cobrança real neste guia.",tip:"Toque em Salvar serviço (simulação)."}
    ]
  },
  {
    id:"pro-isencao",audience:"profissional",category:"pix",icon:"♡",
    title:"Conceder isenção PIX para uma cliente",
    description:"Localize o perfil e habilite ou retire a isenção individual.",
    steps:[
      {screen:"admin-clientes",phase:"lista",target:"pro-cli-filter",title:"Conheça o filtro de isentas",body:"A Gestão de Clientes possui um filtro para visualizar as clientes com isenção de sinal PIX.",tip:"Toque em Isentas de sinal PIX."},
      {screen:"admin-clientes",phase:"lista",target:"pro-cli-open",title:"Abra um perfil",body:"Pesquise uma cliente específica e entre em seu perfil. No app real, a alteração exige permissão administrativa.",tip:"Toque em Abrir perfil fictício."},
      {screen:"admin-clientes",phase:"perfil",target:"pro-cli-pix",title:"Ative ou desative a isenção",body:"No perfil da cliente existe o controle Isenta de sinal PIX. A autorização permite agendar sem pagamento antecipado; não altera pagamentos já realizados.",tip:"Toque em Isenta de sinal PIX (simulação)."},
      {screen:"admin-clientes",phase:"perfil",target:"pro-cli-status",title:"Confira o retorno",body:"Depois de mudar a configuração real, confira a mensagem de atualização do sistema. Aqui nenhuma cliente é alterada.",tip:"Toque em Ver situação da isenção."}
    ]
  },
  {
    id:"pro-reagendar-pix",audience:"profissional",category:"agenda",icon:"↻",
    title:"Reagendar atendimento com PIX já pago",
    description:"Entenda a troca de dia e horário sem gerar um novo sinal.",
    steps:[
      {screen:"admin-agenda",phase:"list",target:"pro-ag-open",title:"Abra o atendimento pago",body:"Encontre o atendimento confirmado e confira sua situação antes de qualquer alteração.",tip:"Toque em Consultar atendimento."},
      {screen:"admin-agenda",phase:"detail",target:"pro-ag-reschedule",title:"Escolha Reagendar atendimento",body:"Quando habilitado e permitido, o reagendamento com PIX pago utiliza o sinal já conciliado. Não é necessário criar outra cobrança.",tip:"Toque em Reagendar atendimento."},
      {screen:"admin-agenda",phase:"reagendar",target:"pro-ag-newdate",title:"Selecione outra data",body:"A agenda valida o serviço, a duração, os bloqueios, as reservas e a janela de funcionamento.",tip:"Toque na data fictícia."},
      {screen:"admin-agenda",phase:"reagendar",target:"pro-ag-newtime",title:"Escolha o novo horário",body:"A mudança não deve ser considerada concluída antes de uma confirmação explícita do sistema.",tip:"Toque no novo horário fictício."},
      {screen:"admin-agenda",phase:"reagendar",target:"pro-ag-confirm-reschedule",title:"Confirme apenas se estiver disponível",body:"O app real precisa sincronizar a alteração com os serviços associados, inclusive calendário. Se estiver pendente ou ocorrer falha, revise o resultado antes de orientar a cliente.",tip:"Toque em Confirmar reagendamento (simulação)."}
    ]
  },
  {
    id:"pro-alterar-servico",audience:"profissional",category:"agenda",icon:"✦",
    title:"Alterar serviço em agendamento confirmado",
    description:"Escolha outro procedimento e entenda as validações de duração e preço.",
    steps:[
      {screen:"admin-agenda",phase:"list",target:"pro-ag-open",title:"Localize um atendimento",body:"Na lista, abra um agendamento ativo e confirme o serviço atualmente associado.",tip:"Toque em Consultar atendimento."},
      {screen:"admin-agenda",phase:"detail",target:"pro-ag-change-service",title:"Selecione Alterar Serviço",body:"Esta opção aparece para situações elegíveis quando a funcionalidade está habilitada. Ela é administrativa, não é uma opção da cliente.",tip:"Toque em Alterar Serviço (simulação)."},
      {screen:"admin-agenda",phase:"alterar",target:"pro-ag-newservice",title:"Escolha um novo serviço",body:"A data e a hora de início são mantidas. O aplicativo verifica a duração real e eventuais conflitos antes de aceitar a troca.",tip:"Toque em Novo serviço ativo."},
      {screen:"admin-agenda",phase:"alterar",target:"pro-ag-service-summary",title:"Revise a diferença",body:"Confira o valor e a duração do novo serviço. O sinal PIX previamente pago deve continuar vinculado ao agendamento; uma troca não significa reembolso automático.",tip:"Toque em Prévia de valor e duração."},
      {screen:"admin-agenda",phase:"alterar",target:"pro-ag-save-service",title:"Confirme e aguarde a sincronização",body:"A alteração só pode ser considerada efetiva quando o sistema confirmar a operação e a atualização dos vínculos externos. Esta demonstração não altera reservas.",tip:"Toque em Confirmar alteração (simulação)."}
    ]
  },
  {
    id:"pro-concluir",audience:"profissional",category:"agenda",icon:"✓",
    title:"Concluir atendimento e informar valor final",
    description:"Registre a conclusão de um serviço com o valor realmente cobrado.",
    steps:[
      {screen:"admin-agenda",phase:"list",target:"pro-ag-open",title:"Abra um atendimento",body:"Localize o atendimento realizado na lista administrativa.",tip:"Toque em Consultar atendimento."},
      {screen:"admin-agenda",phase:"detail",target:"pro-ag-complete",title:"Clique em Concluir atendimento",body:"A conclusão é uma ação da profissional, apresentada conforme a situação do registro.",tip:"Toque em Concluir atendimento."},
      {screen:"admin-agenda",phase:"concluir",target:"pro-ag-finalvalue",title:"Confira o valor final",body:"O aplicativo solicita o valor final cobrado pelo atendimento. Informe o valor real no sistema de produção.",tip:"Toque no valor final ilustrativo."},
      {screen:"admin-agenda",phase:"concluir",target:"pro-ag-confirm-complete",title:"Confirme a conclusão",body:"A conclusão ajuda a compor histórico e indicadores do negócio. Esta etapa não registra nenhum valor.",tip:"Toque em Concluir atendimento (simulação)."}
    ]
  },
  {
    id:"pro-clientes",audience:"profissional",category:"clientes",icon:"♙",
    title:"Gerenciar clientes, histórico e observações",
    description:"Encontre cadastros e consulte os registros de cada cliente.",
    steps:[
      {screen:"admin-clientes",phase:"lista",target:"pro-cli-search",title:"Pesquise uma cliente",body:"A busca admite nome, telefone ou e-mail no aplicativo real. Aqui não são usados dados verdadeiros.",tip:"Toque em Buscar cliente."},
      {screen:"admin-clientes",phase:"lista",target:"pro-cli-open",title:"Abra o perfil",body:"A ficha reúne dados de contato e indicadores como atendimentos concluídos e última visita.",tip:"Toque em Abrir perfil fictício."},
      {screen:"admin-clientes",phase:"perfil",target:"pro-cli-history",title:"Confira o histórico",body:"Veja próximos agendamentos e registros anteriores da cliente.",tip:"Toque em Agendamentos anteriores."},
      {screen:"admin-clientes",phase:"perfil",target:"pro-cli-notes",title:"Registre observações internas",body:"A administração pode manter anotações internas de atendimento. No aplicativo real, escreva somente informações necessárias e pertinentes.",tip:"Toque em Salvar observação (simulação)."}
    ]
  },
  {
    id:"pro-dashboard",audience:"profissional",category:"indicadores",icon:"▥",
    title:"Entender os indicadores do Dashboard",
    description:"Consulte resultados por período e conheça os gráficos do negócio.",
    steps:[
      {screen:"admin-dashboard",target:"pro-dash-period",title:"Selecione um período",body:"O Dashboard possui filtro de período para comparar indicadores da atividade.",tip:"Toque em Período de análise."},
      {screen:"admin-dashboard",target:"pro-dash-revenue",title:"Conheça os principais números",body:"O resumo inclui receita realizada, atendimentos concluídos, ticket médio e taxa de cancelamento. Os valores aqui são completamente fictícios.",tip:"Toque em Receita realizada."},
      {screen:"admin-dashboard",target:"pro-dash-charts",title:"Consulte os gráficos",body:"Visualize evolução da receita e dos atendimentos, desempenho dos serviços e distribuições por situação.",tip:"Toque em Receita e atendimentos."},
      {screen:"admin-dashboard",target:"pro-dash-clients",title:"Veja o ranking de clientes",body:"O painel também pode apresentar clientes recorrentes e outras análises de comportamento da agenda.",tip:"Toque em Ranking de clientes."}
    ]
  },
  {
    id:"pro-notificacoes",audience:"profissional",category:"notificacoes",icon:"♧",
    title:"Notificações e alertas administrativos",
    description:"Acompanhe avisos e entenda os alertas opcionais do Assistente.",
    steps:[
      {screen:"admin-notificacoes",target:"pro-not-enable",title:"Ative avisos no dispositivo",body:"O aplicativo pode solicitar permissão para avisos Web Push. No iPhone, o uso de notificações pode depender de instalação na Tela de Início.",tip:"Toque em Ativar notificações (simulação)."},
      {screen:"admin-notificacoes",target:"pro-not-bell",title:"Abra a Central de Notificações",body:"A Central permite consultar eventos relacionados a atendimentos e avisos administrativos.",tip:"Toque em Central de Notificações."},
      {screen:"admin-notificacoes",target:"pro-not-assistant",title:"Entenda os alertas de lacunas",body:"Os avisos automáticos do Assistente são opcionais e dependem das configurações da API e do Web Push. O alerta orienta a avaliação; não altera a agenda.",tip:"Toque em Alerta de intervalo (exemplo)."},
      {screen:"admin-notificacoes",target:"pro-not-read",title:"Acompanhe os registros",body:"Consulte e marque como lidos os avisos pertinentes. A simulação não recebe nem envia push real.",tip:"Toque em Marcar como lidas (simulação)."}
    ]
  }
];

// Telas de demonstração administrativas — dados fictícios e botões sem efeito fora do tutorial.
function adminButton(target,label,cls="mock-link"){
  return '<button type="button" class="'+cls+'" data-tour="'+target+'">'+label+'</button>';
}
function adminPage(title,content){
  return '<div class="mock-page mock-admin-page"><header class="mock-subnav"><span class="mock-admin-brand">✦</span><strong>'+title+'</strong><span class="mock-admin-brand">⌂</span></header><main class="mock-content"><span class="mock-eyebrow">GESTÃO PROFISSIONAL · SIMULAÇÃO</span>'+content+'<p class="mock-admin-disclaimer">Ações apenas demonstrativas. Nenhum dado ou horário real é alterado.</p></main></div>';
}
function adminHome(){
  const shortcuts=[
    ["pro-link-agenda","Agendamentos","Confirme, reagende, cancele e conclua atendimentos"],
    ["pro-link-clientes","Clientes","Histórico, observações e isenção PIX"],
    ["pro-link-servicos","Serviços","Categorias, preços, duração e sinal"],
    ["pro-link-calendario","Gerenciar Calendário","Feche ou reabra intervalos"],
    ["pro-link-assistente","Assistente de Agenda","Intervalos para avaliação manual"],
    ["pro-link-dashboard","Dashboard","Indicadores do negócio"]
  ];
  return adminPage("Área administrativa",'<h3>Controle seu negócio em um só lugar</h3><p>Acesse rapidamente as principais áreas administrativas.</p>'+
    shortcuts.map(([id,name,desc])=>'<button type="button" class="mock-admin-shortcut" data-tour="'+id+'"><strong>'+name+'</strong><small>'+desc+'</small><span aria-hidden="true">›</span></button>').join(""));
}
function adminAgenda(step){
  const phase=step.phase||"list";
  const search='<div class="mock-card"><h3>Resumo da agenda</h3><div class="mock-admin-metrics"><span><strong>2</strong> Hoje</span><span><strong>3</strong> Agendados</span><span><strong>1</strong> Concluído</span></div></div>'+
  '<div class="mock-card"><p>Atendimentos</p>'+adminButton("pro-ag-search","⌕ Buscar cliente ou serviço",'mock-admin-field')+
  '<div class="mock-admin-chips">'+adminButton("pro-ag-filter","Agendados")+'<span>Concluídos</span><span>Cancelados</span></div>'+
  adminButton("pro-ag-open","Consultar atendimento · Cliente Exemplo · 12/11 às 14h30",'mock-admin-shortcut')+'</div>';
  if(phase==="list")return adminPage("Agendamentos",search);
  if(phase==="detail")return adminPage("Detalhes do atendimento",'<div class="mock-card"><span class="mock-pill">Agendado</span><h3>Cliente Exemplo · Blindagem</h3><p>12/11/2026 · 14h30 · 1h30 de duração · sinal pago (exemplo)</p>'+
    '<div class="mock-admin-chips">'+adminButton("pro-ag-actions","Ações do atendimento")+'</div>'+
    adminButton("pro-ag-reschedule","Reagendar atendimento")+
    adminButton("pro-ag-change-service","Alterar Serviço")+
    adminButton("pro-ag-complete","Concluir atendimento")+
    adminButton("pro-ag-cancel","Cancelar agendamento")+'</div>');
  if(phase==="reagendar")return adminPage("Reagendar atendimento",'<div class="mock-card"><h3>Escolha nova data e horário</h3><p>Blindagem · duração preservada · sinal já pago (simulado).</p>'+
    adminButton("pro-ag-newdate","19/11/2026 · data ilustrativa",'mock-admin-field')+
    adminButton("pro-ag-newtime","15h30 · novo horário",'mock-admin-field')+
    adminButton("pro-ag-confirm-reschedule","Confirmar reagendamento (simulação)",'mock-primary')+'</div>'+
    '<div class="mock-notice">No app real, é preciso aguardar confirmação e sincronização para considerar a alteração concluída.</div>');
  if(phase==="alterar")return adminPage("Alterar Serviço",'<div class="mock-card"><h3>Serviço atual: Blindagem</h3><p>Data e início preservados. O novo serviço deve caber no horário.</p>'+
    adminButton("pro-ag-newservice","Novo serviço ativo · Manutenção em gel",'mock-admin-field')+
    adminButton("pro-ag-service-summary","Prévia de valor e duração (exemplo)",'mock-admin-field')+
    adminButton("pro-ag-save-service","Confirmar alteração (simulação)",'mock-primary')+'</div>'+
    '<div class="mock-notice">Funcionalidade condicionada à habilitação, à disponibilidade e à confirmação técnica no app real.</div>');
  return adminPage("Concluir atendimento",'<div class="mock-card"><h3>Informe o valor final cobrado</h3><p>Cliente Exemplo · Blindagem</p>'+
    adminButton("pro-ag-finalvalue","R$ 90,00 (exemplo)",'mock-admin-field')+
    adminButton("pro-ag-confirm-complete","Concluir atendimento (simulação)",'mock-primary')+'</div>');
}
function adminCalendario(step){
  const reabrir=step.phase==="reabrir";
  const close=adminButton("pro-cal-mode-close","Fechar horários");
  const open=adminButton("pro-cal-mode-open","Reabrir horários");
  return adminPage("Gerenciar Calendário",'<h3>Controle de disponibilidade</h3><p>Selecione vários intervalos de 15 minutos. Reservas existentes não são alteradas.</p>'+
   '<div class="mock-card">'+adminButton("pro-cal-date","Novembro 2026 · Quinta, 12 (exemplo)",'mock-admin-field')+
   '<div class="mock-admin-chips">'+close+open+'</div><p class="mock-admin-legend">Disponível · Reservado · Fechado · Sem início · Com regra</p>'+
   '<div class="mock-admin-calendar-slots">'+
   '<span>14h00<br>Reservado</span>'+
   adminButton("pro-cal-slot-close","14h15<br>Disponível",'mock-admin-slot'+(reabrir?" mock-admin-slot-muted":""))+
   adminButton("pro-cal-slot-open","14h15<br>Fechado",'mock-admin-slot'+(!reabrir?" mock-admin-slot-muted":""))+
   '<span>14h30<br>Com regra</span></div>'+
   '<p class="mock-notice">Sem início e Com regra indicam restrições de uso. Confira o resumo da seleção antes de confirmar.</p>'+
   adminButton(reabrir?"pro-cal-confirm-open":"pro-cal-confirm-close",reabrir?"Reabrir horários selecionados":"Fechar horários selecionados","mock-primary")+'</div>');
}
function adminAssistente(step){
  const result=step.phase==="resultado";
  return adminPage("Assistente de Agenda",'<div class="mock-card mock-admin-assistant"><h3>Mais controle sobre cada intervalo</h3><p>O assistente identifica intervalos que merecem atenção. <strong>Nenhum horário é bloqueado automaticamente.</strong></p>'+
  '<div class="mock-admin-chips">'+adminButton("pro-ass-today","Hoje")+'<span>Amanhã</span><span>Este mês</span></div>'+
  adminButton("pro-ass-question","Quais horários devo avaliar hoje?",'mock-admin-field')+'</div>'+
  (result?'<div class="mock-card"><h3>1 intervalo para avaliar (exemplo)</h3>'+
  adminButton("pro-ass-review","12/11/2026 · 14h00 às 14h30 · Sugestão de bloqueio",'mock-admin-field')+
  '<p>Intervalo disponível: 30 minutos. Confira os serviços elegíveis e a demanda.</p>'+
  adminButton("pro-ass-calendar","Conferir dia no calendário")+'</div>':
  '<div class="mock-notice">Use os atalhos de consulta rápida ou faça uma pergunta para avaliar a agenda.</div>'));
}
function adminClientes(step){
  const profile=step.phase==="perfil";
  if(!profile)return adminPage("Gestão de Clientes",'<h3>Suas clientes</h3><div class="mock-card">'+
    adminButton("pro-cli-search","⌕ Buscar nome, telefone ou e-mail",'mock-admin-field')+
    '<div class="mock-admin-chips"><span>Todas as clientes</span>'+adminButton("pro-cli-filter","Isentas de sinal PIX")+'</div>'+
    adminButton("pro-cli-open","Abrir perfil · Cliente Exemplo",'mock-admin-shortcut')+'</div>');
  return adminPage("Perfil da cliente",'<div class="mock-card"><h3>Cliente Exemplo</h3><p>Telefone e e-mail fictícios · 3 atendimentos concluídos</p>'+
    adminButton("pro-cli-history","Agendamentos anteriores · Histórico",'mock-admin-field')+
    '<p>Observações internas · visíveis somente para a administração</p>'+
    adminButton("pro-cli-notes","Salvar observação (simulação)")+'</div>'+
    '<div class="mock-card"><h3>Isenção de sinal PIX</h3><p>Autorização individual para agendar sem pagamento antecipado.</p>'+
    adminButton("pro-cli-pix","◯ Isenta de sinal PIX",'mock-admin-field')+
    adminButton("pro-cli-status","Ver situação da isenção")+'</div>');
}
function adminServicos(step){
  const phase=step.phase||"lista";
  if(phase==="lista")return adminPage("Serviços",'<h3>Catálogo de atendimentos</h3><p>Organize preços, duração, categorias e disponibilidade.</p><div class="mock-card">'+
    adminButton("pro-srv-new","Cadastrar novo serviço",'mock-primary')+
    '<p>Ativos · Inativos · Sem preço</p><p>Blindagem · 1h30 · R$ 90,00 (exemplo)</p></div>');
  if(phase==="categorias")return adminPage("Serviços · Categorias",'<div class="mock-card"><h3>Gerenciar categorias</h3><p>Unhas em Gel, Manicure, Pedicure — exemplos</p>'+
    adminButton("pro-srv-categories","Gerenciar categorias")+
    '<p>Cadastre e edite categorias antes de associar serviços.</p></div>');
  return adminPage("Novo serviço",'<div class="mock-card"><h3>Dados do procedimento</h3>'+
    adminButton("pro-srv-name","Nome: Manutenção em gel · Categoria: Unhas em Gel",'mock-admin-field')+
    adminButton("pro-srv-duration","Preço: R$ 90,00 · Duração: 90 minutos",'mock-admin-field')+
    '<h3>Sinal para Agendamento PIX</h3>'+
    adminButton("pro-srv-pix-type","Forma de cálculo · Valor fixo ou percentual",'mock-admin-field')+
    adminButton("pro-srv-pix-value","Valor do sinal · R$ 30,00 (exemplo)",'mock-admin-field')+
    adminButton("pro-srv-active","◉ Serviço ativo")+
    adminButton("pro-srv-save","Salvar serviço (simulação)",'mock-primary')+'</div>');
}
function adminDashboard(){
  return adminPage("Dashboard",'<h3>Resumo do período</h3><div class="mock-card">'+
    adminButton("pro-dash-period","Período de análise · exemplo",'mock-admin-field')+
    '<div class="mock-admin-metrics mock-admin-metrics-2">'+adminButton("pro-dash-revenue","Receita realizada<br><strong>R$ 450</strong>",'mock-admin-stat')+
    '<span>Concluídos<strong>5</strong></span><span>Ticket médio<strong>R$ 90</strong></span><span>Cancelamento<strong>10%</strong></span></div></div>'+
    '<div class="mock-card"><h3>Gráficos</h3>'+adminButton("pro-dash-charts","Receita e atendimentos · gráfico ilustrativo",'mock-admin-field')+
    '<div class="mock-admin-bars"><i></i><i></i><i></i><i></i><i></i></div></div>'+
    '<div class="mock-card">'+adminButton("pro-dash-clients","Ranking de clientes · exemplo",'mock-admin-field')+'</div>');
}
function adminNotifications(){
  return adminPage("Notificações",'<div class="mock-card"><h3>Receba os avisos da agenda</h3>'+
    adminButton("pro-not-enable","Ativar notificações")+
    adminButton("pro-not-bell","Abrir Central de Notificações")+'</div>'+
    '<div class="mock-card"><h3>Central de Notificações</h3>'+
    adminButton("pro-not-assistant","Alerta de intervalo (exemplo)",'mock-admin-field')+
    '<p>O Assistente pode alertar sobre novas lacunas se o monitor e o Web Push estiverem habilitados.</p>'+
    adminButton("pro-not-read","Marcar como lidas (simulação)")+'</div>');
}
function screenAdmin(step){
 switch(step.screen){
  case "admin-home":return adminHome();
  case "admin-agenda":return adminAgenda(step);
  case "admin-calendario":return adminCalendario(step);
  case "admin-assistente":return adminAssistente(step);
  case "admin-clientes":return adminClientes(step);
  case "admin-servicos":return adminServicos(step);
  case "admin-dashboard":return adminDashboard();
  case "admin-notificacoes":return adminNotifications();
  default:return "";
 }
}

# Tutorial Interativo — Isabele Mariana Nails

Guia visual e didático para ensinar clientes e a profissional a usar o aplicativo **Isabele Mariana Nails**, com telas reconstituídas em HTML/CSS e passos interativos destacados.

## Limites obrigatórios

- **Projeto exclusivamente estático**: HTML, CSS e JavaScript do navegador.
- **Não** utiliza Firebase, PostgreSQL, servidores, APIs, autenticação, webhooks ou pagamentos reais.
- **Não** grava dados: sem localStorage, sessionStorage, cookies, formulários enviados ou cadastro de clientes.
- **Não** importa scripts de produção nem configuração privada. A identidade visual e o desenho de telas selecionadas, inclusive administrativas, foram usados apenas como referência para simulações fictícias.
- Exemplos de datas, horários, nomes, preços e pagamentos são **ilustrativos**, não consultam disponibilidade real.
- Nenhuma alteração é feita no repositório do app principal nem na Nuvé.

## Acesso

Abra `index.html` em um navegador moderno ou publique o diretório como site estático. Não há instalação, build ou variáveis de ambiente.

## Tutoriais

- **Para clientes:** 12 tutoriais sobre acesso, cadastro, agendamentos, PIX, perfil, instalação e notificações.
- **Para a profissional:** 13 tutoriais sobre gestão de agenda, calendário, Assistente, serviços, clientes, PIX, Dashboard e avisos.
- Ao abrir um link individual, a central seleciona automaticamente o público correspondente.

## Arquivos

- `index.html` — estrutura da central de ajuda.
- `styles.css` — reprodução visual independente dos padrões do frontend (vinho, rosa, cards e agenda).
- `app.js` — navegação, busca, filtros e renderização do guia.
- `admin-tutorials.js` — roteiros e telas fictícias exclusivos dos tutoriais administrativos (sem integração).

## Segurança

A política CSP da página desativa conexões externas e impede submissão de formulários. Para adicionar novas telas, reproduza apenas a interface e use dados inventados em memória. Nunca copie scripts reais do aplicativo com integração, chaves ou identificadores.

### Referências visuais analisadas no repositório original (somente leitura)

`index.html`, `login.html`, `principal.html`, `agendamento.html`, `meu-perfil.html`, `admin-agendamentos.html`, `admin-calendario.html`, `admin-assistente.html`, `admin-clientes.html`, `admin-servicos.html`, `dashboard.html` e telas associadas. **Nenhum script operacional foi importado.**

Este repositório é um tutorial, não um ambiente de demonstração comercial ou um sistema de agendamento.


## Fase 1 — Vercel e PWA

O tutorial continua **100% estático**, sem acesso ao Firebase, à agenda, a pagamentos ou a dados pessoais.
`manifest.json`, `service-worker.js`, `pwa.js`, `vercel.json` e os ícones próprios de instalação foram adicionados.
Os ícones de instalação foram copiados dos assets oficiais do repositório Isabele Nails, sem geração sintética.

### Publicar na Vercel

1. Importe o repositório `joadlsilvaseo-png/tutorial-isabele-mariana-nails` na Vercel.
2. Selecione **Framework Preset: Other**, com **Root Directory: ./ (raiz)**.
3. Não configure comando de build, variáveis de ambiente nem backend. Publique os arquivos estáticos diretamente da raiz.
4. O domínio HTTPS da Vercel habilita o registro do Service Worker. O guia também pode ser testado em `http://localhost`.
5. Teste a instalação no Chrome Android e a opção **Adicionar à Tela de Início** pelo menu Compartilhar do Safari no iPhone.
6. Faça uma primeira abertura com internet e só depois teste a experiência offline. O cache cobre a interface e os ativos do tutorial.

A página intencionalmente usa `noindex, nofollow`, pois o guia é compartilhado diretamente, sem indexação pública por enquanto.
As mudanças no Service Worker devem atualizar a constante `CACHE_NAME` quando a lista de arquivos em cache for modificada.
As simulações mostram datas, nomes, preços e horários exemplificativos, não disponibilidade real.

### Testes rápidos após publicar

- Conferir página inicial, os cinco tutoriais, destaques em cada passo, Voltar/Pular/Reiniciar/Concluir.
- Conferir a tela PIX: valor total, sinal, restante e QR fictício não escaneável.
- Conferir Meu Perfil: foto/contato, manutenção, WhatsApp, Reagendar e Cancelar; nenhum botão deve sair para o app real.
- Conferir a grade ilustrativa de horários a cada 15 minutos.
- Testar instalação e reabertura offline; verificar cache e atualização em nova implantação.
- Confirmar que a página não faz chamadas externas e não processa pagamentos reais.


## Fase 2 — Experiência da cliente

A central mantém os cinco tutoriais anteriores e adiciona sete novos assuntos da jornada da cliente:
cadastro e acesso (incluindo Google), recuperação de senha, instalação no Android/iPhone,
cancelamento de agendamento, situações do PIX (pendência, crédito, expiração e análise),
notificações e edição da foto de perfil.

- Busque por título, descrição ou assunto usando o campo de pesquisa.
- Filtre por Agendamentos, PIX, Conta, Meu Perfil, Notificações ou Instalação.
- Cada tutorial tem link próprio via `#tutorial=ID`, que pode ser copiado e compartilhado.
- Filtros, andamento e telas fictícias existem apenas em memória; a URL não contém dados pessoais.
- Nenhuma foto é selecionada, nenhuma permissão é solicitada, nenhum e-mail é enviado,
  nenhum agendamento é cancelado e nenhum PIX é processado.
- Os exemplos reproduzem o funcionamento conhecido do app principal, mas não substituem
  os Termos de Uso e a confirmação das operações reais.
- O cache do PWA foi versionado para `guia-isabele-static-v2`, permitindo atualização
  dos novos conteúdos quando o site for aberto online.

### Roteiro de validação

1. Use busca e categorias; verifique filtros sem resultados e limpeza.
2. Abra os 12 tutoriais e siga cada etapa com o toque realçado.
3. Copie o link, abra em nova aba e valide o histórico de navegação do navegador.
4. Teste cadastro, senha, instalação, cancelamento, os quatro estados do PIX, notificações e foto.
5. Repita os testes em tela pequena e offline após uma primeira abertura com internet.
6. Verifique que não existem formulários enviados nem chamadas de rede para o app real.

## Fase 3 — Tutoriais da profissional

A central possui um **seletor de público** com duas áreas independentes:
**Para clientes** (12 tutoriais) e **Para a profissional** (13 tutoriais).
A página continua estática e publicamente acessível, mas as simulações
administrativas **não abrem telas privadas do app principal** e não usam contas,
credenciais, Firebase, PostgreSQL, Calendar, Mercado Pago ou qualquer API.

Os 13 novos roteiros cobrem:

1. Conhecendo a área de gestão e seus atalhos.
2. Consultando e administrando agendamentos.
3. Fechando e reabrindo intervalos de 15 minutos no calendário.
4. Assistente Preventivo de Agenda (apenas sugestões consultivas).
5. Cadastro de serviços, categorias e disponibilidade.
6. Configuração do sinal PIX por serviço.
7. Isenção individual de sinal PIX na ficha de clientes.
8. Reagendamento de um atendimento com PIX pago, condicionado à confirmação.
9. Alteração de serviço de um agendamento confirmado (recurso condicionado à habilitação).
10. Conclusão de atendimento com valor final cobrado.
11. Gestão de clientes, históricos e observações internas.
12. Análise dos indicadores do Dashboard.
13. Central de Notificações e alertas administrativos opcionais.

Os links `#tutorial=pro-...` selecionam automaticamente o público
**Para a profissional**, inclusive após atualizar a página, mantendo o
compartilhamento individual. A busca e os filtros agora consideram
somente o público selecionado.

**Cuidados essenciais:** sinal PIX já pago não pode ser duplicado
por uma simples alteração; reagendamento e alteração de serviço requerem
validação e sincronização; o Assistente não bloqueia horários sozinho;
alertas automáticos dependem de configurações operacionais habilitadas
no sistema real. Dados, valores, nomes e datas são sempre fictícios.

### Validação recomendada

- Alternar entre Cliente e Profissional e confirmar as contagens 12/13.
- Abrir os 25 tutoriais, percorrer os passos com destaque e verificar
  navegação anterior, pular, reiniciar e conclusão.
- Usar filtros e busca específicos da área profissional.
- Abrir diretamente `#tutorial=pro-assistente` e depois voltar à lista:
  deve permanecer na área da profissional.
- Copiar e compartilhar links individuais para os novos tutoriais.
- Recarregar em HTTPS, testar funcionamento offline após primeira abertura
  e atualização do cache do PWA para `guia-isabele-static-v3`.
- Confirmar que não há login, formulário enviado, PIX ou bloqueio real
  em qualquer uma das simulações administrativas.

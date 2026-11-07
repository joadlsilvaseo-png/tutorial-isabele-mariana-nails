# Tutorial Interativo — Isabele Mariana Nails

Guia visual e didático para ensinar clientes a usar o aplicativo **Isabele Mariana Nails**, com telas reconstituídas em HTML/CSS e passos interativos destacados.

## Limites obrigatórios

- **Projeto exclusivamente estático**: HTML, CSS e JavaScript do navegador.
- **Não** utiliza Firebase, PostgreSQL, servidores, APIs, autenticação, webhooks ou pagamentos reais.
- **Não** grava dados: sem localStorage, sessionStorage, cookies, formulários enviados ou cadastro de clientes.
- **Não** importa scripts de produção nem configuração privada. Somente identidade visual e estrutura de telas públicas foram usadas como referência.
- Exemplos de datas, horários, nomes, preços e pagamentos são **ilustrativos**, não consultam disponibilidade real.
- Nenhuma alteração é feita no repositório do app principal nem na Nuvé.

## Acesso

Abra `index.html` em um navegador moderno ou publique o diretório como site estático. Não há instalação, build ou variáveis de ambiente.

## Tutoriais

- Como fazer um agendamento
- Como funciona o sinal PIX (apenas explicação visual)
- Como reagendar
- O que existe no Meu Perfil
- Como acompanhar atendimentos

## Arquivos

- `index.html` — estrutura da central de ajuda.
- `styles.css` — reprodução visual independente dos padrões do frontend (vinho, rosa, cards e agenda).
- `app.js` — renderização das telas fictícias e orientações sobre cada toque.

## Segurança

A política CSP da página desativa conexões externas e impede submissão de formulários. Para adicionar novas telas, reproduza apenas a interface e use dados inventados em memória. Nunca copie scripts reais do aplicativo com integração, chaves ou identificadores.

### Referências visuais analisadas no repositório original (somente leitura)

`index.html`, `login.html`, `principal.html`, `unhas-em-gel.html`, `agendamento.html`, `meu-perfil.html` e respectivos CSS. **Nenhum script operacional foi importado.**

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

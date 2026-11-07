# Validação da Fase 4

A interface é HTML/CSS/JS estático, sem build nem dependências em produção.
O arquivo \`vercel.json\` define o Framework Preset \`Other\`, headers de cache para o manifesto e Service Worker.
Os links individuais usam fragmentos \`#tutorial=...\`, portanto não necessitam de rewrites.

## Teste automatizado

O workflow \`.github/workflows/validate.yml\` executa \`.github/tests/smoke.mjs\` em Chromium
a cada push na \`main\`, em PRs e por acionamento manual. Ele verifica:

- As listas de 12 tutoriais da cliente e 13 da profissional.
- A pesquisa, os filtros por público e a lista vazia.
- A navegação real com cliques em todos os 119 passos guiados.
- Links de acesso direto aos tutoriais das duas áreas.
- A ausência de barra horizontal em larguras de 360, 390 e 1366 pixels.
- A presença do manifesto e dos ícones de 192 e 512 pixels.
- O registro do Service Worker, a cache \`guia-isabele-static-v3\` e a reabertura offline.
- Capturas de tela mobile e desktop como artefatos do GitHub Actions.

As dependências do Playwright são instaladas **apenas no runner de CI**.
Não há \`package.json\` nem dependências de execução do guia na Vercel.

## Publicação

O repositório fica pronto para importar pela interface da Vercel:
Framework \`Other\`, Root Directory \`./\`, sem comandos de build ou variáveis.
Sem conexão autorizada à conta Vercel, não é possível confirmar/criar um deploy real.
Depois de importar e publicar, execute a validação final **na URL real**:
instalação Android/iPhone, atualização após nova versão, inspeção visual e offline.

## Escopo de segurança

O guia continua com CSP \`connect-src 'none'\` e sem leitura de dados administrativos,
Firebase, pagamentos, notificações ou bloqueio de horários.
As informações administrativas continuam exclusivamente simuladas.

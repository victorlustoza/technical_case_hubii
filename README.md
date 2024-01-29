# technical_case_hubii
Repositório para disponibilizar automações do Caso Técnico da Hubii.

## Pre-requisitos
* Você deve ter o Node v20 ou superior e o npm v10 instalados em sua máquina.

### **1. Desenvolva Planos de Teste**
Para desenvolver esta tarefa foi utilizada uma ferramenta de gerenciamento de testes chamada [QASE](https://qase.io/).
Para acessar a plataforma você precisará clicar no link a seguir e usar estas credenciais:
- https://app.qase.io/projects
- E-mail: victororigintestuser@gmail.com
- Senha: Teste@12345!

Após o login, você deve selecionar o projeto "Caso Técnico Hubii". Na seção "Repository", você encontrará todos os casos de teste que foram criados a partir dos requisitos de atribuição.
Os planos de teste são construídos dentro da seção "Test Plans" e você encontrará planos de teste que foram feitos usando os casos de teste do repositório. Todos os casos de teste têm suas informações descritas com descrições, tipos, etapas e outros. Você pode acessar isso clicando nos casos de teste do repositório.
Além disso, na seção "Test runs" você encontrará execuções de testes para os casos de teste desenvolvidos. Lá será possível ver uma demonstração de como seria uma execução de teste bem-sucedida e falhada.

### **2. Crie scripts de automação para os cenários**
Para automatizar o plano de testes desenvolvido, foi utilizada a ferramenta de testes [Cypress](https://www.cypress.io/). Para poder executar esses casos de teste você precisa clonar este repositório GitHub e executar o seguinte comando de dentro do diretório principal para instalar as dependências: `npm install`.
Após instalar as dependências você pode executar todos os testes do plano de testes que são automatizados usando o comando: `npm run test`. Observe que esses testes serão executados **localmente** e no modo **headless**, o que significa que você não verá os testes reais sendo executados, apenas através da linha de comando com os resultados no final. Se você deseja ver os testes rodando você só precisa usar o comando `npx cypress open` para abrir o cliente Cypress e a partir daí você pode escolher a especificação que deseja executar e poderá ver o teste rodando visualmente em uma instância do Chrome ou, dentre outros navegadores.
Além disso, os casos de teste automatizados do Cypress estão integrados e vinculados à ferramenta de gerenciamento de testes QASE. Portanto, se você deseja executar casos de teste automatizados e ter seus resultados atualizados no QASE, você pode simplesmente executar o comando `npm run test:qase` em sua linha de comando. Depois disso, você pode verificar a seção "Test Runs" do QASE para a execução de teste que acabou de ser executada, analisar os resultados, evidências e exportar relatórios detalhados dessa execução de teste.

### **3. Relatórios de Bugs**
**O relatório, resultados de testes e bugs encontrados:**
Os resultados dos testes podem ser vistos de várias maneiras, como diretamente na linha de comando, através do client Cypress quando os testes são executados por meio dele e também nas seções de "Test Runs" do QASE quando os testes são executados usando a integração QASE. Com o QASE, os relatórios de teste são muito fáceis de obter. Ao acessar uma execução de teste QASE você pode obter o relatório através do botão "exportar" em modo PDF ou CSV, o relatório é muito detalhado e contém cada caso de teste e para os casos de teste com falha, possui suas evidências, comentários e stacktraces (quando executado de forma automatizada) conectado corretamente. Além disso, você também pode gerar um relatório completo por meio de um link público ([como este](https://app.qase.io/public/report/4349a74ba92b51af2b16265fab0c1c20216a7f61)). É uma ótima forma de compartilhar resultados e relatórios com pessoas que não têm acesso à plataforma.

**Instruções para executar cada fase do plano de teste:**
As instruções estão sendo descritas neste documento, porém, aqui vai um resumo de como fazer:
- Para executar **manualmente** qualquer plano de teste ou casos de teste no QASE você deve criar uma nova execução de teste na seção "Test Runs" e adicionar o respectivo plano de teste ou casos que deseja executar e começar a executá-los manualmente.
- Para executar a **automação**, verifique a seção **2. Crie scripts de automação para os cenários** acima.

**Quais foram as principais decisões técnicas tomadas:**
As principais decisões técnicas foram usar Cypress para automação de testes devido a esta ferramenta ser uma ferramenta muito boa para testes de UI e também temos a oportunidade de aproveitar esta ferramenta para criar testes automatizados de **API e Componentes** também. Além disso, está presente o uso do padrão Page Object dentro do código que divide os elementos e ações da página para ter um código melhor organizado/reutilizável/legível. A utilização de uma ferramenta de gerenciamento de testes como o QASE não é uma decisão diretamente técnica, mas influencia muito em assuntos técnicos como CI/CD. Ter uma ferramenta de gerenciamento de teste integrada com testes automatizados Cypress como essa, não apenas ajuda a construir uma cultura sólida de integração contínua e entrega *com qualidade* como centro, mas também funciona como uma forma de ter planos de teste, casos de teste, suítes de teste e testes mais organizados.

**Comentários relevantes sobre o projeto:**
É importante ressaltar que este projeto foi feito pensando na qualidade como um todo e não apenas criando testes e automatizando-os. As integrações, a combinação de ferramentas e códigos foram feitas pensando em uma cultura centrada na qualidade a ser inserida e desenvolvida dentro de uma empresa que busca qualidade de processos, produtos e não contando apenas com QA's, mas também com desenvolvedores e equipe de produto. Melhorar passo a passo com a ajuda de todos é a chave para o sucesso.

## Observations
- Arquivos como `cypress.env.json` e `cypress.config.json` devem ser arquivos adicionados ao git ignore devido às informações confidenciais que eles carregam, como variáveis ​​importantes e chaves de API, por exemplo. Neste repositório eles foram enviados apenas para este teste, para que as pessoas possam cloná-lo e executá-lo corretamente.
- Todos os casos de teste possuem suas informações corretas definidas como positivo/negativo, etapas, tipo etc, bastando abri-los em tela inteira para melhor visualização.
- O QASE também pode ser integrado ao Jira ou outras ferramentas de gerenciamento de projetos para criar um fluxo de trabalho ainda melhor.

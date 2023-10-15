# Plano de Testes de Software
## Objetivo
O objetivo deste plano de testes é garantir que o aplicativo atenda aos requisitos funcionais e não funcionais especificados e que funcione corretamente em diferentes cenários e plataformas.

## Escopo
Os testes serão realizados em suas versões Android e iOS. O escopo inclui a verificação de requisitos funcionais e não funcionais.

## Requisitos Funcionais

### RF-001: Visualizar Página Principal
**Objetivo:** Verificar se todos os botões estão direcionando para as páginas corretas.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Selecionar todas as opções no cabeçalho.
3. Verificar se o usuário é corretamente direcionado a página escolhida.

### RF-002: Cadastro de Usuários
**Objetivo:** Verificar se os usuários podem se cadastrar usando e-mail, senha ou conta Google existente.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Selecionar a opção de cadastro.
3. Preencher os campos obrigatórios de e-mail e senha.
4. Clicar no botão de cadastro.
5. Verificar se o cadastro é bem-sucedido.

**Resultado Esperado:** O cadastro de usuários deve ser bem-sucedido para todas as opções de registro.

### RF-003: Tela de Login
**Objetivo:** Verificar se os usuários cadastrados têm acesso à tela de login.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Selecionar a opção de login.
3. Preencher os campos de e-mail e senha cadastrados.
4. Clicar no botão de login.
5. Verificar se o acesso à tela principal é concedido.

**Resultado Esperado:** Os usuários cadastrados devem poder fazer login e acessar a tela principal.

### RF-004: Notificações Push
**Objetivo:** Verificar se o aplicativo envia notificações push para atualizar os usuários.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Realizar uma ação que gere uma notificação (por exemplo, enviar uma mensagem).
3. Verificar se a notificação push é recebida.

**Resultado Esperado:** As notificações push devem ser enviadas e recebidas corretamente.

### RF-005: Edição de Perfil
**Objetivo:** Verificar se os usuários podem editar seus perfis.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Acessar a seção de edição de perfil.
3. Realizar alterações nos campos do perfil (nome, foto, informações pessoais, detalhes médicos, etc.).
4. Salvar as alterações.
5. Verificar se as alterações são refletidas no perfil do usuário.

**Resultado Esperado:** Os usuários devem poder editar e salvar as informações do perfil com sucesso.

### RF-006: Tab Bar
**Objetivo:** Verificar se a "tab bar" apresenta todas as funcionalidades do aplicativo.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Verificar se a "tab bar" exibe todas as funcionalidades listadas (login, perfil de usuário, notificações, configurações, favoritos, contato, etc.).

**Resultado Esperado:** A "tab bar" deve exibir todas as funcionalidades do aplicativo.

### RF-007: Seção de Contato com Cuidadores
**Objetivo:** Verificar se os usuários podem entrar em contato direto com os cuidadores.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Acessar a seção de contato com cuidadores.
3. Enviar uma mensagem de texto ou anexar uma foto digitalizada de receita.
4. Verificar se a mensagem é enviada com sucesso.

**Resultado Esperado:** Os usuários devem poder enviar mensagens e anexar fotos de receitas na seção de contato com cuidadores.

### RF-008: Canal de Suporte
**Objetivo:** Verificar se o aplicativo disponibiliza um canal de suporte para os usuários.

**Passos de Teste:**
1. Abrir o aplicativo.
2. Acessar o canal de suporte.
3. Enviar uma mensagem de teste.
4. Verificar se a mensagem é enviada com sucesso.

**Resultado Esperado:** Os usuários devem poder enviar mensagens para o canal de suporte com sucesso.

## Requisitos não Funcionais

### RNF-001: Compatibilidade de Plataforma
**Objetivo:** Verificar se o aplicativo é compatível com sistemas Android e iOS em suas versões mais recentes.

**Passos de Teste:**
1. Instalar o aplicativo em um dispositivo Android com a versão mais recente do sistema operacional.
2. Instalar o aplicativo em um dispositivo iOS com a versão mais recente do sistema operacional.

**Resultado Esperado:** O aplicativo deve ser compatível e funcional em ambos os sistemas operacionais.

### RNF-002: Tamanhos de Tela e Resoluções
**Objetivo:** Verificar se o aplicativo funciona sem problemas em diferentes tamanhos de tela e resoluções.

**Passos de Teste:**
1. Testar o aplicativo em dispositivos com tamanhos de tela e resoluções variados.

**Resultado Esperado:** O aplicativo deve ser responsivo e funcionar corretamente em diferentes dispositivos.

### RNF-003: Legibilidade de Interface
**Objetivo:** Verificar se o aplicativo fornece fontes e elementos de interface com tamanho suficiente para garantir a legibilidade em dispositivos móveis.

**Passos de Teste:**
1. Avaliar a legibilidade da interface em dispositivos móveis com diferentes tamanhos de tela.

**Resultado Esperado:** A interface do aplicativo deve ser legível e os elementos devem ser adequados para visualização em dispositivos móveis.

### RNF-004: Conexões de Rede
**Objetivo:** Verificar se o aplicativo é funcional tanto em conexões Wi-Fi quanto em redes móveis.

**Passos de Teste:**
1. Testar o aplicativo em ambas as conexões (Wi-Fi e rede móvel).

**Resultado Esperado:** O aplicativo deve funcionar sem problemas em ambas as conexões.

### RNF-005: Tempo de Resposta
**Objetivo:** Verificar se o aplicativo processa requisições do usuário em no máximo 5 segundos.

**Passos de Teste:**
1. Realizar ações que exijam processamento de dados.
2. Medir o tempo de resposta do aplicativo.

**Resultado Esperado:** O aplicativo deve responder às ações do usuário em no máximo 5 segundos.

## Cronograma de Testes
Os testes serão realizados de acordo com o final de cada sprint e o ciclo de entregas.
## Equipe de Testes
A equipe de testes inclui toda a equipe de gerenciamento e desenvolvimento que serão responsáveis pela execução dos testes e documentação dos resultados.

## Relatórios de Teste
Os resultados dos testes serão documentados em relatórios de teste que incluirão detalhes sobre os testes realizados, os resultados esperados e os resultados reais.

## Aprovação dos Testes
A aprovação dos testes será baseada na conformidade do aplicativo com os requisitos e critérios estabelecidos neste plano de testes. Qualquer não conformidade será relatada à equipe de desenvolvimento para correção.

Este plano de testes é uma diretriz para garantir a qualidade do aplicativo. Os resultados dos testes serão utilizados para tomar decisões sobre a qualidade do produto e a sua prontidão para ser entregue aos usuários finais.

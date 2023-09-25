# Especificações do Projeto

A proposta é criar um aplicativo que ajude as pessoas que utilizam medicamentos rotineiros, a pagar o melhor valor pelo medicamento e o mesmo ser entregue em sua residência, antes de acabar, evitando a interrupção do tratamento, sem a necessidade de ficar nas filas da farmácia, os medicamentos virão separados por dose e horário de consumo, com a opção de o usuário receber os alarmes em seu smartphone avisando o horário da medicação. 

Para isso será utilizado o React Native para desenvolver o aplicativo no front e para banco de dados o Firebase.

## Personas

<img src="img/persona_marina_alves.png"><br><br>
<img src="img/persona_samira_santana.png"><br><br>
<img src="img/persona_anasilva.jpeg"><br><br>
<img src="img/Persona_Larissa.png"><br><br>
<img src="img/Persona_Marta.png"><br><br>



<h2> Juliana Rodrigues </h2>
<img src="img/JulianaRodrigues.jpg" width="600px" align="center"/>


|  |                                                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| História: Estudante e estagiária, enfrenta diariamente uma rotina com prazos apertados e muitas atividades a serem desenvolvidas e agora também o desafio de cuidar de seus pais idosos, que têm múltiplas condições de saúde, assumindo a responsabilidade de administrar os medicamentos e consultas médicas de seus pais. <br> Juliana se sente sobrecarregada tentando equilibrar suas responsabilidades no trabalho, estudos e com o cuidado de seus pais. | Idade: 22 anos.                                                                                                                     |
| Motivações: Aliada à tecnologia Juliana procura uma ferramenta que ofereça lembretes precisos para os horários de administração de medicamentos, mas que também forneça informações sobre os remédios prescritos.  Além disso, Juliana tem como objetivo encontrar um aplicativo que ofereça a conveniência de entrega dos medicamentos diretamente em sua casa, eliminando a necessidade de deslocamentos extras à farmácia.                                   | Aplicativos: <br> - Instagram,  <br> - WhatsApp,  <br> - TikTok.                                                                    |
| Frustrações:  <br> - Dificuldade em acompanhar os horários de medicamentos e consultas médicas de ambos os pais.  <br> - Preocupação constante com a saúde e bem-estar deles.   <br> - Desafio em manter um equilíbrio entre o trabalho, estudo, o cuidado dos pais e o próprio tempo.   <br> - Falta de tempo para buscar medicamentos na farmácia.                                                                                                            | Hobbies, História:  <br> - Criar memórias e experiência com a família.  <br> - Fotografia.  <br> - Exercício físico, ioga e dança.  |

<br><br>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Marina Alves    | Um canal confiável e programação de entregas regulares de medicamentos com base nos horários especificados | Reduzir o risco de esquecimento e melhorar a saúde                        |
| Juliana Rodrigues | Lembretes dos horários corretos para administração dos medicamentos | Garantir resposta eficaz ao tratamento proposto                            |
| Juliana Rodrigues | Receber todos os medicamentos em casa                               | Conquistar mais tempo para outras atividades                               |
| Samira Santana  | Receber medicamentos em casa separados por horário                  | Simplificar rotina e gerenciamento de doses                               |
| Marta Silva     | Receber medicamentos em casa com lembretes para tomar remédios     | Evitar interrupção no tratamento e receber lembretes                       |
| Larissa Gonçalves| Economia na compra e gestão dos medicamentos                       | Economizar dinheiro e tempo, ser lembrada para tomar os medicamentos      |
| Ana Silva       | Encontrar serviço de entrega que organize por horário               | Simplificar rotina e evitar erros na administração dos medicamentos       |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

O aplicativo a ser criado pelos desenvolvedores do grupo, trata-se de venda e entrega de medicamentos rotineiros conforme prescrição médica, entregues de forma personalizada separados por dosagens e horários a serem utilizados. Onde o cliente poderá realizar um orçamentos de todos os medicamentos que utiliza conosco, a equipe realizará o orçamento, para que o cliente após a aprovação receba em sua residencia a medicação a ser utilizada em até 3 dias úteis, será enviada em uma caixa personalizada com os horários das medicações, dosagem, nome e explicação do mesmo.

### Descrição Geral da Proposta

Para evidenciar o processo, afim de obter clareza em como funcioná, realizamos a modelagem do processo de negócios, no entanto determinamos algumas etapas como descrição do processo, levantamento dos elementos de modelagem de processos e diagrama de fluxo de processos.

#### Descrição do Processo

* Os clientes acessam o aplicativo e entregam a receita para o assistente recepção;

* O assistente realiza o orçamento com todas as medicações prescritas;

* Neste momento ela envia a receita para o assistente de medicamentos verificar a receita, caso esteja tudo certo ele cadastra a receita para ser avaliado pelo Sistema de Utilização de Drogas (AUD);

* O cliente ao aprovar o orçamento, aguarda a validação da receita, estando tudo certo o mesmo realiza o pagamento e aguarda o envio dos medicamentos em sua residência;

* A receita passa por duas aprovações sendo a primeira no sistema avaliado de Drogas e após a validação do Farmacêutico;

* Após as aprovações o farmacêutico libera as medicações que são encaminhadas para o assistente de medicamentos;

* O assistente separas as medicações em doses e horário, embala e encaminha para nova verificação do farmacêutico;

* Se estiver tudo certo é encaminhado para o motoboy, em caso de erros a medicação retorna para o assistente realizar a correção;

*	O motoboy verifica no sistema se a medicação poderá ser entregue na casa do cliente ou se terá que postar no correio;

*	O motoboy retorna com os protocolos assinados e entrega para o assistente da recepção;

*	O assistente realiza a baixa da entrega e cadastra os alarmes no aplicativo.

#### Elementos de Modelagem de Processos

Eventos Iniciais: Cliente acessa o aplicativo.

Eventos Finais: Orçamento Reprovado, Pedido Cancelado, Medicamento Entregue, Cliente Ausente.

Atividades: Entregar Receita, Receber Receita, Realizar Orçamento, Devolver Receita, Cadastrar Receita, Realizar Avaliação de Utilização de Drogas, Avaliar Receita, Autorizar Receita, Reprovar Receita, Efetuar Pagamento, Verificar Medicamentos, Informar Cliente, Separar Medicamentos, Verificar Pagamento, Verificar Endereço do Cliente, Enviar pelo Correio, Entregar pelo Motoboy, Assinar Protocolo de Recebimento, Dar Baixa no Sistema e Programar Alarme.

Atores: Cliente, Assistente Recepção, Sistema, Assistente Medicamentos, Farmacêutico e Motoboy.

Insumos: Receita.

Produtos: Medicamentos e Dados do Cliente.


### Processo 1 - O CLIENTE SOLICITA O ORÇAMENTO

No "Processo 1" o cliente entra em  contato com nossa equipe, que realizará o orçamento para o mesmo e enviará para o cliente, após a aprovação do cliente, o processo segue o fluxo até o medicamento ser entregue. Apesar de trabalharmos para atender o cliente de forma rápida e eficaz, afim de reter o mesmo a se cadastrar e seguir conosco, o tempo em que o cliente acessa o aplicativo e realiza o orçamento, até a equipe entrar em contato, é um pouco demorado e nesse caso ele pode desistir. Nossa oportunidade de melhoria seria atender de forma mais rápida e efetiva para que o cliente não desista da compra, implantar robôs que fizessem a leitura da receita e gerasse o orçamento no mesmo momento do cadastro da receita, poderá ser uma opção. 

<img src="img/Modelagem do Fluxo de Processos.png"><br><br>

### Processo 2 – O CLIENTE FAZ SEU ORÇAMENTO

No "Processo 2" o cliente entra no aplicativo e realiza seu orçamento, após a realização do pagamento, o processo segue o fluxo até o medicamento ser entregue. Apesar de ser um processo muito mais agil, ele não atende todos os publicos, pois pessoas idosas não são muito familiarizadas com processos eletrônicos e por fim acabam desistindo. Nossa oportunidade de melhoria para este caso seria deixar o site ainda mais intuitivo para não perder esses clientes.

<img src="img/O cliente faz o orçamento.png"><br><br>

## Indicadores de Desempenho

Os indicadores de desempenho servem para medir se nosso negócio será capaz de atender nossas metas, além de nos fornecer informações para traçar estratégias de negócios para evolução da organização. Inicialmente foram traçados indicadores padrões, porém com o tempo será possível a implantação de novos indicadores a fim de direcionar os processos para obter lucros e rentabilidade para a empresa.
Indicadores específicos voltado a produtividade, qualidade de atendimento, rentabilidade, faturamento, turn over, entre outros. 

<img src="img/Avaliação de Desempenho.jpg"><br><br>
 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir que os usuários se cadastrem usando e-mail, senha ou conta Google existente. | ALTA | 
|RF-002| O aplicativo deve fornecer aos usuários cadastrados uma tela de login.    | ALTA |
|RF-003| O aplicativo deve enviar notificações push para atualizar os usuários.    | MÉDIA |
|RF-004| O aplicativo deve permitir que os usuários editem seus perfis, incluindo nome, foto, informações pessoais e detalhes médicos.   | MÉDIA |
|RF-005| O aplicativo deve ter uma “tab bar” que apresente todas as suas funcionalidades ao usuário (login, perfil de usuário, notificações, configurações, favoritos, contato, etc).    | MÉDIA |
|RF-006| O aplicativo deve conceder aos usuários uma seção de contato direto com os cuidadores, onde podem enviar mensagens de texto ou anexar fotos digitalizadas de receitas.    | MÉDIA |
|RF-007| O aplicativo deve disponibilizar um canal de suporte para que os usuários possam entrar em contato em caso de dúvidas, problemas ou assistência adicional.    | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser compatível com os sistemas Android e IOS em suas mais recentes versões.  | ALTA | 
|RNF-002| O aplicativo deve ser executado sem problemas em diferentes tamanhos de tela e resoluções.  |  ALTA | 
|RNF-003| O aplicativo deve fornecer fontes e  elementos de interface com tamanho suficiente para garantir a legibilidade em dispositivos móveis.  | ALTA | 
|RNF-004| O aplicativo deve ser funcional tanto em conexões Wi-Fi quanto em redes móveis.  |  MÉDIA | 
|RNF-005| O aplicativo deve processar requisições do usuário em no máximo 5 segundos. | BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 04/12/2023.  |
|RE-02| O aplicativo disponibilizará apenas o idioma PT-BR.         |
|RE-03| O aplicativo não será publicado em nenhuma plataforma digital (Google Play, App Store, etc).  |
|RE-04| Não será desenvolvido um back-end para o aplicativo.       |


## Diagrama de Casos de Uso

<img src="img/Diagrama de caso de uso.png"><br><br>


# Matriz de Rastreabilidade

<img src="img/MatrizRastreabilidade.jpeg"><br><br>

| Requisito | Descrição                             | Prioridade | Casos de Uso Relacionados |
|-----------|---------------------------------------|------------|--------------------------|
| RF-01     | Cadastro de Usuários                  | Alta       | UC-01, UC-02             |
| RF-02     | Tela de Login                         | Alta       | UC-01                    |
| RF-03     | Notificações Push                     | Média      | UC-03                    |
| RF-04     | Edição de Perfil                      | Média      | UC-04                    |
| RF-05     | Tab Bar Intuitiva                     | Média      | UC-05                    |
| RF-06     | Comunicação com Cuidadores            | Média      | UC-06                    |
| RF-07     | Anexar Fotos de Receitas              | Alta       | UC-07                    |
| RF-08     | Suporte ao Usuário                    | Média      | UC-08                    |
| RNF-01    | Compatibilidade com Android e iOS    | Alta       | -                        |
| RNF-02    | Tamanho de Tela e Resolução           | Alta       | -                        |
| RNF-03    | Legibilidade de Elementos             | Alta       | -                        |
| RNF-04    | Conexões Wi-Fi e Móveis               | Média      | -                        |
| RE-01     | Prazo de Entrega                      | Alta       | -                        |
| RE-02     | Idioma do Aplicativo                  | Alta       | -                        |
| RE-03     | Não Publicação em Plataformas         | -          | -                        |


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-pmvads-20232-e3-projmovt4-time4-medtime/assets/99758232/4ba64e2a-7aea-4892-8c32-c380a640ee05)


Gráfico de Gantt:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-pmvads-20232-e3-projmovt4-time4-medtime/assets/99758232/5f8f1db6-c1b7-411c-8cef-6dcca124ed9b)

Diagrama:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-pmvads-20232-e3-projmovt4-time4-medtime/assets/99758232/45644fa5-213e-4581-9813-a66b4647b887)

## Gerenciamento de Equipe

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.<br>

A equipe está organizada da seguinte maneira:

- Product Owner: Mateus Curcino<br>
- Scrum Master: Mirian Oliveira<br>
**Equipe de Desenvolvimento Front End**<br>
- Leidirene Marques
- Luana Fernandes
- Raphael Lima
- Vanessa Chaves<br>
**Equipe de Desenvolvimento Back End**<br>
- Lucas Rodrigues


Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas: 

- **Backlog**: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.<br>
- **À fazer**: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.<br>
- **Em andamento**: Quando uma tarefa tiver sido iniciada, ela é movida para cá.<br>
- **Fase de teste**: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana,  revemos essa lista para garantir que tudo saiu perfeito.<br>
- **Concluído**: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.<br>


O quadro kanban atualizado do grupo no Trello está disponível através da URL  [https://trello.com/b/IPkwHZDe/projeto-aplica%C3%A7%C3%A3o-m%C3%B3vel] e é apresentado, no estado atual, na figura abaixo:
<br><br>
<img src="img/trelo.png"><br><br>


## Gestão de Orçamento

A gestão do orçamento é uma das etapas mais importantes do projeto, nesta fase é calculado todos os gastos que terá no decorrer do projeto, além do lucro que se espera ter com o trabalho que está vendendo, no entanto trata-se de um trabalho minucioso e muito preciso, devido a oscilação de preços a cada dia que se passa. Embora trabalhemos com estimativa, a ideia é enxugar o máximo possível para obter lucro sem que falte algo importante a orçar.  

![Orc_Medtime](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-pmvads-20232-e3-projmovt4-time4-medtime/assets/114196258/486a1513-b2de-41e2-a232-09db65fd917e)


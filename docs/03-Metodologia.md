# Metodologia

## Relação de Ambientes de Trabalho

| **Ambiente de Trabalho**                       | **Plataforma**                                                | **Link de Acesso**                                      |
|----------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| **1. Repositório de Código Fonte (Git/Github)** | Git para controle de versão e Github para hospedagem do repositório | [Link do Repositório](https://github.com/seuarquivo/repo) |
| **2. Documentos do Projeto (OneDrive)**         | OneDrive para armazenamento e colaboração em documentos       | [Inserir URL](https://onedrive.live.com/...)           |
| **3. Projeto de Interface e Wireframes (Figma)** | Figma para design de interface e criação de wireframes        | [Inserir URL](https://www.figma.com/...)                |
| **4. Esquema de ER (Excalidraw)**               | Excalidraw para criação de esquemas de diagrama de entidade-relacionamento (ER) | [Excalidraw](https://excalidraw.com/)       |
| **5. Esquema Relacional (Creately)**             | Creately para criação de diagramas de esquema relacional     | [Creately](https://creately.com/pt/home/)               |
| **6. Diagrama de Classe (Creately)**             | Creately para criação de diagramas de classe                 | [Creately](https://creately.com/pt/home/)               |
| **7. Banco de Dados (SQLite no Dbeaver)**        | Dbeaver com o banco de dados SQLite para desenvolvimento e gerenciamento do banco de dados do projeto | N/A                    |
| **8. Mapeamento de Modelagem (Heflo)**           | Heflo para mapeamento de modelagem                           | [Heflo](https://www.heflo.com/pt-br/software-de-modelagem-de-processos-gratuito/) |
| **9. Wireframes (Paint)**                       | Paint para criação de wireframes                             | N/A                                                    |
| **10. 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório. O controle de versão segue as seguintes convenções:
- **Branches:**
   1. `main`: Versão estável já testada do software.
   2. `testing`: Versão em testes do software.
   3. `dev`: Versão de desenvolvimento do software.

-- O Branch Main guarda o histórico oficial das entregas, já o Branch Dev serve como integração entre todos os branches de funcionalidades.
-- O Branch Testing sera criado a partir do Branch Dev ao termino de cada ciclo de entregas e será mesclado com a Main, dando inicio ao proximo ciclo de entregas.


- **Gerência de Issues (Etiquetas):**
   1. `documentation`: Etiqueta para melhorias ou acréscimos à documentação.
   2. `bug`: Etiqueta para indicar que uma funcionalidade encontra-se com problemas.
   3. `Hotfix`: Etiqueta para indicar melhorias.
   4. `feature`: Etiqueta para indicar que uma nova funcionalidade precisa ser introduzida no projeto.

 
-- Cada funcionalidade deve ter seu próprio branch, e ele deve ser criado a partir do Branch Dev. 
-- O Hotfix será usado para corrigir rapidamente algum problema em Main, sendo o unico criado apartir de Main e assim que finalizada a correção ele será mesclado e fechado.
-- Quando uma funcionalidade for concluída, ela é mesclada novamente com o seu branch originario.

Essas convenções ajudam na organização do projeto, permitindo que a equipe acompanhe o progresso das tarefas, identifique problemas e priorize melhorias e novas funcionalidades de maneira eficiente.


## Gerenciamento de Projeto

### Divisão de Papéis

A equipe está organizada da seguinte maneira:

**Equipe de Gerenciamento**
- Product Owner: Mateus Curcino<br>
- Scrum Master: Mirian Oliveira<br>
  
**Equipe de Desenvolvimento Front End**
- Leidirene Marques
- Luana Fernandes
- Raphael Lima
- Vanessa Chaves<br>
  
**Equipe de Desenvolvimento Back End**
- Lucas Rodrigues

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas: 

- **Backlog**: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.<br>
- **À fazer**: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.<br>
- **Em andamento**: Quando uma tarefa tiver sido iniciada, ela é movida para cá.<br>
- **Fase de teste**: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana,  revemos essa lista para garantir que tudo saiu perfeito.<br>
- **Concluído**: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.<br>


O quadro kanban atualizado do grupo no Trello está disponível através da URL  [https://trello.com/b/IPkwHZDe/projeto-aplica%C3%A7%C3%A3o-m%C3%B3vel] e é apresentado, no estado atual, na figura abaixo:
<br><br>
<img src="img/trelo.png"><br><br>


### Ferramentas

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada abaixo.  

* **Repositório de código fonte**: [Github](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t4-pmvads-20232-e3-projmovt4-time4-medtime/blob/main/docs/03-Metodologia.md)
* **Documentos do projeto**: [One Drive](https://sgapucminasbr-my.sharepoint.com/:w:/r/personal/1402443_sga_pucminas_br/_layouts/15/Doc.aspx?sourcedoc=%7B4246C33D-4044-4EFF-9526-C055F7A6BD38%7D&file=Projeto_3%C2%B0%20semestre.docx&action=default&mobileredirect=true&DefaultItemOpen=1&login_hint=1402443%40sga.pucminas.br&ct=1693362696557&wdOrigin=OFFICECOM-WEB.MAIN.REC&cid=1187fd4b-fdf7-4660-95a6-12722807eefc&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=429b0eac-9e10-4b1a-86d9-e1afef0edcd9)
* **Projeto de Interface e  Wireframes**: [Figma](https://www.figma.com/file/6Ww5bZfDqdtbH59JtEdNZ3/MedTime?type=design&node-id=0-1&mode=design&t=iFydD4pIOkx4MvRn-0)
* **Gerenciamento do Projeto**: [Trello](https://trello.com/b/IPkwHZDe/projeto-aplica%C3%A7%C3%A3o-m%C3%B3vel)

A documentação se encontra no Github, ferramente de fácil acesso à toda equipe. A ferramenta de comunicação utilizada permite a equipe verificar quais etapas foram concluidas e quais precisam fazer, além de permitir verificar se a equipe está se desenvolvendo de forma conjunta.
# Arquitetura da Solução

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes
<br>
<img src="img/Diagrama de classe.png"><br>

## Modelo ER
<br>
<img src="img/Modelo ER.png"><br>

## Esquema Relacional
<br>
<img src="img/Esquema relacional.png"><br>

## Modelo Físico

Arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados incluso dentro da pasta src\bd. <br>
Bando de dados: SQLite.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.



## Qualidade de Software

A qualidade de software é uma característica fundamental para garantir que um produto atenda às expectativas dos stakeholders e satisfaça as necessidades dos usuários. No contexto de desenvolvimento de software, a qualidade pode ser definida como o conjunto de características que um produto de software deve possuir para ser considerado eficaz, eficiente e satisfatório em seu uso.

A norma internacional ISO/IEC 25010, que atualiza a ISO/IEC 9126, define oito características de qualidade para produtos de software, cada uma com suas respectivas subcaracterísticas. Essas características e subcaracterísticas são diretrizes valiosas para avaliar e nortear o desenvolvimento de software de alta qualidade.

Para o nosso projeto de software, a equipe optou por focar nas seguintes subcaracterísticas de qualidade, com base na ISO/IEC 25010:

1. **Eficiência de Desempenho:**
   - **Subcaracterística Escolhida:** Tempo de Resposta
   - **Justificação:** O tempo de resposta é crítico para a experiência do usuário, especialmente em aplicativos móveis. Quanto mais rápido o aplicativo responder, melhor será a experiência do usuário.
   - **Métricas:** Medição do tempo médio de resposta do sistema em situações típicas de uso.

2. **Usabilidade:**
   - **Subcaracterística Escolhida:** Facilidade de Aprendizado
   - **Justificação:** Facilitar a aprendizagem do aplicativo é essencial para atrair novos usuários e garantir que eles possam usá-lo com eficácia desde o início.
   - **Métricas:** Taxa de conclusão de tarefas por novos usuários em um período específico.

3. **Confiabilidade:**
   - **Subcaracterística Escolhida:** Tolerância a Falhas
   - **Justificação:** A tolerância a falhas é crucial para garantir que o aplicativo continue funcionando mesmo quando ocorrerem problemas inesperados.
   - **Métricas:** Número de falhas identificadas e tempo médio entre falhas.

4. **Segurança:**
   - **Subcaracterística Escolhida:** Controle de Acesso
   - **Justificação:** O controle de acesso é fundamental para proteger os dados dos usuários e garantir a privacidade.
   - **Métricas:** Número de tentativas de acesso não autorizado detectadas.

5. **Manutenibilidade:**
   - **Subcaracterística Escolhida:** Modularidade
   - **Justificação:** A modularidade facilita a manutenção do código e permite que a equipe de desenvolvimento faça atualizações e correções de maneira mais eficiente.
   - **Métricas:** Número de módulos independentes e acoplamento entre módulos.

6. **Portabilidade:**
   - **Subcaracterística Escolhida:** Adaptabilidade
   - **Justificação:** A adaptabilidade é importante para garantir que o aplicativo possa ser facilmente adaptado a diferentes ambientes e dispositivos.
   - **Métricas:** Número de plataformas suportadas e facilidade de migração entre plataformas.

Essas subcaracterísticas foram escolhidas pela equipe com base na relevância para o projeto e na prioridade de atender às necessidades dos usuários. As métricas correspondentes serão monitoradas durante o desenvolvimento e testes para garantir que essas subcaracterísticas de qualidade sejam atendidas de maneira satisfatória no produto final.


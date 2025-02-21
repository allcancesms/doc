<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Relatórios

<AsideArticle/>

## Relatório analítico

Este relatório permite você obter dados das mensagens disparadas. Com os filtros de pesquisa, de número de telefone, mensagem e até mesmo cliente, você consegue obter os dados para analisar o desempenho das campanhas.

- No menu lateral clique em "Relatório" depois em "Analítico"
- Na página que vai abrir vamos preencher o formulário, começando por selecionar o tipo de serviço (SMS, WhatsApp ou Torpedo)

  ![Captura de tela](/img/tutorial/tela-relatorio-an.png)
  
- Depois se desejar filtrar por nome do cliente, digite o nome do cliente e os clientes que corresponderem serão listados, selecione um
- No campo de status, também opcional, você seleciona o status da mensagem
- Clique no botão "Busca avançada" para definir outros parâmetros de busca
- Mais campos do formulário irão aparecer. Vamos começar alterando o intervalo de tempo do período que queremos pesquisar. Por padrão, os dias são os mesmos. Clique nos campos de período e, no primeiro, defina uma data de início e no segundo, a data de fim.

  ![Captura de tela](/img/tutorial/busca-avancada.png)

- O próximo campo permite buscar com um número de telefone e o posterior, por mensagem. Você pode preenchê-los, se desejar.
- Parâmetros informados, clique em "Buscar" e os resultados serão listados. Se não houver nenhum resultado, a mensagem "Nenhum item encontrado na busca" será exibida
  
  ![Captura de tela](/img/tutorial/resultados-an.png)

## Relatório sintético

O relatório sintético é um extrato de uso dos nossos serviços, quantas mensagens foram solicitadas, quantas foram enviadas, quantas falharam, receberam respostas etc. 

- No menu lateral clique em "Relatório" depois em "Sintético"
  
  ![Captura de tela](/img/tutorial/resultados-serv.png)

- Primeiro selecione um tipo de serviço (SMS, WhatsApp ou Torpedo)
- Depois escolha o cliente (opcional)
- Em período, selecione uma data de início e uma de fim como intervalo de busca
- E por último, o valor total já investido (opcional)
- Clique em "Buscar" e os resultados serão listados se existirem. Se não houver nenhum resultado, a mensagem "Nenhum item encontrado na busca" será exibida

  ![Captura de tela](/img/tutorial/resultados-por-serv.png)

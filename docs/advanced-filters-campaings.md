<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from "./components/AsideArticle.vue";
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Obtendo métricas importantes com o relatório de campanha

<AsideArticle/>

Acompanhar os resultados de uma campanha é essencial para entender o engajamento do público e ajustar estratégias. Com
esses dados, é possível otimizar a comunicação, aumentar a taxa de conversão e melhorar o retorno sobre o investimento.
A nossa funcionalidade de relatório de campanha entrega dados importantes para os seus disparos.

## O que é?

O relatório de campanhas é uma ferramenta disponível para as campanhas criadas no mês. Através dele, você obtém:

- O percentual de entrega das mensagens.
- A quantidade de números válidos (para que a mensagem foi enviada).
- A quantidade de respostas e números enviados.
- As respostas e a relação de interação com os links monitorados.

## Tirando um relatório

O relatório é retirado através da lista de campanhas (acesse através do menu lateral "Campanha", depois clique em "
Lista"). Com as campanhas na tela, escolha uma para tirar o relatório.

- Na campanha escolhida, clique em "Relatório".
- Um gráfico de pizza com as métricas de entrega aparecerá na tela. Aí estão alguns dados importantes: data e horário do
  início, envio e fim do disparo; a quantidade de números de destinos, números válidos, números para que a mensagem foi
  enviada e a quantidade de respostas.
  ![Captura de tela do gráfico de pizza](/img/tutorial/pizza-data.png)
- Ao clicar no botão "Gerar relatório", um arquivo no formato .xslx (para Excel) está criado e baixado. No arquivo, é
  listado os dados de data de envio, data de entrega, número de telefone, o status do envio, a mensagem, operadora,
  dentre outros:

  | Data de Envio       | Data de Entrega     | Número      | Status           | Descrição                    | Mensagem                                  | Operadora | Tipo  |
  |---------------------|---------------------|-------------|------------------|------------------------------|-------------------------------------------|-----------|-------|
  | 14/02/2025 17:54:40 | 14/02/2025 17:55:35 | 31999998888 | Entregue Celular | Message delivered to handset | Mensagem... <https://allcancesms.com.br/> | VIVO      | Móvel |

- Clicando no botão "Mensagens", você obtém um [extrato das mensagens enviadas](#extrato-de-mensagens), [extrato de rastreamento de clicks](#tracker-rastreamento-de-clicks) e [interação](#respostas-as-mensagens) detalhado. Continue a ler.

## Extrato de mensagens

> [!NOTE]
> Para chegar até esta parte do relatório, acesse o menu lateral, clique em "Campanha" e depois em "Lista". Filtre as campanhas e localize a campanha que deseja ver os envios. Depois clique no botão "Relatório" e por fim no botão "Mensagens".

![Captura de tela do painel, com o modal de relatório aberto](/img/tutorial/send-extract.png)

E as mensagens disparadas são listadas. Para cada mensagem, o status dela e o número de telefone do destinatário também são exibidos.  

## Respostas às mensagens

> [!NOTE]
> Para chegar até esta parte do relatório, acesse o menu lateral, clique em "Campanha" e depois em "Lista". Filtre as campanhas e localize a campanha que deseja ver os envios. Depois clique no botão "Relatório" e por fim no botão "Mensagens".

Os disparos das mensagens ser respondidos. Isso vale para todos os serviços. Do SMS ao WhatsApp. Através da funcionalidade de respostas, você consegue criar um canal de comunicação com o cliente.

Para ver as respostas, clique na aba "Respostas".

![Captura de tela do modal, com a aba de "Respostas" aberta](/img/tutorial/replies.png)

As interações são listadas. O Painel permite responder o destinatário através do WhatsApp ou adicionar o número à lista negra. O status da resposta também é exibido: O status é "Pendente" enquanto o botão que direciona para o WhatsApp não for clicado e "Respondido", quando for.

![Captura de tela com campanha com o status de "respondido"](/img/tutorial/replies-returned.png)

## Tracker - rastreamento de clicks

Conheça a funcionalidade de rastrear links, [clicando aqui](/trackers-links). Para ver o tutorial de como tirar o relatório de clicks dos links rastreados, [clique aqui](/trackers-links#onde-eu-vejo-o-desempenho-e-os-clicks-no-link-rastreado). 
<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from "./components/AsideArticle.vue";
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Rastreador de Links

<AsideArticle/>

## O que é e como funciona um rastreador de links?

A funcionalidade permite monitorar e registrar as interações dos usuários com os disparos de SMS, garantindo uma análise
detalhada do engajamento. Para isso, a URL original é mascarada e redirecionada por meio do nosso domínio,
proporcionando maior controle sobre os acessos e preservando a identidade dos links enviados.

Com essa solução, é possível acompanhar métricas essenciais, como taxa de cliques e comportamento dos destinatários,
otimizando campanhas e estratégias de comunicação de forma precisa e segura.

## Como usar o rastreador de links?

A funcionalidade está disponível para as campanhas com o serviço de SMS OTP. Na etapa 3, em que a mensagem é definida,
você incluir o link na corpo da mensagem e depois marca a caixa de seleção "Rastrear links da mensagem".

![Captura de tela da etapa 3 - mensagem, com ênfase na seleção da opção "Rastrear links da mensagem"](/img/tutorial/tracker-link.png)

Para o destinatário a mensagem aparece assim:

![Captura de tela de mensagem SMS](/img/tutorial/message-link.png)

## Onde eu vejo o desempenho e a taxa de clicks do link rastreado?

Você pode ver quais dos seus destinatários clicaram no link rastreado através do relatório da campanha. Para chegar até
lá é através do menu Campanha:

- Depois **clique em Lista**.
- Localize a campanha.
- Clique no **botão Relatório**.
- No popup que irá se abrir, clique em **Mensagens**
- E depois, clique na aba **Trackers**
- E você verá uma lista com os destinatários de clicaram no link.

![Captura de tela do modal de relatório de campanha](/img/tutorial/tracker-link.png)

Na coluna de data está o dia e horário que o destinatário acessou o link; na coluna telefone, o número de telefone que a
mensagem foi enviada; na coluna destino, o link que originalmente foi definido na mensagem e na última coluna, "Ação"
tem um botão que ao ser clicado, redireciona para que você envie uma mensagem através do Whatsapp do número do
destinatário.
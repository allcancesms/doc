<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Torpedo Interativo

<AsideArticle/>

## O que é?

O disparo de torpedos interativos é uma estratégia poderosa para engajar o seu público de forma rápida e eficaz. Com essa funcionalidade, você pode enviar mensagens em formas de chamadas, permitindo interações diretas e instantâneas com os clientes. É possível criar fluxos e integrar com webhooks.

## Como as chamadas são feitas?

Usamos nossos números para ligar para o destinatário. Ele interage com o torpedo e a resposta pode ser monitorada no relatório.

## Como criar uma mensagem de torpedo a partir de um modelo anterior?

Se você tem dúvidas sobre como criar uma campanha, [siga o nosso tutorial](/create-campaign#como-criar-uma-campanha). Na
terceira etapa, quando se escreve a mensagem siga os passos abaixo.

É possível reutilizar a mensagem de uma campanha de torpedo que já foi feita. Para isso, marque a caixa de seleção em frente à "Selecionar modelo" e no campo que vai abrir, selecione o torpedo anterior. O fluxo vai ser recuperado e você pode alterar o que desejar.

![Captura de tela](/img/tutorial/selecionar-modelo-anterior.png)

## Criando mensagem de torpedo do zero

Se você tem dúvidas sobre como criar uma campanha, [siga o nosso tutorial](/create-campaign#como-criar-uma-campanha). Na
terceira etapa, quando se escreve a mensagem siga os passos abaixo.

- Deixe desmarcada a caixa de seleção de "Selecionar modelo"
- Clique no botão com o ícone de um clipe e escrito "Áudio não entendi" e selecione um arquivo de áudio MP3. Este áudio será reproduzido quando o destinatário disser algo que o sistema não entender.

  ![Captura de tela](/img/tutorial/selecao-audio.png)

- Quando você tiver selecionado e depois do upload, o aúdio vai ser carregado e você pode ouvir. Se você quiser alterá-lo basta clicar novamente no botão com o ícone do clipe.

  ![Captura de tela](/img/tutorial/audio-1-escolhido.png)

### FLuxo do torpedo

- Agora vamos a **parte do fluxo**. Primeiro vamos escolher o áudio inicial, aquele que o destinatário vai ouvir quando atender a ligação. Defina um nome (identificador) para ele. Depois selecione o arquivo de áudio MP3, clicando no botão com ícone de clipe "Selecionar áudio" e fazendo upload do arquivo. Se você tiver um endpoint, informe o link do webhook e o 'callerid'. **Se você não tiver, deixe esses campos vazios**.

  ![Captura de tela](/img/tutorial/audio-inicial-informado.png)

- Clique em "Nova interação" para definirmos o primeiro gatilho. Os áudios definidos nesta parte do fluxo só serão tocados quando um dos gatilhos forem identificados. 
- No campo "Gatilhos (separado por vírgula)" vamos definir os termos que quando o usuário pode dizer quando houver interesse numa compra:
  ```
  quero comprar; tenho interesse; sim; comprar; compra
  ```
- No campo "Identificador para relatório" defina um nome para identificar esse gatilho
- Depois selecione o áudio MP3
- E informe a URL do webhook se você tiver. Se não, deixe o campo vazio

  ![Captura de tela](/img/tutorial/audio-2-escolhido.png)

- Clique em "Nova integração" para definirmos outro gatilho. Assim como no outro, neste gatilho vamos definir os termos que irá disparar; o nome do gatilho; o aúdio MP3 e a URL do webhook (se possuir)

  ![Captura de tela](/img/tutorial/audio-3-escolhido.png)

- Você pode remover os gatilhos, clicando no botão "Excluir" ou alterar os áudios, clicando no botão com ícone de clipe "Selecionar áudio"

> [!NOTE]
> **Não é obrigatório ter um gatilho no fluxo**, você pode apenas definir o áudio inicial.  

[Continue a criação da campanha, no passo 4 - Confirmação](/create-campaign#passo-4-confirmacao).

## Próximos passos

[Conheça o nosso serviço de disparos pelo WhatsApp](/whatsapp-campaigns)  
[Conheça também o nosso serviço de disparos SMS](/sms-campaings)
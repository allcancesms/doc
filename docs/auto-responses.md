<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Automatizando respostas

Configure respostas automáticas para agilizar atendimentos e melhorar a interação com os contatos. Defina termos e
palavras-chave para ativar respostas personalizadas e crie fluxos automatizados para confirmar recebimentos, fornecer
informações ou coletar dados sem intervenção manual.

<AsideArticle/>

## Conectando uma conta de WhatsApp

- No menu lateral, clique em "Auto resposta".
- A página de auto respostas, com duas abas "Conexão" e "Serviços" vai aparecer. Clique na em "Conexão" para a aba ser
  exibida
- Um QR Code para que o sistema consiga responder através do seu WhatsApp será criado

  ![Captura de tela](/img/tutorial/auto-respostas-qr.png)

- Abra o aplicativo do WhatsApp no seu telefone
- Clique nos três pontinhos na aba de "Conversas" e depois em "Dispositivos conectados"
- Clique no botão "Conectar dispositivo" e escaneie o QR Code da página
- De volta ao Painel, se a conexão tiver dado certo esta mensagem aparecerá

  ![Captura de tela](/img/tutorial/conectado.png)

  > [!NOTE]
  > Você pode desconectar o acesso a qualquer momento clicando no botão "Desconectar" na página de auto respostas.

## Definindo os gatilhos e como serão respondidos

- Na aba "Serviços", clique no botão "Adicionar serviço"
- No popup que vai abrir vamos definir o gatilho do serviço, a forma como ele virá e como será respondido, além, é
  claro, da mensagem de resposta

  ![Captura de tela](/img/tutorial/modal-add-servico.png)

- Primeiro, escolha qual será o serviço de onde o gatilho virá
- Depois, escolha a saída (a forma como ele será respondido), selecionando uma das opções
- No campo "Gatilhos" digite os gatilhos que você quer que sejam monitorados
- Agora é hora de escrever a mensagem de resposta. Se a forma de saída que você escolheu for Whatsapp, é possível
  personalizar o nome do perfil, a foto e o recado. Para SMS esses recursos não estão disponível.

  ![Captura de tela](/img/tutorial/mensagem-gatilho.png)

- É possível formatar a mensagem, como **negrito**, <s>tachado</s> e emojis!
    - Para aplicar o negrito é só clicar no botão "B" e escrever o texto entre asteríscos `*Texto vai aqui*`.
    - Para tachado, você pode cliar no botão S e escrever o texto entre `~Texto vai aqui~`.
    - Já para adicionar emojis é só clicar na carinha feliz 🙂 e um popup com os emojis aparecerá

      > [!NOTE]
      > Os emojis não serão enviados nas mensagens SMS. Apenas nas mensagens de WhastApp

      ![Captura de tela](/img/tutorial/mensagem-emoji.png)

- Tudo definido, clique em "Salvar". Se tiver dado tudo certo aparecerá uma mensagem de sucesso. O gatilho aparecerá na
  lista de serviços.

  ![Captura de tela](/img/tutorial/servico-adicionado.png)

  ![Captura de tela](/img/tutorial/lista-servicos.png)

## Editando um gatilho

Para editar um gatilho é só clicar no botão "Editar" de um dos gatilhos listados na lista de serviços. Aparecerá um
popup e você pode alterar as configurações, o gatilho e a mensagem que será enviada como resposta.

![Captura de tela](/img/tutorial/popup-edicao-gatilho.png)

Depois é só clicar em "Salvar". Se tiver dado tudo certo, uma mensagem de sucesso aparecerá na tela.

## Excluindo um gatilho

Para editar um gatilho é só clicar no botão "Excluir" de um dos gatilhos listados na lista de serviços. Depois é só confirmar a exclusão nos popups irá aparecer. 
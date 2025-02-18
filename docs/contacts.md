<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Grupos de contato

Essa ferramenta permite você criar e salvar grupos de contato para facilitar o processo de criação de campanhas e
disparo de mensagens.

<AsideArticle/>

## O que é um grupo de contato?

É um conjunto de vários números de telefone que você usar para disparar mensagens. Um grupo de contato precisa de ter
pelo menos um número para existir.

## Como criar um grupo?

- No menu lateral do Painel, clique em "Contatos", depois em "Grupos"
  ![Captura de tela do menu lateral, com destaque para o botão "Grupos"](/img/tutorial/contact-group.png)
- Agora, na página clique no botão "Adicionar grupo"
- No popup que vai abrir, defina primeiro o nome do grupo. Ele será usado para identificar o grupo no Painel
  ![Captura de tela do popup](/img/tutorial/popup-new-group.png)

- Agora é hora de adicionar os números de telefone ao grupo. Eles podem ser adicionados de duas formas: através do
  upload de um arquivo `.xls` ou `.txt`

  ### Adicionando números via upload de arquivos
    - No popup, marque sim para "Upload de arquivo TXT ou CSV" e depois no botão "Procurar" ou "Escolher arquivo" (varia
      de navegador para navegador)
      ![Captura de tela do popup com a importação via upload selecionada](/img/tutorial/upload-selected-group.png)
    - Selecione o arquivo para o upload e confirme
    - De volta ao popup clique em "Salvar"
    - Se der tudo certo, uma mensagem aparecerá na tela confirmando o sucesso no upload e o grupo criado aparecerá listado
      na página

  ### Adicionando números manualmente
    - Também é possível incluir números digitando ou copiando e colando na caixa de texto do popup.
    - No popup, marque sim para "Digitar ou colar"
    - E digite ou cole os números. Cada linha pode ter apenas um número de telefone. Conforme você digita, a quantidade
      de números localizados aparece na parte e baixo do popup
      ![Captura de tela do popup de adicionar números](/img/tutorial/group-add-text.png)
    - Números inseridos manualmente, é só clicar em "Salvar"
    - Se der tudo certo, uma mensagem aparecerá na tela confirmando o sucesso no upload e o grupo criado aparecerá listado
      na página

## Editando um grupo

...

### Adicionando números

...

### Removendo números

...

## Apagando um grupo

## Onde vou usar isso?

Na [criação de uma campanha](/create-campaing)!

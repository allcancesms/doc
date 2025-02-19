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
  upload de um arquivo `.xlsx`, `.xls` ou `.txt`

  ### Adicionando números via upload de arquivos
    - No popup, marque sim para "Upload de arquivo TXT ou CSV" e depois no botão "Procurar" ou "Escolher arquivo" (varia
      de navegador para navegador)
      ![Captura de tela do popup com a importação via upload selecionada](/img/tutorial/upload-selected-group.png)
    - Selecione o arquivo para o upload e confirme
    - De volta ao popup clique em "Salvar"
    - Se der tudo certo, uma mensagem aparecerá na tela confirmando o sucesso no upload e o grupo criado aparecerá
      listado
      na página

  ### Adicionando números manualmente
    - Também é possível incluir números digitando ou copiando e colando na caixa de texto do popup.
    - No popup, marque sim para "Digitar ou colar"
    - E digite ou cole os números. Cada linha pode ter apenas um número de telefone. Conforme você digita, a quantidade
      de números localizados aparece na parte e baixo do popup
      ![Captura de tela do popup de adicionar números](/img/tutorial/group-add-text.png)
    - Números inseridos manualmente, é só clicar em "Salvar"
    - Se der tudo certo, uma mensagem aparecerá na tela confirmando o sucesso no upload e o grupo criado aparecerá
      listado
      na página

## Editando um grupo

Para editar um grupo de contato basta clicar no botão com ícone de um lápis amarelo no card do grupo na página de grupos
de contato.

![Captura de tela com destaque para o botão de edição](/img/tutorial/edit-group.png)

O popup de edição irá abrir e através da aba "Geral" é possível alterar o nome do grupo e adicionar novos números, por
upload de arquivo ou digitando e colando os números. Basta que você altere os dados ou insira novos e depois clique em "
Salvar".

![Popup de edição aberto na aba "Geral"](/img/tutorial/geral-popup-group.png)

Na aba "Números", você consegue gerenciar os números já cadastrados no grupo. Para saber
como [alterar ou remover números, clique aqui](#alterando-e-removendo-numeros).

### Adicionando números

### Adicionando números via upload de arquivos

- No popup, marque sim para "Upload de arquivo TXT ou CSV" e depois no botão "Procurar" ou "Escolher arquivo" (varia de
  navegador para navegador)
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

## Alterando e removendo números

Na aba "Números" do popup de edição, você consegue remover um ou vários números de uma só vez e também alterar os
números que já estão no grupo, caso algum esteja errado.

## Excluindo um ou vários números

Para excluir um número basta clicar no botão com ícone de lixeira na frente do número de telefone e depois confirmar a exclusão.

![Captura de tela com o botão de exclusão do número em destaque](/img/tutorial/delete-number-popup.png)

Já para excluir vários números de uma vez, é só selecioná-los, marcando a caixa de seleção na frente do número. Depois, clique em "Excluir marcados" e confirme a exclusão.

![Captura de tela do popup de edição](/img/tutorial/select-multiple-numbers.png)

Feitas as exclusões, clique no botão "Salvar", no fim do popup para registrar as alterações.

![Botão salvar em destaque](/img/tutorial/btn-cancel-edit-group.png)

## Alterando os números cadastrados

Na aba de "Números" do popup de edição, serão listados todos os números cadastrados naquele grupo. Você pode alterá-los conforme for necessário. Para isso basta clicar sobre o número e alterá-lo, definindo um novo número para ele.

![Botão salvar em destaque](/img/tutorial/btn-cancel-edit-group.png)

Feitas as alterações, clique no botão "Salvar", no fim do popup para registrar.

## Apagando um ou vários grupos

![Captura com botão de exclusão em destaque](/img/tutorial/btn-trash-group.png)

Para apagar um grupo, basta clicar no botão com ícone de uma lixeira em vermelho, na página de grupos de contato. Depois
é só confirmar a exclusão.

![Captura de tela do popup de confirmação de exclusão](/img/tutorial/confirm-group.png)

Para apagar vários grupos de uma vez, é só selecionar os grupos, marcando a caixa de seleção no início de cada linha.
Depois clique no botão "Excluir marcados" e confirmar a exclusão.

![Captura de tela com destaque para o botão de excluir vários itens](/img/tutorial/btn-delete-all-groups.png)

![Captura de tela do popup de confirmação de exclusão](/img/tutorial/confirm-delete-all-group.png)

## Onde vou usar isso?

Na [criação de uma campanha](/create-campaign#passo-2-informar-os-destinatarios)!

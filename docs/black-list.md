<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Lista Negra

Gerenciar a comunicação com os seus clientes de forma eficiente é essencial para o sucesso de qualquer estratégia de
SMS. No entanto, pode haver situações em que seja necessário bloquear determinados números para evitar envios
indesejados,
atender a pedidos de descadastramento ou garantir conformidade com regulamentações.

Neste tutorial, você aprenderá como utilizar o recurso de Lista Negra da nossa plataforma de disparo de SMS. Esse
recurso permite que você bloqueie números específicos, garantindo que eles não recebam mais mensagens da sua conta.
Vamos explorar como adicionar, gerenciar e remover números da lista negra para que você tenha total controle sobre seus
envios.

  <AsideArticle/>

## O que é a lista negra?

É uma lista de números de telefone que não receberão os disparos das campanhas que forem feitas.

## Como adicionar números à lista?

- No painel, clique em "Lista Negra" no menu lateral
  ![Captura de tela do painel](/img/tutorial/panel-black-list.png)
- Na página que vai abrir, clique em "Adicionar números"
- Um popup será aberto. Por aqui, você pode adicionar números de duas formas: através do upload de um arquivo `.txt` ou
  `.csv` ou digitando e colando o número e o motivo.
  ### Adicionando números via upload de arquivos
  Para adicionar números à lista negra dessa forma, é necessário que nos arquivos tenham os números de telefone e os
  respetivos motivos para a adição.
  ```csv
  telefone;motivo
  31999998888;Solicitação do cliente
  ```
  ```txt
  31999998888; Solicitação do cliente
  31999997777; Falta de respeito
  ```
  ![Captura de tela da lista de uploads](/img/tutorial/black-list-upload-file.png)
    - No popup, marque sim para "Upload de arquivo TXT ou CSV" e depois no botão "Procurar" ou "Escolher arquivo" (varia
      de navegador para navegador)
    - Selecione o arquivo para o upload e confirme
    - De volta ao popup clique em "Salvar"
    - Se tudo certo, uma mensagem aparecerá na tela confirmando o sucesso no upload e os números aparecerão na lista:
      ![Lista de números de telefones da lista negra](/img/tutorial/black-list-list-upload.png)
  ### Adicionando números manualmente
  Também é possível incluir números digitando ou copiando e colando na caixa de texto do popup.
  ![Captura de tela do popup de adicionar números](/img/tutorial/black-list-text.png)
    - No popup, marque sim para "Digitar ou colar"
    - E digite ou cole os números seguido de ponto e vírgula `;` e o motivo da adição à lista. Cada linha pode ter
      apenas um número de telefone
      ```
      31999998888; Solicitação do cliente
      31999997777; Falta de respeito
      ```
    - Depois clique em "Salvar"
    - Se tudo certo, uma mensagem aparecerá na tela confirmando o sucesso no upload e os números aparecerão na lista

## Excluindo um ou mais números

Na página de lista negra localize o número ou os números que você deseja excluir. Se for apenas um, basta clicar no
botão com ícone de lixeira, em vermelho, no canto direito e depois confirmar.

![Captura de tela da página de lista de números da lista negra](/img/tutorial/btn-trash-item-black-list.png)

![Popup de confirmação de exclusão de um número](/img/tutorial/img.png)

Para excluir vários números de uma só vez, selecione os números marcando a caixa no início da linha do registro.

![Itens selecionados para exclusão múltipla](/img/tutorial/selection-items-bl.png)

Números selecionados, basta clicar no botão "Excluir marcados" e depois confirmar a exclusão.

![Botão "Excluir marcados"](/img/tutorial/btn-delete-all.png)

## Localizando um número

Para achar um número em específico na lista negra, é só clicar no botão "Filtrar Dados" e no campo do popup que vai
abrir, digitar o número desejado.

![Botão "Filtrar dados"](/img/tutorial/filter-data.png)

![Pop-up de pesquisa de número de telefone](/img/tutorial/filter-data-box.png)

Número digitado, clique em "Filtrar" e aguarde alguns instantes até que a busca seja concluída. Durante esse tempo, o
botão "Filtrar" ficará esmaecido. Quando o botão voltar ao normal é só clicar fora do popup e você verá o resultado da busca:

![Resultado da busca usando o filtro de números](/img/tutorial/list-results-filter-bl.png)

## Adicionando número através das respostas dos destinatários

Uma das funcionalidades que oferecemos é a interação dos números que receberam a mensagem nos disparos. Através do relatório de campanha você consegue visualizar a interação dos usuários e também adicionar um número à lista negra.

- Para isso, é preciso primeiro [localizar uma campanha](/search-campaigns) 
- Depois, na página de campanhas clique no botão "Relatório" da campanha
  ![Botão "Relatório" da campanha em destaque](/img/tutorial/btn-retail.png)
- No popup que vai abrir, clique na aba "Respostas"
  ![Captura de tela com o botão para a aba "Respostas" em destaque](/img/tutorial/replies-emphasis.png)
- E as interações serão mostradas. Existem dois botões de ações, o último é o que adiciona o número à lista negra. Para ele executar essa ação basta clicar nele e se der tudo certo, aparecerá a confirmação:
  ![Popup de sucesso ao adicionar um número à lista negra](/img/tutorial/success-add-bl.png)

Você pode [remover este número](#excluindo-um-ou-mais-numeros) a qualquer momento através da página de lista negra. Siga o [nosso tutorial](#excluindo-um-ou-mais-numeros) e aprenda a fazer isso!

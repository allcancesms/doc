<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from './components/AsideArticle.vue';
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Rastreadores

<AsideArticle/>

## Como funciona?

Com os rastreadores você consegue criar campanhas de maneira mais prática, enviando uma ou mais mensagens de uma só vez
para um, ou vários números de telefone. Você também pode programar esses envios, para ocorrer num intervalo X de tempo.

## Criando um ou vários rastreadores

No menu lateral clique em "Rastreadores", depois em "Enviar comandos". Na página de rastreadores, clique no botão "
Novo".

![Tela de Rastreadores](/img/tutorial/tela-rastreador.png)

### Criando por um arquivo do Excel

- Clique no botão "Importar arquivo"
- Depois clique em "Baixe aqui o modelo de arquivo"

  ![Captura de tela](/img/tutorial/btn-baixe-modelo.png)

- Abra o arquivo baixado para editá-lo
- No arquivo modelo existem 3 rastreadores e para cada um, 4 mensagens (A1 à A4, B1 à B4, C1 à C4)

  |Grupo| | | | | 
  |-|-|-|-|-|
  |Rastreadores 1|A1|A2|A3|A4|
  |Rastreadores 2|B1|B2|B3|B4|
  |Rastreadores 3|C1|C2|C3|C4|

    - Na primeira coluna, o nome do rastreador é definido. O primeiro chamará Rastreador 1, o segundo Rastreador 2 e o
      último, Rastreador 3.
    - A partir da segunda coluna são definidas as mensagens para cada rastreador.

- Altere as mensagens e os nomes dos rastreadores se desejar

  | Grupo          |                            |                            |                            | 
  |----------------|----------------------------|----------------------------|----------------------------|
  | Rastreador 1   | Mensagem 1 do rastreador 1 | Mensagem 2 do rastreador 1 | Mensagem 3 do rastreador 1 |
  | Rastreador 2   | Mensagem 1 do rastreador 2 | Mensagem 2 do rastreador 2 | Mensagem 3 do rastreador 2 |
  | Rastreador 3   | Mensagem 1 do rastreador 3 | Mensagem 2 do rastreador 3 | Mensagem 3 do rastreador 3 |

- De volta ao Painel, clique em "Procurar" e selecione o arquivo com a planilha. Depois clique em "Salvar"
- Se tudo der certo, a mensagem de sucesso na importação aparecerá:

  ![Captura de tela](/img/tutorial/grupo-criado-sucesso.png)

- Pronto! Os rastreadores foram criados!

### Criando manualmente

- Na página de rastreadores, clique no botão "Novo"
- ![Captura de tela](/img/tutorial/tela-rastreador.png)
- No formulário, crie um nome para identificar o rastreador
- Depois, defina as mensagens. Você pode adicionar mais mensagens através do botão "Adicionar" ou remover, através do
  botão com ícone de uma lixeira

  ![Captura de tela](/img/tutorial/form-definir-msg.png)

- Mensagens definidas, é só clicar no botão "Salvar"
- Se tudo der certo, a mensagem de sucesso na importação aparecerá!
- Pronto! O rastreador foi criado.

## Criando uma rotina de disparos

- Na página de rastreadores, escolha um rastreador para criar a rotina.
- Clique no primeiro botão, com um ícone de dois triângulos.

  ![Captura de tela](/img/tutorial/rastreadores-btn-1.png)

- Um popup vai abrir, é através dele que a rotina será criada. Lembre-se que os disparos são feitos por meio da criação
  de uma campanha. Então aqui vamos criar uma campanha.

  ![Captura de tela](/img/tutorial/modal-criar-rotina.png)

- O campo de nome da campanha já vem com uma sugestão do sistema. Você pode alterá-lo se desejar.
- Para adicionar os números de telefone à campanha, escolha entre puxar os números de um grupo já salvo, upload de
  arquivo ou digitar e colar. Basta escolher uma das opções, marcar o seletor da opção e preencher os dados, buscar o
  grupo ou fazer upload de um arquivo.
- Depois, você escolhe se o disparo vai ocorrer agora ou depois. Se for agendar, informe o dia e horário que o disparo
  deve acontecer.
- Na última parte do popup há um resumo da campanha: o serviço disponível para esta forma de envio é
  por [SMS Transacional](/sms-campaigns#sms-transacional); a quantidade de números de telefone que receberão a mensagem
  e a data do disparo.
- Confira os dados e clique em "Salvar" para que a campanha seja criada.

  ![Captura de tela](/img/tutorial/sucesso-rotina-criada.png)

- Se tudo tiver dado certo, esta mensagem de sucesso vai aparecer. Para saber como conferir a campanha
  criada, [clique aqui](/search-campaigns).

## Ver, adicionar, excluir e editar mensagens

O Painel oferece algumas opções para manipular os rastreadores. Você pode ver, adicionar, excluir e editar as
mensagens, [criar uma rotina](#criando-uma-rotina-de-disparos) e excluir um rastreador.

- Na página de rastreadores, escolha um rastreador.
- Clique no segundo botão de ação, de cor cinza-claro, que têm um ícone de lista.

  ![Captura de tela](/img/tutorial/btn-edicao-rastreador.png)

- Um popup vai abrir com as mensagens deste rastreador.

  ![Captura de tela](/img/tutorial/modal-editar-rotina.png)

- Para editar uma mensagem basta alterar o conteúdo dela.
- Para excluir basta clicar no botão com ícone de uma lixeira.
- Para adicionar uma mensagem, clique no botão "Adicionar" e preencha o campo com o conteúdo da mensagem.
- Após feitas as alterações, clique em "Salvar", no fim do popup.

## Alterar o nome do rastreador

- Na página de rastreadores, escolha um rastreador.
- Clique no segundo botão de ação, de cor cinza-claro, que têm um ícone de lista.

  ![Captura de tela](/img/tutorial/btn-edicao-rastreador.png)

- Um popup vai abrir as mensagens e informações do rastreador.

  ![Captura de tela](/img/tutorial/modal-editar-rotina.png)

- Para editar o nome, basta alterá-lo no campo "Grupo". Depois, clique em "Salvar", para que a alteração seja feita.

## Excluir um rastreador

- Na página de rastreadores, escolha um rastreador.
- Clique no terceiro botão de ação, vermelho, que têm um ícone de uma lixeira.
- Um popup vai abrir, basta confirmar a exclusão clicando em "Sim":

  ![Captura de tela](/img/tutorial/confirmacao-exclusao-grupo.png)

- Se tudo der certo, uma mensagem de sucesso aparecerá e o rastreador já não aparecerá mais na lista de rastreadores.
<script setup>
  import NoteComponent from './components/Note.md';
  import AsideArticle from "./components/AsideArticle.vue";
</script>

<div style="margin-bottom: 2rem">
  <NoteComponent/>
</div>

# Localizando uma campanha

<AsideArticle/>

## Passo 1: Acessando a lista de campanhas

> [!NOTE]
> Através dessa ferramenta só é possível visualizar campanhas dos últimos 30 dias. Para localizar campanhas anteriores, use o relátorio.

O nosso painel permite obter métricas avançadas de performance e engajamento dos seus disparos. Para isso, acesse através do menu lateral "Campanha", depois clique em "Lista"

![Tela de campanha, com destaque para o menu lateral e a localização do botão Lista](/img/tutorial/campaigns-list.png)

## Passo 2: Filtrando campanhas

No canto superior direito há o botão "Filtrar dados" que permite acessar a poderosíssima ferramenta de filtros do nosso Portal. **Você pode combinar os filtros ou usar somente um**. 

O primeiro campo do filtro é por nome do documento ou nome do cliente. Conforme você digita um termo, o painel sugere correspondências. Na imagem abaixo, você vê a correspondência para o nome "Gabriel": o CPF do cliente, seguido do nome. 

![Captura de tela do popup de filtros](/img/tutorial/filter-name.png)

O próximo campo para filtrar é o de status. Ao clicar, o Painel oferece as opções de status que uma campanha pode ter. Os principais, são: 

- Em andamento: quando as mensagens são enviadas.
- Cancelada: você optou por cancelar a campanha.
- Finalizado: as mensagens foram enviadas com sucesso.
- Agendada: quando o disparo foi programado.
- Editando: você fez uma edição na campanha durante o status de "Validando".
- Validando: a campanha foi criada e está a ser validada por nós.

![Captura de tela do popup de filtros com ênfase para o campo de status](/img/tutorial/filter-status.png)

No campo de serviços, todos os nossos serviços de disparo de mensagens são listados. Se na sua busca o filtro por serviço for interessante, escolha um serviço. Caso não seja, basta deixar marcado o primeiro 'item' da lista, que é vazio.

Por fim, o último campo é o de período. De todos este é o mais importante, pois é mais fácil localizar uma campanha através da data em que ela foi criada. O primeiro campo é a data de início e o segundo é a data de fim para a pesquisa.

![Captura de tela do popup de filtro por data](/img/tutorial/filter-date.png)

**Filtros definidos, é hora de pesquisar! Clique no botão "Filtrar".** E os resultados que corresponderem aos filtros serão exibidos:

![Captura de tela com os resultados obtidos com os filtros de pesquisa](/img/tutorial/filter-results.png)

## Próximos passos

[Veja o desempenho, respostas e o rastreio de links de uma campanha](/advanced-filters-campaings)  
[Tirando um relatório de campanhas antigas](/search-campaigns)
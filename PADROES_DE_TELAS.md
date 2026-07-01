# Padroes de Telas do Projeto

Use como referencia direta as telas de Mensageria por voz, Canais e Fluxos hibridos ao criar novas telas de dashboard.

- Envolva o conteudo principal em uma unica `.section`, como em `#page-voice-messaging`, `#page-channels` e `#page-hybrid-flows`. Evite criar outro card branco dentro da section para formularios simples.
- Use `.page-header` para titulo, subtitulo e acoes. Reutilize `.page-subtitle`, `.page-actions`, `.btn`, `.modal-input`, `.modal-textarea`, `.search-field`, `.filters-grid`, `.data-table` e `.hybrid-flows-table` antes de criar CSS especifico.
- Todas as tabelas devem ter estado vazio de empatia dentro da propria tabela, abaixo do cabecalho. Use a classe gerada `.table-empty-row` com icone, titulo, descricao e CTA opcional. Esse estado deve aparecer somente quando nao houver linhas reais na tabela ou quando todas forem excluidas; nunca remova as linhas existentes para exibir o estado vazio.
- Para textos especificos por tabela, declare `data-empty-icon`, `data-empty-title`, `data-empty-description`, `data-empty-action-label` e `data-empty-action-target` no elemento `.data-table` ou `<table>`. Sem esses atributos, use o fallback generico do projeto.
- Use os tokens de tipografia definidos em `:root` no `styles.css`: titulos de pagina normalmente usam `var(--md-headline-small)`, titulos de secao usam `var(--md-title-large)` ou `var(--md-title-medium)`, e textos de apoio usam `var(--md-body-medium)`.
- Evite tamanhos fixos grandes como `48px` em telas internas do dashboard. Tamanhos de display devem ficar reservados para paginas publicas ou marketing.
- Mantenha a escala padrao de espacamento: `.content` usa `24px`, `.section` usa `20px`, botoes usam altura minima de `44px`, e campos devem ficar perto de `10px` de raio.
- Em telas de criacao com formularios, prefira largura limitada entre `1120px` e `1180px` com `margin: 0 auto`, em vez de esticar campos por toda a largura da tela.

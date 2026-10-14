# 05. Log de prompts

Registro real da conversa. Cada rodada tem: o que eu pedi, o que a IA entregou, o que eu achei errado ou quis mudar, e como corrigimos.

## Rodada 0. Entendimento da atividade
**Pedi:** "Planeje uma lp, para um trabalho da faculdade. O tema, cores, paletas, refs e stacks serao decidos ao longo da conversa."

## Rodada 1. Tema
**Respondi:** tenho uma ideia, uma vitrine de carrinhos tipo Mini GT, com fotos do mgminis.com só para fins estudantis, contando um pouco da marca.

**IA entregou:** avisou sobre o uso das fotos (crédito, só os carrinhos, sem uso comercial) e perguntou o clima visual.

**Decidi:** Estante de colecionador. Stack ficou por HTML, CSS e JS puros.

## Rodada 2. Plano aprovado
IA montou o plano (estrutura de pastas, seções, paleta inicial, rodadas de revisão). Aprovei.

## Rodada 2b. Escolhas
**Respondi:** "pode implementar as 9 imagens. em questao a lista e paletas, me dê sugestões. as fotos podem subir no git, por favor."

**IA entregou:** 9 carros sugeridos e a decisão de baixar as fotos grandes. Fotos vão para o git.

## Rodada 3. Pesquisa
Consultei a mgminis.com (estrutura, lista de modelos, URLs de imagem) e busquei a história da marca. Resultado em `02-pesquisa-marca.md`
. Achado importante: as fontes divergem sobre o ano de fundação da TSM (2006 ou 2007), e a home do mgminis não tem texto sobre a marca. Foi utilizado somente com template e local para buscar imagens.

## Rodada 4. Fotos (problema e correção)
**O que a IA fez:** baixou as 9 fotos grandes do mgminis.com e abriu cada uma.

**O que deu errado:** as fotos não eram recortes limpos. Vinham com o blister inteiro, pranchas com 5 ângulos e logo da Kaido House. Duas eram inutilizáveis: a Supra (só dentro do blister) e a Silvia S15 (marca d'água do MG Minis por cima e banner do YouTube).

**Correção:** troca da Supra pelo Civic EF Kaido Manga e da Silvia S15 pela S13-R Kaido Drift. Recortes automáticos com Python, que levaram 4 tentativas (sobrou pedaço de blister, cursor do mouse na imagem, legenda de roda, base das rodas cortada). No Fairlady Z o recorte automático apagou partes do capô branco, então usei só o recorte simples.

**Meu olhar:** Trabalhou bem, buscou as fotos, mesmo que com qualidade ruim, mas adiantou um bom lado.

**Pedido meu durante a rodada:** "Se as imagens ficarem pequenas, separe a pasta com as imagens que eu melhoro em outra ia, aumento a qualidade e a proporção (resolução também)". Combinado: eu entrego os arquivos recortados e você melhora fora daqui.

## Rodada 5. Primeira versão e ajuste do celular
**IA entregou:** a v1 da página (hero, estante com 3 prateleiras, ficha em janela, caderno da marca, seção da embalagem). Testada no navegador, sem erros no console.

**Pedi:** "No mobile, diminua um pouco a escala e deixe o site fixo (sem poder ser móvel para os lados)"

**O que a IA fez:** no celular a fonte base passou de 16 px para 14 px, com espaçamentos menores; travou a rolagem lateral (`overflow-x` no html e no body, `touch-action: pan-y pinch-zoom`) e as fotos passaram a ter a altura da própria imagem, para não sobrar papel vazio.

**Como foi conferido:** a janela do navegador não encolheu de verdade, então a IA carregou a página num iframe de 390 px e mediu: nenhum elemento passa da borda e a rolagem lateral fica em 0.

**Meu olhar:** Funcionou perfeitamente, rodou o teste e verificou se estava de acordo.

## Rodada 6. Rodapé profissional
**Pedi (com uma imagem de referência):** "use essa imagem como ref para realizar um footer mais profissional. Coloque informações que você já tem, redes sociais pode colocar o meu LinkedIn, e o resto utilize as infos do site. Pode informar que é para fins estudantis, matéria de front-end, CP5."

**A referência tinha:** barra arredondada sobreposta no topo (campo de e-mail e botão), rodapé escuro com título grande, ícones redondos de redes sociais e 4 colunas de links.

**O que a IA fez:** manteve o desenho da referência, mas com as cores do projeto (madeira escura no fundo, azul das etiquetas na barra, amarelo nos títulos das colunas). Trocou o campo de e-mail por um convite com botão para o LinkedIn, porque um formulário de newsletter não enviaria nada. Colunas: Estante, A marca, O trabalho (fins estudantis, front-end, CP5) e Créditos (fotos, autor, LinkedIn). Só o LinkedIn entrou como rede social, porque foi a única que eu passei.

**Como foi conferido:** abriu no navegador no desktop e num iframe de 390 px. Sem overflow no celular.

## Rodada 7. Imagens melhoradas
**Pedi:** "troque as imagens por essas, são as imagens melhoradas" (pasta com 9 arquivos `carros.png` a `carros9.png`).

**O que a IA fez:** os nomes eram genéricos, então olhou cada imagem para identificar o carro (BMW M3, Civic, Fairlady Z, NSX, Aventador, Lotus, Silvia, Skyline e Toleman). Converteu de PNG (1,5 a 2,3 MB cada) para JPG de 1600 px, com qualidade 90, mantendo os mesmos nomes de arquivo (a pasta foi de 564 KB para cerca de 1,8 MB). Atualizou largura e altura de cada imagem no HTML, porque as proporções mudaram. Guardou os recortes antigos como backup fora do projeto.

**Problema achado:** o upscale por IA mudou um detalhe do Civic (o texto "KAIDOHOUSE" virou "KADO★HOUSE"). Anotado no `07-creditos-fotos.md`.

## Rodada 8. Cores entre seções e animação de entrada (prévia)
**Pedi:** "quero uma mudança de cores entre seções e além disso, adicione uma animação leve ao aparecer. Dê sugestões antes, crie um html temporário para eu decidir visualmente."

**O que a IA fez:** criou `previa-temporaria.html` (arquivo provisório, será apagado depois da decisão) com três opções de cor, três animações e duas divisórias, tudo trocável por botões:
- Cores: A papel suave, B vitrine escura, C cores da embalagem.
- Animações: 1 sobe e aparece, 2 prateleira monta (carros caem e a tábua desliza), 3 foto colada (a foto chega grande e gira até assentar).
- Divisória entre seções: reta ou papel rasgado.

**Problemas achados no teste da própria IA:**
- Na opção B, o texto das plaquinhas ("Pista e Senna") herdava a cor clara e sumia. Corrigido.
- A tábua do modo 2 nunca aparecia: o observador de rolagem ignora elemento com área zero, e a tábua escondida tinha área zero. Corrigido observando a prateleira (o pai).
- O botão "Repetir animação" quase não mostrava nada, porque religava em 80 ms. Corrigido (esconde na hora e espera 350 ms).

**Minha decisão:** cores B (vitrine escura), animação 3 (foto colada) e divisória de papel rasgado.

## Rodada 9. Aplicando a decisão na página real
**Pedi:** "b, 3 e papel rasgado".

**O que a IA fez:**
- Seções em largura total, cada uma com sua cor: hero em kraft, estante em madeira escura, a marca em kraft, embalagem em azul-marinho.
- Divisória de papel rasgado entre elas (`clip-path` com um zigue-zague).
- Animação "foto colada": a foto chega maior e girada e assenta; os textos sobem 10 px com fade. Atraso em cascata de 90 ms entre irmãos.
- A barra do rodapé passou de azul para amarela, porque a seção azul acima a deixaria sem contraste.
- A página só esconde os elementos se o JavaScript estiver ativo, e quem pede menos movimento no sistema vê tudo sem animar.
- O arquivo `previa-temporaria.html` foi apagado.

**Meu olhar:** Site finalizado, testado visualmente no mobile, desktop e médias telas.

# 07. Créditos das fotos

Todas as fotos vêm do site **mgminis.com** (loja de miniaturas). Uso exclusivo acadêmico, sem fins comerciais. Cada imagem foi recortada para mostrar só o carrinho (sem blister, logos do site, marca d'água ou outras vistas).

| Arquivo | Modelo | Página de origem | Arquivo original |
|---|---|---|---|
| lotus-99t-senna-1987.jpg | Lotus 99T #12, Ayrton Senna, GP de Mônaco 1987 (#1088) | https://mgminis.com/produto/mini-gt-lotus-99t-12-ayrton-senna-1987-monaco-grand-prix-1088/ | wp-content/uploads/2026/09/IMG_8405.jpeg |
| toleman-tg184-senna-1984.jpg | Toleman TG184 #19, Ayrton Senna, GP de Mônaco 1984 (#1118) | https://mgminis.com/produto/mini-gt-toleman-tg184-19-ayrton-senna-1984-monaco-1118/ | wp-content/uploads/2026/09/IMG_8406.jpeg |
| skyline-r33-advan.jpg | Nissan Skyline GT-R R33 ADVAN, Kaido House (#191) | https://mgminis.com/produto/mini-gt-kaido-house-nissan-skyline-gt-r-r33-advan-191/ | wp-content/uploads/2026/09/IMG_8416.jpeg |
| honda-nsx-kaido.jpg | Honda NSX, Kaido House (#190) | https://mgminis.com/produto/mini-gt-kaido-house-honda-nsx-190/ | wp-content/uploads/2026/09/IMG_8415.jpeg |
| lamborghini-aventador-lbworks.jpg | Lamborghini Aventador LB Works (#1087) | https://mgminis.com/produto/mini-gt-lb-works-lamborghini-aventador-1087/ | wp-content/uploads/2026/09/IMG_8418.jpeg |
| bmw-m3-7eleven.jpg | BMW M3 Larry Chen 7Eleven, Kaido House (#217) | https://mgminis.com/produto/mini-gt-kaido-house-bmw-m3-larry-chen-7eleven-217/ | wp-content/uploads/2026/09/IMG_8404.jpeg |
| fairlady-z-police.jpg | Nissan Fairlady Z Police, Kaido House (#208) | https://mgminis.com/produto/mini-gt-kaido-house-nissan-fairlady-z-police-208/ | wp-content/uploads/2026/09/IMG_8417.jpeg |
| civic-ef-kaido-manga.jpg | Honda Civic EF Kaido Manga, Kaido House (#260) | https://mgminis.com/produto/mini-gt-kaido-house-honda-civic-ef-kaido-manga-260/ | wp-content/uploads/2026/09/IMG_8409.jpeg |
| silvia-s13r-kaido-drift.jpg | Nissan Silvia S13-R Kaido Drift, Kaido House (#235) | https://mgminis.com/produto/mini-gt-kaido-house-nissan-silvia-s13-r-kaido-drift-235/ | wp-content/uploads/2026/09/IMG_8408.jpeg |

## Processo de tratamento
- Baixei as imagens grandes (sem o sufixo de miniatura `-324x243`).
- A maioria vinha como foto de embalagem ou prancha com 5 ângulos, então recortei uma vista de cada carro com Python (Pillow).
- Mantive só o maior bloco conectado (o carro) para tirar pedaços de blister e legendas.

## Trocas em relação à lista original
- **Toyota Supra Top Secret (#1132):** só existia dentro do blister, com o carrinho minúsculo. Troquei pelo Honda Civic EF Kaido Manga.
- **Nissan Silvia S15 LBWK (#1157):** a foto tinha marca d'água do MG Minis por cima do carro e banner do YouTube. Troquei pela Silvia S13-R Kaido Drift.

## Versão melhorada com IA (13/10/2026)
As fotos recortadas eram pequenas (de 490 a 1200 px de largura). Eu mesmo passei cada recorte por uma ferramenta de IA para aumentar a qualidade, a resolução e a proporção. As versões novas ficaram em `img/carros/` com os mesmos nomes, em JPG de 1600 px de largura.


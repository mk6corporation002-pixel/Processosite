# Bellavista · Cabaña Boutique (Pucón, Chile)

Site one-page em HTML, CSS e JavaScript puro, sem build e sem dependências. É responsivo e tem três idiomas: ES, EN e PT.

## Estrutura de pastas

```
Processosite/
├── index.html              # Página única com todas as seções
├── css/
│   └── style.css           # Estilos (cores e fontes nas variáveis :root)
├── js/
│   ├── i18n.js             # Traduções EN/PT (o espanhol fica no próprio HTML)
│   └── main.js             # Menu, idiomas, galeria/lightbox, animações, formulário → WhatsApp
├── assets/
│   └── images/
│       ├── logo/           # logo.png, favicon.png
│       ├── hero/           # hero.jpg
│       ├── casa/           # casa-exterior.jpg, casa-volcan.jpg
│       ├── tinaja/         # tinaja.jpg
│       ├── galeria/        # galeria-1.jpg … galeria-7.jpg
│       ├── experiencias/   # experiencias.jpg
│       └── guia/           # guia-1.jpg … guia-5.jpg
└── docs/
    └── analise-telas.md    # Análise do site original, seção por seção
```

## Seções

1. **Header:** menu, seletor ES/EN/PT e botão "Consultar fechas". Fica verde ao rolar a página.
2. **Hero:** foto de fundo, logo, título "Tu casa entre el lago y el volcán." e os destaques 01–03.
3. **Barra de atributos:** cartão sobreposto ao hero com os 6 itens da casa.
4. **La casa:** texto e composição de fotos com o selo "Un refugio con horizonte".
5. **La tinaja:** tela dividida em foto e painel verde.
6. **Galería:** 7 fotos com legenda e lightbox (setas, teclado e swipe).
7. **Experiencias:** foto fixa à esquerda (sticky), 4 experiências e o cartão "Servicios a medida".
8. **Guía de Pucón:** fundo quadriculado, 5 cartões de passeios e um cartão com mapa.
9. **Consulta:** formulário que abre o WhatsApp com a mensagem já preenchida.
10. **Footer:** logo, frase e "Volver arriba", além do botão flutuante de WhatsApp.

## Imagens: nome exato e pasta

| Pasta | Arquivo | Onde aparece | Tamanho sugerido |
|---|---|---|---|
| `logo/` | `logo.png` | Logo completo (araucária + "BELLAVISTA / CABAÑA BOUTIQUE / PUCÓN, CHILE"), **PNG com fundo transparente**. Usado no hero e no rodapé. | 1000×800 |
| `logo/` | `favicon.png` | Ícone da aba do navegador | 128×128 |
| `hero/` | `hero.jpg` | Fundo da primeira tela (árvores, céu e vulcão) | 2400×1400 |
| `casa/` | `casa-exterior.jpg` | Foto grande da cabana (seção "Más que llegar") | 1200×1000 |
| `casa/` | `casa-volcan.jpg` | Foto menor com moldura (cabana e vulcão nevado) | 800×740 |
| `tinaja/` | `tinaja.jpg` | Metade esquerda da seção da tinaja (drinks e frios) | 1400×1600 |
| `galeria/` | `galeria-1.jpg` | Llegada a la cabaña (horizontal larga) | 1800×750 |
| `galeria/` | `galeria-2.jpg` | Sala de estar junto a la estufa | 900×750 |
| `galeria/` | `galeria-3.jpg` | Comedor con vista al lago (horizontal larga) | 1800×750 |
| `galeria/` | `galeria-4.jpg` | Foto **vertical** alta (tinaja ao pôr do sol) | 900×1600 |
| `galeria/` | `galeria-5.jpg` | Janela com cortinas / roupão (horizontal larga) | 1800×750 |
| `galeria/` | `galeria-6.jpg` | Vista al volcán desde el fondo de la casa (horizontal larga) | 1800×750 |
| `galeria/` | `galeria-7.jpg` | Vista abierta al lago | 900×750 |
| `experiencias/` | `experiencias.jpg` | Vulcão e lago ao amanhecer (coluna fixa, **vertical**) | 1200×1600 |
| `guia/` | `guia-1.jpg` | Parque Nacional Huerquehue | 1000×850 |
| `guia/` | `guia-2.jpg` | Ojos del Caburgua | 1000×850 |
| `guia/` | `guia-3.jpg` | Termas | 1000×850 |
| `guia/` | `guia-4.jpg` | Lago Villarrica | 1000×850 |
| `guia/` | `guia-5.jpg` | Centro de Montaña Pillán (teleférico; card largo) | 1900×700 |

Enquanto uma imagem não é adicionada, o lugar dela aparece com um fundo neutro, sem ícone de imagem quebrada. Se usar `.webp` ou `.png`, troque a extensão no `index.html`.

## O que editar

- **WhatsApp:** a constante `WHATSAPP_NUMBER` em `js/main.js` (hoje `56965065463`).
- **Mapa:** o `src` do `<iframe class="location__map">` no `index.html`. No Google Maps, use *Compartilhar → Incorporar um mapa* com o endereço exato.
- **Cores e fontes:** variáveis no início de `css/style.css`.
- **Textos:** o espanhol fica direto no `index.html`; inglês e português ficam em `js/i18n.js`, nas mesmas chaves `data-i18n`.
- **Cartões 03 e 04 do guia:** não apareciam nas telas recebidas. Coloquei "Termas" e "Lago Villarrica"; ajuste se forem outros.
- **Links "Ver información oficial":** confirme as URLs de cada passeio.

## Como visualizar

Abra o `index.html` no navegador ou rode um servidor local:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

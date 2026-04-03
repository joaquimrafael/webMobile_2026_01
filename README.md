# El Patron - Barbearia

Projeto desenvolvido para a disciplina de **Desenvolvimento Web Mobile**.

---

## Integrantes

| Nome | RA |
|------|----|
| Gustavo Garabetti Munhoz | 10409258 |
| João Pedro Rodrigues Vieira | 10403595 |
| Joaquim Rafael Mariano Prieto Pereira | 10408805 |
| Caio Yukio Yazawa | 10418604 |
| Erick Guilherme de Macedo Cabral | 10419996 |

## Processo de Ideação

O processo de ideação foi conduzido de forma colaborativa, com participação ativa de todos os integrantes do grupo. Cada membro apresentou uma proposta de negócio para ser o foco do projeto:

| Integrante | Proposta |
|------------|----------|
| João Pedro | Hortifruti |
| Gustavo | Barbearia |
| Caio | Rede de supermercados Shibata |
| Joaquim | Loja de joias |

Para selecionar a proposta mais adequada, o grupo avaliou cada alternativa com base nos seguintes critérios:

| Critério | Descrição |
|----------|-----------|
| Necessidade real | O negócio possui uma lacuna digital identificada e concreta? |
| Viabilidade técnica | O escopo é compatível com uma landing page no tempo da disciplina? |
| Acesso para validação | É possível interagir com o estabelecimento para validar decisões de design? |
| Impacto extensionista | Há benefício claro para um empreendedor ou comunidade local? |

A **Barbearia El Patron** se destacou em todos os critérios: o estabelecimento não possui site nem presença digital estruturada, o proprietário está acessível para validações, e a solução tem escopo bem delimitado — uma landing page com informações, galeria e localização. As demais propostas foram descartadas por apresentarem menor viabilidade extensionista (loja de joias), escopo excessivamente amplo (rede de supermercados Shibata) ou necessidade digital menos urgente (hortifruti).

O projeto visa, portanto, desenvolver uma solução web/mobile que preencha essa lacuna, proporcionando uma experiência mais moderna e acessível tanto para o negócio quanto para seus clientes.

---

## Caráter Extensionista

O projeto apoia o proprietário da **Barbearia El Patron**, um pequeno empreendedor local sem recursos para contratar desenvolvimento de software e sem tempo para construir presença digital por conta própria.

O impacto, porém, vai além do negócio atendido:

- **Para os clientes**: moradores do bairro e região passam a ter acesso fácil aos serviços, localização e contato da barbearia — reduzindo a dependência de indicações boca a boca e facilitando o agendamento.
- **Para o empreendedor**: a presença digital estruturada amplia o alcance do negócio, podendo atrair novos clientes e contribuir para o crescimento sustentável da barbearia.
- **Para a comunidade local**: apoiar a digitalização de pequenos negócios contribui para a valorização do comércio local e o fortalecimento da economia do bairro, mostrando que a tecnologia pode ser um instrumento de inclusão e desenvolvimento comunitário.

Dessa forma, o projeto vai além do ambiente acadêmico, conectando aprendizado técnico com responsabilidade social concreta e mensurável.

---

## Protótipo — Wireframes

Os wireframes apresentam o layout de **sidebar + conteúdo**, as seções são, de cima para baixo:

| Seção | O que apresenta |
| --- | --- |
| **Home** | Logo da barbearia em destaque centralizado |
| **Sobre Nós** | Card com imagem e texto lado a lado, finalizando com botão de ação |
| **Estrutura** | Carrossel com botões de navegação lateral, exibindo uma foto por vez |
| **Serviços** | Três cards dispostos horizontalmente, cada um com imagem e descrição |
| **Localização** | Endereço e mapa embarcado via iframe |
| **Footer** | Links de navegação e informações de contato |

### Desktop

![desktop](imgs/desktop.svg)

### Mobile

![desktop](imgs/mobile.svg)

## Tutorial - `index.html`

O header, em mobile, contém o logo da barbearia (envolto em um link para `index.html`) e uma navbar com as seções da landing page. Cada item da navbar usa a classe `.navbar-link` para receber o estilo de hover.

```html
<header>
  <a href="index.html">
    <img src="imgs/elpatron.jpg" alt="Logo El Patron" />
  </a>
  <nav>
    <ul>
      <li class="navbar-link"><a href="#home">Home</a></li>
      <li class="navbar-link"><a href="#about">Sobre nós</a></li>
      <li class="navbar-link"><a href="#structure">Estrutura</a></li>
      <li class="navbar-link"><a href="#services">Serviços</a></li>
      <li class="navbar-link"><a href="#contact-us">Fale conosco</a></li>
      <li class="navbar-link"><a href="#localization">Localização</a></li>
    </ul>
  </nav>
</header>
```

Na home, temos uma seção com apenas o logo da barbearia em destaque no centro. O logo usa a classe `.core-img` para controlar seu tamanho.

```html
<section id="home">
  <a href="index.html">
    <img src="imgs/elpatron.jpg" class="core-img" alt="Logo Grande" />
  </a>
</section>
```

Na seção `#about`, o conteúdo é agrupado em um `<article class="about-article-card">` que em desktop exibe imagem e texto lado a lado via grid. O texto fica em uma `<div class="about-text-box">` com título, parágrafo e um botão `.medium-button`.

```html
<section id="about">
  <article class="about-article-card">
    <img src="imgs/..." class="core-img" alt="Sobre nós" />
    <div class="about-text-box">
      <h2>Sobre nós</h2>
      <p>...</p>
      <button type="button" class="medium-button">Em breve...</button>
    </div>
  </article>
</section>
```

Na seção `#structure`, o carrossel é composto por dois botões `.small-button` (com ícones Material Symbols) e uma `<ul class="carrousel-list">`. Cada imagem é um `<li class="carrousel-img">`; o item inicialmente visível recebe `id="visible"`. O JavaScript alterna esse id para controlar qual foto é exibida.

```html
<section id="structure">
  <h2>Estrutura e espaço físico</h2>
  <div class="carrousel">
    <button type="button" class="small-button" onclick="carrouselLeftClick()">
      <span class="material-symbols-outlined">chevron_left</span>
    </button>
    <ul class="carrousel-list">
      <li class="carrousel-img">
        <figure><img src="imgs/..." alt="Foto 1" /></figure>
      </li>
      <li class="carrousel-img" id="visible">
        <figure><img src="imgs/..." alt="Foto 2" /></figure>
      </li>
      <!-- mais fotos -->
    </ul>
    <button type="button" class="small-button" onclick="carrouselRightClick()">
      <span class="material-symbols-outlined">chevron_right</span>
    </button>
  </div>
</section>
```

A seção `#services` contém artigos com a classe `.services-article-card`. Cada card possui imagem(ns) e uma `<div class="services-article-text-box">` com título e descrição do serviço.

```html
<section id="services">
  <h2>Serviços</h2>
  <section>
    <article class="services-article-card">
      <img src="imgs/..." alt="Corte de Cabelo" />
      <div class="services-article-text-box">
        <h3>Corte de Cabelo</h3>
        <p>...</p>
      </div>
    </article>
    <!-- demais artigos -->
  </section>
</section>
```

A seção `#contact-us` contém um formulário de contato com campos de nome, e-mail, telefone e mensagem. O submit chama `sendMessage(event)` via `onsubmit`, que salva os dados no `localStorage` e exibe um alerta de confirmação.

```html
<section id="contact-us">
  <h2>Fale conosco</h2>
  <form id="contact-form" onsubmit="sendMessage(event)">
    <input type="text" id="full-name" name="full-name" placeholder="Nome Completo*" required class="text-input" /><br />
    <input type="email" id="email" name="email" placeholder="Email*" required class="text-input" /><br />
    <input type="tel" name="phone" id="phone" placeholder="Telefone" class="text-input" /><br />
    <textarea name="message" id="message" placeholder="Mensagem*" required class="text-area-input"></textarea>
    <button type="submit" class="large-button">Enviar</button>
  </form>
</section>
```

A seção `#localization` exibe o endereço em `<address>` e um mapa embarcado via `<iframe>` apontando para a localização real da barbearia no Google Maps.

```html
<section id="localization">
  <div class="localization-text">
    <h2>Localização</h2>
    <address>Avenida lider 2465B, São Paulo, Brazil</address>
  </div>
  <iframe src="https://www.google.com/maps/embed?..." style="border: 0" allowfullscreen loading="lazy"></iframe>
</section>
```

No footer, temos referências para todas as seções da landing page, incluindo "Fale conosco", além do número de telefone real e link direto para o Instagram da barbearia.

```html
<footer>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">Sobre nós</a></li>
    <li><a href="#structure">Estrutura</a></li>
    <li><a href="#services">Serviços</a></li>
    <li><a href="#localization">Localização</a></li>
    <li><a href="#contact-us">Fale conosco</a></li>
    <li><a href="tel:+">+55 (11) 9999-9999</a></li>
    <li><a href="https://www.instagram.com/barbeariaelpatron___/" target="_blank">Instagram</a></li>
  </ul>
</footer>
```

---

## Tutorial — `style.css`

O arquivo `style.css` é responsável por toda a estilização visual da landing page da **El Patron**. Ele está organizado em blocos correspondentes a cada seção do HTML, além de uma camada de responsividade via media query.

---

### Variáveis CSS (`:root`)

Toda a paleta de cores e tipografia é definida como custom properties no `:root`, permitindo reutilização consistente em todo o arquivo.

```css
:root {
  /* Paleta de cores */
  --brown-darker: #272121;   /* fundo do body */
  --brown-dark:   #534747;   /* fundo do header */
  --brown-dark-active: #312a2a; /* fundo dos cards */
  --red-normal:   #cc2936;   /* cor primária dos botões */
  --silver-normal: #c2bfb3;  /* cor de texto secundário */
  /* ... demais variantes de brown, red, yellow, silver e blue */

  /* Tamanhos de fonte */
  --text-h1: 2.25rem;
  --text-h2: 1.875rem;
  --text-h3: 1.5rem;
  --text-p:  1rem;
  /* ... */
}
```

Em mobile os tamanhos de fonte usam os valores acima; a media query de desktop os aumenta (ex.: `--text-h2` vai de `1.875rem` para `2.25rem`).

---

### Reset Global

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--primary-font-family);
}
```

Remove margens e paddings padrão de todos os elementos, adota `border-box` e aplica a fonte do sistema via variável.

Adicionalmente:

- `html` tem `overflow-x: hidden` — impede barra de rolagem horizontal causada por elementos que transbordam.
- `ul` tem `list-style: none` — remove marcadores das listas de navegação e footer.
- `a` tem `text-decoration: none` e `color: inherit` — links sem sublinhado, herdando a cor do elemento pai.
- `img` tem `max-width: 100%`, `display: block` e `border-radius: 1rem` — imagens responsivas, sem espaço extra embaixo e com cantos arredondados.
- `input`, `button` e `textarea` têm `appearance: none` e reset completo — remove estilos nativos do browser antes de aplicar os estilos do projeto.

---

### Tipografia base

Os elementos `h1`–`h4` e `p` têm tamanhos e pesos definidos diretamente via variáveis:

```css
h2 { font-size: var(--text-h2); font-weight: 700; line-height: 1.3; }
p  { font-size: var(--text-p);  line-height: 1.6; }
```

Classes utilitárias adicionais: `.text-lead`, `.text-large`, `.text-muted` (aplica `color: var(--silver-dark)` além do tamanho reduzido).

---

### Sistema de Botões

O projeto define três variantes de botão. Todas compartilham `transition: background-color 0.2s ease, transform 0.1s ease` e um `transform: scale(0.97)` no `:active`.

| Classe | Uso | Formato |
| ------ | --- | ------- |
| `.large-button` | Envio de formulário | Pílula (`border-radius: 10rem`), mínimo 10 × 3 rem |
| `.medium-button` | Ação secundária (ex.: "Em breve...") | Retangular arredondado (`border-radius: 1rem`) |
| `.small-button` | Navegação do carrossel | Circular (`border-radius: 100%`), máximo 3 × 3 rem |

Todos usam `background-color: var(--red-normal)` e mudam para `--red-normal-hover` / `--red-normal-active` nos estados de interação.

---

### Formulário — `.text-input` / `.text-area-input`

```css
.text-input,
.text-area-input {
  background-color: white;
  width: 100%;
  max-width: 35rem;
  min-height: 2rem;
  border-radius: 0.7rem;
  padding: 1rem;
}
```

Campos do formulário de contato com fundo branco, largura total (limitada a 35 rem) e padding interno. O `<textarea>` recebe `min-height: 10rem` via seletor específico no bloco `#contact-us`.

---

### Header

Em **mobile**, o header é uma barra horizontal (`flex`) com `justify-content: space-between` separando logo e nav. O logo tem tamanho fixo de 4 × 4 rem. Os itens `.navbar-link` têm `padding: 0.5rem` e, no hover, ganham `background-color: var(--brown-normal-hover)` com `border-radius: 0.3rem`.

---

### Main

```css
main {
  display: flex;
  flex-direction: column;
}
```

O `<main>` empilha todas as seções verticalmente em mobile.

---

### Seções — espaçamento padrão

```css
section {
  padding: 2rem 1rem;
}
```

Toda seção recebe espaçamento interno padrão. A classe `.core-img` fixa `width: 12rem` para o logo usado na hero e no card "Sobre nós".

---

### `#home` — Hero

```css
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
#home img { max-height: 200px; object-fit: contain; }
```

Seção de destaque que ocupa pelo menos 60% da altura da viewport. O logo é centralizado horizontal e verticalmente.

---

### `#about` — Sobre Nós

```css
.about-article-card {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
  background-color: var(--brown-dark-active);
  padding: 1rem;
  border-radius: 1rem;
}
.about-text-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.about-text-box p { color: var(--silver-normal); }
```

Em mobile, o card usa `grid-template-rows: auto 1fr` — a imagem ocupa seu tamanho natural e `.about-text-box` preenche a altura restante. Em desktop, muda para `grid-template-columns: 1fr 1fr` (imagem e texto lado a lado).

---

### `#structure` — Estrutura / Galeria

```css
.carrousel { display: flex; align-items: center; }
.carrousel-img { display: none; }
#visible     { display: flex; }
```

Apenas o `<li>` com `id="visible"` é exibido; todos os outros ficam ocultos. `.carrousel-list` recebe `display: flex` e `gap: 0.5rem`; em desktop ganha `flex: 1` e `justify-content: center`.

---

### `#services` — Serviços

```css
.services-article-card {
  background-color: var(--brown-dark-active);
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.services-article-text-box p { color: var(--silver-normal); }
```

Em mobile, os cards são empilhados verticalmente. Em desktop (`#services > section`), mudam para `flex-direction: row`.

---

### `#contact-us` — Fale Conosco

```css
#contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
#contact-us > form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
#contact-us form textarea { min-height: 10rem; }
#contact-us button        { margin-top: 1rem; }
```

O formulário é centralizado com todos os campos empilhados verticalmente e limitados a `35rem` de largura.

---

### `#localization` — Localização

```css
#localization { display: flex; flex-direction: column; gap: 1rem; align-items: center; }
#localization iframe { width: 100%; min-height: 300px; border: none; }
.localization-text address { color: var(--silver-normal); }
```

Seção exibindo endereço em `<address>` e mapa via `<iframe>`. O mapa ocupa 100% da largura com altura mínima de 300 px e sem borda.

---

### Footer

```css
footer ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
```

Links centralizados com `flex-wrap`, permitindo quebra de linha em telas pequenas.

---

### Responsividade — Desktop (`min-width: 768px`)

A partir de **768 px**, o layout muda de empilhado para sidebar + conteúdo via `display: grid` no `body`:

| Elemento | Comportamento em desktop |
|----------|--------------------------|
| `body` | `display: grid; grid-template-columns: 15.5rem 1fr` — header ocupa a coluna da esquerda |
| `header` | Sidebar vertical com `height: 100vh`, `position: sticky` e `top: 0` |
| `nav > ul` | Itens da nav empilhados em coluna |
| `section` | Padding aumentado para `3rem 2rem` |
| `--text-h1/h2/h3/h4` | Tamanhos de fonte maiores redefinidos no `:root` da media query |
| `.about-article-card` | `grid-template-columns: 1fr 1fr` — imagem e texto lado a lado |
| `#structure li` | `flex: 0 0 30%`, cabendo mais fotos por linha |
| `.carrousel-list` | `flex: 1` + `justify-content: center` para centralizar a foto visível entre os botões |
| `#services > section` | Cards de serviço em linha (`flex-direction: row`) |

---

## Tutorial — `script.js`

### Carrossel interativo

O carrossel da seção `#structure` centraliza a lógica de navegação em uma única função `moveCarousel(direction)`. As funções públicas chamadas pelos botões (`carrouselLeftClick` / `carrouselRightClick`) apenas passam a direção (`-1` ou `+1`) para ela.

```js
function moveCarousel(direction) {
  const imagesList = document.getElementsByClassName("carrousel-list")[0];
  const elements = imagesList.getElementsByTagName("li");

  let currIndex = Array.from(elements).findIndex((el) => el.id === "visible");
  elements[currIndex].removeAttribute("id");
  elements[(currIndex + direction + elements.length) % elements.length].id = "visible";
}

function carrouselLeftClick()  { moveCarousel(-1); }
function carrouselRightClick() { moveCarousel(1);  }
```

A fórmula `(currIndex + direction + elements.length) % elements.length` garante wrap circular em ambas as direções sem índice negativo: somar `elements.length` antes do módulo evita resultados negativos quando `direction` é `-1` e `currIndex` é `0`.

O fluxo em cada clique:

1. Localizar o `<li id="visible">` atual.
2. Remover o atributo `id` dele (tornando-o oculto via CSS).
3. Calcular o novo índice com wrap circular.
4. Atribuir `id="visible"` ao novo `<li>`, tornando-o visível.

---

### Formulário de contato

Duas funções gerenciam o envio do formulário `#contact-form`.

#### `saveToLocalStorage(newData)`

```js
function saveToLocalStorage(newData) {
  try {
    const currentData = JSON.parse(localStorage.getItem("messages")) || [];
    currentData.push(newData);
    localStorage.setItem("messages", JSON.stringify(currentData));
  } catch (err) {
    console.error("Erro ao salvar no localStorage: ", err);
  }
}
```

Lê o array de mensagens já salvo em `localStorage` (chave `"messages"`), acrescenta o novo objeto e persiste o array atualizado. O bloco `try/catch` protege contra falhas de parsing ou situações em que o `localStorage` está indisponível.

#### `sendMessage(event)`

```js
function sendMessage(event) {
  event.preventDefault();

  const form = document.getElementById("contact-form");
  const newData = {
    name:    form.querySelector("#full-name").value.trim(),
    email:   form.querySelector("#email").value.trim(),
    phone:   form.querySelector("#phone").value.trim(),
    message: form.querySelector("#message").value.trim(),
  };

  saveToLocalStorage(newData);
  window.alert(`Obrigado pela mensagem, ${newData.name}! Em breve, entraremos em contato por e-mail ou telefone!`);
  form.reset();
}
```

Chamada via `onsubmit` do formulário. O fluxo é:

1. `event.preventDefault()` — impede o recarregamento da página.
2. Coleta e limpa (`trim`) os valores dos campos.
3. Chama `saveToLocalStorage` para persistir os dados.
4. Exibe um alerta de confirmação com o nome do usuário.
5. Reseta o formulário com `form.reset()`.

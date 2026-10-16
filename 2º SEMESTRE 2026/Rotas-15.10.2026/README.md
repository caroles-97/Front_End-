# Rotas com React Router — 15/10/2026

Projeto de estudo de navegação entre páginas (SPA) usando **React + Vite + React Router + Tailwind CSS**.
O app tem um menu fixo no topo e três páginas: **Home**, **Sobre** e **Contato** (com formulário).

---

## Passo-a-passo da criação

### 1. Criar o projeto com Vite

```bash
npm create vite@latest rotas
# Framework: React
# Variant:   JavaScript
cd rotas
npm install
```

Isso gera a estrutura base (`index.html`, `src/main.jsx`, `src/App.jsx`, `vite.config.js`, `eslint.config.js`).

### 2. Instalar o React Router

```bash
npm install react-router-dom
```

### 3. Instalar e configurar o Tailwind CSS (v4)

```bash
npm install tailwindcss @tailwindcss/vite
```

**`vite.config.js`** — adicionar o plugin do Tailwind junto com o do React:

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**`src/index.css`** — apagar o CSS padrão do template e deixar só:

```css
@import 'tailwindcss';
```

> No Tailwind v4 não é preciso `tailwind.config.js` nem as diretivas `@tailwind base/components/utilities`.

### 4. Limpar o template

- Apagar `src/App.css` e o conteúdo de exemplo (contador, logos) do `App.jsx`.
- `src/main.jsx` continua igual: importa `index.css` e renderiza `<App />` dentro de `<StrictMode>`.

### 5. Criar a estrutura de pastas

```
src/
├── components/
│   └── Menu.jsx       → barra de navegação
├── pages/
│   ├── Home.jsx       → página inicial
│   ├── Sobre.jsx      → página "sobre"
│   └── Contato.jsx    → formulário de contato
├── App.jsx            → define as rotas
├── main.jsx           → ponto de entrada
└── index.css          → importa o Tailwind
```

### 6. Configurar as rotas no `App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const App = () => (
  <Router>                                  {/* habilita o uso de rotas */}
    <div className='min-h-screen bg-gray-50'>
      <Menu />                              {/* aparece em todas as páginas */}
      <div className='max-w-4xl mx-auto'>
        <Routes>                            {/* escolhe qual rota renderizar */}
          <Route path='/'        element={<Home />} />
          <Route path='/sobre'   element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </div>
    </div>
  </Router>
)
```

| Componente | Função |
|---|---|
| `BrowserRouter` (`Router`) | Envolve o app e ativa a navegação pela URL |
| `Routes` | Agrupa as rotas e renderiza só a que combina com a URL |
| `Route` | Liga um caminho (`path`) a um componente (`element`) |

### 7. Criar o menu de navegação (`components/Menu.jsx`)

- Usa `<Link to='...'>` no lugar de `<a href='...'>` → troca de página **sem recarregar** o navegador.
- Usa o hook `useLocation()` para saber a rota atual e destacar o link ativo:

```jsx
const location = useLocation();
const isActive = (path) => location.pathname === path;
```

- Cada link ganha uma cor quando está ativo: Home → azul, Sobre → verde, Contato → roxo.
  Os inativos ficam cinza com `hover:bg-gray-700`.

### 8. Criar as páginas (`pages/`)

- **Home** — título azul, mensagem de boas-vindas e uma caixa `bg-blue-50` com a lista do que o app oferece.
- **Sobre** — título verde, descrição do projeto e caixa `bg-green-50` com as tecnologias usadas.
- **Contato** — formulário com 3 campos (nome, e-mail, mensagem):
  - Cada campo é um **input controlado** com `useState` (`value` + `onChange`).
  - `handleSubmit` chama `e.preventDefault()` (evita recarregar a página), mostra um `alert` de agradecimento e limpa os campos.
  - Botão `bg-fuchsia-400` com `hover:bg-pink-400`.

### 9. Rodar o projeto

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # testa o build localmente
```

---

## Glossário: o que é cada coisa (explicado do zero)

> Leia na ordem. Cada item usa só o que já foi explicado antes dele.

### Parte 1 — JavaScript básico que aparece no projeto

#### Variável (`const`)
Uma "caixinha" com nome onde guardamos um valor.

```js
const nome = 'Ana';   // a caixinha "nome" guarda o texto 'Ana'
```

`const` significa que essa caixinha não vai ser trocada por outra depois.

#### Função
Um "bloco de instruções" com nome, que só roda quando a gente **chama** ele.
Pense numa receita de bolo: escrever a receita não faz o bolo, você precisa *seguir* a receita.

```js
function dizerOi() {
  console.log('Oi!');
}

dizerOi();   // agora sim ela roda e mostra "Oi!"
```

#### Arrow function (`() => {}`)
É **outro jeito de escrever uma função**, mais curto. Faz a mesma coisa.

```js
const dizerOi = () => {
  console.log('Oi!');
};
```

Lê-se assim: *"a constante `dizerOi` guarda uma função que, quando chamada, faz o que está entre `{ }`"*.

Ela pode receber valores (chamados **parâmetros**) dentro dos parênteses:

```js
const somar = (a, b) => a + b;
somar(2, 3);   // resultado: 5
```

No projeto, **todos os componentes são arrow functions**: `const Home = () => { ... }`.

#### `import` e `export`
Cada arquivo é como uma gaveta separada. Para usar algo de outra gaveta:

- `export default Home` → *"este arquivo oferece o `Home` para quem quiser usar"*.
- `import Home from './pages/Home'` → *"pega o `Home` que está no arquivo `pages/Home`"*.

Quando vem entre chaves, estamos pegando **partes específicas** de uma biblioteca:

```js
import { Link, useLocation } from 'react-router-dom'
// "da biblioteca react-router-dom, quero só o Link e o useLocation"
```

#### Template string (crase `` ` ``)
Texto escrito entre **crases** permite colocar variáveis dentro usando `${ }`:

```js
const nome = 'Ana';
`Obrigada, ${nome}!`   // vira: "Obrigada, Ana!"
```

Usado no `alert` do Contato e nas classes do Menu.

#### Operador ternário (`condição ? A : B`)
É um "if/else" em uma linha só: *"a condição é verdadeira? Então use A. Senão, use B."*

```js
const idade = 20;
idade >= 18 ? 'adulto' : 'menor'   // resultado: 'adulto'
```

No Menu:

```js
isActive('/') ? 'bg-blue-600 text-white' : 'text-gray-400'
// Se estou na página '/', o link fica azul. Senão, fica cinza.
```

#### `===` (comparação)
Pergunta "isso é **igual** àquilo?" e responde `true` (verdadeiro) ou `false` (falso).

```js
'/sobre' === '/sobre'   // true
'/sobre' === '/'        // false
```

#### `alert('texto')`
Função do próprio navegador que abre uma janelinha com a mensagem.

---

### Parte 2 — React

#### Componente
Um **pedaço da tela** escrito como função. A função **devolve (`return`)** o que deve aparecer.
Pense em peças de LEGO: `Menu`, `Home`, `Sobre` e `Contato` são peças, e o `App` monta tudo junto.

```jsx
const Home = () => {
  return (
    <h1>Página inicial</h1>
  )
}
```

> Regra: o nome de um componente **sempre começa com letra maiúscula** (`Home`, não `home`).

#### JSX
É aquele "HTML dentro do JavaScript" que aparece no `return`. Parece HTML, mas tem algumas diferenças:

| HTML normal | JSX (React) | Por quê |
|---|---|---|
| `class="..."` | `className='...'` | `class` já é uma palavra reservada do JavaScript |
| `<!-- comentário -->` | `{/* comentário */}` | comentários dentro do JSX ficam entre chaves |
| — | `{nome}` | chaves `{ }` = "aqui dentro é JavaScript", serve para mostrar variáveis |
| `<input>` | `<input />` | toda tag precisa ser fechada |

Usar um componente é como usar uma tag: `<Menu />` coloca o menu na tela.

#### `className`
Onde colocamos as **classes do Tailwind** (as que dão estilo). Exemplo:

```jsx
<h1 className='text-4xl font-bold text-blue-600'>
```

= texto grande, em negrito, azul.

#### `useState` — a "memória" do componente
Normalmente, uma variável comum é esquecida toda vez que a tela se atualiza.
O `useState` cria uma variável que o React **lembra**, e quando ela muda, **a tela se atualiza sozinha**.

```jsx
const [nome, setNome] = useState('');
```

Lendo devagar:
- `nome` → o valor guardado (começa vazio: `''`).
- `setNome` → a **única** função que pode trocar esse valor.
- `useState('')` → "crie essa memória começando com texto vazio".

```jsx
setNome('Ana');   // agora nome vale 'Ana' e a tela é redesenhada
```

> ⚠️ Os nomes precisam ser **exatamente iguais** em todo o arquivo. `SetNome` (S maiúsculo) e `setNome` são coisas diferentes para o JavaScript.

#### `StrictMode` e `createRoot` (no `main.jsx`)
- `createRoot(document.getElementById('root'))` → procura no `index.html` a `<div id="root">` e diz: *"o React vai desenhar tudo aqui dentro"*.
- `.render(<App />)` → desenha o componente `App` ali.
- `<StrictMode>` → um "modo fiscal" que avisa sobre erros enquanto você desenvolve. Não aparece na tela.

> Você quase nunca precisa mexer no `main.jsx`.

---

### Parte 3 — Formulário (página Contato)

#### `onChange` e `e.target.value`
`onChange` = *"quando o usuário digitar algo neste campo, rode esta função"*.

```jsx
<input value={nome} onChange={(e) => setNome(e.target.value)} />
```

- `e` (de **evento**) → um pacote de informações sobre o que aconteceu.
- `e.target` → o campo onde a pessoa digitou.
- `e.target.value` → o texto que está escrito nele.
- `setNome(...)` → guarda esse texto na memória `nome`.

E o `value={nome}` faz o campo **mostrar** o que está guardado. Isso se chama **input controlado**: o React controla o que aparece no campo.

Fluxo:
```
usuário digita "A" → onChange roda → setNome('A') → nome vale 'A' → campo mostra 'A'
```

#### `onSubmit` e `handleSubmit`
- `onSubmit={handleSubmit}` no `<form>` → *"quando clicarem no botão de enviar, rode `handleSubmit`"*.
- `handleSubmit` é só o nome que **nós** demos para a função (poderia ser outro nome).

```jsx
const handleSubmit = (e) => {
  e.preventDefault();                                    // 1
  alert(`Obrigada, ${nome}! Mensagem enviada!`);         // 2
  setNome(''); setEmail(''); setMensagem('');            // 3
}
```

1. `e.preventDefault()` → por padrão, enviar um formulário **recarrega a página** (e tudo seria perdido). Isso **impede** esse comportamento.
2. Mostra a mensagem de agradecimento.
3. Limpa os três campos (volta tudo para texto vazio).

#### `required`, `type='email'`, `placeholder`
São do HTML normal:
- `required` → o campo é obrigatório; o navegador não deixa enviar vazio.
- `type='email'` → o navegador confere se tem cara de e-mail (tem `@`).
- `placeholder` → o texto cinza de exemplo que some quando você digita.

---

### Parte 4 — React Router (navegação entre páginas)

**O problema:** um site React é, na verdade, **uma única página** (`index.html`). Como ter "várias páginas"?
**A solução:** o React Router olha o endereço (URL) no navegador e **troca o componente** que aparece, sem recarregar nada.

```
localhost:5173/         → mostra <Home />
localhost:5173/sobre    → mostra <Sobre />
localhost:5173/contato  → mostra <Contato />
```

#### `BrowserRouter` (chamado de `Router` no projeto)
O "chefe" da navegação. Tudo que usa rotas precisa estar **dentro** dele. Por isso ele envolve o app inteiro.

```jsx
import { BrowserRouter as Router } from 'react-router-dom'
// "as Router" = apelido. Importamos BrowserRouter mas chamamos de Router.
```

#### `Routes` e `Route`
- `Routes` → a "lista de rotas". Olha a URL e escolhe **uma** rota para mostrar.
- `Route` → **uma** rota: liga um endereço a um componente.

```jsx
<Route path='/sobre' element={<Sobre/>}/>
// "quando o endereço for /sobre, mostre o componente Sobre"
```

Note que o `<Menu/>` fica **fora** do `<Routes>` → por isso ele aparece em **todas** as páginas.

#### `Link`
Substitui o `<a href>` do HTML.

```jsx
<Link to='/sobre'>Sobre</Link>
```

| `<a href='/sobre'>` | `<Link to='/sobre'>` |
|---|---|
| Recarrega o site inteiro (lento, perde a memória) | Só troca o componente (rápido, mantém tudo) |

#### `useLocation`
Função do React Router que responde: *"em qual endereço estou agora?"*

```jsx
const location = useLocation();
location.pathname   // ex.: '/sobre'
```

#### `isActive` (criada por nós)
Uma arrow function que usa tudo isso junto:

```jsx
const isActive = (path) => location.pathname === path;
```

*"Recebo um caminho (`path`). O endereço atual é igual a ele? Respondo `true` ou `false`."*

```jsx
isActive('/sobre')   // true se estou na página Sobre
```

Combinando com o ternário, o link da página atual fica colorido e os outros ficam cinza.

---

### Parte 5 — Arquivos de configuração

| Arquivo | Para que serve | Precisa mexer? |
|---|---|---|
| `package.json` | Lista das bibliotecas do projeto e dos comandos (`npm run dev`...) | Só via `npm install` |
| `vite.config.js` | Configura o Vite. `defineConfig` monta a configuração; `plugins` adiciona React e Tailwind | Só uma vez, no início |
| `index.html` | A única página HTML. Tem a `<div id="root">` onde o React desenha | Quase nunca |
| `index.css` | Importa o Tailwind | Quase nunca |
| `node_modules/` | Bibliotecas baixadas pelo `npm install` | **Nunca** (e não vai pro GitHub) |
| `dist/` | Versão final gerada pelo `npm run build` | **Nunca** |

---

## O que foi modificado em relação ao template do Vite

| Arquivo | Mudança |
|---|---|
| `package.json` | Adicionados `react-router-dom`, `tailwindcss` e `@tailwindcss/vite` (também `autoprefixer` e `postcss`, que não são necessários no Tailwind v4) |
| `vite.config.js` | Plugin `tailwindcss()` adicionado |
| `src/index.css` | CSS padrão substituído por `@import 'tailwindcss';` |
| `src/App.jsx` | Conteúdo de exemplo removido; agora configura `Router`, `Menu` e as três rotas |
| `src/components/Menu.jsx` | **Novo** — barra de navegação com `Link` e destaque do link ativo |
| `src/pages/Home.jsx` | **Novo** |
| `src/pages/Sobre.jsx` | **Novo** |
| `src/pages/Contato.jsx` | **Novo** — formulário com estado (`useState`) |
| `README.md` | Substituído por este passo-a-passo |

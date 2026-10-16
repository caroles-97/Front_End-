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

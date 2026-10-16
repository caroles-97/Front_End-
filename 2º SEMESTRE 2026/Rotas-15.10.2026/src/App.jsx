// =====================================================================
// App.jsx — O "ESQUELETO" DO SITE
// Aqui a gente junta as peças: o Menu (que aparece sempre)
// e as páginas (que trocam conforme o endereço do navegador).
// =====================================================================

// Traz o React (a biblioteca principal).
import React from 'react'

// Traz 3 ferramentas do React Router (a biblioteca que cuida das páginas):
// - BrowserRouter -> o "chefe" da navegação. "as Router" é um apelido:
//                    a partir daqui, chamamos ele só de "Router".
// - Routes        -> a lista de páginas possíveis.
// - Route         -> uma página da lista (endereço + o que mostrar).
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Traz o nosso Menu (arquivo components/Menu.jsx).
import Menu from './components/Menu'

// Traz as 3 páginas (arquivos dentro da pasta pages).
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

// "Componente" = um pedaço da tela escrito como função.
// "const App = () => { ... }" quer dizer:
// "crie algo chamado App, que é uma função; quando o React chamar essa função,
//  ela devolve (return) o que deve aparecer na tela".
const App = () => {
  // return = "devolva isto". O que está nos parênteses é o que aparece na tela.
  // Esse "HTML dentro do JavaScript" se chama JSX.
  return (
    <Router>
      {/* Quem define que vamos usar rotas */}
      {/* Tudo que usa páginas/links precisa ficar DENTRO do Router. */}

      {/* className = onde colocamos as classes do Tailwind (o estilo).
          min-h-screen -> altura mínima = a tela inteira
          bg-gray-50   -> fundo cinza bem clarinho */}
      <div className='min-h-screen bg-gray-50'>

        {/* O Menu fica FORA do <Routes>.
            Por isso ele aparece em TODAS as páginas. */}
        <Menu/>

        {/* max-w-4xl -> limita a largura do conteúdo
            mx-auto   -> centraliza na tela (margem automática dos lados) */}
        <div className='max-w-4xl mx-auto'>
          {/* Routes olha o endereço do navegador e mostra SÓ UMA página. */}
          <Routes>
            {/* Aqui criamos as rotas individualmente */}
            {/* Leia cada linha assim:
                "quando o endereço (path) for X, mostre (element) o componente Y" */}

            {/* endereço "/" (a página inicial) -> mostra Home */}
            <Route path='/' element={<Home/>}/>
            {/* endereço "/sobre" -> mostra Sobre */}
            <Route path='/sobre' element={<Sobre/>}/>
            {/* endereço "/contato" -> mostra Contato */}
            <Route path='/contato' element={<Contato/>}/>
          </Routes>

        </div>
      </div>

    </Router>
  )
}

// "export default App" = "este arquivo oferece o App para outros arquivos usarem".
// É assim que o main.jsx consegue fazer "import App from './App.jsx'".
export default App

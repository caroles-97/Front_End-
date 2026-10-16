// =====================================================================
// Home.jsx — A PÁGINA INICIAL
// Aparece quando o endereço é "/" (ex.: localhost:5173/).
// Esta página só MOSTRA coisas: não tem botões nem memória (useState).
// =====================================================================

import React from 'react'

// Criando o componente Home (um pedaço da tela, escrito como função).
const Home = () => {
  // return = o que vai aparecer na tela.
  return (
    // text-center -> texto centralizado | p-8 -> espaço interno grande
    <div className='text-center p-8'>
        {/* <h1> = título principal.
            text-4xl -> letra bem grande | font-bold -> negrito
            text-blue-600 -> cor azul    | mb-4 -> espaço embaixo */}
        <h1 className='text-4xl font-bold text-blue-600 mb-4'>
            Página inicial
        </h1>
        {/* <p> = parágrafo (texto comum).
            text-lg -> letra um pouco maior | text-gray-600 -> cor cinza */}
        <p className='text-lg text-gray-600'>
            Bem -vindo ao meu app com React Router!
        </p>

        {/* Caixa azul clarinha.
            mt-8 -> espaço em cima | p-6 -> espaço interno
            bg-blue-50 -> fundo azul bem claro | rounded-lg -> cantos arredondados */}
        <div className='mt-8 p-6 bg-blue-50 rounded-lg'>
            {/* <h2> = subtítulo (menor que o h1). */}
            <h2 className='text-xl font-semibold mb-2'>O que você encontra aqui:
            </h2>
            {/* <ul> = lista. Cada <li> é um item da lista.
                text-left -> texto alinhado à esquerda
                space-y-2 -> espaço entre um item e outro */}
            <ul className='text-left space-y-2'>
                <li>✅Navegação simples</li>
                <li>✅Múltiplas páginas</li>
                <li>✅React Router</li>
            </ul>

        </div>

    </div>
  )
}

// Deixa a Home disponível para o App.jsx usar.
export default Home

// =====================================================================
// Sobre.jsx — A PÁGINA "SOBRE"
// Aparece quando o endereço é "/sobre".
// Assim como a Home, esta página só MOSTRA textos.
// =====================================================================

import React from 'react'

// Criando o componente Sobre (um pedaço da tela, escrito como função).
const Sobre = () => {
  // return = o que vai aparecer na tela.
  return (
    // p-8 -> espaço interno grande em volta de tudo
    <div className='p-8'>
        {/* Título principal: grande, negrito e VERDE (cor desta página). */}
        <h1 className='text-4xl font-bold text-green-600 mb-4'>
            Sobre
        </h1>

        {/* max-w-2xl -> limita a largura, para o texto não ficar muito comprido */}
        <div className='max-w-2xl'>
            {/* Primeiro parágrafo: letra um pouco maior, cinza escuro. */}
            <p className='text-lg text-gray-700 mb-4'>
                ESTE É UM PROJETO SIMPLES PARA DEMONSTRAÇÃO DO USO DO REACT ROUTER.
            </p>
            {/* Segundo parágrafo: cinza um pouco mais claro. */}
            <p className='text-gray-600 mb-6'>
                Aqui você pode aprender como navegar entre diferentes páginas sem recarregar o navegador.
            </p>


        {/* Caixa verde clarinha com a lista de tecnologias.
            bg-green-50 -> fundo verde bem claro | rounded-lg -> cantos arredondados */}
        <div className='p-6 bg-green-50 rounded-lg'>
            {/* Subtítulo da caixa, em verde escuro. */}
            <h2 className='text-xl font-semibold mb-2 text-green-800'>
                Tecnologias usadas:
            </h2>
            {/* <ul> = lista | <li> = cada item
                space-y-2 -> espaço entre os itens */}
            <ul className='text-green-700 space-y-2'>
                {/* Obs.: o projeto, na verdade, usa React 19 (veja o package.json). */}
                <li>✔️React 18</li>
                <li>✔️Vite</li>
                <li>✔️React Router</li>
                <li>✔️Tailwind CSS</li>

            </ul>

        </div>
        </div>

    </div>
  )
}

// Deixa o Sobre disponível para o App.jsx usar.
export default Sobre

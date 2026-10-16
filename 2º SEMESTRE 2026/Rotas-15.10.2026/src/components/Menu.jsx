// =====================================================================
// Menu.jsx — A BARRA DE NAVEGAÇÃO (o menu escuro lá em cima)
// Tem 3 botões: Home, Sobre e Contato.
// O botão da página onde você está fica colorido; os outros ficam cinza.
// =====================================================================

import React from 'react'

// Traz 2 ferramentas do React Router:
// - Link        -> um link que troca de página SEM recarregar o site.
//                  (é o substituto do <a href> do HTML)
// - useLocation -> uma função que responde: "em qual endereço estou agora?"
import { Link, useLocation } from 'react-router-dom'

// Criando o componente Menu (um pedaço da tela, escrito como função).
const Menu = () => {
    // Pergunta ao React Router onde estamos e guarda a resposta em "location".
    // Exemplo: se você está na página Sobre, location.pathname vale '/sobre'.
    const location = useLocation();

    // Uma pequena função criada por nós. Em português:
    // "Recebo um endereço (path). O endereço atual é IGUAL (===) a ele?
    //  Se sim, respondo true (verdadeiro). Se não, respondo false (falso)."
    // Exemplo: estando na página Sobre -> isActive('/sobre') = true
    //                                     isActive('/')      = false
    const isActive = (path) => location.pathname === path;

    // O que aparece na tela:
    return (
        // <nav> = etiqueta do HTML para "área de navegação".
        // bg-gray-800 -> fundo cinza escuro | p-4 -> espaço interno
        <nav className='bg-gray-800 p-4'>
            {/* max-w-4xl mx-auto -> mesma largura e centralização do resto do site
                flex                -> coloca os itens um do lado do outro
                justify-between     -> empurra um item para cada ponta (nome à esquerda, botões à direita)
                items-center        -> alinha tudo no meio, na vertical */}
            <div className='max-w-4xl mx-auto flex justify-between items-center'>
                {/* O "logo" do site: texto branco, grande e em negrito. */}
                <div className='text-white text-xl font-bold'>Meu App</div>

                {/* Caixa com os 3 botões, um do lado do outro, com espaço entre eles. */}
                <div className='flex space-x-6'>
                    {/* ---------- BOTÃO HOME ----------
                        to='/' -> ao clicar, vai para o endereço "/" (página inicial).

                        Sobre o className abaixo:
                        - Está entre crases ` ` (e não aspas) porque mistura
                          texto fixo com um pedaço que muda, escrito dentro de ${ }.
                        - Classes fixas (sempre aplicadas):
                            px-3 py-2  -> espaço interno
                            rounded    -> cantos arredondados
                            transition -> mudança de cor suave
                        - O pedaço que muda usa a regra  "pergunta ? A : B"
                          que significa: "a resposta é sim? Use A. Se não, use B."
                            isActive('/') ?   -> "estou na página inicial?"
                            A (sim)           -> fundo azul e letra branca
                            B (não)           -> letra cinza; ao passar o mouse
                                                 (hover), fica branca com fundo cinza */}
                    <Link
                        to='/'
                        className={`px-3 py-2 rounded transition ${isActive('/')
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                    >
                        Home
                    </Link>

                    {/* ---------- BOTÃO SOBRE ----------
                        Igual ao de cima, mas:
                        - vai para '/sobre'
                        - quando ativo, o fundo fica VERDE (bg-green-600) */}
                    <Link
                        to='/sobre'
                        className={`px-3 py-2 rounded transition ${isActive('/sobre')
                            ? 'bg-green-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                    >
                        Sobre
                    </Link>

                    {/* ---------- BOTÃO CONTATO ----------
                        Igual aos outros, mas:
                        - vai para '/contato'
                        - quando ativo, o fundo fica ROXO (bg-purple-600) */}
                    <Link
                        to='/contato'
                        className={`px-3 py-2 rounded transition ${isActive('/contato')
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                    >
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    )
}

// Deixa o Menu disponível para o App.jsx usar.
export default Menu

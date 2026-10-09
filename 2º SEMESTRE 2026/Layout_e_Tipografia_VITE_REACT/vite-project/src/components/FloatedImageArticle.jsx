import React from 'react'

// imagem que flutua ao lado do txt

const FloatedImageArticle = () => {
  return (
    <article className='max-w-3xl mx-auto p-6'>
      <img src='https://picsum.photos/1200' alt='Imagem aleatória' className='float-left md:float-start mr-4 mb-4 w-full md:w-1/3 rounded-lg shadow-md'/>
      <p className='text-pink-300 leading-relaxed text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate voluptatibus non nisi, commodi nam quibusdam eaque distinctio velit, quam voluptatem fuga eos dicta sunt enim eum consequatur quae at?

      </p>

      <div className='clear-left md:clear-start mt-4 p-2 bg-emerald-300 rounded-lg'>
        Este bloco usa <code>clear-left</code> para limpar o float acima em telas menores ou maiores, experimente trocar para <code>md:clear-none</code> ou <code>clear-both</code> para ver o comportamento.
      </div>
      {/* clear-left: tira o float de cima */}

      
    </article>
  )
}

export default FloatedImageArticle

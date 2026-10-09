// Criar componente, uma hero section que tenha 3 colunas
// rafce
import React from 'react'

const ThreeColumnHero = () => {
  return (
    <section className='h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
        <div className='col-span-1 md:col-span-2 flex flex-col justify-center bg-gradient-to-r from-pink-600  via-purple-400 to-pink-100 text-amber-300 p-8 rounded-lg'>
            <h1 className='text-5xl md:text-7xl font-extrabold mb-4'>
                Explore o mundo
            </h1>
            <p className='text-lg md:text-2xl leading-relaxed'>
                {/* leading-relaxed: aumenta o espaçamento entre linhas */}
                Um experiência visual imersiva com React, Tailwind e imagens de altíssima qualidade
            </p>
        </div>    

        <div className='hidden md:block relative overflow-hidden rounded-lg'>
            {/* div que vai aparecer somente no breakpoint medio */}
            <img src="https://picsum.photos/2680/1770" alt="Imagem aleatória" className='object-cover w-full h-full'/>
            {/* object-cover: ajusta a imagem automaticamente junto com o zoom */}
        </div>
    </section>
  )
}

export default ThreeColumnHero


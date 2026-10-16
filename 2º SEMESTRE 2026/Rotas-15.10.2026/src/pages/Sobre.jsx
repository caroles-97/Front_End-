import React from 'react'

const Sobre = () => {
  return (
    <div className='p-8'>
        <h1 className='text-4xl font-bold text-green-600 mb-4'>
            Sobre
        </h1>

        <div className='max-w-2xl'>
            <p className='text-lg text-gray-700 mb-4'>
                ESTE É UM PROJETO SIMPLES PARA DEMONSTRAÇÃO DO USO DO REACT ROUTER.
            </p>
            <p className='text-gray-600 mb-6'>
                Aqui você pode aprender como navegar entre diferentes páginas sem recarregar o navegador.
            </p>
        

        <div className='p-6 bg-green-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-2 text-green-800'> 
                Tecnologias usadas:
            </h2>
            <ul className='text-green-700 space-y-2'>
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

export default Sobre

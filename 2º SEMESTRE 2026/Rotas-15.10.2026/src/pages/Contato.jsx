// Formulário com 3 campos

import React, {useState} from 'react'

const Contato = () => {
    // criando lógica 
    const [nome, SetNome] = useState ('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigada, ${nome}! Mensagem enviada!`);
        setNome('');
        setEmail('');
        setMensagem('');
    }


  return (
    <div className='p-8 max-w-md mx-auto'>
        <h1 className='text-4xl font-bold tex-pur mb-6'>
            Contato
        </h1>   

        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    {/* label - rótulo para input (usuário) */}
                    Nome:
                </label>
                <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Seu nome' required className='w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500'/>
                 {/* onChange - para capturar as mudanças (value) */}
            </div>
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    {/* label - rótulo para input (usuário) */}
                    E-mail:
                </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='seu@email.com' required className='w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500'/>
                 {/* onChange - para capturar as mudanças (value) */}
            </div>
            <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                    {/* label - rótulo para input (usuário) */}
                    Mensagem:
                </label>
                <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder='Sua mensagem ...' required className='w-full p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500'/>
                 {/* onChange - para capturar as mudanças (value) */}
            </div>

            {/* Botão para enviar os dados */}
            <button type='submit' className='w-full bg-fuchsia-400 text-white py-3 px-4 rounded-lg hover:bg-pink-400 transition-colors font-semibold'>
                Enviar mensagem
            </button>


        </form>   
    </div>
  )
}

export default Contato

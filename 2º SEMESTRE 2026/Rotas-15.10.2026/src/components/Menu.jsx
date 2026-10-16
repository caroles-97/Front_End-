import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className='bg-gray-800 p-4'>
            <div className='max-w-4xl mx-auto flex justify-between items-center'>
                <div className='text-white text-xl font-bold'>Meu App</div>

                <div className='flex space-x-6'>
                    <Link
                        to='/'
                        className={`px-3 py-2 rounded transition ${isActive('/')
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                    >
                        Home
                    </Link>

                    <Link
                        to='/sobre'
                        className={`px-3 py-2 rounded transition ${isActive('/sobre')
                            ? 'bg-green-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                    >
                        Sobre
                    </Link>

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

export default Menu

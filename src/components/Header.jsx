import React from 'react';
import icon from '../assets/icon.png'

export default function Header ({cartCount = 0}) {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center bg-gray-900 text-white px-6 py-4 rounded-lg shadow-md gap-4 mb-8">
            <div> <img src={icon} alt="BiaCandy's Logo" className="h-8 w-8 mr-2" />
                <h1>BiaCandy's</h1> 
            </div>
            {/* Barra de Busca */}
            <div className="w-full sm:w-1/2 max-w-md">
                <input type="text" placeholder="Buscar produtos..." className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500" ></input>
            </div>
            <div>
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">Buscar</button>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 transition-colors px-4 py-2 rounded-lg">
                <span>🛍️ Carrinho</span>
                <span className="bg-red-500 text-wite text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {cartCount}
                </span>
            </div>
            
        </header>
    );
}
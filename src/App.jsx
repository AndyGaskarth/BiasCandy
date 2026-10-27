import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Checkout from './components/checkout';

const mockProducts = [
  {
    id: 1,
    title: 'Bolo gelado de ninho!',
    price: 40,
    category: 'BolosPote',
    imagem: '[Ainda será enviado]',
  },
  {
    id: 2,
    title: 'Musse de maracujá',
    price: 15,
    category: 'SobremesasMini',
    imagem: '[Ainda será enviado]',
  },
  {
    id: 3,
    title: 'Cookie Gotas de Chocolate',
    price: 18,
    category: 'SobremesasMini',
    imagem: '[Ainda será enviado]',
  },
];

export default function App() {
  // ----- Estado -----
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); // home | checkout

  // ----- Funções -----
  const handleAddToCart = (product) => setCart((prev) => [...prev, product]);
  const handleClearCart = () => setCart([]);

  // Total do carrinho
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // ----- Render -----
  return (
    <div>
      <Header cartCount={cart.length}
      onOpenCheckout={() => setCurrentPage('checkout')}
      onGoHome={() => setCurrentPage ('home')} />
      <main className="max-w-6xl mx-auto mt-6">
        {currentPage === 'home' ? (
          <>
            {/* ---------- Vitrine ---------- */}
            <section className="lg:col-span-2 max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Nossa Vitrine de Produtos
              </h2>

              {/* Grid de cards */}
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {mockProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    image={
                      product.imagem !== '[Ainda será enviado]'
                        ? product.imagem
                        : 'https://via.placeholder.com/150'
                    }
                    onAddToCart={() => handleAddToCart(product)}
                  />
                ))}
              </div>
            </section>

            {/* ---------- Resumo do carrinho ---------- */}
            <aside className="bg-white p-6 rounded-xl shadow-md h-fit border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                Resumo do carrinho
              </h3>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Seu carrinho está vazio.</p>
              ) : (
                <div>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm border-b pb-2"
                    >
                      <span>{item.title}</span>
                      <span>{item.price.toFixed(2)}</span>
                    </div>
                  ))}

                  <div className="flex justify-between items-center font-bold mt-2">
                    <span>Total:</span>
                    <span>{totalPrice.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => setCurrentPage('checkout')}
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors shadow cursor-pointer"
                  >
                    Finalizar compra? Vamos lá!
                  </button>
                </div>
              )}
            </aside>
          </>
        ) : (
          // ---------- Checkout ----------
          <Checkout
            cart={cart}
            onBackToStore={() => setCurrentPage('home')}
            onClearCart={handleClearCart}
          />
        )}
      </main>
    </div>
  );
}
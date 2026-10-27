import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';


const mockProducts = [
  {
    id: 1,
    title: "Bolo gelado de ninho!",
    price: 40,
    category: "BolosPote",
    imagem: "[Ainda será enviado]"
  },
  {
    id: 2,
    title: "Musse de maracujá",
    price: 15,
    category: "SobremesasMini",
    imagem: "[Ainda será enviado]"
  },
  {
    id: 3,
    title: "Cookie Gotas de Chocolate",
    price: 18,
    category: "SobremesasMini",
    imagem: "[Ainda será enviado]"
  }
];

export default function App() {
  // Estado que vai guardar os Produtos adicionados ao carrinho
  const [cart, setCart] = useState ([]);

  // Função para adicionar produtos ao carrinho
  const handleAddToCart = (product) => {
    setCart ((preveCart) => [...preveCart, product]);
  };

  // Calculo do preço total do carrinho
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Header cartCount={cart.length} />
      <main>
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
                image={product.imagem !== '[Ainda será enviado]' ? product.imagem : 'https://via.placeholder.com/150'}
                onAddToCart={() => handleAddToCart(product)}   // <-- nome correto da prop
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
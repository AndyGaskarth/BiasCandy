import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Nossa Vitrine de Produtos</h2>
        <ProductCard 
          title="Produto Exemplo"
          price="99.99"
          category="Categoria Exemplo"
          image="https://via.placeholder.com/150"
          onAddCart={() => alert('Produto adicionado ao carrinho!')}
        />
      </main>
    </div>
  );
}
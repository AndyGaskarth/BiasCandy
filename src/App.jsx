import React from 'react';
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
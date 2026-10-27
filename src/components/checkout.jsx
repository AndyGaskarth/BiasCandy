import React, { useState } from 'react';

export default function Checkout({ cart, onBackToStore, onClearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cep: '',
    address: '',
    paymentMethod: 'pix',
  });

  const [orderCompleted, setOrderCompleted] = useState(false);

  // Preço total
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Seu carrinho está vazio! Adicione produtos antes de finalizar.');
      return;
    }
    // Simula finalização
    setOrderCompleted(true);
    onClearCart();
  };

  // -------------------------------------------------
  // Tela de confirmação
  // -------------------------------------------------
  if (orderCompleted) {
    return (
      <div className="p-6">
        <span>Congratulations 🎉</span>
        <h2>Pedido Realizado com SUCESSO!! UHUUUULLL!!</h2>
        <p>
          Obrigado pela compra, <strong>{formData.name || 'Cliente'}</strong>! Enviamos a
          confirmação para <strong>{formData.email || 'seu e‑mail'}</strong>.
        </p>
        <button
          onClick={onBackToStore}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow"
        >
          Voltar para a Loja
        </button>
      </div>
    );
  }

  // -------------------------------------------------
  // Formulário de checkout
  // -------------------------------------------------
  return (
    <div className="p-6">
      {/* Voltar à loja */}
      <button
        onClick={onBackToStore}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-6 transition cursor-pointer"
      >
        Voltar para a Loja
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">
        💳 Finalizar Compra
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="grid grid-cols-1 md:grid-cols-2 gap-8">Dados de Entrega</h3>

        <div>
          <label>Nome Completo</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label>E‑mail</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@email.com"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label>CEP</label>
            <input
              type="text"
              name="cep"
              required
              value={formData.cep}
              onChange={handleChange}
              placeholder="00000‑000"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label>Endereço</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Rua, número e bairro"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <h3>Forma de Pagamento</h3>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleChange}
            />
            <span> Cartão de Crédito </span>
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="pix"
              checked={formData.paymentMethod === 'pix'}
              onChange={handleChange}
            />
            <span> PIX </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md cursor-pointer"
        >
          Confirmar e Pagar R$ {totalPrice.toFixed(2)}
        </button>
      </form>

      {/* Resumo dos itens */}
      <div className="mt-8">
        <h3>Resumo dos Itens ({cart.length})</h3>
        {cart.length === 0 ? (
          <p>Nenhum item no carrinho.</p>
        ) : (
          <div>
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between py-1">
                <span>{item.title}</span>
                <span>{item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between font-bold mt-2">
          <span>Subtotal:</span>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Frete:</span>
          <span>Grátis</span>
        </div>
        <div className="flex justify-between text-blue-600 font-bold mt-2">
          <span>Total a pagar:</span>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
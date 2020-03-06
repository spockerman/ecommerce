import React from 'react';
import { ProductList } from './style';
 import { MdAddShoppingCart} from  'react-icons/md';

export default function Main() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom2.jpg?ims=326x" alt="Tenis Nike"/>
        <strong>Tenis Muito legal</strong>
        <span>R$189,99</span>
        <button type="button">
          <div>
          <MdAddShoppingCart size={16} color="#FFF"/>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ims=326x" alt="Tenis Nike"/>
        <strong>Tenis Muito legal</strong>
        <span>R$189,99</span>
        <button type="button">
          <div>
          <MdAddShoppingCart size={16} color="#FFF"/>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ims=326x" alt="Tenis Nike"/>
        <strong>Tenis Muito legal</strong>
        <span>R$189,99</span>
        <button type="button">
          <div>
          <MdAddShoppingCart size={16} color="#FFF"/>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ims=326x" alt="Tenis Nike"/>
        <strong>Tenis Muito legal</strong>
        <span>R$189,99</span>
        <button type="button">
          <div>
          <MdAddShoppingCart size={16} color="#FFF"/>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ims=326x" alt="Tenis Nike"/>
        <strong>Tenis Muito legal</strong>
        <span>R$189,99</span>
        <button type="button">
          <div>
          <MdAddShoppingCart size={16} color="#FFF"/>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

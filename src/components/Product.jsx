import React from 'react'

const Product = ({product}) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="cart-buttons">
            <select>
                <option value="">1</option>
            </select>
            <button>Adicionar ao Carrinho</button>
        </div>
    </div>
  )
}

export default Product
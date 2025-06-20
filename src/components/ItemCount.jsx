import { useMemo, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const ItemCount = ({ stock, initial = 0, onAdd, product }) => {
  const {
    cart: cartState, 
    addProductToCart, 
    removeProductFromCart, 
    getTotalPrice 
  } = useContext(CartContext);

  const count = useMemo(() => {
    const existingProduct = cartState.find(item => item.id === product.id);
    return existingProduct ? existingProduct.quantity : initial;
  }, [cartState, product.id, initial]);


  const handleIncrement = () => {
    addProductToCart(product)
    console.log(cartState)
  };

  const handleDecrement = () => {
    removeProductFromCart(product)
  };

  const buttonStyle = {
    backgroundColor: '#e5e7eb',
    padding: '0.25rem 0.75rem',
    border: 'none',
    cursor: 'pointer'
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: 'not-allowed'
  };

  const countStyle = {
    backgroundColor: '#f3f4f6',
    padding: '0.25rem 1.5rem',
    textAlign: 'center'
  };

  const addButtonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    width: '100%',
    cursor: 'pointer',
    marginTop: '0.5rem'
  };

  const disabledAddButtonStyle = {
    ...addButtonStyle,
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <button 
          onClick={handleDecrement}
          disabled={count == 0}
          style={count == 0 ? disabledButtonStyle : buttonStyle}
        >
          -
        </button>
        <span style={countStyle}>{count}</span>
        <button 
          onClick={handleIncrement}
          disabled={count >= stock}
          style={count >= stock ? disabledButtonStyle : buttonStyle}
        >
          +
        </button>
      </div>
      <button 
        onClick={() => onAdd(count)}
        disabled={stock == 0}
        style={stock == 0 ? disabledAddButtonStyle : addButtonStyle}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
        Stock disponible: {stock}
      </p>
    </div>
  );
};

export default ItemCount;
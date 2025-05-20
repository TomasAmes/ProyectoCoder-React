import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    console.log(`Se agregaron ${quantity} unidades de ${product.title} al carrito`);
  };

  if (!product) {
    return <p style={{ textAlign: 'center', color: '#6b7280', margin: '2rem 0' }}>Producto no encontrado</p>;
  }

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
  };

  const imageContainerStyle = {
    width: window.innerWidth < 768 ? '100%' : '50%'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '1.5rem',
    width: window.innerWidth < 768 ? '100%' : '50%'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const priceStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '1rem'
  };

  const descriptionStyle = {
    color: '#4b5563',
    marginBottom: '1rem'
  };

  const idStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1.5rem'
  };

  const dividerStyle = {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '1rem'
  };

  const successMessageStyle = {
    color: '#16a34a',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const buttonContainerStyle = {
    textAlign: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '0 0.5rem'
  };

  const greenButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#16a34a'
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img 
          src={product.pictureUrl} 
          alt={product.title} 
          style={imageStyle}
        />
      </div>
      <div style={contentStyle}>
        <div>
          <h2 style={titleStyle}>{product.title}</h2>
          <p style={priceStyle}>${product.price.toFixed(2)}</p>
          <p style={descriptionStyle}>{product.description}</p>
          <p style={idStyle}>ID: {product.id}</p>
        </div>

        <div style={dividerStyle}>
          {quantityAdded > 0 ? (
            <div style={buttonContainerStyle}>
              <p style={successMessageStyle}>
                ¡Producto agregado al carrito!
              </p>
              <Link 
                to="/cart" 
                style={greenButtonStyle}
              >
                Terminar compra
              </Link>
              <Link 
                to="/" 
                style={buttonStyle}
              >
                Seguir comprando
              </Link>
            </div>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
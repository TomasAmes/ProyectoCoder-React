import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      margin: '0.5rem'
    }}>
      <img 
        src={product.pictureUrl} 
        alt={product.title} 
        style={{
          width: '100%',
          height: '12rem',
          objectFit: 'cover'
        }}
      />
      <div style={{ padding: '1rem' }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '0.5rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {product.title}
        </h2>
        <p style={{ 
          color: '#666', 
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.description}
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '1rem' 
        }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            ${product.price.toFixed(2)}
          </span>
          <Link 
            to={`/item/${product.id}`}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
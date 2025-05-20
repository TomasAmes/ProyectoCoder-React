import Item from './Item';

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666', margin: '2rem 0' }}>No hay productos disponibles</p>;
  }

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem'
    }}>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../services/products.service';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let productsData;
        if (categoryId) {
          productsData = await getProductsByCategory(categoryId);
        } else {
          productsData = await getProducts();
        }
        setProducts(productsData);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error al cargar los productos. Por favor, intente nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red', margin: '2rem 0' }}>{error}</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem', 
        textAlign: 'center' 
      }}>
        {greeting || (categoryId ? `Categoría: ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` : 'Todos los Productos')}
      </h1>
      
      {loading ? (
        <Loader />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
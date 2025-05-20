import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/products.service';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productData = await getProductById(id);
        setProduct(productData);
        setError(null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Producto no encontrado o error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red', margin: '2rem 0' }}>{error}</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
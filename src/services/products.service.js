
const products = [
    {
      id: "1",
      title: "Smartphone Galaxy S23",
      description: "Último modelo de Samsung con cámara de alta resolución y batería de larga duración",
      price: 999.99,
      pictureUrl: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-s911bzkcaro/gallery/ar-galaxy-s23-s911-sm-s911bzkcaro-534863123?$650_519_PNG$",
      category: "electronics",
      stock: 15
    },
    {
      id: "2",
      title: "Laptop MacBook Pro",
      description: "Potente laptop con chip M2, ideal para profesionales y creativos",
      price: 1499.99,
      pictureUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
      category: "electronics",
      stock: 8
    },
    {
      id: "3",
      title: "Zapatillas Running",
      description: "Zapatillas deportivas con amortiguación especial para corredores",
      price: 129.99,
      pictureUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Ultraboost_Light_Naranja_GY9935_01_standard.jpg",
      category: "clothing",
      stock: 20
    },
    {
      id: "4",
      title: "Libro Clean Code",
      description: "Best-seller sobre buenas prácticas de programación y código limpio",
      price: 39.99,
      pictureUrl: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      category: "books",
      stock: 30
    },
    {
      id: "5",
      title: "Cafetera Automática",
      description: "Cafetera con molinillo integrado y múltiples opciones de preparación",
      price: 249.99,
      pictureUrl: "https://m.media-amazon.com/images/I/71RhNMn3MpL._AC_SL1500_.jpg",
      category: "home",
      stock: 12
    },
    {
      id: "6",
      title: "Auriculares Bluetooth",
      description: "Auriculares inalámbricos con cancelación de ruido y alta fidelidad",
      price: 199.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_601016-MLA52149572669_102022-F.webp",
      category: "electronics",
      stock: 25
    },
    {
      id: "7",
      title: "Camisa Formal",
      description: "Camisa de algodón de alta calidad para ocasiones formales",
      price: 59.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_856727-MLA53246224418_012023-F.webp",
      category: "clothing",
      stock: 40
    },
    {
      id: "8",
      title: "Libro JavaScript Avanzado",
      description: "Guía completa para dominar JavaScript y sus frameworks modernos",
      price: 45.99,
      pictureUrl: "https://m.media-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
      category: "books",
      stock: 18
    }
  ];
  
  // Simular un retraso de red
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  // Obtener todos los productos
  export const getProducts = async () => {
    await delay(1000);
    return [...products];
  };
  
  // Obtener un producto por ID
  export const getProductById = async (id) => {
    await delay(1000);
    const product = products.find(product => product.id === id);
    if (!product) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    return { ...product };
  };
  
  // Obtener productos por categoría
  export const getProductsByCategory = async (categoryId) => {
    await delay(1000);
    const filteredProducts = products.filter(product => product.category === categoryId);
    return [...filteredProducts];
  };
  
  // Obtener todas las categorías disponibles
  export const getCategories = async () => {
    await delay(500);
    const categories = [
      { id: "electronics", name: "Electrónica" },
      { id: "clothing", name: "Ropa" },
      { id: "books", name: "Libros" },
      { id: "home", name: "Hogar" }
    ];
    return categories;
  };
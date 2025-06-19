const products = [
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
      id: "5",
      title: "Cafetera Automática",
      description: "Cafetera con molinillo integrado y múltiples opciones de preparación",
      price: 249.99,
      pictureUrl: "https://m.media-amazon.com/images/I/71RhNMn3MpL._AC_SL1500_.jpg",
      category: "home",
      stock: 12
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
  ];
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  export const getProducts = async () => {
    await delay(1000);
    return [...products];
  };
  
  export const getProductById = async (id) => {
    await delay(1000);
    const product = products.find(product => product.id === id);
    if (!product) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    return { ...product };
  };
  
  export const getProductsByCategory = async (categoryId) => {
    await delay(1000);
    const filteredProducts = products.filter(product => product.category === categoryId);
    return [...filteredProducts];
  };
  
  export const getCategories = async () => {
    await delay(500);
    const categories = [
      { id: "clothing", name: "Clothes" },
      { id: "home", name: "Home" }
    ];
    return categories;
  };
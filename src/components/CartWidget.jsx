import { useState } from 'react';

const CartWidget = () => {
// Este estado podría conectarse a un contexto de carrito real en el futuro
const [itemCount, setItemCount] = useState(0);

return (
<div className="relative inline-flex items-center">
<div className="text-2xl">🛒</div>
{itemCount > 0 && (
<span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
{itemCount}
</span>
)}
</div>
);
};

export default CartWidget;
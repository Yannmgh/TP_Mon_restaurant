import { createContext, useContext, useMemo, useReducer } from 'react';
import { PRODUCTS } from '../data/products';
import { cartReducer, initialCartState } from './cartReducer';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (id) => dispatch({ type: 'ADD_ITEM', payload: { id } });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  // Lignes du panier dérivées de l'état + des produits (nom, prix...).
  const lines = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const product = PRODUCTS.find((p) => String(p.id) === String(id));
        if (!product || qty <= 0) return null;
        return { id: product.id, product, qty, subtotal: product.price * qty };
      })
      .filter(Boolean);
  }, [cart]);

  const cartCount = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);
  const cartTotal = useMemo(() => lines.reduce((sum, l) => sum + l.subtotal, 0), [lines]);

  const getQty = (id) => cart[id] || 0;

  const value = { cart, lines, cartCount, cartTotal, addItem, removeItem, clearCart, getQty };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart doit être utilisé dans un CartProvider');
  return ctx;
}

// Le panier est un Record<productId, quantité>. On ne stocke que l'id et la
// quantité ici : les infos produit (nom, prix...) sont relues depuis PRODUCTS
// au moment de l'affichage, pour ne jamais dupliquer la source de vérité.
export const initialCartState = {};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { id } = action.payload;
      const qty = state[id] || 0;
      return { ...state, [id]: qty + 1 };
    }

    case 'REMOVE_ITEM': {
      const { id } = action.payload;
      const qty = state[id] || 0;
      if (qty <= 0) return state; // produit absent : on ne fait rien
      if (qty === 1) {
        const next = { ...state };
        delete next[id];
        return next;
      }
      return { ...state, [id]: qty - 1 };
    }

    case 'CLEAR_CART':
      return initialCartState;

    default:
      return state;
  }
}

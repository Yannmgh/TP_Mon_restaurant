import { useState } from 'react';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './Button';

const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';
const plural = (n, w) => `${n} ${w}${n > 1 ? 's' : ''}`;

export default function CartModal({ closing, onClose }) {
  const { lines, cartCount, cartTotal, addItem, removeItem } = useCart();
  // État purement visuel : lignes en cours de suppression (animation avant
  // de réellement retirer l'article du panier via le reducer).
  const [removingIds, setRemovingIds] = useState({});

  const handleDec = (id, qty) => {
    if (qty === 1) {
      if (removingIds[id]) return;
      setRemovingIds((r) => ({ ...r, [id]: true }));
      setTimeout(() => {
        removeItem(id);
        setRemovingIds((r) => {
          const next = { ...r };
          delete next[id];
          return next;
        });
      }, 280);
      return;
    }
    removeItem(id);
  };

  const hasItems = lines.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-22">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-overlay backdrop-blur-sm ${
          closing ? 'animate-mr-fade-out' : 'animate-mr-fade-in'
        }`}
      />
      <div
        role="dialog"
        aria-label="Panier"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-2xl border border-border bg-surface shadow-2xl ${
          closing ? 'animate-mr-zoom-out' : 'animate-mr-zoom-in'
        }`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-5">
          <div className="flex items-baseline gap-2.5">
            <h2 className="m-0 text-xl font-bold text-text">Votre panier</h2>
            {hasItems && <span className="text-sm text-muted">{plural(cartCount, 'article')}</span>}
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer le panier"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text-2 transition-colors hover:bg-soft"
          >
            <X size={20} />
          </button>
        </div>

        {hasItems ? (
          <>
            <ul className="m-0 flex flex-col p-0 px-6">
              {lines.map((l, i) => {
                const isRemoving = !!removingIds[l.id];
                return (
                  <li
                    key={l.id}
                    className={`flex gap-4 overflow-hidden border-b border-border py-4 ${
                      isRemoving ? 'animate-mr-line-out' : 'animate-mr-rise'
                    }`}
                    style={isRemoving ? undefined : { animationDelay: `${120 + i * 60}ms` }}
                  >
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[repeating-linear-gradient(135deg,var(--ph1)_0_8px,var(--ph2)_8px_16px)]">
                      <img
                        src={l.product.image}
                        alt=""
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                      <div className="flex justify-between gap-3">
                        <div className="flex min-w-0 flex-col gap-0.5">
                          <span className="text-[15px] font-semibold text-text">{l.product.name}</span>
                          <span className="text-[13px] text-muted">{eur(l.product.price)} / unité</span>
                        </div>
                        <span className="whitespace-nowrap text-[15px] font-bold text-text">
                          {eur(l.subtotal)}
                        </span>
                      </div>
                      <div className="inline-flex w-fit items-center rounded-lg border border-border bg-surface">
                        <button
                          onClick={() => handleDec(l.id, l.qty)}
                          aria-label="Diminuer la quantité"
                          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-text transition-colors hover:bg-soft"
                        >
                          <Minus size={16} strokeWidth={2.5} />
                        </button>
                        <span
                          key={l.qty}
                          className="inline-block min-w-8 animate-mr-num text-center text-sm font-bold text-text"
                        >
                          {l.qty}
                        </span>
                        <button
                          onClick={() => addItem(l.id)}
                          aria-label="Augmenter la quantité"
                          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-accent-text transition-colors hover:bg-soft"
                        >
                          <Plus size={16} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-5 px-6 pb-6 pt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-base font-medium text-text-3">Total</span>
                <span key={cartTotal} className="inline-block animate-mr-num text-[28px] font-bold text-accent-text">
                  {eur(cartTotal)}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="lg" onClick={onClose} className="flex-1 basis-40">
                  Continuer mes achats
                </Button>
                <Button variant="primary" size="lg" className="flex-1 basis-40">
                  Commander
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3.5 px-6 pb-10 pt-12 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-accent-text">
              <ShoppingBag size={28} />
            </span>
            <h3 className="m-0 text-lg font-semibold text-text">Votre panier est vide</h3>
            <p className="m-0 max-w-72 text-sm leading-relaxed text-muted">
              Ajoutez des plats depuis le menu pour commencer votre commande.
            </p>
            <Button variant="primary" size="md" onClick={onClose} className="mt-2">
              Voir le menu
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

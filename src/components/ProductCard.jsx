import { useEffect, useRef, useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFilters } from '../context/FilterContext';
import Button from './Button';

const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

export default function ProductCard({ product }) {
  const { getQty, addItem, removeItem } = useCart();
  const { tag, toggleTag } = useFilters();
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const timerRef = useRef();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const qty = getQty(product.id);
  const inCart = qty > 0;

  const handleAdd = () => {
    addItem(product.id);
    setAdded(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 1100);
  };

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex h-full flex-col rounded-2xl border bg-surface font-sans shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out ${
        hover ? '-translate-y-1.5 border-border-strong shadow-xl' : 'translate-y-0 border-border'
      }`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-[15px]">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out ${
              hover ? 'scale-[1.08]' : 'scale-100'
            }`}
          />
        ) : (
          <div
            className={`absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--ph1)_0_12px,var(--ph2)_12px_24px)] transition-transform duration-500 ease-out ${
              hover ? 'scale-[1.08]' : 'scale-100'
            }`}
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-chip px-2.5 py-1 text-xs font-medium text-text-2">
          {product.category}
        </span>
        {inCart && (
          <span
            key={qty}
            className="absolute right-3 top-3 animate-mr-pop rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-zinc-950"
          >
            {qty} au panier
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="m-0 text-lg font-semibold text-text">{product.name}</h3>
          <span className="whitespace-nowrap text-lg font-bold text-accent-text">
            {eur(product.price)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((t) => {
            const active = tag === t;
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`cursor-pointer rounded-full border px-2.5 py-0.5 text-xs transition-colors duration-250 ease-out hover:border-orange-500 ${
                  active
                    ? 'border-orange-500 bg-orange-500 font-semibold text-zinc-950'
                    : 'border-border-strong bg-soft font-medium text-text-2'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-1">
          <Button variant="primary" size="sm" onClick={handleAdd}>
            {added ? (
              <span className="inline-flex animate-mr-fade-in items-center gap-2">
                <Check size={16} strokeWidth={3} className="animate-mr-check" />
                Ajouté !
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Plus size={16} strokeWidth={2.5} />
                Ajouter au panier
              </span>
            )}
          </Button>
          <Button variant="outline" size="sm" onClick={() => removeItem(product.id)} disabled={!inCart}>
            <Minus size={16} strokeWidth={2.5} />
            Retirer du panier
          </Button>
        </div>
      </div>
    </article>
  );
}

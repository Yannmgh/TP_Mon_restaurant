import { ShoppingCart } from 'lucide-react';

export default function CartIcon({ count, onClick }) {
  const hasBadge = count > 0;

  return (
    <button
      onClick={onClick}
      aria-label="Ouvrir le panier"
      className="absolute right-6 top-6 flex h-13 w-13 animate-mr-pop cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-50 backdrop-blur-sm transition-colors duration-200 ease-out [animation-delay:850ms] hover:border-orange-500"
    >
      <ShoppingCart size={22} />
      {hasBadge && (
        <span
          key={count}
          className="absolute -right-1 -top-1 flex h-[22px] min-w-[22px] animate-mr-bounce items-center justify-center rounded-full border-2 border-zinc-900 bg-orange-500 px-1.5 text-xs font-bold text-zinc-950"
        >
          {count}
        </span>
      )}
    </button>
  );
}

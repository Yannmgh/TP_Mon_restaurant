import { useFilters } from '../context/FilterContext';

const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

export default function PriceFilter() {
  const { maxPrice, setMaxPrice, maxPriceLimit } = useFilters();

  return (
    <section className="relative rounded-2xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Prix maximum
        </h3>
        <span className="text-sm font-bold text-accent-text">{eur(maxPrice)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={maxPriceLimit}
        step={0.5}
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        aria-label="Prix maximum"
        className="m-0 w-full cursor-pointer accent-orange-500"
      />
      <div className="mt-1.5 flex justify-between text-xs text-muted">
        <span>0 €</span>
        <span>{maxPriceLimit} €</span>
      </div>
    </section>
  );
}

import { CATEGORIES, PRODUCTS } from '../data/products';
import { useFilters } from '../context/FilterContext';

const ALL = { label: 'Tous les plats', key: null };
const ITEMS = [ALL, ...CATEGORIES.map((c) => ({ label: c, key: c }))];

export default function CategoryBlock() {
  const { category, setCategory } = useFilters();
  const activeIndex = Math.max(0, ITEMS.findIndex((c) => c.key === category));

  return (
    <section className="relative rounded-2xl border border-border bg-surface p-5">
      <h3 className="m-0 mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        Catégories
      </h3>
      <ul className="relative m-0 flex list-none flex-col gap-0.5 p-0">
        {/* Indicateur orange qui glisse derrière la catégorie active. */}
        <li
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-9 rounded-lg bg-orange-500 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${activeIndex * 38}px)` }}
        />
        {ITEMS.map((c) => {
          const active = category === c.key;
          const count = c.key ? PRODUCTS.filter((p) => p.category === c.key).length : PRODUCTS.length;
          return (
            <li key={c.label} className="relative">
              <button
                onClick={() => setCategory(c.key)}
                className={`flex h-9 w-full cursor-pointer items-center justify-between rounded-lg px-3 text-left font-sans text-sm transition-colors duration-300 ease-out hover:bg-orange-500/10 ${
                  active ? 'font-semibold text-zinc-950' : 'font-medium text-text-2'
                }`}
              >
                <span>{c.label}</span>
                <span className={`text-xs font-semibold ${active ? 'text-zinc-950' : 'text-muted'}`}>
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

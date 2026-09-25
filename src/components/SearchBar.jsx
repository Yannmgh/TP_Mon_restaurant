import { Search, X } from 'lucide-react';
import { useFilters } from '../context/FilterContext';

export default function SearchBar() {
  const { query, setQuery } = useFilters();

  return (
    <div className="relative ml-auto block max-w-96 flex-1 basis-64">
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un plat, un ingrédient…"
        aria-label="Rechercher"
        className="h-[42px] w-full rounded-lg border border-border bg-surface px-10 font-sans text-sm text-text outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus:border-orange-500 focus:ring-4 focus:ring-orange-500/25"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          aria-label="Effacer la recherche"
          className="absolute right-1.5 top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:bg-soft hover:text-text"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

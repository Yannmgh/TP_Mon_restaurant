import { createContext, useContext, useMemo, useState } from 'react';
import { PRODUCTS } from '../data/products';

const FilterContext = createContext(null);

// Recherche insensible à la casse et aux accents (normalize NFD retire les
// diacritiques) + cas particulier du "œ" que NFD ne décompose pas.
function normalize(str) {
  return String(str)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/œ/g, 'oe')
    .toLowerCase();
}

// Prix max du slider = prix du produit le plus cher, arrondi à l'euro supérieur.
export const MAX_PRICE_LIMIT = Math.ceil(Math.max(...PRODUCTS.map((p) => p.price)));

export function FilterProvider({ children }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT);

  const toggleTag = (t) => setTag((current) => (current === t ? null : t));

  const reset = () => {
    setQuery('');
    setCategory(null);
    setTag(null);
    setMaxPrice(MAX_PRICE_LIMIT);
  };

  const filteredProducts = useMemo(() => {
    const q = normalize(query.trim());
    return PRODUCTS.filter((p) => {
      if (category && p.category !== category) return false;
      if (tag && !p.tags.includes(tag)) return false;
      if (p.price > maxPrice) return false;
      if (q) {
        const haystack = normalize([p.name, p.category, ...p.tags, ...p.keywords].join(' '));
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, category, tag, maxPrice]);

  const activeFiltersCount =
    (category ? 1 : 0) + (tag ? 1 : 0) + (maxPrice < MAX_PRICE_LIMIT ? 1 : 0);
  const filtersActive = activeFiltersCount > 0 || query.trim().length > 0;

  const value = {
    query,
    setQuery,
    category,
    setCategory,
    tag,
    toggleTag,
    maxPrice,
    setMaxPrice,
    maxPriceLimit: MAX_PRICE_LIMIT,
    reset,
    filteredProducts,
    activeFiltersCount,
    filtersActive,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function useFilters() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilters doit être utilisé dans un FilterProvider');
  return ctx;
}

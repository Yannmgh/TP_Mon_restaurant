import { useEffect, useRef, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import { FilterProvider, useFilters } from './context/FilterContext';
import { ThemeProvider } from './context/ThemeContext';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import FilterDrawer from './components/FilterDrawer';
import ProductCard from './components/ProductCard';
import EmptyState from './components/EmptyState';
import CartModal from './components/CartModal';
import Footer from './components/Footer';

const plural = (n, w) => `${n} ${w}${n > 1 ? 's' : ''}`;
const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

function MenuPage() {
  const {
    filteredProducts,
    activeFiltersCount,
    filtersActive,
    reset,
    category,
    tag,
    maxPrice,
    maxPriceLimit,
  } = useFilters();
  useCart(); // s'assure que le CartProvider est bien monté au-dessus
  const reduced = usePrefersReducedMotion();

  // Ouverture/fermeture de la modal panier et du tiroir de filtres : gérées
  // en useState local (exigence du TP), avec un état "closing" le temps de
  // rejouer l'animation de sortie avant démontage.
  const [cartOpen, setCartOpen] = useState(false);
  const [cartClosing, setCartClosing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const after = (fn, ms) => {
    timers.current.push(setTimeout(fn, reduced ? 0 : ms));
  };

  const openCart = () => {
    setCartClosing(false);
    setCartOpen(true);
  };
  const closeCart = () => {
    if (!cartOpen || cartClosing) return;
    setCartClosing(true);
    after(() => {
      setCartOpen(false);
      setCartClosing(false);
    }, 200);
  };

  const openDrawer = () => {
    setDrawerClosing(false);
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    if (!drawerOpen || drawerClosing) return;
    setDrawerClosing(true);
    after(() => {
      setDrawerOpen(false);
      setDrawerClosing(false);
    }, 250);
  };

  const contextLabel = [category, tag, maxPrice < maxPriceLimit ? `≤ ${eur(maxPrice)}` : null]
    .filter(Boolean)
    .join(' · ');
  const resultLabel = `${plural(filteredProducts.length, 'plat')}${
    contextLabel ? ` · ${contextLabel}` : ''
  }`;

  return (
    <div className="min-h-screen bg-page text-text">
      <Header onCartClick={openCart} />
      <Nav />

      <main
        id="menu"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:grid-cols-[280px_minmax(0,1fr)]"
      >
        <div className="hidden lg:sticky lg:top-24 lg:block">
          <Sidebar />
        </div>

        <section className="flex min-w-0 flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="m-0 font-display text-4xl uppercase text-text">Notre menu</h2>
              <p className="m-0 text-sm text-muted">{resultLabel}</p>
            </div>
            <div className="flex items-center gap-2">
              {filtersActive && (
                <button
                  onClick={reset}
                  className="h-9 cursor-pointer rounded-lg px-3 font-sans text-sm font-semibold text-accent-text transition-colors hover:bg-soft"
                >
                  Réinitialiser
                </button>
              )}
              <button
                onClick={openDrawer}
                className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-border-strong px-3.5 font-sans text-sm font-semibold text-text transition-colors hover:bg-soft lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filtres
                {activeFiltersCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1.5 text-xs font-bold text-zinc-950">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            // La clé change avec la liste filtrée : le grid est remonté et
            // l'animation d'entrée des cartes est rejouée en cascade.
            <div
              key={filteredProducts.map((p) => p.id).join(',')}
              className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6"
            >
              {filteredProducts.map((p, i) => (
                <div
                  key={p.id}
                  className="h-full animate-mr-rise"
                  style={{ animationDelay: `${Math.min(i, 12) * 50}ms` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState onReset={reset} />
          )}
        </section>
      </main>

      <Footer />

      <FilterDrawer open={drawerOpen} closing={drawerClosing} onClose={closeDrawer} />
      {cartOpen && <CartModal closing={cartClosing} onClose={closeCart} />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FilterProvider>
          <MenuPage />
        </FilterProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import CartIcon from './CartIcon';

export default function Header({ onCartClick }) {
  const { cartCount } = useCart();
  const reduced = usePrefersReducedMotion();
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  // Parallaxe du fond au scroll : translateY = distance parcourue × 0,35.
  // Désactivée si l'utilisateur préfère un mouvement réduit.
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const header = headerRef.current;
        const bg = bgRef.current;
        if (!header || !bg) return;
        const rect = header.getBoundingClientRect();
        const y = Math.max(0, Math.min(-rect.top, rect.height)) * 0.35;
        bg.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <header
      ref={headerRef}
      className="relative flex h-65 items-center justify-center overflow-hidden bg-[#26262a] sm:h-85 lg:h-105"
    >
      <div ref={bgRef} className="absolute inset-x-0 -top-[40%] -bottom-[10%] will-change-transform">
        {!imgError ? (
          <img
            src="/images/header.jpg"
            alt="Cuisine du restaurant en service"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full animate-mr-kenburns object-cover"
          />
        ) : (
          <div className="absolute inset-0 animate-mr-kenburns bg-[repeating-linear-gradient(135deg,#2e2e33_0_14px,#26262a_14px_28px)]" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/45 to-zinc-950/85" />

      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <span className="h-1 w-14 animate-mr-grow rounded-full bg-orange-500 [animation-delay:150ms]" />
        <h1 className="m-0 animate-mr-rise font-display text-[56px] font-normal uppercase leading-[0.95] tracking-[0.01em] text-zinc-50 [animation-delay:450ms] sm:text-[84px] lg:text-[112px]">
          Mon Restaurant
        </h1>
      </div>

      <CartIcon count={cartCount} onClick={onCartClick} />
    </header>
  );
}

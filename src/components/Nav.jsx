import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';

export default function Nav() {
  const { isDark, toggleTheme } = useTheme();
  const themeLabel = isDark ? 'Passer en mode clair' : 'Passer en mode sombre';

  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-nav backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3.5 px-6 py-3.5">
        <a href="#" className="flex items-center gap-3 text-text">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-display text-base text-zinc-950">
            MR
          </span>
          <span className="font-display text-xl uppercase tracking-[0.02em] text-text">
            Mon Restaurant
          </span>
        </a>
        <a href="#menu" className="border-b-2 border-orange-500 py-1.5 text-sm font-semibold text-text">
          Menu
        </a>
        <SearchBar />
        <button
          onClick={toggleTheme}
          aria-label={themeLabel}
          title={themeLabel}
          className="flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface text-text transition-colors hover:border-orange-500"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

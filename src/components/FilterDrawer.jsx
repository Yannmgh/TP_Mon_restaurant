import { X } from 'lucide-react';
import { useFilters } from '../context/FilterContext';
import Button from './Button';
import Sidebar from './Sidebar';

export default function FilterDrawer({ open, closing, onClose }) {
  const { filteredProducts } = useFilters();
  if (!open) return null;

  const count = filteredProducts.length;
  const label = `Voir ${count} plat${count > 1 ? 's' : ''}`;

  return (
    <div className="fixed inset-0 z-40 flex justify-end overflow-hidden">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-overlay backdrop-blur-sm ${
          closing ? 'animate-mr-fade-out' : 'animate-mr-fade-in'
        }`}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex h-full w-[min(340px,88%)] flex-col gap-5 overflow-y-auto border-l border-border bg-surface p-5 shadow-2xl ${
          closing ? 'animate-mr-slide-out-r' : 'animate-mr-slide-in-r'
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="m-0 font-display text-2xl uppercase text-text">Filtres</h2>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text-2 transition-colors hover:bg-soft"
          >
            <X size={20} />
          </button>
        </div>
        <Sidebar />
        <Button variant="primary" size="lg" onClick={onClose} className="shrink-0">
          {label}
        </Button>
      </div>
    </div>
  );
}

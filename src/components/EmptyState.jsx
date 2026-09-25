import { SearchX } from 'lucide-react';
import Button from './Button';

export default function EmptyState({ onReset }) {
  return (
    <div className="flex animate-mr-fade-in flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-border-strong px-6 py-18 text-center">
      <span className="flex h-16 w-16 animate-mr-float items-center justify-center rounded-full bg-surface text-accent-text">
        <SearchX size={28} />
      </span>
      <h3 className="m-0 text-xl font-semibold text-text">
        Aucun produit ne correspond à vos filtres
      </h3>
      <p className="m-0 max-w-96 text-sm leading-relaxed text-muted">
        Essayez un autre mot-clé, une autre catégorie ou un prix maximum plus élevé.
      </p>
      <Button variant="primary" size="md" onClick={onReset} className="mt-2">
        Réinitialiser les filtres
      </Button>
    </div>
  );
}

import { X } from 'lucide-react';
import { TAGS } from '../data/products';
import { useFilters } from '../context/FilterContext';

export default function TagCloud() {
  const { tag, toggleTag } = useFilters();

  return (
    <section className="relative rounded-2xl border border-border bg-surface p-5">
      <h3 className="m-0 mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        Ingrédients
      </h3>
      <div className="flex flex-wrap gap-2">
        {TAGS.map((t) => {
          const active = tag === t;
          return (
            <button
              key={t}
              onClick={() => toggleTag(t)}
              className={`inline-flex cursor-pointer items-center rounded-full border px-3 py-1 font-sans text-[13px] transition-colors duration-250 ease-out hover:border-orange-500 ${
                active
                  ? 'border-orange-500 bg-orange-500 font-semibold text-zinc-950'
                  : 'border-border-strong bg-soft font-medium text-text-2'
              }`}
            >
              {t}
              <span
                className="inline-flex overflow-hidden transition-[width,margin-left,opacity] duration-250 ease-out"
                style={{ width: active ? 14 : 0, marginLeft: active ? 4 : 0, opacity: active ? 1 : 0 }}
              >
                <X
                  size={14}
                  className={`shrink-0 transition-transform duration-300 ${
                    active ? 'rotate-0 scale-100' : '-rotate-90 scale-40'
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

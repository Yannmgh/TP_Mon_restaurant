import { Clock, MapPin } from 'lucide-react';

// lucide-react a retiré les icônes de marques (Instagram, Facebook…) : on les
// reproduit ici en SVG inline, avec les tracés d'origine de la maquette.
function InstagramIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <img
        src="/images/footer.jpg"
        alt=""
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 px-6 py-14 pb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-display text-base text-zinc-950">
              MR
            </span>
            <span className="font-display text-xl uppercase text-zinc-50">Mon Restaurant</span>
          </div>
          <p className="m-0 text-sm leading-relaxed">Street food maison, sur place ou à emporter.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="m-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-50">
            <MapPin size={16} className="text-orange-400" />
            Adresse
          </h4>
          <p className="m-0 text-sm leading-relaxed">
            12 rue des Halles
            <br />
            75001 Paris
            <br />
            01 23 45 67 89
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="m-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-50">
            <Clock size={16} className="text-orange-400" />
            Horaires
          </h4>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm leading-relaxed">
            <span>Lun – Jeu</span>
            <span className="text-zinc-200">11h30 – 23h</span>
            <span>Ven – Sam</span>
            <span className="text-zinc-200">11h30 – 1h</span>
            <span>Dimanche</span>
            <span className="text-zinc-200">18h – 23h</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-50">
            Suivez-nous
          </h4>
          <div className="flex gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-50 transition-colors hover:bg-orange-500 hover:text-zinc-950"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-50 transition-colors hover:bg-orange-500 hover:text-zinc-950"
            >
              <FacebookIcon />
            </a>
          </div>
          <span className="text-sm">@monrestaurant</span>
        </div>
      </div>
      <div className="relative border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-5 text-[13px] text-zinc-400">
          © {new Date().getFullYear()} Mon Restaurant
        </div>
      </div>
    </footer>
  );
}

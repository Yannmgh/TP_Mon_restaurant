# Mon Restaurant

TP React : site vitrine et commande en ligne pour un restaurant de street food. One-page avec bannière, recherche, filtres (catégories, prix, ingrédients), grille de produits, panier en modal, et thème clair/sombre.

Maquette de référence : [`design_handoff_mon_restaurant/`](../design_handoff_mon_restaurant) (prototypes HTML, non utilisés en production — l'interface a été recréée en React + Tailwind).

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/) (JavaScript, pas de TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (pas de `tailwind.config.js` : tokens et animations définis dans `src/index.css`)
- [lucide-react](https://lucide.dev/) pour les icônes
- Polices Google Fonts : Anton (titres) et DM Sans (texte)

## Démarrage

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
npm run lint      # oxlint
```

## Fonctionnalités

- **Recherche** insensible à la casse et aux accents, sur le nom, la catégorie, les tags et les mots-clés des produits.
- **Filtres combinés** (catégorie, tag ingrédient, prix maximum) avec réinitialisation, gérés via `FilterContext` (`useContext` + `useMemo`).
- **Panier** géré via `CartContext` avec `useReducer` (`src/context/cartReducer.js`) : ajout, retrait unitaire, jamais de quantité négative, total dérivé de l'état.
- **Thème clair/sombre** via `ThemeContext`, mémorisé dans `localStorage`.
- **Responsive** : sidebar de filtres sur desktop, tiroir (`FilterDrawer`) sur mobile/tablette.
- **Animations** (entrées en cascade, survols, panier, tiroir, modal…) en CSS/Tailwind, avec respect de `prefers-reduced-motion`.

## Structure

```
src/
  components/   Composants d'interface (Header, Nav, Sidebar, ProductCard, CartModal, Footer…)
  context/      FilterContext, CartContext (+ cartReducer), ThemeContext
  data/         products.js — catalogue des produits, catégories et tags
  hooks/        usePrefersReducedMotion
  index.css     Tokens de couleur, thème Tailwind, keyframes des animations
public/
  images/       Photos du site (voir CREDITS.md pour les sources)
```



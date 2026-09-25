// Catégories affichées dans la sidebar, dans l'ordre voulu.
export const CATEGORIES = [
  'Burger',
  'Pizza',
  'Kebab',
  'Poulet frit',
  'Accompagnements',
  'Desserts',
  'Boissons',
];

// Tags ingrédients utilisés par le TagCloud (dérivés des produits ci-dessous).
export const TAGS = [
  'Bœuf',
  'Tomate',
  'Oignons',
  'Cornichons',
  'Emmental',
  'Champignons',
  'Menu',
  'Bacon',
  'Pepperoni',
  'Mozzarella',
  'Chèvre',
  'Agneau',
  'Poulet',
  'Sauce épicée',
  'Chou',
  'Crêpe',
  'Chantilly',
  'Chocolat',
  'Café',
  'Citron',
  'Vanille',
];

export const PRODUCTS = [
  // --- Burger ---
  { id: 1, name: 'Burger Classique', category: 'Burger', price: 9.5, image: '/images/products/burger-classique.jpg', tags: ['Bœuf', 'Tomate', 'Oignons', 'Cornichons'], keywords: ['burger', 'classique'] },
  { id: 2, name: 'Double Cheese', category: 'Burger', price: 11.9, image: '/images/products/double-cheese.jpg', tags: ['Bœuf', 'Emmental', 'Cornichons'], keywords: ['fromage', 'cheese'] },
  { id: 3, name: 'Burger Forestier', category: 'Burger', price: 12.5, image: '/images/products/burger-forestier.jpg', tags: ['Bœuf', 'Champignons', 'Emmental'], keywords: ['champignon', 'forestier'] },
  { id: 4, name: 'Menu Burger', category: 'Burger', price: 14.5, image: '/images/products/menu-burger.jpg', tags: ['Bœuf', 'Menu'], keywords: ['menu', 'frites', 'boisson'] },
  { id: 5, name: 'Burger Bacon', category: 'Burger', price: 13, image: '/images/products/burger-bacon.jpg', tags: ['Bœuf', 'Bacon', 'Emmental'], keywords: ['bacon', 'fumé', 'grillé'] },

  // --- Pizza ---
  { id: 6, name: 'Pizza Margherita', category: 'Pizza', price: 10, image: '/images/products/pizza-margherita.jpg', tags: ['Tomate', 'Emmental'], keywords: ['végétarien', 'italienne'] },
  { id: 7, name: 'Pizza Reine', category: 'Pizza', price: 12, image: '/images/products/pizza-reine.jpg', tags: ['Tomate', 'Champignons', 'Emmental'], keywords: ['jambon', 'italienne'] },
  { id: 8, name: 'Pizza Pepperoni', category: 'Pizza', price: 12.5, image: '/images/products/pizza-pepperoni.jpg', tags: ['Tomate', 'Pepperoni', 'Emmental'], keywords: ['épicé', 'italienne', 'viande'] },
  { id: 9, name: 'Pizza Quatre Fromages', category: 'Pizza', price: 13, image: '/images/products/pizza-quatre-fromages.jpg', tags: ['Emmental', 'Mozzarella', 'Chèvre'], keywords: ['fromage', 'végétarien', 'italienne'] },

  // --- Kebab ---
  { id: 10, name: 'Kebab Agneau', category: 'Kebab', price: 8.5, image: '/images/products/kebab-agneau.jpg', tags: ['Agneau', 'Tomate', 'Oignons'], keywords: ['viande', 'sandwich'] },
  { id: 11, name: 'Kebab Poulet', category: 'Kebab', price: 8, image: '/images/products/kebab-poulet.jpg', tags: ['Poulet', 'Tomate', 'Oignons'], keywords: ['sandwich', 'léger'] },
  { id: 12, name: 'Kebab Mixte', category: 'Kebab', price: 9, image: '/images/products/kebab-mixte.jpg', tags: ['Agneau', 'Poulet', 'Oignons'], keywords: ['sandwich', 'mélange'] },
  { id: 13, name: 'Assiette Kebab', category: 'Kebab', price: 11.5, image: '/images/products/assiette-kebab.jpg', tags: ['Agneau', 'Poulet', 'Tomate', 'Oignons'], keywords: ['assiette', 'sans pain', 'riz'] },

  // --- Poulet frit ---
  { id: 14, name: 'Bucket Poulet frit', category: 'Poulet frit', price: 13.9, image: '/images/products/bucket-poulet-frit.jpg', tags: ['Poulet', 'Menu'], keywords: ['partage', 'croustillant'] },
  { id: 15, name: 'Tenders croustillants', category: 'Poulet frit', price: 7.5, image: '/images/products/tenders-croustillants.jpg', tags: ['Poulet'], keywords: ['croustillant', 'snack'] },
  { id: 16, name: 'Wings épicées', category: 'Poulet frit', price: 8.5, image: '/images/products/wings-epicees.jpg', tags: ['Poulet', 'Sauce épicée'], keywords: ['épicé', 'ailes'] },
  { id: 17, name: 'Poulet popcorn', category: 'Poulet frit', price: 6.5, image: '/images/products/poulet-popcorn.jpg', tags: ['Poulet'], keywords: ['croustillant', 'snack', 'enfant'] },

  // --- Accompagnements ---
  { id: 18, name: 'Frites maison', category: 'Accompagnements', price: 3.5, image: '/images/products/frites-maison.jpg', tags: ['Menu'], keywords: ['végétarien', 'snack'] },
  { id: 19, name: 'Onion rings', category: 'Accompagnements', price: 4, image: '/images/products/onion-rings.jpg', tags: ['Oignons'], keywords: ['végétarien', 'croustillant'] },
  { id: 20, name: 'Coleslaw', category: 'Accompagnements', price: 3, image: '/images/products/coleslaw.jpg', tags: ['Chou'], keywords: ['végétarien', 'frais', 'salade'] },
  { id: 21, name: 'Nuggets de mozzarella', category: 'Accompagnements', price: 4.5, image: '/images/products/nuggets-mozzarella.jpg', tags: ['Mozzarella'], keywords: ['fromage', 'végétarien', 'croustillant'] },

  // --- Desserts ---
  { id: 22, name: 'Crêpe Chantilly', category: 'Desserts', price: 5, image: '/images/products/crepe-chantilly.jpg', tags: ['Crêpe', 'Chantilly'], keywords: ['sucré', 'dessert', 'végétarien'] },
  { id: 23, name: 'Brownie maison', category: 'Desserts', price: 4.5, image: '/images/products/brownie-maison.jpg', tags: ['Chocolat'], keywords: ['sucré', 'fondant', 'végétarien'] },
  { id: 24, name: 'Cookie XXL', category: 'Desserts', price: 3.5, image: '/images/products/cookie-xxl.jpg', tags: ['Chocolat'], keywords: ['sucré', 'biscuit', 'végétarien'] },
  { id: 25, name: 'Tiramisu gobelet', category: 'Desserts', price: 4.5, image: '/images/products/tiramisu-gobelet.jpg', tags: ['Café', 'Chocolat'], keywords: ['sucré', 'italien', 'végétarien'] },

  // --- Boissons ---
  { id: 26, name: 'Citronnade maison', category: 'Boissons', price: 3.5, image: '/images/products/citronnade-maison.jpg', tags: ['Citron', 'Menu'], keywords: ['frais', 'sans alcool', 'glacé'] },
  { id: 27, name: 'Ice Tea maison', category: 'Boissons', price: 3.5, image: '/images/products/ice-tea-maison.jpg', tags: ['Citron'], keywords: ['frais', 'sans alcool', 'glacé'] },
  { id: 28, name: 'Soda au choix', category: 'Boissons', price: 2.5, image: '/images/products/soda-au-choix.jpg', tags: ['Menu'], keywords: ['sans alcool', 'gazeux'] },
  { id: 29, name: 'Milkshake vanille', category: 'Boissons', price: 5, image: '/images/products/milkshake-vanille.jpg', tags: ['Vanille'], keywords: ['sucré', 'glacé', 'sans alcool'] },
  { id: 30, name: 'Eau minérale', category: 'Boissons', price: 2, image: '/images/products/eau-minerale.jpg', tags: ['Menu'], keywords: ['sans alcool', 'eau'] },
];

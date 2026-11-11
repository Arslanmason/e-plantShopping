// ProductList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const FALLBACK_IMAGE = `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
    <rect width="640" height="420" fill="#e8efe4"/>
    <path d="M320 330V185" stroke="#52734d" stroke-width="18" stroke-linecap="round"/>
    <path d="M317 246c-98 4-139-47-136-119 73-3 127 25 136 119Z" fill="#78966c"/>
    <path d="M325 218c3-87 57-137 133-139 1 75-43 128-133 139Z" fill="#91a983"/>
    <path d="M250 333h140l-18 52h-104z" fill="#bd8769"/>
  </svg>
`)}`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 'snake-plant-air', name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=900&q=80', description: 'An architectural, easy-care plant that tolerates lower light.', cost: '$15' },
      { id: 'spider-plant', name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d40?auto=format&fit=crop&w=900&q=80', description: 'A graceful, adaptable plant with arching, striped leaves.', cost: '$12' },
      { id: 'peace-lily', name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=900&q=80', description: 'Glossy leaves and elegant blooms make this a calm indoor favorite.', cost: '$18' },
      { id: 'boston-fern', name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1612450534289-4beec1767672?auto=format&fit=crop&w=900&q=80', description: 'Feathery green fronds add a lush look; keep its soil lightly moist.', cost: '$20' },
      { id: 'rubber-plant', name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80', description: 'A bold, upright houseplant with striking, glossy leaves.', cost: '$17' },
      { id: 'aloe-air', name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1596547609652-9fc5d8d428ae?auto=format&fit=crop&w=900&q=80', description: 'A sun-loving succulent with fleshy, distinctive leaves.', cost: '$14' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { id: 'lavender', name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=900&q=80', description: 'Fragrant purple blooms bring a soothing scent to sunny spaces.', cost: '$20' },
      { id: 'jasmine', name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=900&q=80', description: 'Delicate flowers are known for their sweet fragrance.', cost: '$18' },
      { id: 'rosemary', name: 'Rosemary', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f5?auto=format&fit=crop&w=900&q=80', description: 'An aromatic herb that works well in a sunny kitchen or garden.', cost: '$15' },
      { id: 'mint', name: 'Mint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=900&q=80', description: 'Fresh, fragrant leaves for containers, teas, and cooking.', cost: '$12' },
      { id: 'lemon-balm', name: 'Lemon Balm', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80', description: 'A leafy herb with a bright citrus scent.', cost: '$14' },
      { id: 'hyacinth', name: 'Hyacinth', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80', description: 'A colorful flowering plant with a rich, sweet fragrance.', cost: '$22' },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { id: 'oregano', name: 'Oregano', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80', description: 'A fragrant culinary herb that is easy to grow in a sunny spot.', cost: '$10' },
      { id: 'marigold', name: 'Marigold', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80', description: 'Bright flowers add cheerful color to pots and garden borders.', cost: '$8' },
      { id: 'geranium', name: 'Geranium', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80', description: 'A flowering favorite for sunny balconies and window boxes.', cost: '$20' },
      { id: 'basil', name: 'Basil', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f5?auto=format&fit=crop&w=900&q=80', description: 'A fragrant kitchen herb that thrives with sun and regular watering.', cost: '$9' },
      { id: 'lavender-repellent', name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=900&q=80', description: 'Scented purple blooms add beauty to patios and garden beds.', cost: '$20' },
      { id: 'catnip', name: 'Catnip', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=900&q=80', description: 'A hardy aromatic herb that is especially popular with cats.', cost: '$13' },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { id: 'aloe-medicinal', name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1596547609652-9fc5d8d428ae?auto=format&fit=crop&w=900&q=80', description: 'A sun-loving succulent with soothing gel inside its leaves.', cost: '$14' },
      { id: 'echinacea', name: 'Echinacea', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80', description: 'A daisy-like flowering plant that brings color to a sunny garden.', cost: '$16' },
      { id: 'peppermint', name: 'Peppermint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=900&q=80', description: 'A refreshing culinary herb best grown in its own container.', cost: '$13' },
      { id: 'lemon-balm-medicinal', name: 'Lemon Balm', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80', description: 'A leafy herb with a gentle lemon scent.', cost: '$14' },
      { id: 'chamomile', name: 'Chamomile', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80', description: 'Small, cheerful flowers brighten garden beds and containers.', cost: '$15' },
      { id: 'calendula', name: 'Calendula', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80', description: 'Golden blooms bring long-lasting color to sunny spaces.', cost: '$12' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { id: 'zz-plant', name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=900&q=80', description: 'A resilient plant that prefers indirect light and infrequent watering.', cost: '$25' },
      { id: 'pothos', name: 'Pothos', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d40?auto=format&fit=crop&w=900&q=80', description: 'An adaptable trailing plant that grows well in many indoor spaces.', cost: '$10' },
      { id: 'snake-plant-easy-care', name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=900&q=80', description: 'An undemanding upright plant that needs little frequent care.', cost: '$15' },
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80', description: 'A hardy leafy plant that tolerates lower light conditions.', cost: '$20' },
      { id: 'succulent-mix', name: 'Succulents', image: 'https://images.unsplash.com/photo-1596547609652-9fc5d8d428ae?auto=format&fit=crop&w=900&q=80', description: 'Compact, drought-tolerant plants with varied shapes and colors.', cost: '$18' },
      { id: 'aglaonema', name: 'Aglaonema', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80', description: 'A colorful foliage plant that adapts well to indoor life.', cost: '$22' },
    ],
  },
];

function ProductList({ onHomeClick = () => {} }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  // This expects the reducer to be mounted at state.cart and to initialize items as [].
  const cartItems = useSelector((state) => state.cart?.items ?? []);
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    setShowCart(false);
    onHomeClick();
  };

  const isInCart = (plant) =>
    cartItems.some((item) => item.id === plant.id || item.name === plant.name);

  return (
    <div className="product-page">
      <header className="navbar">
        <a className="brand" href="/" onClick={handleHomeClick}>
          <span className="brand-name">Paradise Nursery</span>
          <span className="brand-tagline">Where Green Meets Serenity</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <button
            type="button"
            className={!showCart ? 'nav-link active' : 'nav-link'}
            onClick={() => setShowCart(false)}
          >
            Plants
          </button>
          <button
            type="button"
            className={showCart ? 'nav-link active cart-link' : 'nav-link cart-link'}
            onClick={() => setShowCart(true)}
            aria-label={`Open cart, ${totalCartQuantity} items`}
          >
            <span aria-hidden="true">🛒</span>
            <span className="cart-count">{totalCartQuantity}</span>
          </button>
        </nav>
      </header>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="product-grid">
          {plantsArray.map((group) => (
            <section className="category-section" key={group.category}>
              <div className="plantname_heading">
                <h2 className="plant_heading">{group.category}</h2>
              </div>

              <div className="product-list">
                {group.plants.map((plant) => {
                  const added = isInCart(plant);

                  return (
                    <article className="product-card" key={plant.id}>
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />
                      <div className="product-card-content">
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-description">{plant.description}</p>
                        <p className="product-price">{plant.cost}</p>
                        <button
                          type="button"
                          className={`product-button${added ? ' added-to-cart' : ''}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
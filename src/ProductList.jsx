import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    
    // Calculate total quantity of items for the cart icon
    const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: 'Snake Plant', cost: '$15', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprickleplants.co.uk%2Fcdn%2Fshop%2Fproducts%2Fafacd46a-01de-4899-bc25-9729a4c992cc_1445x.jpg&f=1&nofb=1' },
                { name: 'Spider Plant', cost: '$12', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FTV5qJiYi73bmPocSrjMRck.jpg&f=1&nofb=1' },
                { name: 'Peace Lily', cost: '$18', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbouqs.com%2Fblog%2Fwp-content%2Fuploads%2F2022%2F11%2Fpeace-lily-care.jpg&f=1&nofb=1' },
                { name: 'English Ivy', cost: '$14', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gardeningknowhow.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fenglish-ivy.jpg&f=1&nofb=1' },
                { name: 'Rubber Plant', cost: '$17', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0059%2F8835%2F2052%2Fproducts%2FRubber_Plant_4_1024x1024.jpg&f=1&nofb=1' },
                { name: 'ZZ Plant', cost: '$18', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0150%2F6262%2Fproducts%2Fthe-sill_zz-plant_variant_medium_grant_mint.jpg&f=1&nofb=1' }
            ]
        },
        {
            category: "Succulents",
            plants: [
                { name: 'Aloe Vera', cost: '$10', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fplantvillage-production-new%2Fimages%2Fpics%2F000%2F000%2F512%2Foriginal%2F800px-Aloe_Vera.jpg&f=1&nofb=1' },
                { name: 'Jade Plant', cost: '$14', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F2PE5fFa3XthNoH6Jzt7ztJ-1024-80.jpg&f=1&nofb=1' },
                { name: 'Echeveria', cost: '$11', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myplantsvalley.com%2Fwp-content%2Fuploads%2F2025%2F02%2FFahmida_Echeveria_succulents_18dfa9c0-7de5-46f9-be36-88cedd4db962.png&f=1&nofb=1' },
                { name: 'Zebra Plant', cost: '$12', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0062%2F8534%2F5862%2Fproducts%2FHaworthia-fasciata-Zebra-Plant-1_1024x1024.jpg&f=1&nofb=1' },
                { name: 'String of Pearls', cost: '$15', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.joyusgarden.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fstring-of-pearls-care-1.jpg&f=1&nofb=1' },
                { name: 'Burros Tail', cost: '$13', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsucculentsbox.com%2Fcdn%2Fshop%2Farticles%2Fsedum-morganianum-burros-tail-succulent-care-guide-1_1024x1024.jpg&f=1&nofb=1' }
            ]
        },
        {
            category: "Ferns",
            plants: [
                { name: 'Boston Fern', cost: '$16', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.esellerpro.com%2F3048%2FI%2F619%2F66%2FNephrolepis%2520boston%2520fern-10.jpg&f=1&nofb=1' },
                { name: 'Bird Nest Fern', cost: '$20', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.apartmenttherapy.info%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cw_730%2Fgen-workflow%2Fproduct-listing%2Fbirdsnestfernamz&f=1&nofb=1' },
                { name: 'Maidenhair Fern', cost: '$19', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhg.com%2Fthmb%2FSuzTKTvdz1Hkk7QHuxtc5LZui88%3D%2F1245x0%2Ffilters%3Ano_upscale()%3Astrip_icc()%2Fsouthern-maidenhair-fern-b67327b2-755015db4d8b4557b6fac4535ad09343.jpg&f=1&nofb=1' },
                { name: 'Staghorn Fern', cost: '$22', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gardeningknowhow.com%2Fwp-content%2Fuploads%2F2011%2F01%2Fstaghorn-fern-1.jpg&f=1&nofb=1' },
                { name: 'Kangaroo Paw Fern', cost: '$18', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.houseplantsexpert.com%2Fassets%2Fimages%2Fkangaroo-paw-fern.jpg&f=1&nofb=1' },
                { name: 'Kimberly Queen Fern', cost: '$17', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0059%2F8835%2F2052%2Fproducts%2FKimberly_Queen_Fern_4_1024x1024.jpg&f=1&nofb=1' }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
                        <div className="tag_home_link">
                            <h3>Paradise Nursery</h3>
                            <span>Where Green Meets Serenity</span>
                        </div>
                    </a>
                </div>
                <div className="ul">
                    <div>
                        <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(true); }} className="cart">
                            🛒 <span className="cart_quantity_count">{totalCartQuantity}</span>
                        </a>
                    </div>
                </div>
            </div>
            
            {showCart ? (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            ) : (
                <div className="product-grid">
                    {plantsArray.map((categoryGroup, index) => (
                        <div key={index} style={{ width: '100%' }}>
                            <div className="plantname_heading">
                                <h2 className="plant_heading">{categoryGroup.category}</h2>
                            </div>
                            <div className="product-list">
                                {categoryGroup.plants.map((plant, pIndex) => (
                                    <div className="product-card" key={pIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-price">{plant.cost}</div>
                                        <button 
                                            className={`product-button ${cartItems.some(item => item.name === plant.name) ? 'added-to-cart' : ''}`}
                                            disabled={cartItems.some(item => item.name === plant.name)}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;
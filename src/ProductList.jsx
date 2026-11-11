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
                { name: 'Snake Plant', cost: '$15', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprickleplants.co.uk%2Fcdn%2Fshop%2Fproducts%2Fafacd46a-01de-4899-bc25-9729a4c992cc_1445x.jpg%3Fv%3D1661164092&f=1&nofb=1&ipt=1c40ea812c6c926c345109a62151596dfaf07abbb164738dc98ad60bd142b866&ipo=images' },
                { name: 'Spider Plant', cost: '$12', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FTV5qJiYi73bmPocSrjMRck.jpg&f=1&nofb=1&ipt=5c425e5eb08c4ddd182249adde2c72e705ab622947a7c53fb83374d58f6562ef&ipo=images' },
                { name: 'Peace Lily', cost: '$18', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbouqs.com%2Fblog%2Fwp-content%2Fuploads%2F2022%2F11%2Fpeace-lily-care.jpg&f=1&nofb=1&ipt=92cd1b5d1f5c55814c11555d4b874fd878691a8e318535569621b050b1be8c30&ipo=images' },
            ]
        },
        {
            category: "Succulents",
            plants: [
                { name: 'Aloe Vera', cost: '$10', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fplantvillage-production-new%2Fimages%2Fpics%2F000%2F000%2F512%2Foriginal%2F800px-Aloe_Vera.jpg%3F1367951467&f=1&nofb=1&ipt=a0200a4119ba6aa0ec19154b24df3f800c8f55b8bb43b867a98f2cd3d0f046c6&ipo=images' },
                { name: 'Jade Plant', cost: '$14', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F2PE5fFa3XthNoH6Jzt7ztJ-1024-80.jpg&f=1&nofb=1&ipt=474ae26e224809ffb707da51e0b09ec91f8e7644fb7aa2e063aafd6a1680f15f&ipo=images' },
                { name: 'Echeveria', cost: '$11', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myplantsvalley.com%2Fwp-content%2Fuploads%2F2025%2F02%2FFahmida_Echeveria_succulents_18dfa9c0-7de5-46f9-be36-88cedd4db962.png&f=1&nofb=1&ipt=0b4ffe01cb4ecce6b97f1feb416f52483893ffd34a94937f817cd59d6dd9bb4e&ipo=images' }
            ]
        },
        {
            category: "Ferns",
            plants: [
                { name: 'Boston Fern', cost: '$16', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.esellerpro.com%2F3048%2FI%2F619%2F66%2FNephrolepis%2520boston%2520fern-10.jpg&f=1&nofb=1&ipt=b878df4b4b61c44452b8fba95270c71bcea78029765c23cd722cddd6e16e17d2&ipo=images' },
                { name: 'Bird Nest Fern', cost: '$20', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.apartmenttherapy.info%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cw_730%2Fgen-workflow%2Fproduct-listing%2Fbirdsnestfernamz&f=1&nofb=1&ipt=827bb20317367cd056d584bd13f2ec96aa3ab947edf06dcf11dc09739cf40d26&ipo=images' },
                { name: 'Maidenhair Fern', cost: '$19', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhg.com%2Fthmb%2FSuzTKTvdz1Hkk7QHuxtc5LZui88%3D%2F1245x0%2Ffilters%3Ano_upscale()%3Astrip_icc()%2Fsouthern-maidenhair-fern-b67327b2-755015db4d8b4557b6fac4535ad09343.jpg&f=1&nofb=1&ipt=b18b9adf40714a0d497d54f54379a457a67d85e9da562955dbe2b414afedc4c7&ipo=images' }
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
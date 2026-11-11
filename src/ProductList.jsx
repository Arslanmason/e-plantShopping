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
                { name: 'English Ivy', cost: '$14', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.plantcarefully.com%2Fwp-content%2Fuploads%2Fenglish-ivy-1-1.jpg&f=1&nofb=1&ipt=168383a270806a41d0202b785d29e6890d397aeb242016ce581ccd442eeb6247&ipo=images' },
                { name: 'Rubber Plant', cost: '$17', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruce.com%2Fthmb%2FxbcXgGH1c2O0WVyZRT8u2AlHDlo%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FGettyImages-1291612778-fac43b63ed1a465eac4c4b4bc3e879de.jpg&f=1&nofb=1&ipt=050f0e142839c242640e2d041e1da4e3064fc10cda1cc0dde5d4e021afa819d6&ipo=images' },
                { name: 'ZZ Plant', cost: '$18', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglasswingshop.com%2Fcdn%2Fshop%2Fproducts%2F8D2A2069_2048x2048.jpg%3Fv%3D1595400475&f=1&nofb=1&ipt=4d9e4a7bcd4fbc305ddeda422810ce20184993def488b9860e1a7299c2cee852&ipo=images' }
            ]
        },
        {
            category: "Succulents",
            plants: [
                { name: 'Aloe Vera', cost: '$10', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fplantvillage-production-new%2Fimages%2Fpics%2F000%2F000%2F512%2Foriginal%2F800px-Aloe_Vera.jpg&f=1&nofb=1' },
                { name: 'Jade Plant', cost: '$14', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F2PE5fFa3XthNoH6Jzt7ztJ-1024-80.jpg&f=1&nofb=1' },
                { name: 'Echeveria', cost: '$11', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myplantsvalley.com%2Fwp-content%2Fuploads%2F2025%2F02%2FFahmida_Echeveria_succulents_18dfa9c0-7de5-46f9-be36-88cedd4db962.png&f=1&nofb=1' },
                { name: 'Zebra Plant', cost: '$12', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F31b42f_028a0bd526a64e958c84143d363a2618~mv2.jpg%2Fv1%2Ffill%2Fw_3024%2Ch_4032%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto%2F31b42f_028a0bd526a64e958c84143d363a2618~mv2.jpg&f=1&nofb=1&ipt=87a99649e4bf0f8bc333d390bcaa1c7ce580fac3b2111b19c3b30591ae08009b&ipo=images' },
                { name: 'String of Pearls', cost: '$15', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.planetnatural.com%2Fwp-content%2Fuploads%2F2023%2F08%2FString-of-Pearls.jpg&f=1&nofb=1&ipt=67488e9df3e428d7328cf0e2e896116304f446959d86055e99dd97c8b83e3148&ipo=images' },
                { name: 'Burros Tail', cost: '$13', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsucculentcity.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fburros_tail_succulent_plant_sedum_morganianum-1024x1024.jpg&f=1&nofb=1&ipt=748fb09f45b78f18c20c1aacf78f31a2db993462c61d630d889291b23d907fbf&ipo=images' }
            ]
        },
        {
            category: "Ferns",
            plants: [
                { name: 'Boston Fern', cost: '$16', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.esellerpro.com%2F3048%2FI%2F619%2F66%2FNephrolepis%2520boston%2520fern-10.jpg&f=1&nofb=1' },
                { name: 'Bird Nest Fern', cost: '$20', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.apartmenttherapy.info%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cw_730%2Fgen-workflow%2Fproduct-listing%2Fbirdsnestfernamz&f=1&nofb=1' },
                { name: 'Maidenhair Fern', cost: '$19', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhg.com%2Fthmb%2FSuzTKTvdz1Hkk7QHuxtc5LZui88%3D%2F1245x0%2Ffilters%3Ano_upscale()%3Astrip_icc()%2Fsouthern-maidenhair-fern-b67327b2-755015db4d8b4557b6fac4535ad09343.jpg&f=1&nofb=1' },
                { name: 'Staghorn Fern', cost: '$22', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flalitenterprise.com%2Fcdn%2Fshop%2Ffiles%2FStaghorn_Fern_Plant_1.webp%3Fv%3D1760529818%26width%3D1946&f=1&nofb=1&ipt=c9821311d88c857dd48fd98b02ea0b45be087363f1f285e1f60dd038d36ef6d1&ipo=images' },
                { name: 'Kangaroo Paw Fern', cost: '$18', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhouseplantshop.com%2Fcdn%2Fshop%2Fproducts%2F4_FERN_KANGAROOPAW_1_1799x1799.jpg%3Fv%3D1626276850&f=1&nofb=1&ipt=cfe1b7cd3a6cf9a16c503e251207a8118286f03119861605d8d7631954d572d6&ipo=images' },
                { name: 'Kimberly Queen Fern', cost: '$17', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2F10-in-Kimberly-Queen-Fern-Live-Plant_d88bd596-ba65-49dc-bdc9-83aa78929a8f.7060ca80b3d97549ad38257f9052db89.jpeg%3FodnHeight%3D573%26odnWidth%3D573%26odnBg%3DFFFFFF&f=1&nofb=1&ipt=1ff43558b2cd1c2a79edea13fc8cfc062a31b45854b5343b5606bd9e812d481b&ipo=images' }
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
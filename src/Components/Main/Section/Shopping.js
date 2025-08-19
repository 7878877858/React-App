import headphones from '../../../assets/image/product/headphones.jpg';
import earbuds from '../../../assets/image/product/earbuds.jpg';
import smartwatch from '../../../assets/image/product/smartwatch.jpg';
import cable from '../../../assets/image/product/cable.jpg';
import adapter from '../../../assets/image/product/adapter.jpg';
import neckband from '../../../assets/image/product/neckband.jpg';
import powerbank from '../../../assets/image/product/powerbank.jpg';
import soundbar from '../../../assets/image/product/soundbar.png';
import btspeaker from '../../../assets/image/product/btspeaker.png';
import wooden_shadow from '../../../assets/image/product/wooden_shadow.png';

const products = [
    { icon: headphones, name: 'Headphone' },
    { icon: earbuds, name: 'Earbuds' },
    { icon: smartwatch, name: 'Smart Watch' },
    { icon: cable, name: 'Cable' },
    { icon: adapter, name: 'Adapter' },
    { icon: neckband, name: 'Neckband' },
    { icon: powerbank, name: 'Powerbank' },
    { icon: soundbar, name: 'Sound Bar' },
    { icon: btspeaker, name: 'BT Speaker' },
];

export default function Shopping() {
    const handleServiceClick = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"; 

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
        }

        window.open(storeLink, "_blank"); // open in new tab
    };
    const scrollingOperators = [...products, ...products];

    return (
        <>
            <section className="shopping_container">
                <div className="container py-5 text-center">
                    <h1 className="text-center fw-semibold mb-4">
                        <span className="text-black">Shop Now,</span>
                        <span className="text-primary">Save Big!</span>
                    </h1>
                    <p className="mb-5"></p>
                    <p>Experience a seamless, secure, and smart shopping journey. From electronics to essentials, We brings quality products, unbeatable prices, and fast delivery — all in one platform.</p>
                    <div className="item-slider">
                        <div className="item-product-list" id="shopping_product_container">
                            {scrollingOperators.map((item, index) => (
                                <div key={index} className="item-card" onClick={handleServiceClick} style={{ cursor: "pointer" }}>
                                    <img src={item.icon} alt={item.name} className="product-image" />
                                    <img src={wooden_shadow}alt="shadow"  style={{ aspectRatio: "6 / 1" }} />
                                    <h3 className="product-name">{item.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


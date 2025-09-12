import headphones from '../../../assets/image/Main_style/assets/image/product/earbuds_1.png';
import earbuds from '../../../assets/image/Main_style/assets/image/product/headphones_1.png';
import smartwatch from '../../../assets/image/Main_style/assets/image/product/neckband_1.png';
import cable from '../../../assets/image/Main_style/assets/image/product/smartwatch_1.png';
import "../../../assets/css/main.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LazyImage from '../../../assets/js/LazyImage';
const products = [
    {
        icon: headphones,
        name: 'boAt Airdopes Drift',
        text: 'boAt Airdopes Drift TWS in Ear Earbuds, 40hrs Playback, Beast Mode (40ms Low Latency), Quad Mics with ENx Technology, Car-Shaped ID Design, ASAP Charge, IPX4 Water Resistance, Bluetooth v5.3',
        color: '#F9F9F9'
    },
    {
        icon: earbuds,
        name: 'boAt - Rockerz 650',
        text: 'boAt Rockerz 650 Pro Bluetooth Wireless Headphones, Touch/Swipe Controls, Dolby Audio, Up to 80Hrs Battery, Dual Mics with ENx Technology, Fast Charge (10min = 12Hrs Playback), App Support, Dual Pairing, Bluetooth v5.3',
        color: '#F4F4F4'
    },
    {
        icon: smartwatch,
        name: 'OnePlus Bullets',
        text: 'OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic',
        color: '#EAEAEA'
    },
    {
        icon: cable,
        name: 'Noise ColorFit',
        text: 'Noise Icon Buzz 1.69" Display with Bluetooth Calling, Built-In Games, Voice Assistant Smartwatch ',
        color: '#DDDDDD'
    }

];
export default function Shopping({ data = [], loading }) {
    const handleServiceClick = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN";

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
        }

        window.open(storeLink, "_blank"); // open in new tab
    };
    const productColors = ['#F9F9F9', '#F4F4F4', '#EAEAEA', '#DDDDDD'];
    const productsToShow = data.length > 0
        ? data.map((item, index) => ({
            icon: item.product_image,
            name: item.brand_name,
            text: item.description || "",
            color: productColors[index % productColors.length]
        }))
        : products;
    return (
        <>
            <section className="container my-5 ">
                <div className="text-center">
                    <h1 className="text-center fw-semibold mb-4">
                        <span className="text-black">Shop Now,</span>
                        <span className="text-primary">Save Big!</span>
                    </h1>
                    <p className='text-center text-muted mb-5'>Experience a seamless, secure, and smart shopping journey. From electronics to essentials, We brings quality products, unbeatable prices, and fast delivery — all in one platform.</p>
                    <div className="row" id="shopping_product_container">
                        {loading ? (
                            <p>Loading products...</p>
                        ) : (
                            productsToShow.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3 p-0 d-flex align-items-stretch">
                                    <div className="card text-start rounded-0 border border-0"
                                        style={{ backgroundColor: item.color, width: "100%" }}>
                                        <LazyImage src={item.icon} className="card-img-top" alt={item.name} loading="lazy" style={{ width: "50px%"}}/>
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title fs-3">{item.name}</h5>
                                            <div
                                                className="card-text fs-6 mb-2 text-ellipsis-3"
                                                dangerouslySetInnerHTML={{ __html: item.text }}
                                            ></div>
                                            <a href="/" className="btn border border-dark mt-auto align-self-start"
                                                onClick={handleServiceClick}>
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}


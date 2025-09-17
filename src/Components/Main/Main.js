import '../../assets/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/main.css';
import '../../assets/css/snow_fall.css';
import Hero from "../../Components/Main/Section/Hero";
import RechargeBillPayments from "../../Components/Main/Section/RechargeBillPayments";
import Features from "./Section/Features";
import Travel from "./Section/Travel";
import GoldMembership from './Section/GoldMembership';
import ReferEarn from './Section/ReferEarn';
import Testimonials from './Section/Testimonials';
import Giftcard from './Section/GiftCard';
import ShoppingMain from './Section/MainShoppingSection';
import { Helmet } from "react-helmet";
import { useEffect, useState, useRef } from "react";
import { get_all_product, Get_brands_list, Get_brand_gift_card } from '../../Api/ApiList/List';
function Main() {
    const [shoppingData, setShoppingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const isFetching = useRef(false);
    const [giftCardData, setGiftCardData] = useState([]);
    const isFetchingGiftCard = useRef(false);
    // Shopping data fetch//

    useEffect(() => {
        const fetchData = async () => {
        
            if (isFetching.current) {
                return;
            }
            isFetching.current = true;

            try {
                setLoading(true);
                const productsRes = await get_all_product({});
                const subcategories = productsRes?.data || [];
                const brandsRes = await Get_brands_list({});
                const brands = brandsRes?.data || [];
                const matchingProducts = [];
                subcategories.forEach(subcat => {
                    if (Array.isArray(subcat.products)) {
                        subcat.products.forEach(product => {
                            if (Array.isArray(product.combinations)) {
                                product.combinations.forEach(combi => {
                                    brands.forEach(brand => {
                                        if (
                                            String(product.product_id) === String(brand.product_id) &&
                                            String(combi.combination_id) === String(brand.combination_id)

                                        ) {
                                            matchingProducts.push({
                                                product_id: product.product_id,
                                                combination_id: combi.combination_id,
                                                brand_name: product.brand_name,
                                                product_image: brand.product_image,
                                                description: product.description
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
                setShoppingData(matchingProducts.slice(0, 4));

            } catch (error) {
                console.log("❌ Error fetching shopping data:", error);
                setShoppingData([]);
            } finally {
                setLoading(false);
                isFetching.current = false;
            }
        };

        fetchData();
    }, []);

    // Gift card data fetch//

useEffect(() => {
    const fetchGiftCardData = async () => {
        if (isFetchingGiftCard.current) return;
        isFetchingGiftCard.current = true;

        try {
            setLoading(true);
            const GiftCardres = await Get_brand_gift_card({ cat_id: "121" });
            console.log("🎁 GiftCard Response:", GiftCardres);

            if (GiftCardres?.status === 1 && GiftCardres?.data?.length > 0) {
                setGiftCardData(GiftCardres.data);
            } else {
                console.log("⚠️ No gift card data found in response.");
                setGiftCardData([]);
            }
        } catch (error) {
            console.log("❌ Error fetching gift card data:", error);
            setGiftCardData([]);
        } finally {
            setLoading(false);
            isFetchingGiftCard.current = false;
        }
    };

    fetchGiftCardData();
}, []);

    return (
        <>
            <Helmet>
                <title>Mobile Recharge & Bill Payment App | TradGo</title>
                <meta name="description" content="TradGo – Fast and secure mobile recharge & bill payment app. Recharge prepaid, pay postpaid, DTH, electricity, gas, and water bills online." />
                <meta name="keywords" content="Mobile Recharge Online, Online Bill Payment, Prepaid Recharge, Postpaid Bill Payment, DTH Recharge Online, Electricity Bill Payment, Gas Bill Payment, Water Bill Payment, TradGo Recharge App, Secure Online Recharge, Recharge Offers, Cashback on Recharge" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mobile Recharge & Bill Payment App | TradGo" />
                <meta property="og:description" content="Your recharge & bill payment app" />
                <meta property="og:image" content="image/og_image.png" />
                <meta property="og:url" content="https://tradgo.in" />
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <link rel="canonical" href="https://tradgo.in" />
            </Helmet>

            <div style={{ height: 60 }}></div>

            <Hero />
            <RechargeBillPayments />
            <Features />
            <Giftcard giftCardData={giftCardData} loading={loading} />
            <ShoppingMain data={shoppingData} loading={loading} />
            <Travel />
            <GoldMembership />
            <ReferEarn />
            <Testimonials />
        </>
    );
}

export default Main;

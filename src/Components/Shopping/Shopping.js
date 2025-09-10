import React from 'react'
import ShoppingPreHeader from './ShoppingPreHeader'
import ShoppinHeader from './ShoppinHeader'
import ShoppingFooter from './ShoppingFooter'
import Carousel from './Section/Carousel'
import CategorySlider from './Section/CategorySlider'
import ProductList from './Section/ProductList'
import MultiProductSection from './Section/MultiProductSection'
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

const Shopping = () => {
    return (
        <>
         <Helmet>
                <title>Tradgo | Shopping</title>
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
            <ShoppingPreHeader />
            <ShoppinHeader />
            <Carousel />
            <CategorySlider />
            <ProductList />
            <MultiProductSection />
            <ShoppingFooter />
        </>

    )
}

export default Shopping

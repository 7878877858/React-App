$(document).ready(function () {
    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Animate features on scroll
    $(window).scroll(function () {
        $('.feature-card').each(function () {
            if ($(this).isInViewport()) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });

    // Custom viewport checker
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
});

// -------------------- Services Icons Boxes Start --------------------


// -------------------- Services Icons Boxes End --------------------

// var mobile_img = $('.features').offset().top;
// var scrollOffset = 760 + - 20;
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop() + scrollOffset;
//     if (scroll > mobile_img) {
//         $('.features .mobile_img').addClass('animate-normal-l');
//     }
// });



// -------------------- Connecting Operators Start --------------------

const operatorsContainer = document.getElementById('operators_container');

if (operatorsContainer) {

    const operators = [
        { icon: 'aadhar_housing_finance_ltd.svg', name: 'aadhar_housing_finance_ltd' },
        { icon: 'aavas_financiers_ltd.svg', name: 'aavas_financiers_ltd' },
        { icon: 'act_digital.svg', name: 'act_digital' },
        { icon: 'adani_housing_finance.svg', name: 'adani_housing_finance' },
        { icon: 'asianet_broadband.svg', name: 'asianet_broadband' },
        { icon: 'byjus.svg', name: 'byjus' },
        { icon: 'indian_bank.svg', name: 'indian_bank' },
        { icon: 'punjab_national_bank.svg', name: 'punjab_national_bank' },
        { icon: 'rajasthan_rajya_vidyut_prasaran_nigam_limited.svg', name: 'rajasthan_rajya_vidyut_prasaran_nigam_limited' },
        { icon: 'reliance_general_insurance_health_insurance_plans.svg', name: 'reliance_general_insurance_health_insurance_plans' },
    ];

    // Run twice to create continuous scroll effect
    [...operators, ...operators].forEach((operator) => {
        const operatorHTML = `
            <img src="./assets/image/operators/${operator.icon}" alt="${operator.name}">
    `;
        operatorsContainer.innerHTML += operatorHTML;
    });
}

// -------------------- Connecting Operators End --------------------   


// -------------------- Travel Smart Start --------------------

const travelSmartContainer = document.getElementById('travel_smart_container');

if (travelSmartContainer) {
    const travelSmart = [
        { icon: 'bus.svg', name: 'Bus <br> Booking' },
        { icon: 'train.svg', name: 'Train <br> Booking' },
        { icon: 'flight.svg', name: 'Flight <br> Booking' },
        { icon: 'hotel.svg', name: 'Hotel <br> Booking' },
    ];
    travelSmart.forEach(travel => {
        const travelHTML = `
        <div class="col">
            <div class="service-card">
                <img src="./assets/image/icons/${travel.icon}" alt="${travel.name}" class="mb-2" style="width: 64px; height: 64px;">
                <p class="service-name">${travel.name}</p>
            </div>
        </div>
    `;
        travelSmartContainer.innerHTML += travelHTML;
    });
}

// -------------------- Travel Smart End --------------------

// -------------------- Fav Destinations Start --------------------

// -------------------- Fav Destinations End --------------------

// -------------------- Testimonials Start --------------------

const aboutUsContainer = document.getElementById('testimonials_container');

if (aboutUsContainer) {

    const aboutUs = [
        { icon: 'md.svg', name: 'Mital Dabhi', star: 4.5, msg: 'Instant mobile recharges to hassle-free bill payments, it’s the ultimate all-in-one app. The cashback offers are unbeatable, and the interface is sleek and easy to use. Transactions are lightning-fast and secure, giving me total peace of mind. Highly recommended for anyone who values convenience and savings!' },
        { icon: 'pk.svg', name: 'Parmar Kinjal', star: 4, msg: 'Tradgo makes my life so much easier! 🌟 Quick recharges, seamless bill payments, and amazing cashback offers—everything I need in one app. The interface is super user-friendly, and transactions are always secure. Highly recommend for anyone looking for a reliable payment solution!' },
        { icon: 'kd.svg', name: 'Kartik Dholakiya', star: 4, msg: 'TradGo is a highly-rated app that offers a comprehensive solution for all types of mobile recharges, bill payments, and money transfers. Users appreciate its seamless user experience, quick transaction processing, and robust security measures. The app supports a wide range of payment methods and offers attractive cashback and rewards for its users. Its intuitive design and reliable customer support have contributed to its top ratings, making it a favorite among users seeking efficient and hassle' },
        { icon: 'rg.svg', name: 'Rahul Gohel', star: 5, msg: 'Tradgo Bus Booking is fantastic! User-friendly interface, easy booking process, and reliable service. Great for hassle-free travel planning. Highly recommended!' },
        { icon: 'kp.svg', name: 'Keval Punani', star: 5, msg: 'Tradgo has exceeded my expectations in every way. The app is incredibly user-friendly, and the customer support is top-notch. I have never had any issues with transactions, and the cashback offers are amazing. I highly recommend Tradgo to anyone looking for a reliable and efficient payment solution.' },
        { icon: 'ng.svg', name: 'Nikunj Gohel', star: 4.5, msg: 'Tradgo has been a fantastic experience for me. The user interface is intuitive, transactions are quick, and the cashback rewards are a nice touch. The customer service team is always responsive and helpful. I have already shared my positive experience with Tradgo with my friends and family.' },
    ];

    aboutUs.forEach(about => {
        const aboutHTML = `
        <div class="col">
            <div class="comment_card shadow h-100">
                <div class="d-flex align-items-center justify-content-start gap-3">
                    <img src="./assets/image/users/${about.icon}" alt="${about.name}" class="comment_user_img">
                    <p class="text-center fw-bold mb-0" style="font-size: 1rem;">${about.name}</p>
                </div>
                <div class="rate">
                    <div class="rating" data-rating="${about.star}">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <span class="rating-value">${about.star}</span>
                    </div>
                </div>
                <p class="text-black">${about.msg}</p>
            </div>
        </div>
    `;
        aboutUsContainer.innerHTML += aboutHTML;
    });
}


// Initialize ratings
document.querySelectorAll('.rating').forEach(ratingDiv => {
    const rating = parseFloat(ratingDiv.dataset.rating);
    setRating(ratingDiv.parentElement, rating);
});

function setRating(container, rating) {
    const ratingDiv = container.querySelector('.rating');
    const stars = ratingDiv.querySelectorAll('i');
    const ratingValue = ratingDiv.querySelector('.rating-value');

    // Reset all stars to empty
    stars.forEach(star => {
        star.className = 'far fa-star';
    });

    // Calculate full and partial stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Set full stars
    for (let i = 0; i < fullStars; i++) {
        stars[i].className = 'fas fa-star';
    }

    // Set half star if needed
    if (hasHalfStar && fullStars < 5) {
        stars[fullStars].className = 'fas fa-star-half-alt';
    }

    // Update rating text
    ratingValue.textContent = rating.toFixed(1);
}

// -------------------- Testimonials End --------------------

// -------------------- Footer Start --------------------

// -------------------- Footer End --------------------
// add this *once*, after your last ".service-card" has been rendered
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function (e) {
        const card = e.target.closest('.service-card');
        if (!card) return;

        // ---------- platform detection ----------
        const ua = navigator.userAgent || '';
        const hints = navigator.userAgentData || {};
        const brands = hints.brands?.map(b => b.brand) || [];

        const isIOS = /iPad|iPhone|iPod/.test(ua);
        const isAndroid = /Android/.test(ua);
        const isSafari = /Safari/.test(ua) && !/Chrome|Chromium/.test(ua);
        const isChrome = brands.includes('Chromium') || /Chrome/.test(ua);

        const PLAY = 'https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN';
        const APP = 'https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235';
        const WEB = 'https://tradgo.in/app';

        const url = (isIOS || isSafari) ? APP
            : (isAndroid || isChrome) ? PLAY
                : WEB;

        window.open(url, '_blank', 'noopener');
    });
});





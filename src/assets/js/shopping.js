
const carouselInner = document.getElementById("productCarouselInner");
if (carouselInner) {

    const slides = [
        {
            title: "boAt - Rockerz 450 14 Pro",
            subtitle: "Music & Entertainment",
            desc: "Upto 70 Hours Playback Bluetooth",
            img: "./../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png",
            imgFirst: false,
            textAlign: false
        },
        {
            title: "boAt - Rockerz 550",
            subtitle: "Music & Entertainment",
            desc: "Immersive Sound Experience",
            img: "./../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png",
            imgFirst: false,
            textAlign: true
        },
        {
            title: "boAt Bassheads 100",
            subtitle: "Earphones",
            desc: "Crystal Clear Sound",
            img: "./../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png",
            imgFirst: true,
            textAlign: false
        },
        {
            title: "boAt Nirvana 751 ANC",
            subtitle: "Noise Cancelling Headphones",
            desc: "Up to 65 Hours Playback",
            img: "./../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png",
            imgFirst: true,
            textAlign: true
        }
    ];

    slides.forEach((slide, index) => {
        const isActive = index === 0 ? "active" : "";

        // Order classes for image placement
        const textOrder = slide.imgFirst ? "order-2 order-md-1" : "order-2 order-md-1";
        const imgOrder = slide.imgFirst ? "order-1 order-md-2" : "order-2 order-md-1";
        const textAlign = slide.textAlign ? "text-start" : "text-center";

        const item = `
        <div class="carousel-item ${isActive}">
            <div class="row my-4">
                <div class="col my-auto ${textOrder} ${textAlign} text-md-start text-white">
                    <p class="fs-6 mb-0">${slide.subtitle}</p>
                    <p class="fs-1 mb-0">${slide.title}</p>
                    <p class="fs-6 mb-2">${slide.desc}</p>
                    <a href="#" class="btn btn-outline-light mb-2">Shop Now</a>
                </div>
                <div class="col-12 col-md-auto ${imgOrder} my-auto">
                    <img src="${slide.img}" alt="${slide.title}" class="img-fluid d-block mx-auto">
                </div>
            </div>
        </div>
        `;

        carouselInner.insertAdjacentHTML("beforeend", item);
    });
}



(function () {
    const slider = document.getElementById("catSlider");
    const container = document.querySelector(".slider-wrapper");
    const prevBtn = document.getElementById("catPrev");
    const nextBtn = document.getElementById("catNext");

    if (!slider || !container || !prevBtn || !nextBtn) {
        console.error("Missing required elements");
        return;
    }

    const categories = [
        { name: "Earbuds", img: "./../assets/image/shopping/category/earbuds.svg" },
        { name: "Smart Watches", img: "./../assets/image/shopping/category/smart_watches.svg" },
        { name: "Neckband", img: "./../assets/image/shopping/category/neckband.svg" },
        { name: "Headphones", img: "./../assets/image/shopping/category/headphones.svg" },
        { name: "BT Speaker", img: "./../assets/image/shopping/category/bt_speaker.svg" },
        { name: "Power Bank", img: "./../assets/image/shopping/category/power_bank.svg" },
        { name: "Cable", img: "./../assets/image/shopping/category/cable.svg" },
        { name: "Adapter", img: "./../assets/image/shopping/category/adapter.svg" }
    ];

    // Inject cards
    slider.innerHTML = "";
    categories.forEach(cat => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.innerHTML = `
            <img src="${cat.img}" alt="${cat.name}">
            <h6>${cat.name}</h6>
        `;
        slider.appendChild(card);
    });

    let currentIndex = 0;
    let cardWidth = 0;
    let gap = 16; // 1rem = 16px (assuming default font size)
    let cardTotal = 0;
    let visibleCards = 1;
    let maxIndex = 0;

    function updateMeasurements() {
        const firstCard = slider.querySelector(".category-card");
        if (!firstCard) {
            console.error("No cards found");
            return;
        }

        cardWidth = firstCard.getBoundingClientRect().width;
        cardTotal = cardWidth + gap;
        const containerWidth = container.getBoundingClientRect().width;
        visibleCards = Math.floor(containerWidth / cardTotal);
        visibleCards = Math.max(1, visibleCards); // Ensure at least 1 card
        maxIndex = Math.max(0, categories.length - visibleCards);

        // Adjust currentIndex if needed
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        console.log(`Container width: ${containerWidth}, Card width: ${cardWidth}, Gap: ${gap}, Visible cards: ${visibleCards}, Max index: ${maxIndex}`);

        applyTransform();
        updateButtons();
    }

    function applyTransform() {
        const containerWidth = container.getBoundingClientRect().width;
        const sliderWidth = slider.scrollWidth;
        const maxTranslate = Math.max(0, sliderWidth - containerWidth);
        let translateX = currentIndex * cardTotal;

        // Ensure the last card is fully visible
        if (translateX > maxTranslate) {
            translateX = maxTranslate;
        }

        slider.style.transform = `translateX(-${translateX}px)`;
        console.log(`Current index: ${currentIndex}, TranslateX: ${translateX}, Max translate: ${maxTranslate}`);
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            applyTransform();
            updateButtons();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            applyTransform();
            updateButtons();
        }
    });

    // Initial setup after images load
    const imgs = Array.from(slider.querySelectorAll("img"));
    const imgPromises = imgs.map(img => new Promise(resolve => {
        if (img.complete && img.naturalWidth !== 0) return resolve();
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
    }));

    Promise.all(imgPromises).then(() => {
        updateMeasurements();
        window.addEventListener("resize", () => {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(updateMeasurements, 150);
        });
    });
})();

document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});








var product_list = document.getElementById("product-list");

if (product_list) {
    renderProducts();
}

function renderProducts() {

    var list = document.getElementById("product-list");
    list.innerHTML = ""; // clear

    const products = [
        {
            product_id: 1,
            combination_id: 2,
            title: "boAt Airdopes 311 PRO 50HRS Battery, Fast Charge",
            image: "./../assets/image/shopping/product/boAt_Airdopes_311_PRO.png",
            mrp: 3490,
            price: 1599
        },
        {
            product_id: 2,
            combination_id: 4,
            title: "boAt Rockerz 109 Wireless",
            image: "./../assets/image/shopping/product/boAt_Rockerz_109_Wireless.png",
            mrp: 29990,
            price: 24990
        },
        {
            product_id: 3,
            combination_id: 6,
            title: "boAt Rockerz 450 14 Pro",
            image: "./../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png",
            mrp: 29990,
            price: 24990
        },
        {
            product_id: 4,
            combination_id: 8,
            title: "Noise ColorFit Icon Buzz",
            image: "./../assets/image/shopping/product/Noise_ColorFit_Icon_Buzz.png",
            mrp: 29990,
            price: 24990
        }
    ];

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "col-6 col-sm-6 col-md-4 col-lg-3 mb-3";
        card.innerHTML = `
        <div class="productCard pt-3 d-flex flex-column">
            <div class="like-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 21s-6.5-4.35-9.33-8.17C.84 9.94 2.24 5.5 6.4 4.1 8.67 3.3 11 4.47 12 6.09c1-1.62 3.33-2.79 5.6-1.99 4.16 1.4 5.56 5.84 3.73 8.73C18.5 16.65 12 21 12 21z"/>
                </svg>
            </div>
            <img src="${p.image}" class="product-img" alt="Product Image">
            <div class="p-3 d-flex flex-column flex-grow-1">
                <p class="fw-semibold fs-6 text-center text-ellipsis-3 mb-2 flex-grow-1">${p.title}</p>
                <div class="mt-auto">
                    <div class="d-flex align-items-center justify-content-center text-center mb-2">
                        <span class="mrp">₹${p.mrp}</span> 
                        <span class="price">₹${p.price}</span>
                    </div>
                    <button class="btn btn-dark w-100" onclick="product_view(${p.product_id}, ${p.combination_id})">Buy Now</button>
                </div>
            </div>
        </div>
        `;
        list.appendChild(card);
    });

    // attach like button events
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", () => btn.classList.toggle("active"));
    });
}


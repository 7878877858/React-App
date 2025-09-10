import { useEffect, useRef } from "react";
import qrCode from "../../assets/image/qr_code.svg";
import playStore from "../../assets/image/play_store.png";
import appStore from "../../assets/image/app_store.png";
import HeaderMenu from "./HeaderMenu";
import LazyImage from "../../assets/js/LazyImage";
import "../../assets/css/main.css";

function Header() {
    const qrRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const qr = qrRef.current;
        const footer = document.getElementById("footer");

        function checkFooterVisible() {
            if (!footer || !qr) return;

            const footerRect = footer.getBoundingClientRect();
            const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

            if (footerRect.top < windowHeight && footerRect.bottom > 0) {
                qr.classList.add("hide");
            } else {
                qr.classList.remove("hide");
            }
        }

        window.addEventListener("scroll", checkFooterVisible);
        checkFooterVisible();

        return () => {
            window.removeEventListener("scroll", checkFooterVisible);
        };
    }, []);

    return (
        <>
            <HeaderMenu />
            <section>
                <div className="d-none d-md-block qr_code animZoomIn" ref={qrRef} >
                    <div className="model">
                        <LazyImage src={qrCode} alt="qr_code" className="qr_code_img mx-auto" />
                        <div className="model_content">
                            <p className="mb-0">Download App</p>

                            <a href="https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN" target="_blank" rel="noopener noreferrer" >
                                <LazyImage src={playStore} alt="play_store" className="ms-2" />
                            </a>
                            <a href="https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235" target="_blank" rel="noopener noreferrer" >
                                <LazyImage src={appStore} alt="app_store" className="ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;

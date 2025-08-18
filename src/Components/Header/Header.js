import qrCode from "../../assets/image/qr_code.svg";
import playStore from "../../assets/image/play_store.png";
import appStore from "../../assets/image/app_store.png";
import HeaderMenu from "./HeaderMenu";

function Header() {
    return (
        <>
            <HeaderMenu />
            <section>
                <div className="d-none d-md-block qr_code animZoomIn">
                    <div className="model">
                        <img src={qrCode} alt="qr_code" className="qr_code_img" />
                        <div className="model_content">
                            <p className="mb-0">Download App</p>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={playStore}
                                    alt="play_store"
                                    style={{ marginRight: 10, marginLeft: 10 }}
                                />
                            </a>

                            <a
                                href="https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={appStore} alt="app_store" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Header;

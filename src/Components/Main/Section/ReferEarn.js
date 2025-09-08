import refer_and_earn from "../../../assets/image/vector/refer_and_earn.svg";
import LazyImage from "../../../assets/js/LazyImage";
export default function ReferEarn() {
    return (
        <>

            <section className="container refer_and_earn_container bg-primary my-5">
                <div className=" py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <LazyImage src={refer_and_earn} alt="refer_and_earn" className="w-100 mb-4 mb-lg-0 lazyload" style={{ maxWidth: "500px" }} />
                        </div>
                        <div className="col-lg-6 text-white">
                            <p className="text-center fw-bold mb-0 fs-1">Refer & earn</p>
                            <p className="text-center mb-0 fs-4">Share the app and get rewarded</p>
                            <hr />
                            <div className="d-flex flex-column gap-3">
                                <p className="fs-4 mb-0">How it work?</p>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center text-center fs-5"
                                        style={{ flex: "none", width: "48px", height: "48px" }}>01</div>
                                    <p className="fs-6 mb-0">Share your referral code/link with your friends</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center text-center fs-6"
                                        style={{ flex: "none", width: "48px", height: "48px" }}>02</div>
                                    <p className="fs-6 mb-0">Your friend signs up using your code/link and receives</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center text-center fs-6"
                                        style={{ flex: "none", width: "48px", height: "48px" }}>03</div>
                                    <p className="fs-6 mb-0">You will get 0.3% commission only on MOBILE and DTH recharges from
                                        your friends transaction not all type of transaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
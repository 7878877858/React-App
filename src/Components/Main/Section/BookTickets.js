import hawa_mahal_jaipur_rajasthan from "../../../assets/image/travel_destinations/hawa_mahal_jaipur_rajasthan.png";
import atal_bridge_ahmedabad_gujarat from "../../../assets/image/travel_destinations/atal_bridge_ahmedabad_gujarat.png";    
import gateway_of_india_mumbai from "../../../assets/image/travel_destinations/gateway_of_india_mumbai.png";
import LazyImage from "../../../assets/js/LazyImage";

export default function BookTickets() {
    return (
        <>
            <section>
                <div className="container py-5">
                    <h1 className="text-center fw-semibold mb-4">
                        <span className="text-black">Book your tickets today and embark on an unforgettable journey to</span>
                        <span className="text-primary">India</span>
                    </h1>
                    <p className="text-center text-muted mb-5">Immerse yourself in the vibrant culture, timeless history, and
                        stunning landscapes of India. Explore iconic landmarks like the majestic Taj Mahal and unwind in the
                        tranquil backwaters of Kerala. India is a land of endless possibilities, offering thrilling
                        adventures, spiritual journeys, and a culinary experience like no other. Whether you’re a history
                        enthusiast, a nature lover, or a foodie, India has something extraordinary waiting for you. Don’t
                        delay—book your journey today and let the adventure begin!</p>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 text-center"
                        id="travel_destination_container">
                        <div className="col">
                            <div className="destination-card">
                                <LazyImage src={hawa_mahal_jaipur_rajasthan}
                                    alt="Hawa Mahal" className="mb-2" />
                                <p className="text-center fs-3 fw-bold mb-2">Life is short and the India is <span
                                    className="text-secondary"> wide</span></p>
                                <p className="text-center text-muted mb-2">At Tradgo, we customize reliable and trutworthy
                                    educational tours to destinations all over the india</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="destination-card">
                                <LazyImage src={atal_bridge_ahmedabad_gujarat}
                                    alt="Atal Bridge" className="mb-2" />
                                <p className="text-center fs-3 fw-bold mb-2">Discover the magic of Incredible <span
                                    className="text-secondary"> India</span></p>
                                <p className="text-center text-muted mb-2">To get the best of your adventure you just need to
                                    leave and go where you like. we are waiting for you</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="destination-card">
                                <LazyImage src={gateway_of_india_mumbai}
                                    alt="Gateway Of India" className="mb-2" />
                                <p className="text-center fs-3 fw-bold mb-2">People don’t take trips, trips take <span
                                    className="text-secondary"> people</span></p>
                                <p className="text-center text-muted mb-2">Let your heart be your guide, as we eagerly await the
                                    start of your journey with us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
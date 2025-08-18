import kd from "../../../assets/image/users/kd.svg";
import md from  "../../../assets/image/users/md.svg";
import pk from "../../../assets/image/users/pk.svg";
import rg from "../../../assets/image/users/rg.svg";
import kp from "../../../assets/image/users/kp.svg";
import ng from "../../../assets/image/users/ng.svg";
const aboutUs = [
  {
    icon: md,
    name: "Mital Dabhi",
    star: 4.5,
    msg: "Instant mobile recharges to hassle-free bill payments, it’s the ultimate all-in-one app. The cashback offers are unbeatable, and the interface is sleek and easy to use. Transactions are lightning-fast and secure, giving me total peace of mind. Highly recommended for anyone who values convenience and savings!",
  },
  {
    icon: pk,
    name: "Parmar Kinjal",
    star: 4,
    msg: "Tradgo makes my life so much easier! 🌟 Quick recharges, seamless bill payments, and amazing cashback offers—everything I need in one app. The interface is super user-friendly, and transactions are always secure. Highly recommend for anyone looking for a reliable payment solution!",
  },
  {
    icon: kd,
    name: "Kartik Dholakiya",
    star: 4,
    msg: "TradGo is a highly-rated app that offers a comprehensive solution for all types of mobile recharges, bill payments, and money transfers. Users appreciate its seamless user experience, quick transaction processing, and robust security measures. The app supports a wide range of payment methods and offers attractive cashback and rewards for its users. Its intuitive design and reliable customer support have contributed to its top ratings, making it a favorite among users seeking efficient and hassle",
  },
  {
    icon: rg,
    name: "Rahul Gohel",
    star: 5,
    msg: "Tradgo Bus Booking is fantastic! User-friendly interface, easy booking process, and reliable service. Great for hassle-free travel planning. Highly recommended!",
  },
  {
    icon: kp,
    name: "Keval Punani",
    star: 5,
    msg: "Tradgo has exceeded my expectations in every way. The app is incredibly user-friendly, and the customer support is top-notch. I have never had any issues with transactions, and the cashback offers are amazing. I highly recommend Tradgo to anyone looking for a reliable and efficient payment solution.",
  },
  {
    icon: ng,
    name: "Nikunj Gohel",
    star: 4.5,
    msg: "Tradgo has been a fantastic experience for me. The user interface is intuitive, transactions are quick, and the cashback rewards are a nice touch. The customer service team is always responsive and helpful. I have already shared my positive experience with Tradgo with my friends and family.",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="container py-5">
        <h1 className="text-center fw-semibold mb-4">
          <span className="text-black">What Our User Say </span>
          <span className="text-primary">About Us</span>
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {aboutUs.map((about, index) => (
            <div className="col" key={index}>
              <div className="comment_card shadow h-100 p-3">
                <div className="d-flex align-items-center justify-content-start gap-3 mb-2">
                  <img
                    src={about.icon}
                    alt={about.name}
                    className="comment_user_img"
                  />
                  <p className="fw-bold mb-0" style={{ fontSize: "1rem" }}>
                    {about.name}
                  </p>
                </div>

                {/* Stars */}
                <div className="rate mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`${
                        i < Math.floor(about.star)
                          ? "fas fa-star"
                          : i < about.star
                          ? "fas fa-star-half-alt"
                          : "far fa-star"
                      } text-warning`}
                    ></i>
                  ))}
                  <span className="ms-2 rating-value">{about.star}</span>
                </div>

                <p className="text-black">{about.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

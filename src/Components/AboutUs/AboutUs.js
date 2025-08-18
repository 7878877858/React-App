import { useState } from "react";
import { useEffect } from "react";
export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us - TradGo – Recharge & Bill Payment";   
  }, []);
  const aboutUsList = [
    {
      title: "What Makes Tradgo Unique?",
      li: [
        "A hassle-free online experience",
        "Offers/deals available in the app to get rewarded every time you spend",
        "Exclusive cashback codes",
        "All of our financial services are secure and backed by ICICI Banks trust, so you can transact and invest worry-free on the Tradgo app",
      ],
    },
    {
      title: "Recharge & Payments",
      li: [
        "Find best-prepaid recharge plans & mobile recharge offers on JIO Recharge, Airtel Recharge, VI Recharge, and BSNL Recharge",
        "Use the Tradgo app for FASTag recharge and travel worry-free",
        "Avail exciting offers/rewards on Tata Play recharge, Airtel DTH recharge, Videocon D2H recharge, Dish TV recharge, and Sun direct recharge",
        "Avail amazing cashback offers on electricity bill payment, water bill payment, gas bill payment, post-paid bill payment, and broadband bill payment.",
        "Book LPG cylinder in minutes and enjoy exclusive offers/discounts.",
        "Save your salary and pay rent with a credit card or Buy Now Pay Later on Tradgo to earn reward points",
      ],
    },
    {
      title: "Key Features:",
      li: [
        "Pay electricity bills online, do recharges, make insurance payments, buy amazing deals from top brands, and many more",
      ],
    },
  ];

  // Track accordion open/close state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="other">
      <section className="other_section">
        <div className="container py-5">
          <h1 className="text-center fw-semibold mb-4">
            <span className="text-black">About</span>
            <span className="text-primary">Us</span>
          </h1>

          <div className="row">
            <div className="col">
              <div className="bg-white shadow rounded p-3">
                <div className="container">
                  <br />
                  <p>
                    Tradgo is a well-known name in the world of payment app
                    serving over 1 Lakh users across the country. Over the years
                    Tradgo has transformed to become one of the leading
                    financial services and investment apps in India. From
                    recharge &amp; bill payments to investment &amp; lending,
                    Tradgo lets you do it all effortlessly. Tradgo has always
                    been known for offering safe and seamless UPI payments,
                    utility bill payments, mobile/DTH recharges, Pay Later
                    solutions etc. With a robust infrastructure supporting
                    multiple payment methods, Tradgo users can choose to pay via
                    Wallet, UPI, Net Banking, Debit Cards and Credit Cards to
                    spend across categories at their favourite offline or online
                    merchant. On the lending front.
                  </p>

                  <div id="accordionToggle">
                    <div className="row">
                      <div
                        className="accordion accordion-flush"
                        id="about_us_accordion"
                      >
                        {aboutUsList.map((item, index) => (
                          <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`h2_${index}`}>
                              <button
                                className={`accordion-button ${
                                  activeIndex === index ? "" : "collapsed"
                                }`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                              >
                                {item.title}
                              </button>
                            </h2>
                            <div
                              id={`accordion_${index}`}
                              className={`accordion-collapse collapse ${
                                activeIndex === index ? "show" : ""
                              }`}
                              aria-labelledby={`h2_${index}`}
                              data-bs-parent="#about_us_accordion"
                            >
                              <div className="accordion-body">
                                {item.li.map((line, i) => (
                                  <div
                                    key={i}
                                    className="d-flex align-items-start mb-3"
                                  >
                                    <i
                                      className="fa fa-circle mx-3 mt-2"
                                      style={{ fontSize: "8px" }}
                                    ></i>
                                    <div>{line}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

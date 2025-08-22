import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us - TradGo – Recharge & Bill Payment";   
  }, []);
  return (
    <>
     <Helmet>
        <title>Contact Us | TradGo Recharge & Bill Payment</title>
        <meta
          name="description"
          content="Get in touch with TradGo for any support or inquiries related to mobile recharge, bill payment, and services."
        />
        <meta
          name="keywords"
          content="TradGo contact, recharge support, bill payment help, TradGo customer service"
        />
        <link rel="canonical" href="https://tradgo.in/contact" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Us | TradGo Recharge & Bill Payment"
        />
        <meta
          property="og:description"
          content="Get in touch with TradGo for any support or inquiries related to mobile recharge, bill payment, and services."
        />
        <meta
          property="og:image"
          content="https://tradgo.in/assets/image/og/contact_us.png"
        />
        <meta property="og:url" content="https://tradgo.in/contact" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | TradGo Recharge & Bill Payment"
        />
        <meta
          name="twitter:description"
          content="Get in touch with TradGo for any support or inquiries related to mobile recharge, bill payment, and services."
        />
        <meta
          name="twitter:image"
          content="https://tradgo.in/assets/image/og/contact_us.png"
        />
      </Helmet>
      <main className="other">
        <section className="other_section">
          <div className="container py-5">
            <h1 className="text-center fw-semibold mb-4">
              <span className="text-primary">Contact</span>
            </h1>

            <div className="row">
              <div className="bg-white shadow rounded p-3">
                <div id="Contact_Policies" className="container">
                  <br />
                  <h4 className="text-start mb-2">We are Here!</h4>
                  <div className="mb-4">
                    Tradgo is a well-known name in the world of payment app
                    serving over 3 Lakh users across the country. Over the years
                    Tradgo has transformed to become one of the leading
                    financial services and investment apps in India. From
                    recharge &amp; bill payments to investment &amp; lending,
                    Tradgo lets you do it all effortlessly. Tradgo has always
                    been known for offering safe and seamless UPI payments,
                    utility bill payments, mobile/DTH recharges
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p className="fs-3 text-dark fw-400 mb-0">Get In Touch</p>
                      <p className="text-primary mb-0">Registered Office :</p>
                      <p className="text-secondary mb-2">
                        Brajanagar Main Road, Lochapada Road, Down Dhobanala
                        Bridge, Brahmapur, Odisha-760001
                      </p>

                      <p className="text-primary mb-0">Corporate Office :</p>
                      <p className="text-secondary mb-2">
                        Corporate Office :316 Trade Square, Near Parishkar Flat,
                        Khokhra Ahmedabad 380008
                      </p>

                      <p className="text-primary mb-0">+91-97783 44449</p>
                      <p className="text-primary mb-0">info@tradgo.in</p>
                    </div>

                    <div className="col-md-6">
                      <p className="fs-3 text-dark fw-400 mb-0">Office Hour</p>
                      <p className="text-primary mb-0">Monday-Saturday</p>
                      <p className="text-secondary mb-2">11am-7pm ET</p>
                      <p className="text-primary mb-0">Sunday</p>
                      <p className="text-secondary mb-2">11am-6pm ET</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <p className="fs-3 text-dark fw-400 mb-0">
                        Got Any Questions?
                      </p>
                      <p className="text-primary mb-3">
                        Use the form below to get in touch with the sales team
                      </p>

                      <form method="post" id="contact_form" className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <label
                            htmlFor="user_name"
                            className="form-label mb-1"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="user_name"
                            name="user_name"
                            aria-describedby="user_name_help"
                            placeholder="Enter name"
                          />
                          <div
                            id="user_name_help"
                            className="form-text"
                          ></div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <label
                            htmlFor="user_email"
                            className="form-label mb-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="user_email"
                            name="user_email"
                            aria-describedby="user_email_help"
                            placeholder="Enter email"
                          />
                          <div
                            id="user_email_help"
                            className="form-text"
                          ></div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <label
                            htmlFor="user_phone"
                            className="form-label mb-1"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="user_phone"
                            name="user_phone"
                            aria-describedby="user_phone_help"
                            placeholder="Enter phone number"
                          />
                          <div
                            id="user_phone_help"
                            className="form-text"
                          ></div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <label
                            htmlFor="user_subject"
                            className="form-label mb-1"
                          >
                            Subject
                          </label>
                          <select
                            className="form-select"
                            id="user_subject"
                            name="user_subject"
                          >
                            <option>Select Your Subject</option>
                            <option>Recharge &amp; Bill</option>
                            <option>Booking</option>
                            <option>Account</option>
                            <option>Payment</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div className="col-12 col-md-12 mb-3">
                          <label
                            htmlFor="user_message"
                            className="form-label mb-1"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            rows="5"
                            id="user_message"
                            name="user_message"
                            placeholder="Specify your query"
                          ></textarea>
                        </div>

                        <div className="col-12 col-md-12 mb-3">
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{ width: "100%" }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

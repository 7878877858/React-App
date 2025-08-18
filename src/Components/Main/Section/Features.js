
import appDashboard from '../../../assets/image/mobile/app_dashboard.png';
const features = [
  {
    title: 'Mobile Recharge',
    li: [
      'TradGo simplifies online mobile recharge and bill payments across India, offering seamless services for all major telecom operators, including Airtel, Vodafone, Jio, and BSNL.',
      'With cutting-edge encryption technology, TradGo ensures secure transactions through multiple payment options like credit/debit cards, net banking, e-wallets, and UPI.',
      'Experience lightning-fast recharges with an intuitive, user-friendly interface that lets you top up your mobile or pay bills anytime, anywhere. Choose TradGo for reliability, convenience, and peace of mind!'
    ],
    src: appDashboard,
    alt: 'app_dashboard'
  },
  {
    title: 'DTH Recharge',
    li: [
      'TradGo is a rapidly growing platform designed to simplify your DTH (Direct to Home) recharge experience',
      'Enjoy fast, hassle-free recharges for all major operators, including Airtel DTH, Tata Sky, Videocon D2H, Dish TV, and more—all in one place!',
      'With 24/7 support via live chat and call, TradGo ensures uninterrupted entertainment by addressing your queries and issues promptly. Recharge smarter with TradGo today!'
    ],
    src: appDashboard,
    alt: 'app_dashboard'
  },
  {
    title: 'Electricity Bill Payment',
    li: [
      'With TradGo, paying your electricity bills is quick, secure, and hassle-free. We support a wide range of providers, including SBPDCL, BSES Rajdhani, TATA Power, BEST Mumbai, Adani Electricity, and many others.',
      'Enjoy instant payment processing to avoid late fees and ensure uninterrupted power supply. Simply select the electricity bill option, enter your consumer number, fetch your bill details, and complete your payment in just a few clicks!',
      'Switch to TradGo for a seamless bill payment experience today.'
    ],
    src: appDashboard,
    alt: 'app_dashboard'
  }
];

function Features() {
  return (
    <section className="features">
      <div className="container py-5">
        {features.map((feature, index) => (
          <div
            className="row align-items-center position-sticky bg-white"
            style={{ height: 'calc(100vh - 68px)', top: '68px' }}
            key={index}
          >
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column w-100 h-100">
                <h1 className="mb-3 fw-bold text-secondary text-start">
                  {feature.title}
                </h1>
                <ul className="d-flex flex-column gap-3">
                  {feature.li.map((item, i) => (
                    <li className="fs-5" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="d-flex align-items-center w-100 h-100">
                <img
                  src={feature.src}
                  alt={feature.alt}
                  className="mobile_img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

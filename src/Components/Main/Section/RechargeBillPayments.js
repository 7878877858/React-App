// import '../../../assets/css/bootstrap.min.css';
// import '../../../assets/css/main.css';
// import '../../../assets/css/snow_fall.css';
// import mobile from '../../../assets/image/icons/mobile.svg';
// import dth from '../../../assets/image/icons/dth.svg';
// import electricity from '../../../assets/image/icons/electricity.svg';
// import gas from '../../../assets/image/icons/gas_cylinder.svg';
// import redeem from '../../../assets/image/icons/redeem_code.svg';
// import water from '../../../assets/image/icons/water.svg';
// import pipedGas from '../../../assets/image/icons/piped_gas.svg';
// import fastag from '../../../assets/image/icons/fastag.svg';
// import loan from '../../../assets/image/icons/loan_repayment.svg';
// import landline from '../../../assets/image/icons/landline.svg';
// import broadband from '../../../assets/image/icons/broadband.svg';
// import more from '../../../assets/image/icons/more.svg';
// import { useState } from "react";
// const services = [
//     { icon: mobile, name: 'Mobile Recharge' },
//     { icon: dth, name: 'DTH' },
//     { icon: electricity, name: 'Electricity' },
//     { icon: gas, name: 'Gas' },
//     { icon: redeem, name: 'Redeem Code' },
//     { icon: water, name: 'Water' },
//     { icon: pipedGas, name: 'Piped Gas' },
//     { icon: fastag, name: 'Fastag' },
//     { icon: loan, name: 'Loan Repayment' },
//     { icon: landline, name: 'Landline' },
//     { icon: broadband, name: 'Broadband' },
//     { icon: more, name: 'More' },
// ];
// const handleServiceClick = (service) => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"; 

//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
//   }

//   window.open(storeLink, "_blank"); // open in new tab
// };
// function RechargeBillPayments() {
//     const [selectedService, setSelectedService] = useState(null);

//   const handleServiceClick = (service) => {
//     setSelectedService(service);
//   };
//     return (
//         <div className="container py-5">
//             <h1 className="text-center fw-semibold mb-4">
//                 <span className="text-black">Recharge &</span>{' '}
//                 <span className="text-primary">Utility Bill Payment</span>
//             </h1>
//             <p className="text-center text-muted mb-5">
//                 Recharge and pay bills in seconds - fast, smooth, and rewarding!
//             </p>
//             <div className="services-container">
//                 <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-4 text-center">
//                     {services.map((service, index) => (
//                         <div className="col" key={index}>
//                             <div className="service-card"
//                                 onClick={() => handleServiceClick(service)}
//                                 style={{ cursor: "pointer" }}>
//                                 <img
//                                     src={service.icon}
//                                     alt={service.name}
//                                     className="mb-2"
//                                     style={{ width: '64px', height: '64px' }}
//                                 />
//                                 <p className="service-name">
//                                     {service.name.split(' ').map((word, i, arr) => (
//                                         <span key={i}>
//                                             {word}
//                                             {i < arr.length - 1 && <br />}
//                                         </span>
//                                     ))}

//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default RechargeBillPayments;
import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/main.css';
import '../../../assets/css/snow_fall.css';
import mobile from '../../../assets/image/icons/mobile.svg';
import dth from '../../../assets/image/icons/dth.svg';
import electricity from '../../../assets/image/icons/electricity.svg';
import gas from '../../../assets/image/icons/gas_cylinder.svg';
import redeem from '../../../assets/image/icons/redeem_code.svg';
import water from '../../../assets/image/icons/water.svg';
import pipedGas from '../../../assets/image/icons/piped_gas.svg';
import fastag from '../../../assets/image/icons/fastag.svg';
import loan from '../../../assets/image/icons/loan_repayment.svg';
import landline from '../../../assets/image/icons/landline.svg';
import broadband from '../../../assets/image/icons/broadband.svg';
import more from '../../../assets/image/icons/more.svg';

const services = [
    { icon: mobile, name: 'Mobile Recharge' },
    { icon: dth, name: 'DTH' },
    { icon: electricity, name: 'Electricity' },
    { icon: gas, name: 'Gas' },
    { icon: redeem, name: 'Redeem Code' },
    { icon: water, name: 'Water' },
    { icon: pipedGas, name: 'Piped Gas' },
    { icon: fastag, name: 'Fastag' },
    { icon: loan, name: 'Loan Repayment' },
    { icon: landline, name: 'Landline' },
    { icon: broadband, name: 'Broadband' },
    { icon: more, name: 'More' },
];

function RechargeBillPayments() {
    const handleServiceClick = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"; 

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
        }

        window.open(storeLink, "_blank"); // open in new tab
    };

    return (
        <div className="container py-5">
            <h1 className="text-center fw-semibold mb-4">
                <span className="text-black">Recharge &</span>{' '}
                <span className="text-primary">Utility Bill Payment</span>
            </h1>
            <p className="text-center text-muted mb-5">
                Recharge and pay bills in seconds - fast, smooth, and rewarding!
            </p>
            <div className="services-container">
                <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-4 text-center">
                    {services.map((service, index) => (
                        <div className="col" key={index}>
                            <div
                                className="service-card"
                                onClick={handleServiceClick}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={service.icon}
                                    alt={service.name}
                                    className="mb-2"
                                    style={{ width: '64px', height: '64px' }}
                                />
                                <p className="service-name">
                                    {service.name.split(' ').map((word, i, arr) => (
                                        <span key={i}>
                                            {word}
                                            {i < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RechargeBillPayments;
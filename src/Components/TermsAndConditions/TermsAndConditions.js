import {useEffect  } from "react";
const item = [
            'Registration fees for membership of TradGo is non refundable.',
            'TradGo has reserve right for change/modify policy of for any retailer/distributor in future for services which is on paid basis.',
            'Once Registration details update in system then not allowed any changes in master contact of firm.',
            'Logo, website, Software & other application are property of TradGo. Retailer/Distributor does not allowed tempered/manipulation in TradGo property like website, logos, brand name, software it is retailer/distributor`s responsibility for care it. If retailer/distributor caught by tempered by it TradGo will take legal action against him.',
            'Distributor cannot work outside allotted area at the time of enrolment. If anyone wants to work out side area take prior permission from TradGo. If anyone found without information work outside area should be suspended/termination of their identity from TradGo.',
            'Retailer/Distributor are responsible for his Account details like user name, password. Do not share their login & other details to any other person. If any misuse/fraud due to login/password sharing TradGo will not responsible for same.',
            'Due any technical issue any data, record etc. lost TradGo not responsible for the same.',
            'Distributor/retailer cannot allow collecting service charge or additional amount over & above commission structure & in that case TradGo not responsible for the same for any legal issue.',
            'Any retailer/distributor wants to discontinue/freeze their account, its mandatory inform to TradGo in writing with prior notice of 7 days. If any retailer/distributor stop/discontinue their work without any information and any manipulation or balance loss during this period TradGo not responsible for any legal issue.',
            'The Retailer/Distributor agree and assure TradGo that TradGo are only the enablers and the sale of ticket-providers of travel & telecom products of third party (Airlines, Hotel, Bus operators, Telecom operators) and TradGo cannot be held responsible for any problems that may arise out of the actions or inactions of the third party transport providers likes Airlines, Bus operators etc.',
            'TradGo has right to change any terms & condition without prior notice which is acceptable/applicable to all retailers/distributors.',
            'TradGo have reserved one side rights to terminate contract between TradGo & retailers/distributors in case of found that retailer/distributor not follow/breaking company norms.',
            'We are working an online business so if any technical fault comes arise in future and retailer/distributor caused any kind of lose due to operator/service provider ends in that case TradGo will not responsible for it or not give any type of reimbursement for any lose.TradGo has right to add/remove/modify any conditions in future without any prior notice.',
            'Subject to jurisdiction is Ahmadabad.'
        ];
export default function TermsAndConditions(){
    useEffect(() => {
        document.title = "Terms & Conditions - TradGo – Recharge & Bill Payment";
    }, []);
    return (
        <>
             <main className="other">
        <section className="other_section">
            <div className="container py-5">
                <h1 className="text-center fw-semibold mb-4">
                    <span className="text-black">Terms &</span>
                    <span className="text-primary">Conditions</span>
                </h1>
                <div className="row">
                    <div className="col">
                        <div className="bg-white shadow rounded p-3">
                            <div className="container"><br/>
                                <ul id="faqs_list">
                                    {item.map((text, index) => (
                                        <li key={index} classNameName="mb-3">
                                            <p classNameName="text-muted">{text}</p>
                                        </li>
                                    ))}
                                </ul>
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
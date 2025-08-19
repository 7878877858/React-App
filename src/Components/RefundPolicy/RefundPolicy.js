import { useEffect } from 'react';
const item = [
    'By accessing and using TradGo, YOU accept and agree to the terms, conditions and rules without limitation and or qualification.',
    'We reserve the right to modify the terms at any time without giving YOU any prior notice. Your use of TradGo following any such modification constitutes your agreement to follow and be bound by the terms as modified. Any additional terms and conditions, disclaimers, privacy policies and other policies applicable in general and/ or to specific areas of this website, TradGo or to a particular service are also considered as terms.',
    'TradGo does not at any point of time during any transaction between the USER and merchant/ vendor and or service provider take the ownership of any of the products/services provided by the merchant. Nor does TradGo at any point asserts any rights or claims over the products/services offered by the merchant to the USER. The cancellation/refund, if any, will be governed as per the terms and conditions of the aggregator or of the merchant/vendor. TradGo has no role in governing refund/cancellation charges. TradGo, will not be responsible for refund/cancellation including any charges arising therefrom.',
    'In the event, YOU erroneously send a payment to a wrong party or have sent a payment for a wrong amount, TradGo shall have no liability in this regard and your only recourse will be to contact such third party to whom such payment was sent and seek a refund (if any). TradGo will not refund or reverse a payment erroneously made by YOU.',
    'All sales of prepaid recharge on the TradGo platform are final with no refund or exchange permitted. YOU are responsible for the mobile number or dth account number for which YOU purchased the prepaid recharge and all charges that result from those purchases. YOU are also responsible for the information relating to data card and similar recharge services and all charges that result from those purchases. TradGo is not responsible for any purchase of prepaid recharge for an incorrect mobile number or dth account number or incorrect data card information and or similar services.',
    'TradGo disclaims any accountability, legal, losses/damages or else, that might arise because of the act, omission or otherwise of any USER on its website/mobile application or caused by the same. USER/YOU expressly admit that TradGo is only a payment facilitator & intermediary, and as such, stands indemnified from any accountability that might arise because of the same. YOU (USER) moreover acknowledge that visiting/using TradGo website/mobile application is an implicit reception/confirmation of this disclaimer on your part.',
    'YOU are requested to go through the merchant/vendor provided terms and conditions on their website and or platform. TradGo is not responsible for your inability to access such terms and conditions or for any loss resulting from such terms and conditions or lack thereof. YOU agree and acknowledge that the actual contract for sale is directly between YOU and the merchant/vendor. TradGo does not control or prevent changes in the published details and descriptions of websites/apps operated by the aggregator or the merchant/vendor and is not responsible for any content therein. TradGo has no control over the existence, quality, safety or legality of items displayed; the accuracy of the aggregator’s content or listings; the ability of the aggregator and merchant/vendor to sell items or provide services. TradGo does not at any point of time during any transaction between YOU and aggregator/merchant/vendor, take the ownership of any of the listing, bookings or services offered by the aggregator/merchant/vendor. Nor does TradGo at any point asserts any rights or claims over the same offered by the aggregator/merchant/vendor to YOU. The aggregator or the merchant/vendor is solely responsible for the content/listings/bookings made available by it through the TradGo platform and YOU should contact the respective aggregator or merchant/vendor directly. For more information, we request YOU to contact the vendor/merchant/ service provider in order to get further clarifications and confirmation or the same can be confirmed on their websites as well.',
    'TradGo is not a warrantor of the content/listings/bookings/services being offered on TradGo by various aggregators or merchant/vendors. YOU understand that any issue or disputes regarding the warranty, guarantee, quality, and service will be addressed as per the terms and conditions of the aggregator or the merchant/vendors, and YOU agree to handle such issues and disputes directly between YOU and the aggregator or merchant/vendor.',
    'TradGo is not responsible for any warranty, guarantee, post sale claims, genuineness of listings/bookings, content, products and services. TradGo will not be liable for any claims including but not limited to any misrepresentation by the aggregator or the merchant/vendor in its content/listings/bookings.',
    'Notwithstanding anything contrary contained herein, the service, the interface and api work, and their respective information, pricing and data, and availability are subject at any time and from time to time to human, mechanical , typographic, or other errors, oversights, mistakes, limitations, delays, service interruptions, including, without limitation, as may be due in whole or in part to, related to or arising out of (i) computer hardware and software, telecommunication and operating systems, databases, or business processes and procedures, other problems inherent in, or which may be associated with, the use of the internet and electronic communications including, without limitation, force majeure event , government / regulatory actions, orders, notifications etc. And / or and acts and omissions of third parties etc.',
    'Any amount transferred erroneously or for any reason by the USER shall not be refunded to the USER in any circumstances.',
    'The USER understands and agrees that TradGo is not a party to the contract between the USER and the merchant establishment. TradGo does not endorse any advertiser or merchant linked to its website. Furthermore, TradGo is under no obligation to monitor the merchant establishment`s service/products used by the USER. The merchant establishment alone will be responsible for all obligations under the contract including (without limitation) warranties or guarantees. Any dispute with or complaint against any merchant establishment must be directly resolved by the USER with the merchant establishment. It is clarified that TradGo shall not be responsible or liable for any deficiency in goods and/or services purchased using TradGo wallet.',
    'Any payment made erroneously by the USER to any merchant establishment or any erroneous transfer to any person shall not be refunded to the USER by TradGo in any circumstances.',
    'Any web-link on the platform to a third party site is not an endorsement of that web-link. By using or browsing any such other web-link, the USER shall be subject to the terms and conditions in relation to that web-link.',
    'In the event of any dispute (defined below), TradGo records shall be binding as the conclusive evidence of the transactions carried out through use of the wallet.',
    'TradGo will not be responsible for recovering the money in case the account holder initiates fund transfer to an unintended or incorrect account.',
    'These following terms and conditions shall be applicable to the provision of any fund transfer and fund collection facility provided / facilitated by TradGo. The USER shall provide correct beneficiary details to TradGo at the time of availing the said facility. The USER shall be solely responsible for entering wrong beneficiary details like incorrect virtual payment address or incorrect mobile number or account no or ifsc code, due to which the fund are transferred to an incorrect beneficiary. The USER agrees that the payment order shall become irrevocable when it is executed by TradGo.',
    'The USER is responsible for the accuracy and authenticity of the instructions provided to TradGo and the same, if is in the form and manner prescribed by TradGo, shall be considered to be sufficient to operate the said facility. TradGo shall not be required to independently verify the instructions. TradGo has no liability if it does not or is unable to stop or prevent the implementation of any payment order issued by the USER. Once a payment order is issued by the USER the same cannot be subsequently revoked by the USER.',
    'All instructions, requests, directives, orders, directions, entered by the USER, are based upon the USER’s decisions and are the sole responsibility of the USER.',
    'Refunds (if any) will be credited to your TradGo wallet account.'
];
export default function Refundpolicy() {
    useEffect(() => {
        document.title = "RefundPolicy - TradGo – Recharge & Bill Payment";
    }, []);
    return (
        <>
            <main className="other">
                <section className="other_section">
                    <div className="container py-5">
                        <h1 className="text-center fw-semibold mb-4">
                            <span className="text-black">Refund</span>
                            <span className="text-primary">Policy</span>
                        </h1>
                        <div className="row">
                            <div className="col">
                                <div className="bg-white shadow rounded p-3">
                                    <div className="container"><br />
                                        <div id="refund_list"></div>
                                        <ul className="list-unstyled">
                                            {item.map((text, index) => (
                                                <li key={index} className="mb-2">
                                                    {text}
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
    )

}
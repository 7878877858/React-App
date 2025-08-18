import React, { useState } from "react";
import { useEffect } from "react";
const item = [
    {
        title: 'Privacy Policy',
        li: [
            'Tradgo is an application (hereinafter referred to as “Tradgo Apps or Tradgo” ) or any other future product/app developed by Pdrs Multitrade Pvt Ltd, a company incorporated under the Companies Act, 1956 with its registered office at Brajanagar-3rd lane, Ext. Lochapada Road Near Dhobanala, Brahmapur, Odisha 760001 India. Tradgo recognizes the expectations of its customers/User with regard to privacy, confidentiality and security of their personal information that resides with Tradgo.',
            'This Privacy Policy provides you with details about the manner in which your data is collected, stored & used by us. You are advised to read this Privacy Policy carefully. By visiting Tradgo website/WAP site/applications, mobile application, (collectively referred as website/App) you expressly give us consent to use & disclose your personal information in accordance with this Privacy Policy. If you do not agree to the terms of the policy, please do not use or access Tradgo website/App.',
            'The terms “We” / “Us” / “Our” individually and collectively refer to each entity being part of the definition of Tradgo and the terms “You” / “Your” / “Yourself” refer to the users.',
            'Note: Our privacy policy is subject to change at any time without notice. Though every effort would be made to keep you informed of the changes, if any, to the policy, you are kindly advised to review the policy periodically.',
            'By downloading this Tradgo application or using website you agree to be bound by the terms and conditions of this Privacy Policy. As this policy enables us to provide you a secure and a wholesome experience, we will not be able to register you, if you are not in agreement with these terms.',
            'By mere use of the App/Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use'
        ]
    },
    {
        title: 'Personal Data',
        li: [
            'Personal Data we may collect from you are as under:',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> Personal details (e.g. name,email address, contact details including, residential address, date of birth, documents such as identity card / passport details / Aadhaar details / PAN / Voter ID /driving license, and/or education details) provided by you to us to avail various products/services from us.',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> Your details including transaction history, balances, payment details, for effecting transfer of money through various payment channels provided by us. Financial details (e.g. income, and/or credit history) needed as part of request for some of our products/services;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> Images of documents/ photos required to avail any of our products/services. Voice recordings of our conversations with our customer care agent with you to address your queries/grievances;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> Information obtained from your mobile device by way of using our app like device location, communication information including contacts and call logs, device information (including storage, model, mobile network), transactional and promotional SMS/app notifications.'
        ]
    },
    {
        title: 'Use of Personal Data',
        li: [
            'Personal Data we may collect from you are as under:',
            'We are asking for sms permission only for OTP auto detect other than we do not need any sms permission',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> We take accurate location to prevent financial fraud activity and some time we have to provide exact latitude and longitude to Government agency.',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> We use your Personal Data in our business activities for providing our or our partners’ products/services and to perform, among other actions, the following:',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to facilitate the transactions or report on these transactions;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to undertake research and analytics for offering or improving our products/services and their security and service quality;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to check and process your requirements submitted to us for products/services and/or instructions or requests received from you in respect of these products/services;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to share with you, updates on changes to the products/services and their terms and conditions;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to take up or investigate any complaints/claims/disputes;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to respond to your queries or feedback submitted by you;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to verify your identity for us to provide products/services to you;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to carry credit checks, screenings or due diligence checks as lawfully required by us;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to monitor and review products/services from time to time;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> to undertake financial/regulatory/management reporting, and create and maintain various risk management models;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> for conducting audits and for record keeping purposes;',
            '<i class="fa fa-circle mx-3 mt-2" style="font-size: 8px;"></i> for selective offers and promotions.',
            'We may provide your personal information to our affiliates or other trusted businesses or persons or service providers engaged by us, or institutions that we partner with to assist us with providing you with products/services to better serve your needs and interests, based on your instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.',
            'We also use your Personal Data to fulfill the requirements of applicable laws/regulations and/or court orders/regulatory directives received by us.'
        ]
    },
    {
        title: 'Sharing of personal information',
        li: [
            'We may share personal information with our other corporate entities and affiliates.',
            'We may use personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) provided by you to our corporate entities and affiliates in the course of making transactions.',
            'We may also disclose anonymised data derived from your personal information to third parties. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.',
            'We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.',
            'We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.'
        ]
    },
    {
        title: 'Cookie Policy',
        li: [
            'Please note that a “cookie” is a small piece of information stored by a web server on a web browser so it can be later read back from that browser.',
            'We may use cookie and tracking technology depending on the features offered.',
            'No Personal Data will be collected via cookies and other tracking technology; however, if you previously provided Personal Data, cookies may be tied to such information.'
        ]
    },
    {
        title: 'Links to other websites',
        li: [
            'Our website may contain links to other websites which are not maintained by us. This privacy policy only applies to us. You are requested to read the other websites’ privacy policies when visiting these websites.',
        ]
    },
    {
        title: 'Reasonable Security Practices and Procedures',
        li: [
            'We take various steps and measures to protect the security of your Personal Data from misuse, loss, unauthorised access, modification or disclosure. We use latest secure server layers encryption and access control on our systems. Our safety and security processes are audited by a third party cyber security audit agency from time to time.',
            'We have provided multiple levels of security to safeguard your app by Login/Logout option and AppLock feature that can be enabled by you. We also ensure the device binding so that the same login cannot be used on different device without any additional authentication/OTP. Please do not share your App login, password and OTP details with anybody.'
        ]
    },
    {
        title: 'Choice/Opt-Out',
        li: [
            'We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.',
            'If you want to remove your contact information from all lists and newsletters, please click on the unsubscribe button on the emailers.',
        ]
    },
    {
        title: 'Your Consent',
        li: [
            'By using the app and/ or by providing your information, you consent to the collection and use of the information you disclose on the app in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this privacy policy.',
            'If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it Grievance Officer',
            'In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:',
            '<b>Email Id- support@pdrs.online</b> <br> <b>Pdrs Multitrade Pvt Ltd</b> <br> <b>Brajanagar-3rd Lane,Ext</b> <br> <b>Brahmapur, Odisha India-760001</b>',
            'You shall communicate by sending a written communication through registered post or courier at Tradgo`s registered office.'
        ]
    },
];


export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Privacy Policy - TradGo – Recharge & Bill Payment";           
    }, []);
    const [openIndex, setOpenIndex] = useState(null); 

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <main className="other">
                <section className="other_section">
                    <div className="container py-5">
                        <h1 className="text-center fw-semibold mb-4">
                            <span className="text-black">Privacy</span>
                            <span className="text-primary">Policy</span>
                        </h1>
                        <div className="row">
                            <div className="col">
                                <div className="bg-white shadow rounded p-3">
                                    <div className="container"><br />
                                        <div id="accordionToggle">
                                            <div className="row">
                                                <div className="accordion accordion-flush" id="about_us_accordion">
                                                    {item.map((section, index) => (
                                                        <div className="accordion-item" key={index}>
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                                                                    type="button"
                                                                    onClick={() => toggleAccordion(index)}
                                                                >
                                                                    {section.title}
                                                                </button>
                                                            </h2>
                                                            <div
                                                                className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                                                            >
                                                                <div className="accordion-body">
                                                                    {section.li.map((liItem, liIndex) => (
                                                                        <div
                                                                            className="d-flex align-items-start mb-3"
                                                                            key={liIndex}
                                                                            dangerouslySetInnerHTML={{ __html: liItem }}
                                                                        ></div>
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
        </>
    );
}
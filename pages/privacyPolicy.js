import Head from "next/head";
import Layout from "../components/layouts/layout";
import Cto from "../components/cto/cto";
import PageTitle from "../components/pagetitle/pagetitle";
import Banner from "../components/aboutusPageComponent/banner/banner";
import Reviews from "../components/reviews/reviews";
import StatCounter from "../components/statcounter/statcounter";
import LogoSlider from "../components/logoslider/logoslider";



export default function PrivacyPolicy(props) {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Layout>
                {/* <PageTitle title={"Privacy Policy"} />   */}
                <div className="privacy" style={{ backgroundImage: `url(images/portfolio/privacy.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "400px" }}>
                </div>
                {/* privacy_content */}
                <div className="privacy_content my-5">
                    <div className="container">
                        <div className="title my-3">
                            <h2 class="text-2xl text-black font-bold">Privacy Policy</h2>
                        </div>
                        <div className="para">
                            <p>Software Alliance (“Software Alliance”, “we”, “us” or “our”) is a company registered in Denmark and produces games and provides correspondent services.  <br />
                                We are a data controller and are responsible for the collection, use, disclosure, retention, and protection of your “personal data” (which has the meaning as set out in the General Data Protection Regulation (the “Data Protection Laws”)).   <br />
                                When you use Software Alliance’s games, we will collect, store, and process certain personal data. This privacy policy (“Privacy Policy”) sets out the basis on which the personal data collected from you, or that you provide to us, will be processed by us. Please read the following carefully to understand how we will use your personal data. For Data Protection Laws in Denmark, we are the controller of your personal data.</p>
                        </div>
                        <div className="title my-3">
                            <h2 class="text-1xl text-black font-bold">WHAT PERSONAL DATA DO WE COLLECT AND PROCESS?</h2>
                        </div>
                        <div className="para">
                            <p>When you visit our Platform, you may provide us with the following types of personal data, and we may collect and process such personal data in accordance with his Privacy Policy, as follows:
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Contact Data:</h2>
                        </div>
                        <div className="para">
                            <p>This may include your name and your email address. This information will be collected by us if you communicate with us, for example, if you use the links on our Platform to communicate with us via email.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Account Data: </h2>
                        </div>
                        <div className="para">
                            <p>If you create an account on our Platform (including the creation of a Software Alliance ID) to benefit from our services, you may need to provide your name, email address, phone number, and photograph. If you use Facebook or Google to login to our Platform, Facebook [or Google] will share data with us including but not limited to your profile data, language, location, and publicly available information about you and your friends.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Correspondence Data:</h2>
                        </div>
                        <div className="para">
                            <p> This includes the information you provide when you request support through our Platform, contact us via the email address provided in this Privacy Policy and elsewhere on our website, and your views, opinions, and feedback which you choose to provide in relation to the Platform and our services, including any comment facilities and message boards.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">User Content:</h2>
                        </div>
                        <div className="para">
                            <p> When you use our Karaoke app, this includes the videos you create (e.g. of you performing songs) and upload to our Platform. When you use our Beat Maker Go app, this includes audio recordings you upload to the Platform. By providing such User Content you acknowledge that we may make it available to other users of the Platform until you delete your account on our Platform.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold"> Session Data:</h2>
                        </div>
                        <div className="para">
                            <p> This includes your IP address, your device’s unique identifier details, browser details including version, device operating system, geo-location, time zone setting and time/date of access requests, the amount of data transmitted, and the requesting provider. We may also capture other information about visits to our Platform such as pages viewed and traffic
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold"> Cookie Data:</h2>
                        </div>
                        <div className="para">
                            <p> Cookies are small files that are downloaded to your device when accessing our platform. Most web browsers automatically accept cookies. Please refer to paragraph 4 below for further details about our use of cookies.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Preference data: </h2>
                        </div>
                        <div className="para">
                            <p>This includes any information you choose to provide us, such as your musical preferences relating to genres and artists.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Payment data: </h2>
                        </div>
                        <div className="para">
                            <p> When you purchase a subscription or any in-app content, you provide our payment processor with your payment information. We do not store such information on our servers.
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class="text-1xl text-black font-bold">HOW DO WE USE YOUR PERSONAL DATA?</h2>
                        </div>
                        <div className="para">
                            <p>We use your personal data in the following ways:
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">We use your Contact Data to:</h2>
                        </div>
                        <div className="para">
                            <p>
                                respond to communications that you send to us. The legal basis for such processing is your and our legitimate interests; and  <br />  <br />
                                market products and services to you only where you have requested that we do so, or otherwise provided your explicit consent (either via our website, by emailing us or by accepting push notifications on your device). The legal basis for such processing is that you have consented to us doing so, and for customer relationship management (“CRM”) purposes; i. additionally, we may request access to your device’s contacts for the purposes of enabling social functionality, such as giving you the option to follow your contacts on the Platform.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">We use your Account Data to:</h2>
                        </div>
                        <div className="para">
                            <p>
                                enable you to personalize your use of our services;  <br />
                                enable you to save and maintain your profile and administer your account with us; and
                                enable us to identify you.  <br /><br />
                                The legal basis for such processing is for the performance of the contract between you and us.  <br />
                                We use your Correspondence Data to help address issues you raise with us and to improve the Platform and our services. The legal basis for such processing is your and our legitimate interests. <br />
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">We use your User Content to:</h2>
                        </div>
                        <div className="para">
                            <p>
                                Enable you to use our Platform and services. The legal basis for such processing is for the performance of the contract between you and us, and share the User Content with other users of the Platform by making it available on the Platform. The legal basis for such processing is our legitimate interest.  <br /> <br />
                                We use your Session Data to administer, maintain, and improve the Platform and our services,  br
                                including identifying you or your device across our Platform and apps. Additionally, Session Data is used to identify and respond to potential risks to the security of our Platform (for example spammers, phishing attempts, screen scraping, and other actions which may violate our Terms of Use found here). The legal basis for such processing is our legitimate interest. <br /><br />
                                We use your Preference Data to infer your interests, including serving and suggesting content that you might like, and tailoring advertising to you based on such preferences.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">PERSONAL DATA RETENTION</h2>
                        </div>
                        <div className="para">
                            <p>
                                By using our Platform, you consent for us to store your personal data in line with legal, regulatory, financial, and good-practice requirements. <br /> <br />
                                The period for which we may retain your personal data will depend on the type of personal data collected, the purposes for which it was collected, applicable limitation periods for the exercise of legal rights, and whether any legal or regulatory obligations require the retention of the personal data.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Analytical/performance cookies:</h2>
                        </div>
                        <div className="para">
                            <p> These cookies allow us to recognize and count the number of visitors to our Platform and to see how visitors move around our Platform. <br /><br /> This helps us to improve the way our Platform works, for example, by ensuring that visitors are finding what they are looking for easily.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Functionality cookies</h2>
                        </div>
                        <div className="para">
                            <p> These are used to acknowledge you when you return to our Platform. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Tracking ID </h2>
                        </div>
                        <div className="para">
                            <p>Every iOS and Google Android device has a unique Tracking ID, for iOS devices, called an Identifier for Advertising (IDFA) and for Android devices, called a Google Advertising ID (AAID). <br /><br /> These Tracking IDs enable app providers and advertisers to track user activity and target ads at those users. <br /> <br />
                                Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. <br /><br />
                                You may block cookies by updating the relevant settings on your device or browser to allow you to refuse the setting of some or all types of cookies. However, if you use your browser settings to block all cookies (including strictly necessary Cookies) you may not be able to access all or parts of our site.
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">WHO DO WE SHARE YOUR PERSONAL DATA WITH? </h2>
                        </div>
                        <div className="para">
                            <p>We may need to share your personal data with selected third parties in the following circumstances: <br />
                                Group companies: We are an international organization, with businesses both inside and outside Denmark. When you create User Content you will be asked if you’d like to share such User Content with other users of our Platform who could be based both inside and outside of Denmark.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Third-party service providers: </h2>
                        </div>
                        <div className="para">
                            <p> This may include providers of certain systems and services that we use to host, administer and maintain our Platform, including for example the servers used to host our Platform.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Third-party service providers for marketing purposes: </h2>
                        </div>
                        <div className="para">
                            <p>  If you explicitly consent to any marketing from us, certain personal data may be shared with third-party service providers we use to help us carry out marketing including, for example, third party marketing automation platforms. <br /><br />
                                To comply with legal or regulatory requests: If we are under a duty to disclose or share your personal data to comply with any legal or regulatory obligation, we may share your personal data with a regulator or law enforcement agency.

                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">Prospective buyers or sellers: </h2>
                        </div>
                        <div className="para">
                            <p>  If Software Alliance DK, or its owners, buys or sells any business or assets, we may disclose your personal data to the prospective buyer or seller of such business or assets. If Software Alliance DK  <br /><br />(or substantially all of its assets) is acquired by a third party, your personal data held by Software Alliance DK, or within such assets, may be transferred to such third party.
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">THIRD-PARTY WEBSITES </h2>
                        </div>
                        <div className="para">
                            <p>Our Platform may contain links to third party websites. If you follow a link to a third-party website, please note that this Privacy Policy does not apply to those websites. <br /> We are not responsible or liable for the privacy policies or practices of those websites, so please check their policies before you submit any personal data to those websites.
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">SECURITY </h2>
                        </div>
                        <div className="para">
                            <p>We take data security seriously. We implement and maintain appropriate technical and organizational measures including resilient security systems and protocols to protect the personal data we store.
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">ACCESSING YOUR PERSONAL DATA AND YOUR RIGHTS </h2>
                        </div>
                        <div className="para">
                            <p>As a result of us collecting and processing your personal data, you have the following legal rights:
                                to access personal data we hold on you;  <br /><br />
                                to request us to make any changes to your personal data if it is inaccurate or incomplete;
                                to request your personal data is erased where we do not have a compelling reason to continue to process such personal data in certain circumstances; <br /><br />
                                to receive your personal data provided to us as a data controller in a structured, commonly used and machine-readable format where our processing of the personal data is based on (i) your consent; (ii) our necessity for the performance of a contract to which you are a party to; or (iii) steps taken at your request prior to entering into a contract with us and the processing is carried out by automated means;  <br /><br />
                                to object to, or restrict, our processing of your personal data in certain circumstances;
                                if we use your personal data for direct marketing, you can ask us to stop and we will comply with your request; <br /><br />
                                if we use your personal data on the basis of having a legitimate interest, you can object to our use of it for those purposes, giving an explanation of your particular situation, and we will consider your objection; <br /><br />
                                to object to, and not be subject to a decision which is based solely on, automated processing (including profiling), which produces legal effects or could significantly affect you; and
                                to lodge a complaint with a data protection supervisory body, which at present, is the Information Commissioner’s Office.
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">CONTACTING US AND CHANGES TO YOUR PERSONAL DATA </h2>
                        </div>
                        <div className="para">
                            <p>If you have any questions or comments about this Privacy Policy or your personal data, or if you want to exercise any of your rights,  br
                                br
                                including as set out in paragraph 8 above, or you wish to withdraw your consent where we have stated we are processing your personal data based on your consent, then please contact our support team
                            </p>
                        </div>
                        <div className="title my-3">
                            <h2 class=" text-black font-bold">CHANGES TO THIS PRIVACY POLICY</h2>
                        </div>
                        <div className="para">
                            <p>Any changes we may make to this Privacy Policy in the future will be posted on this page and, where appropriate, notified to you by email.   <br /> <br />'' Please check back regularly to keep informed of updates or changes to this Privacy Policy.
                                This Privacy Policy was last updated on December,20.
                            </p>
                        </div>
                    </div>
                </div>


            </Layout>

        </>
    )
}
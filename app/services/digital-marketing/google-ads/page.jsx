import Cta from '@/app/components/Cta'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='mainServicePage subServicesPage overFlowXHidden'>
            <div className="inner-banner innerBannerSub" style={{ backgroundImage: "url(/images/webdevservices.png)" }}>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='breadcums'>
                                <Link href="/" data-aos="fade-up" data-aos-duration="800">
                                    Home
                                </Link>
                                <span>/</span>
                                <Link href="/services" data-aos="fade-up" data-aos-duration="800">
                                    Our Services
                                </Link>
                                <span>/</span>
                                <Link href="/services/digital-marketing" data-aos="fade-up" data-aos-duration="800">
                                    Digital Marketing
                                </Link>
                                <span>/</span>
                                <Link href="/services/digital-marketing/google-ads" data-aos="fade-up" data-aos-duration="800">
                                    Google Ads
                                </Link>
                            </div>
                            <div className='badgeDiv' data-aos="fade-up" data-aos-duration="800">
                                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    Digital Marketing
                                </h4>
                            </div>
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                High-Performance Google Ads Management
                            </h1>
                            <h3>
                                Intent-driven paid search architectures built to maximize conversion volume
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Stop wasting ad spend on low-intent clicks. We engineer targeted Google PPC architectures, deploying high-converting Search campaigns, dynamic Performance Max asset arrays, and shopping networks powered by strict conversion tracking to secure lower customer acquisition costs.
                            </p>

                            <div className='row cardDivOver'>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>4.2x+</h3>
                                        <p>Average ROAS</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>$2M+</h3>
                                        <p>Ad Spend Managed</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>-35% Avg</h3>
                                        <p>Cost Per Lead</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>2 Rounds</h3>
                                        <p>Included Revisions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='formDiv'>
                                <h5>Request a Comprehensive PPC Account Audit</h5>

                                <form>
                                    <div className='inputDiv'>
                                        <label>Name</label>
                                        <input type='text' placeholder='Your name' />
                                    </div>

                                    <div className='inputDiv'>
                                        <label>Email</label>
                                        <input type='email' placeholder='you@company.com' />
                                    </div>

                                    <div className='inputDiv'>
                                        <label>Company</label>
                                        <input type='text' placeholder='Company name' />
                                    </div>

                                    <div className='inputDiv'>
                                        <label>Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder='Tell us about your website development needs...'
                                        />
                                    </div>

                                    <Link href="/contact" className="themeBtn">
                                        Let’s Get Started
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.91406 6.99219H11.0709" stroke="white" stroke-width="1.16527" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.99219 2.91406L11.0706 6.9925L6.99219 11.0709" stroke="white" stroke-width="1.16527" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='section1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 data-aos="fade-up" data-aos-duration="300">What's Included</h4>
                            <h2 data-aos="fade-up" data-aos-duration="600">
                                Intent-targeted paid search frameworks engineered to maximize immediate return on ad spend
                            </h2>
                        </div>
                        <div className='col-md-12'>
                            <div className='row countsRow'>
                                <div className='col-md-4' data-aos="fade-up" data-aos-duration="100">
                                    <div className='countCard'>
                                        <h4>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.43706C0 3.32969 3.32968 0 7.43706 0H14.8741C18.9815 0 22.3112 3.32968 22.3112 7.43706V14.8741C22.3112 18.9815 18.9815 22.3112 14.8741 22.3112H7.43706C3.32969 22.3112 0 18.9815 0 14.8741V7.43706Z" fill="#CE00EC" fill-opacity="0.26" />
                                                <path d="M14.8746 8.36694L9.76158 13.4799L7.4375 11.1558" stroke="#CE00EC" stroke-width="0.929632" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Hyper-Targeted Keyword Structures
                                        </h4>
                                        <p>
                                            Building alpha-beta campaign structures that isolate high-converting exact match search queries.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4' data-aos="fade-up" data-aos-duration="300">
                                    <div className='countCard'>
                                        <h4>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.43706C0 3.32969 3.32968 0 7.43706 0H14.8741C18.9815 0 22.3112 3.32968 22.3112 7.43706V14.8741C22.3112 18.9815 18.9815 22.3112 14.8741 22.3112H7.43706C3.32969 22.3112 0 18.9815 0 14.8741V7.43706Z" fill="#CE00EC" fill-opacity="0.26" />
                                                <path d="M14.8746 8.36694L9.76158 13.4799L7.4375 11.1558" stroke="#CE00EC" stroke-width="0.929632" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Performance Max Setup & Asset Sync
                                        </h4>
                                        <p>
                                            Unifying video, display, and shopping assets to leverage automated multi-channel ad delivery.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4' data-aos="fade-up" data-aos-duration="500">
                                    <div className='countCard'>
                                        <h4>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.43706C0 3.32969 3.32968 0 7.43706 0H14.8741C18.9815 0 22.3112 3.32968 22.3112 7.43706V14.8741C22.3112 18.9815 18.9815 22.3112 14.8741 22.3112H7.43706C3.32969 22.3112 0 18.9815 0 14.8741V7.43706Z" fill="#CE00EC" fill-opacity="0.26" />
                                                <path d="M14.8746 8.36694L9.76158 13.4799L7.4375 11.1558" stroke="#CE00EC" stroke-width="0.929632" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Negative Keyword Scrubbing Systems
                                        </h4>
                                        <p>
                                            Implementing daily automated filtration arrays to permanently block unrelated click waste.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h4>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.43706C0 3.32969 3.32968 0 7.43706 0H14.8741C18.9815 0 22.3112 3.32968 22.3112 7.43706V14.8741C22.3112 18.9815 18.9815 22.3112 14.8741 22.3112H7.43706C3.32969 22.3112 0 18.9815 0 14.8741V7.43706Z" fill="#CE00EC" fill-opacity="0.26" />
                                                <path d="M14.8746 8.36694L9.76158 13.4799L7.4375 11.1558" stroke="#CE00EC" stroke-width="0.929632" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Advanced Conversion Value Tracking
                                        </h4>
                                        <p>
                                            Connecting server-side API tags to feed accurate purchase value data directly back into your ad account.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h4>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.43706C0 3.32969 3.32968 0 7.43706 0H14.8741C18.9815 0 22.3112 3.32968 22.3112 7.43706V14.8741C22.3112 18.9815 18.9815 22.3112 14.8741 22.3112H7.43706C3.32969 22.3112 0 18.9815 0 14.8741V7.43706Z" fill="#CE00EC" fill-opacity="0.26" />
                                                <path d="M14.8746 8.36694L9.76158 13.4799L7.4375 11.1558" stroke="#CE00EC" stroke-width="0.929632" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Dynamic Search Ad Copy Writing
                                        </h4>
                                        <p>
                                            Crafting compelling, multi-variant headlines that dynamically adjust to match user search queries.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-md-4' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h4>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 7.43706C0 3.32969 3.32968 0 7.43706 0H14.8741C18.9815 0 22.3112 3.32968 22.3112 7.43706V14.8741C22.3112 18.9815 18.9815 22.3112 14.8741 22.3112H7.43706C3.32969 22.3112 0 18.9815 0 14.8741V7.43706Z" fill="#CE00EC" fill-opacity="0.26" />
                                                <path d="M14.8746 8.36694L9.76158 13.4799L7.4375 11.1558" stroke="#CE00EC" stroke-width="0.929632" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Smart Bid Strategy Alignment
                                        </h4>
                                        <p>
                                            Calibrating Target CPA or Target ROAS bidding thresholds around your actual profit margin profiles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='sectionProcess'>
                <div className='container'>
                    <h4>Our Process</h4>
                    <h2>A structured, transparent roadmap from initial operational architecture to final deployment</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>01</h2>
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                Technical workshop to map system architecture, user flows, and project requirements.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>02</h2>
                            </div>
                            <h3>Engineering</h3>
                            <p>
                                Custom backend development, database structuring, and responsive frontend interface engineering.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>03</h2>
                            </div>
                            <h3>Refinement</h3>
                            <p>
                                Stringent quality assurance testing across multiple devices to ensure a bug-free system.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>04</h2>
                            </div>
                            <h3>Delivery</h3>
                            <p>
                                Smooth production environment deployment, comprehensive documentation handover, and system training.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className='section3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 pr-5'>
                            <h4 data-aos="fade-up" data-aos-duration="300">Technology</h4>
                            <h2 data-aos="fade-up" data-aos-duration="600">
                                Advanced media buying systems optimized for real-time auction management
                            </h2>
                        </div>
                        <div className='col-md-7'>
                            <div className='row techStackMain'>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='techStack'>
                                        Google Ads Ads Manager Workspace
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='techStack'>
                                        Google Ads Editor Desktop Applications
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='techStack'>
                                        Google Tag Manager (GTM)
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Google Analytics 4 (GA4)
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        SpyFu & SEMrush Advertising Toolsets
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        CallRail Integration Gateways
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Zapier Enterprise Webhooks
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Looker Studio
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section3 section4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 pr-5'>
                            <h4 data-aos="fade-up" data-aos-duration="300">FAQ</h4>
                            <h2 data-aos="fade-up" data-aos-duration="600">
                                FAQ (Frequently Asked Questions)
                            </h2>
                            <Link href="/contact" className="themeBtn">
                                Let’s Get Started
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.91406 6.99219H11.0709" stroke="white" stroke-width="1.16527" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.99219 2.91406L11.0706 6.9925L6.99219 11.0709" stroke="white" stroke-width="1.16527" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="col-md-7">
                            <div className="accordion accordion-flush" id="faqAccordion">

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                        >
                                            How do you prevent our budget from being wasted on accidental or completely irrelevant search terms?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq1"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            We build deep negative keyword lists before launching your ads. We review active search term reports daily, filtering out irrelevant long-tail phrases to ensure your budget is used strictly on buyers.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq2"
                                        >
                                            What is server-side tracking, and why is it required for accurate Google Ads tracking?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Traditional browser pixels are frequently blocked by ad blockers or privacy settings. Server-side tracking routes data directly from your server to Google, ensuring accurate conversion reporting and smarter automated bidding.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq3"
                                        >
                                            How much monthly ad spend should a business commit to for an initial campaign launch?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            We design custom spend baselines calculated around your local keyword auction costs. We recommend a budget that allows for at least 15 to 30 conversions per month to train the machine learning models effectively.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq4"
                                        >
                                            Can you integrate our customer database to target specific corporate client leads?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. We securely hash and upload your customer lists into Google's Customer Match framework. This allows you to serve targeted ads directly to your highest-value contacts or exclude existing clients.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq5"
                                        >
                                            Why should we use Performance Max campaigns alongside traditional Search campaigns?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq5"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Performance Max unlocks ad placements across YouTube, Gmail, Maps, and Display networks using a unified budget, while your Search campaigns handle specific high-intent keyword searches.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section1 section5 branding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 data-aos="fade-up" data-aos-duration="300">Related Services</h4>
                            <h2 data-aos="fade-up" data-aos-duration="600">
                                Everything you need, nothing you don't.
                            </h2>
                        </div>
                        <div className='col-md-12'>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>SEO</h3>
                                                <p>
                                                    Improve your website visibility and secure sustainable traffic pipelines by executing technical, on-page, and off-page organic search strategies. You gain targeted search engine optimization services engineered to grow search rankings.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/seo" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Google Ads</h3>
                                                <p>
                                                    Capture high-intent customers at the exact moment they search by deploying targeted pay-per-click marketing campaigns. You receive data-backed google ads management services built to lower conversion costs and maximize return.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/google-ads" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Meta Ads</h3>
                                                <p>
                                                    Reach specific audience demographics across Facebook and Instagram using high-converting, targeted social media advertising campaigns. You deploy focused meta advertising services engineered to scale leads and boost online sales.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/meta-ads" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Social Media Marketing</h3>
                                                <p>
                                                    Build an active online community and strengthen customer relationships through consistent, high-impact organic social media management. You gain tailored social media marketing services designed to increase daily audience engagement.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/social-media-marketing" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Branding & Creative Design</h3>
                                                <p>
                                                    Establish a cohesive visual identity, including custom logos, color palettes, and marketing assets using tailored creative design solutions. You establish recognized corporate branding services built to differentiate your business.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/branding-and-creative-design" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>UI/UX Design Services</h3>
                                                <p>
                                                    Construct intuitive user flows and visually striking wireframes for websites and mobile applications utilizing modern digital product interface design. You acquire optimized UI UX design services built for effortless navigation.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/ui-ux-design-services" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Content Marketing</h3>
                                                <p>
                                                    Drive organic interest and establish industry authority by producing structured, educational articles and landing pages using content creation and strategy. You obtain optimized B2B content marketing services that qualify leads.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/digital-marketing/content-marketing" className="themeBtn">View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />

        </div>
    )
}

export default page
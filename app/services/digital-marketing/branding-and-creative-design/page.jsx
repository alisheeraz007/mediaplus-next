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
                                <Link href="/services/digital-marketing/branding-and-creative-design" data-aos="fade-up" data-aos-duration="800">
                                    Branding & Creative Design
                                </Link>
                            </div>
                            <div className='badgeDiv' data-aos="fade-up" data-aos-duration="800">
                                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    Digital Marketing
                                </h4>
                            </div>
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                Strategic Brand Identity & Creative Design
                            </h1>
                            <h3>
                                Cohesive visual asset systems engineered to build immediate market authority
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Move beyond basic logo templates. We construct comprehensive, multi-channel brand design networks, establishing core identity systems, adaptive color systems, balanced typography guidelines, and complete marketing asset suites that make your company instantly recognizable.
                            </p>

                            <div className='row cardDivOver'>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>40+</h3>
                                        <p>Brand Books Built</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>100% Vector</h3>
                                        <p>Asset Formats</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>High Authority</h3>
                                        <p>Identity Recall</p>
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
                                <h5>Request a Corporate Brand Transformation Consultation</h5>

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
                                Structured brand guidelines built to ensure absolute visual consistency
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
                                            Core Vector Logo Architecture
                                        </h4>
                                        <p>
                                            Designing scalable, multi-variant logo marks optimized for app icons, websites, and physical print layout spaces.
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
                                            Cohesive Corporate Color Palettes
                                        </h4>
                                        <p>
                                            Establishing balanced, high-contrast primary and functional color codes that pass accessibility compliance standards.
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
                                            Structured Visual Typography Systems
                                        </h4>
                                        <p>
                                            Selection of complementary font hierarchies to maintain clean, readable brand presentation across web and print.
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
                                            Comprehensive Brand Identity Manuals
                                        </h4>
                                        <p>
                                            Assembling definitive design rulebooks detailing exactly how your logos, margins, and layouts can be used.
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
                                            Multi-Platform Digital Asset Packs
                                        </h4>
                                        <p>
                                            Crafting uniform email signature banners, presentation slide templates, and stylized social profile skins.
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
                                            Premium Print & Packaging Elements
                                        </h4>
                                        <p>
                                            Structuring technical layouts for corporate stationery, custom consumer packaging, and event banner assets.
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
                                Industry-standard design toolsets optimized for high-resolution asset production
                            </h2>
                        </div>
                        <div className='col-md-7'>
                            <div className='row techStackMain'>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='techStack'>
                                        Adobe Illustrator
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='techStack'>
                                        Figma
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='techStack'>
                                        Adobe Photoshop
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Google Fonts Enterprise & Adobe Typekit
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        SVG, EPS, & Print-Ready PDF Formats
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Google Slides & Pitch Frameworks
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Miro Digital Canvas Frameworks
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        AWS S3 Encrypted Asset Buckets
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
                                            Why does our business need a full Brand Guidelines Book instead of just a basic logo file?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq1"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            A logo is just one piece of your brand. A Brand Guidelines Book outlines exact rules for typography, spacing, and color palettes, ensuring any future design work by developers or agencies remains perfectly consistent.
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
                                            Will our finished vector logo files scale cleanly onto large signs and building banners?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. We deliver your core assets in 100% mathematical vector formats (SVG, EPS). This ensures your logo scales crisply from a tiny mobile app icon up to a massive billboard with zero pixelation.
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
                                            How do you ensure our chosen brand colors look uniform on computer screens and physical business cards?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            We provide precise color translations across all formats: HEX codes for web developers, RGB for screen displays, and exact CMYK or Pantone values for commercial print houses.
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
                                            Can you help refresh and modernize our old legacy brand identity without alienating our current clients?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. We specialize in strategic brand evolutions. We retain your core recognizable brand markers while updating layout spacing, fonts, and accents for a modern market.
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
                                            Who retains the legal copyright ownership of the finished visual designs and brand books?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq5"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Your company retains full, unconditioned legal copyright ownership of all finalized visual systems and files upon project completion and final payment.
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
                                                    Capture high-intent customers at the exact moment they search by deploying targeted pay-per-click marketing campaigns. You receive data-backed Meta Ads management services built to lower conversion costs and maximize return.
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
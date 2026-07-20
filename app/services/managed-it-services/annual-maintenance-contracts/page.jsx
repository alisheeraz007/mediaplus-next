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
                                <Link href="/services/managed-it-services" data-aos="fade-up" data-aos-duration="800">
                                    Managed IT Services
                                </Link>
                                <span>/</span>
                                <Link href="/services/managed-it-services/annual-maintenance-contracts" data-aos="fade-up" data-aos-duration="800">
                                    Annual Maintenance Contracts (AMC)
                                </Link>
                            </div>
                            <div className='badgeDiv' data-aos="fade-up" data-aos-duration="800">
                                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    Managed IT Services
                                </h4>
                            </div>
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                Comprehensive IT Annual Maintenance Contracts (AMC)
                            </h1>
                            <h3>
                                SLA-backed preventive maintenance frameworks for total hardware infrastructure assurance
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Eliminate unexpected IT repair bills from your balance sheet. We provide premium, legally binding Annual Maintenance Contracts that guarantee fixed preventative site visits, priority on-site emergency engineering, and clear Service Level Agreements (SLAs) tailored to your physical enterprise hardware stack.
                            </p>

                            <div className='row cardDivOver'>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>{`< 4 Hours`}</h3>
                                        <p>On-Site SLA</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>1,200+</h3>
                                        <p>Hardware Maintained</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>100%</h3>
                                        <p>SLA Compliance</p>
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
                                <h5>Request a Corporate Hardware AMC Proposal</h5>

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
                                Structured hardware maintenance contracts designed to lock down hardware lifespans
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
                                            Scheduled Preventive Site Visits
                                        </h4>
                                        <p>
                                            Conducting monthly physical check-ups, cleaning dust from servers, and checking power backup battery levels.
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
                                            SLA-Backed On-Site Emergency Calls
                                        </h4>
                                        <p>
                                            Guaranteeing an expert hardware engineer arrives at your physical office within an explicit hour window during crashes.
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
                                            Server Room Environmental Tuning
                                        </h4>
                                        <p>
                                            Auditing server rack operating temperatures, testing automatic backup generators, and verifying fan setups.
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
                                            Network Hardware Diagnostic Audits
                                        </h4>
                                        <p>
                                            Testing data transfer integrity across physical network cables, patch panels, and firewall ports.
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
                                            Loaner Equipment Availability
                                        </h4>
                                        <p>
                                            Supplying immediate replacement temporary hardware so your business keeps running during deep repairs.
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
                                            Detailed Asset Valuation Lifecycle Reports
                                        </h4>
                                        <p>
                                            Delivering clear annual audit write-ups tracking the precise health status and value depreciation of all office tech.
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
                                Industrial hardware diagnostic tools optimized for enterprise infrastructure testing
                            </h2>
                        </div>
                        <div className='col-md-7'>
                            <div className='row techStackMain'>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='techStack'>
                                        Fluke Networks Cable Analyzers
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='techStack'>
                                        FLIR Thermal Technology Arrays
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='techStack'>
                                        APC PowerChute Business Suites
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Snipe-IT Asset Platforms
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Jira Service Management SLA Monitors
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Wireshark Packet Analyzers
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        IPMI 2.0 Management Controllers
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Custom Asset Auditing Software
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
                                            What is the main difference between a Comprehensive AMC and a Non-Comprehensive AMC?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq1"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            A Comprehensive AMC covers both engineering labor and the financial cost of replacement spare parts. A Non-Comprehensive contract only covers technical labor, meaning you are billed separately for replacement parts.
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
                                            What exact guarantee do we have that an engineer will show up quickly during a system failure?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Our contracts include legally binding Service Level Agreements (SLAs). If a critical network switch goes down, we guarantee an on-site technician will arrive at your facility within 2 to 4 hours, or financial credits apply.
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
                                            How frequently do your engineers perform physical preventive maintenance under an AMC?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            We schedule structured monthly or quarterly preventive visits. During these runs, we clean server components, test backup power units, and update firmware to stop breakdowns before they happen.
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
                                            Can we include specialized hardware like office plotters, thermal printers, and biometric gates in the AMC?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. During our initial site discovery, we catalog all physical business equipment—including network printers, scanners, and entry gates—and bundle them into your custom contract.
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
                                            Is a hardware inventory audit included when we initiate a contract with your firm?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq5"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Absolutely. We place tracking tags on all included items, record their precise serial numbers, and deliver a clean digital database of your physical assets at no extra charge.
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
                                                <h3>Managed IT Support</h3>
                                                <p>
                                                    Secure proactive network monitoring, remote troubleshooting, and helpdesk assistance through tailored outsourced IT support. You receive dependable managed IT support services designed to minimize technical downtime and keep your team productive.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/managed-it-services/managed-it-support" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Annual Maintenance Contracts (AMC)</h3>
                                                <p>
                                                    Protect your physical hardware and core software systems from unexpected failures with scheduled IT AMC services. You secure predictable IT annual maintenance contracts engineered to extend device lifespans and ensure hardware reliability.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/managed-it-services/annual-maintenance-contracts" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Document Management Systems</h3>
                                                <p>
                                                    Centralize, index, and secure your business files in a searchable repository using secure document management software. You deploy custom document management systems designed to eliminate paper waste, simplify retrieval, and enforce access controls.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/managed-it-services/document-management-systems" className="themeBtn">View More</a>
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
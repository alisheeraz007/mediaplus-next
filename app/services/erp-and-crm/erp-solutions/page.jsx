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
                                <Link href="/services/erp-and-crm" data-aos="fade-up" data-aos-duration="800">
                                    ERP & CRM
                                </Link>
                                <span>/</span>
                                <Link href="/services/erp-and-crm/erp-solutions" data-aos="fade-up" data-aos-duration="800">
                                    ERP Solutions
                                </Link>
                            </div>
                            <div className='badgeDiv' data-aos="fade-up" data-aos-duration="800">
                                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    ERP & CRM
                                </h4>
                            </div>
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                Enterprise Resource Planning (ERP) Solutions
                            </h1>
                            <h3>
                                Centralized management frameworks built to unify complex corporate workflows
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Consolidate your fragmented business operations into a single source of truth. We engineer and integrate enterprise-tier ERP architectures that sync supply chain logistics, multi-warehouse inventory, procurement, and financial reporting into an automated, real-time data ecosystem.
                            </p>

                            <div className='row cardDivOver'>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>45+</h3>
                                        <p>Integrations Built</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>35%</h3>
                                        <p>Efficiency Gained</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>99.9%</h3>
                                        <p>Data Accuracy</p>
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
                                <h5>Request a Custom ERP Integration Blueprint</h5>

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
                                Centralized resource management architectures engineered to scale operations
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
                                            Cross-Department Data Syncing
                                        </h4>
                                        <p>
                                            Linking sales, inventory, and finance teams together into a real-time information network.
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
                                            Supply Chain & Logistics Tracking
                                        </h4>
                                        <p>
                                            Automating vendor purchase orders, tracking inbound freight, and tracking component delivery times.
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
                                            Multi-Warehouse Inventory Control
                                        </h4>
                                        <p>
                                            Live monitoring of raw materials, stock levels, and automated point-of-sale reorder thresholds.
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
                                            Automated Financial Reporting
                                        </h4>
                                        <p>
                                            Generating immediate profit and loss statements, balance sheets, and operational cost ledgers.
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
                                            Custom Legacy System Migration
                                        </h4>
                                        <p>
                                            Extracting data sets from old internal spreadsheets and importing them cleanly into modern systems.
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
                                            Executive Performance Dashboards
                                        </h4>
                                        <p>
                                            Building intuitive dashboards that show immediate productivity, revenue, and waste insights.
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
                                Enterprise-tier development platforms built for high-throughput data processing
                            </h2>
                        </div>
                        <div className='col-md-7'>
                            <div className='row techStackMain'>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='techStack'>
                                        Odoo Enterprise & SAP Business One
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='techStack'>
                                        PostgreSQL & Microsoft SQL Server
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='techStack'>
                                        Python Frameworks & Node.js
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        AWS EC2 & Azure Virtual Machines
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Microsoft Power BI & Apache Superset
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        RabbitMQ
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Prometheus & Grafana
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Talend Data Integration
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
                                            Can you integrate a new ERP platform with our existing customer-facing website?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq1"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. We write custom API endpoints to securely connect your e-commerce storefronts or websites directly to your central inventory and accounting ledgers.
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
                                            How long does a standard corporate ERP migration take from start to finish?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            A clean implementation ranges from 60 to 90 days, depending on system complexity and the size of your legacy datasets. We provide a full timeline during our discovery workshop.
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
                                            Will a new ERP implementation disrupt our active daily sales operations?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            No. We construct and test your new architecture inside an isolated staging environment. The final data cutover is scheduled during off-peak hours to guarantee zero disruption.
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
                                            Do you offer custom module development if out-of-the-box templates don't fit our business?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. We specialize in custom software modification. We program specialized modules tailored exclusively to your unique supply chains or custom operational workflows.
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
                                            How do you protect sensitive financial data inside the new platform?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq5"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            We implement role-based access control (RBAC) frameworks paired with end-to-end database encryption, ensuring staff members can only see data explicit to their jobs.
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
                                                <h3>ERP Solutions</h3>
                                                <p>
                                                    Integrate departmental workflows, inventory tracking, and supply chain management into unified custom ERP systems. You gain centralized enterprise resource planning solutions designed to eliminate operational silos and improve data accuracy.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/erp-and-crm/erp-solutions" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>CRM Solutions</h3>
                                                <p>
                                                    Track sales pipelines, customer interactions, and lead generation funnels using centralized custom CRM software. You receive tailored customer relationship management solutions engineered to boost client retention and accelerate sales cycles.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/erp-and-crm/crm-solutions" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>HRMS</h3>
                                                <p>
                                                    Centralize employee onboarding, performance tracking, and document management using secure employee directory software. You establish structured HR management system solutions designed to simplify workforce administration and improve organizational transparency.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/erp-and-crm/hrms" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Payroll Systems</h3>
                                                <p>
                                                    Automate salary distribution, tax calculations, and compliance reporting through secure payroll management software. You obtain accurate automated payroll systems engineered to reduce administrative overhead and ensure timely, error-free processing.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/erp-and-crm/payroll-systems" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>POS Solutions</h3>
                                                <p>
                                                    Streamline retail transactions, inventory updates, and multi-channel sales tracking with integrated custom POS systems. You receive responsive point of sale solutions designed to optimize customer checkout experiences and simplify store management.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/erp-and-crm/pos-solutions" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Accounting Software</h3>
                                                <p>
                                                    Track business expenses, generate financial statements, and manage invoicing using secure financial management tools. You deploy reliable business accounting software designed to maintain cash flow visibility and simplify tax compliance.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/erp-and-crm/accounting-software" className="themeBtn">View More</a>
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
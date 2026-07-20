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
                                <Link href="/services/cloud-and-infrastructure-solutions" data-aos="fade-up" data-aos-duration="800">
                                    Cloud & Infrastructure Solutions
                                </Link>
                                <span>/</span>
                                <Link href="/services/cloud-and-infrastructure-solutions/microsoft-365" data-aos="fade-up" data-aos-duration="800">
                                    Microsoft 365
                                </Link>
                            </div>
                            <div className='badgeDiv' data-aos="fade-up" data-aos-duration="800">
                                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    Cloud & Infrastructure Solutions
                                </h4>
                            </div>
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                Microsoft 365 Integration
                            </h1>
                            <h3>
                                Secure, fully synchronized digital workspaces built for modern team collaboration
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Modernize your corporate operations with a fully integrated cloud workspace. We deploy, configure, and secure the complete Microsoft 365 ecosystem, ensuring seamless email delivery, cloud storage access, and advanced data protection across your entire organization.
                            </p>

                            <div className='row cardDivOver'>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>50+</h3>
                                        <p>Tenants Managed</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>100%</h3>
                                        <p>Migration Uptime</p>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    <div className='over'>
                                        <h3>Enterprise</h3>
                                        <p>Data Protection</p>
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
                                <h5>Request a Microsoft 365 Workspace Blueprint</h5>

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
                                Enterprise-grade communication networks built for secure operations
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
                                            Secure Exchange Email Setup
                                        </h4>
                                        <p>
                                            Professional corporate email configurations utilizing custom domains and advanced anti-spam filtering.
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
                                            SharePoint & OneDrive Structuring
                                        </h4>
                                        <p>
                                            Organizing centralized, cloud-based file repositories with precise team folder access permissions.
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
                                            Microsoft Teams Architecture
                                        </h4>
                                        <p>
                                            Designing unified video conferencing hubs, structural chat channels, and external client access controls.
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
                                            Centralized Identity Management
                                        </h4>
                                        <p>
                                            Configuring Microsoft Entra ID to manage user permissions and access logs across company devices.
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
                                            Multi-Factor Authentication (MFA)
                                        </h4>
                                        <p>
                                            Enforcing rigid sign-in security protocols to keep corporate accounts insulated against unauthorized leaks.
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
                                            Data Loss Prevention Rules
                                        </h4>
                                        <p>
                                            Setting up backend compliance rules that block sensitive company data or files from leaving your tenant.
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
                    <h2>From structural infrastructure auditing to a fully optimized cloud deployment</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>01</h2>
                            </div>
                            <h3>Infrastructure Audit</h3>
                            <p>
                                Evaluating your legacy email platforms, local file sizes, user lists, and compliance mandates.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>02</h2>
                            </div>
                            <h3>Architecture Planning</h3>
                            <p>
                                Mapping custom domain settings, folder access structures, and defining user group security permissions.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>03</h2>
                            </div>
                            <h3>Environment Configuration</h3>
                            <p>
                                Provisioning the digital tenant, running non-disruptive mailbox migrations, and configuring endpoint rules.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h2>04</h2>
                            </div>
                            <h3>Cloud Deployment</h3>
                            <p>
                                Activating live user profiles, performing strict security verification runs, and handing over admin controls.
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
                                Microsoft-certified tools engineered for reliable tenant synchronization
                            </h2>
                        </div>
                        <div className='col-md-7'>
                            <div className='row techStackMain'>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='techStack'>
                                        Microsoft Entra ID
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='techStack'>
                                        Exchange Online
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='techStack'>
                                        Microsoft Teams
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        SharePoint Online & OneDrive
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Microsoft Intune
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        Microsoft Purview
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        BitTitan MigrationWi
                                    </div>
                                </div>
                                <div className='col-md-3 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='techStack'>
                                        M365 Admin Center & PowerShell
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
                                            Will our email service go down during the migration to Microsoft 365?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq1"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            No. We implement background staging procedures that transfer your historical mailboxes quietly. The final cutover to the new system is completed during off-peak hours, ensuring zero operational downtime for your business.
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
                                            Can we restrict certain departments from seeing sensitive financial files in SharePoint?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes, absolutely. We design a rigid hierarchical permission structure. This ensures employees can only access the explicit files and folders required for their specific job roles.
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
                                            Can we manage and wipe company data from an employee's phone if they leave?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq3"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. By integrating Microsoft Intune mobile management rules, you can remotely wipe corporate emails and documents from any device instantly without touching the employee's personal files.
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
                                            Does Microsoft 365 back up our files automatically?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            M365 provides high-availability cloud redundancy, but it is not a dedicated backup. We configure automated cloud-to-cloud retention rules to ensure your data remains completely restorable in the event of accidental user deletion.
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
                                            How long does the migration take for a medium-sized corporate team?
                                        </button>
                                    </h2>
                                    <div
                                        id="faq5"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            For teams of 20 to 100 users, the full configuration, data migration, and deployment are completed within 5 to 10 business days, handled completely end-to-end by our specialists.
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
                                                <h3>Microsoft 365</h3>
                                                <p>
                                                    Implement official Microsoft cloud suites and secure identity management to deploy unified Microsoft 365 solutions. You gain seamless Microsoft 365 integration that aligns your workforce, secures business communication, and simplifies document collaboration.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/cloud-and-infrastructure-solutions/microsoft-365" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Google Workspace</h3>
                                                <p>
                                                    Configure custom business domains and cloud productivity tools using official Google frameworks for a streamlined Google Workspace setup. You receive tailored Google Workspace services engineered to optimize team collaboration and secure real-time sharing.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/cloud-and-infrastructure-solutions/google-workspace" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>Cloud Migration</h3>
                                                <p>
                                                    Transfer physical databases and legacy applications to modern cloud servers using structured migration frameworks. You achieve a secure cloud transition supported by systematic cloud migration services designed to eliminate downtime and protect operational data.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/cloud-and-infrastructure-solutions/cloud-migration" className="themeBtn">View More</a>
                                    </div>
                                </div>

                                   <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                                    data-aos-delay="300">
                                    <div className="brand-card shadow">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <h3>AWS & Azure</h3>
                                                <p>
                                                    Deploy scalable virtual networks and automated data storage using global hosting platforms to build a resilient multi-cloud infrastructure. You gain dedicated AWS and Azure management structured to control operational costs and ensure service availability.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="/services/cloud-and-infrastructure-solutions/aws-and-azure" className="themeBtn">View More</a>
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
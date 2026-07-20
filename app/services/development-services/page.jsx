import Cta from '@/app/components/Cta'
import TrustedClient from '@/app/components/TrustedClient'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='subServicesPage overFlowXHidden'>
            <div className="inner-banner innerBannerSub" style={{ backgroundImage: "url(/images/webdevservices.png)" }}>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-6'>
                            <Link href="/services" data-aos="fade-up" data-aos-duration="800">
                                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.05433 9.59304L2.52344 6.06214L6.05433 2.53125" stroke="#FFD6F0" strokeWidth="1.26103" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.58523 6.05469H2.52344" stroke="#FFD6F0" strokeWidth="1.26103" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Back to Services
                                </h4>
                            </Link>
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Development Services</h1>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Build secure, adaptable and scalable web systems. Our development services deliver responsive software and custom databases engineered for daily business operations
                            </p>
                            <Link href="/contact" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1600"
                                data-aos-delay="600">Let’s Get Started</Link>
                        </div>
                        <div className='col-md-6'>
                            <img data-aos="fade-left" className="subServiceImage"  data-aos-duration="2000" src='/images/brainCell.png' />
                        </div>
                    </div>
                </div>
            </div>

            <section className='section1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h4 data-aos="fade-up" data-aos-duration="300">About This Service</h4>
                            <h2 data-aos="fade-up" data-aos-duration="600">
                                Scalable Web and Software Solutions Built for Growth
                                <span data-aos="fade-up" data-aos-duration="800" />
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Transform your business operations with secure, scalable digital systems and results-driven development architectures engineered to elevate your brand capability and drive long-term corporate growth.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div className='row countsRow'>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='countCard'>
                                        <h3>120+</h3>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='countCard'>
                                        <h3>98%</h3>
                                        <p>Satisfaction Rate</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='countCard'>
                                        <h3>30 Days</h3>
                                        <p>Avg. Delivery Time</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h3>2 Rounds</h3>
                                        <p>Included Revisions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sectionService'>
                <div className='container'>
                    <h4 data-aos="fade-up" data-aos-duration="700">What's Included</h4>
                    <h2 data-aos="fade-up" data-aos-duration="700">End-to-end technical capabilities tailored to your operational needs</h2>
                    <div className='row' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 pr-5'>
                            <div className='countDiv'>01</div>
                            <h3>Website Development</h3>
                            <p>
                                Elevate your online presence with premier website development services and responsive, custom web design tailored to engage users and scale your business.
                            </p>
                            <ul>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Highly secure web architectures.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Built for high user traffic.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Responsive layouts for all browsers.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Seamless external software integrations.
                                </li>
                            </ul>

                            <Link href="/services/development-services/website-development" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/development-services/webImage1.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/development-services/webImage2.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>02</div>
                            <h3>E-commerce Development</h3>
                            <p>
                                Drive measurable revenue with robust e-commerce development solutions and high-performance online storefront infrastructure designed for seamless transactions and secure scaling.
                            </p>
                            <ul>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Secure online shopping platforms.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Streamlined buyer checkout experiences.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Secure payment gateway connections.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Automated store inventory tracking.
                                </li>
                            </ul>
                            <Link href="/services/development-services/ecommerce-development" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 pr-5'>
                            <div className='countDiv'>03</div>
                            <h3>Custom Software Development</h3>
                            <p>
                                Streamline your operations with a custom software development company engineering custom business applications, including centralized performance dashboards and scalable automated internal workflow systems.
                            </p>
                            <ul>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Visually engaging user interfaces.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Secure database framework setups.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Reliable custom API connections.
                                </li>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2816_4815)">
                                            <path d="M7.45035 13.6585C10.879 13.6585 13.6585 10.879 13.6585 7.45035C13.6585 4.02168 10.879 1.24219 7.45035 1.24219C4.02168 1.24219 1.24219 4.02168 1.24219 7.45035C1.24219 10.879 4.02168 13.6585 7.45035 13.6585Z" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.58789 7.44476L6.82952 8.68639L9.31279 6.20312" stroke="#C500E1" strokeWidth="1.55204" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2816_4815">
                                                <rect width="14.8996" height="14.8996" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Built to perform reliably.
                                </li>
                            </ul>
                            <Link href="/services/development-services/custom-software-development" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/development-services/webImage3.png' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='sectionProcess'>
                <div className='container'>
                    <h4>Our Process</h4>
                    <h2>A structured, transparent roadmap from initial architecture to final deployment</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>01</h3>
                                <span />
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                Technical workshop to map system architecture, user flows, and project requirements.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>02</h3>
                                <span />
                            </div>
                            <h3>Engineering</h3>
                            <p>
                                Custom backend development, database structuring, and responsive frontend interface engineering.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>03</h3>
                                <span />
                            </div>
                            <h3>Refinement</h3>
                            <p>
                                Stringent quality assurance testing across multiple devices to ensure a bug-free system.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>04</h3>
                                <span />
                            </div>
                            <h3>Delivery</h3>
                            <p>
                                Smooth production environment deployment, comprehensive documentation handover, and system training.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <TrustedClient />

            <Cta />
        </div>
    )
}

export default page
import Cta from '@/app/components/Cta'
import TrustedClient from '@/app/components/TrustedClient'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='subServicesPage'>
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
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Managed IT Services</h1>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Eliminate technical disruptions with dedicated managed IT services, delivering proactive system monitoring, network troubleshooting, and predictable technology budgets for your business.
                            </p>
                            <Link href="/contact" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1600"
                                data-aos-delay="600">Let’s Get Started</Link>
                        </div>
                        <div className='col-md-6'>
                            <img data-aos="fade-left" data-aos-duration="2000" src='/images/brainCell.png' />
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
                                Dedicated Technology Management Built for Operational Focus
                                <span data-aos="fade-up" data-aos-duration="800" />
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Delegate your day-to-day technology management to experienced professionals, ensuring continuous system availability, rapid issue resolution, and predictable IT budgets.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div className='row countsRow'>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='countCard'>
                                        <h3>1,500+</h3>
                                        <p>Endpoints Managed</p>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='countCard'>
                                        <h3>99%</h3>
                                        <p>SLA Resolution</p>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='countCard'>
                                        <h3>{`< 15 Mins`}</h3>
                                        <p>Avg. Ticket Response</p>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h3>24/7</h3>
                                        <p>Active Support</p>
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
                    <h2 data-aos="fade-up" data-aos-duration="700">Dependable, round-the-clock technical troubleshooting and ongoing maintenance programs</h2>
                    <div className='row' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 pr-5'>
                            <div className='countDiv'>01</div>
                            <h3>Managed IT Support</h3>
                            <p>
                                Secure proactive network monitoring, remote troubleshooting, and helpdesk assistance through tailored outsourced IT support. You receive dependable managed IT support services designed to minimize technical downtime and keep your team productive.
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
                                    Proactive system uptime monitoring.
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
                                    Fast remote technical troubleshooting.
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
                                    Dedicated business helpdesk assistance.
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
                                    Minimizes critical operational downtime.
                                </li>
                            </ul>

                            <Link href="/contact" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/managed-it/image1.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/managed-it/image2.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>02</div>
                            <h3>Annual Maintenance Contracts (AMC)</h3>
                            <p>
                                Protect your physical hardware and core software systems from unexpected failures with scheduled IT AMC services. You secure predictable IT annual maintenance contracts engineered to extend device lifespans and ensure hardware reliability.
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
                                    Planned hardware diagnostic testing.
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
                                    Extends corporate device lifespans.
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
                                    Scheduled system performance tuning.
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
                                    Prevents sudden hardware failures.
                                </li>
                            </ul>
                            <Link href="/contact" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
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
                            <h3>Document Management Systems</h3>
                            <p>
                                Centralize, index, and secure your business files in a searchable repository using secure document management software. You deploy custom document management systems designed to eliminate paper waste, simplify retrieval, and enforce access controls.
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
                                    Secure central file repositories.
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
                                    Speeds up digital document retrieval.
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
                                    Enforces strict user access controls.
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
                                    Eliminates physical paper storage.
                                </li>
                            </ul>
                            <Link href="/contact" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/managed-it/image3.png' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='sectionProcess'>
                <div className='container'>
                    <h4>Our Process</h4>
                    <h2>Proactive system maintenance and immediate technical support with zero friction</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>01</h3>
                                <span />
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                Comprehensive diagnostic evaluation of hardware performance and active network configurations.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>02</h3>
                                <span />
                            </div>
                            <h3>Setup</h3>
                            <p>
                                Deploying dedicated monitoring agents, central helpdesk tools, and backup schedules.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>03</h3>
                                <span />
                            </div>
                            <h3>Optimisation</h3>
                            <p>
                                Scheduled hardware fine-tuning, registry cleanup, and software update applications.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>04</h3>
                                <span />
                            </div>
                            <h3>Support</h3>
                            <p>
                                Immediate technical ticket resolution, routine physical checkups, and backup verifications.
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
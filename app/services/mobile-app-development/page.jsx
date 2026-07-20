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
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Mobile App development</h1>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Build native and cross-platform applications. Our specialized mobile app development services deliver responsive, user-friendly digital products engineered to grow your business.
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
                                Custom Mobile App Solutions Built for Growth
                                <span data-aos="fade-up" data-aos-duration="800" />
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Transform your business reach with secure, scalable mobile applications engineered to deliver seamless user experiences and drive continuous engagement for your brand.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div className='row countsRow'>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='countCard'>
                                        <h3>45+</h3>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='countCard'>
                                        <h3>96%</h3>
                                        <p>Satisfaction Rate</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='countCard'>
                                        <h3>45 Days</h3>
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
                    <h2 data-aos="fade-up" data-aos-duration="700">End-to-end mobile engineering capabilities tailored to your exact business goals</h2>
                    <div className='row' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 pr-5'>
                            <div className='countDiv'>01</div>
                            <h3>Cross-Platform Mobile App Development</h3>
                            <p>
                                 Leverage unified Flutter and React Native frameworks to deploy high-performance multi-platform app solutions. You receive seamless cross-platform mobile app development that slashes time-to-market and captures wider audiences.
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
                                    Shared codebase for efficient deployment.
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
                                    Native-like performance on all devices.
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
                                    Cost-effective development and maintenance.
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
                                    Faster time-to-market for your product.
                                </li>
                            </ul>

                            <Link href="/services/mobile-app-development/cross-platform-mobile-app-development" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/mobile-app/image1.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/mobile-app/image2.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>02</div>
                            <h3>Android App Development</h3>
                            <p>
                                Utilize powerful Android SDKs and modern development frameworks to build robust native android applications. You secure high-performance Android app development services engineered to maximize device capabilities and drive user acquisition.
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
                                    Tailored for diverse Android devices.
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
                                    Built for maximum operational speed.
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
                                    Seamless integration with Google services.
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
                                    Optimized for the Google Play Store.
                                </li>
                            </ul>
                            <Link href="/services/mobile-app-development/android-app-development" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
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
                            <h3>iOS App Development</h3>
                            <p>
                                Leverage dedicated Apple developer frameworks to deploy highly responsive custom iOS applications, delivering premium iOS app development services engineered for seamless App Store submission and friction-free customer retention.
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
                                    Premium, smooth-functioning user interfaces.
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
                                    Built to meet strict Apple guidelines.
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
                                    Secure integration with the Apple ecosystem.
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
                                    Optimized for premium user experiences.
                                </li>
                            </ul>
                            <Link href="/services/mobile-app-development/ios-app-development" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/mobile-app/image3.png' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='sectionProcess'>
                <div className='container'>
                    <h4>Our Process</h4>
                    <h2>A structured mobile engineering cycle from initial wireframing to App Store launch</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>01</h3>
                                <span />
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                User journey mapping, interactive wireframing, and defining the core mobile feature set.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>02</h3>
                                <span />
                            </div>
                            <h3>Engineering</h3>
                            <p>
                                Writing clean, high-performance code, setting up secure backend databases, and integrating essential APIs.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>03</h3>
                                <span />
                            </div>
                            <h3>Refinement</h3>
                            <p>
                                Rigorous manual and automated testing across multiple real devices, screen sizes, and operating systems.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>04</h3>
                                <span />
                            </div>
                            <h3>Launch</h3>
                            <p>
                                Navigating App Store and Google Play submissions, optimization, and deploying post-launch support.
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
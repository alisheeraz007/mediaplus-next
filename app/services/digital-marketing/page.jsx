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
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Digital Marketing & Creative Design</h1>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Scale your online presence using synchronized digital marketing and creative design strategies built to engage target audiences, design seamless interfaces, and drive leads.
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
                                Integrated Digital Strategies Crafted for Brand Authority
                                <span data-aos="fade-up" data-aos-duration="800" />
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Accelerate your market presence, captivate target audiences, and design seamless digital touchpoints with synchronized growth campaigns and user-centric brand experiences.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div className='row countsRow'>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='countCard'>
                                        <h3>180+</h3>
                                        <p>Campaigns Launched</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='countCard'>
                                        <h3>94%</h3>
                                        <p>Client Retention</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='countCard'>
                                        <h3>14 Days</h3>
                                        <p>Avg. Turnaround</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h3>3 Rounds</h3>
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
                    <h2 data-aos="fade-up" data-aos-duration="700">High-converting creative campaigns engineered to scale visibility and acquire customers</h2>
                    <div className='row' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 pr-5'>
                            <div className='countDiv'>01</div>
                            <h3>SEO</h3>
                            <p>
                                Improve your website visibility and secure sustainable traffic pipelines by executing technical, on-page, and off-page organic search strategies. You gain targeted search engine optimization services engineered to grow search rankings.
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
                                    Elevates target organic rankings.
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
                                    Drives high-intent inbound traffic.
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
                                    Technical website audit optimization.
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
                                    Sustainable long-term online growth.
                                </li>
                            </ul>

                            <Link href="/services/digital-marketing/seo" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image1.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image2.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>02</div>
                            <h3>Google Ads</h3>
                            <p>
                                Capture high-intent customers at the exact moment they search by deploying targeted pay-per-click marketing campaigns. You receive data-backed google ads management services built to lower conversion costs and maximize return.
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
                                    Lowers customer acquisition costs.
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
                                    Targets ready-to-buy audiences.
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
                                    Immediate search engine visibility.
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
                                    Data-driven ad spend optimization.
                                </li>
                            </ul>
                            <Link href="/services/digital-marketing/google-ads" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
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
                            <h3>Meta Ads</h3>
                            <p>
                                Reach specific audience demographics across Facebook and Instagram using high-converting, targeted social media advertising campaigns. You deploy focused meta advertising services engineered to scale leads and boost online sales.
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
                                    Captivates targeted social audiences.
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
                                    Enhances online brand exposure.
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
                                    High-converting social campaign setups.
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
                                    Scales multi-channel sales leads.
                                </li>
                            </ul>
                            <Link href="/services/digital-marketing/meta-ads" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image3.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image4.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>04</div>
                            <h3>Social Media Marketing</h3>
                            <p>
                                Build an active online community and strengthen customer relationships through consistent, high-impact organic social media management. You gain tailored social media marketing services designed to increase daily audience engagement.
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
                                    Builds active online communities.
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
                                    Consistent visual content delivery.
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
                                    Boosts daily customer interaction.
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
                                    Strengthens organic brand loyalty.
                                </li>
                            </ul>

                            <Link href="/services/digital-marketing/social-media-marketing" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
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
                            <div className='countDiv'>05</div>
                            <h3>Branding & Creative Design</h3>
                            <p>
                                Establish a cohesive visual identity, including custom logos, color palettes, and marketing assets using tailored creative design solutions. You establish recognized corporate branding services built to differentiate your business.
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
                                    Custom corporate logo designs.
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
                                    Cohesive digital brand identities.
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
                                    Striking custom marketing assets.
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
                                    Differentiates your market presence.
                                </li>
                            </ul>
                            <Link href="/services/digital-marketing/branding-and-creative-design" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image5.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image6.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>06</div>
                            <h3>UI/UX Design Services</h3>
                            <p>
                                Construct intuitive user flows and visually striking wireframes for websites and mobile applications utilizing modern digital product interface design. You acquire optimized UI UX design services built for effortless navigation.
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
                                    Seamless digital user journeys.
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
                                    Intuitive custom interface layout.
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
                                    Minimizes customer drop-off rates.
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
                                    Engaging mobile wireframe design.
                                </li>
                            </ul>
                            <Link href="/services/digital-marketing/ui-ux-design-services" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
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
                            <div className='countDiv'>07</div>
                            <h3>Content Marketing</h3>
                            <p>
                                Drive organic interest and establish industry authority by producing structured, educational articles and landing pages using content creation and strategy. You obtain optimized B2B content marketing services that qualify leads.
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
                                    Educates your target audience.
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
                                    Increases organic search authority.
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
                                    High-converting landing page copy.
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
                                    Establishes visible industry expertise.
                                </li>
                            </ul>
                            <Link href="/services/digital-marketing/content-marketing" className="themeBtn mt-3" data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="600">
                                Book a call
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.679688 7.19826L3.93897 3.93897L0.679688 0.679688" stroke="white" strokeWidth="1.35804" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/digital-marketing/image7.png' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='sectionProcess'>
                <div className='container'>
                    <h4>Our Process</h4>
                    <h2>A strategic creative framework delivering data-driven digital brand growth</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>01</h3>
                                <span />
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                Audience demographic research, competitor analysis, and organic search keyword mapping.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>02</h3>
                                <span />
                            </div>
                            <h3>Creation</h3>
                            <p>
                                Developing custom brand visuals, landing page copy, and target ad assets.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>03</h3>
                                <span />
                            </div>
                            <h3>Optimisation</h3>
                            <p>
                                Rigorous visual brand reviews, campaign layout testing, and technical site audits.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>04</h3>
                                <span />
                            </div>
                            <h3>Launch</h3>
                            <p>
                                Publishing high-impact campaigns, live budget tracking, and real-time performance reporting.
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
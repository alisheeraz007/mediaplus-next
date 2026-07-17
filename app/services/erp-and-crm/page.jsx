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
                            <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">ERP & CRM</h1>
                            <p data-aos="fade-up" data-aos-duration="1400">
                                Centralize your daily workflows with integrated enterprise ERP and CRM solutions designed to automate core business operations, manage leads, and maximize profitability.
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
                                Unified Enterprise Systems Crafted for Operational Control
                                <span data-aos="fade-up" data-aos-duration="800" />
                            </h2>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Centralize your core business functions, streamline workflows, and drive data-backed decisions with integrated management platforms tailored to simplify your daily operations.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div className='row countsRow'>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="100">
                                    <div className='countCard'>
                                        <h3>55+</h3>
                                        <p>Systems Integrated</p>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="300">
                                    <div className='countCard'>
                                        <h3>98%</h3>
                                        <p>Satisfaction Rate</p>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="500">
                                    <div className='countCard'>
                                        <h3>30 Days</h3>
                                        <p>Avg. Setup Time</p>
                                    </div>
                                </div>
                                <div className='col-md-6' data-aos="fade-up" data-aos-duration="700">
                                    <div className='countCard'>
                                        <h3>Included</h3>
                                        <p>Staff Onboarding</p>
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
                    <h2 data-aos="fade-up" data-aos-duration="700">Integrated enterprise platforms engineered to automate administrative and operational tasks</h2>
                    <div className='row' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 pr-5'>
                            <div className='countDiv'>01</div>
                            <h3>ERP Solutions</h3>
                            <p>
                                Integrate departmental workflows, inventory tracking, and supply chain management into unified custom ERP systems. You gain centralized enterprise resource planning solutions designed to eliminate operational silos and improve data accuracy.
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
                                    Connects core departmental workflows.
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
                                    Accurate real-time inventory tracking.
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
                                    Centralizes database resource planning.
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
                                    Eliminates operational data silos.
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
                            <img src='/images/erp/image1.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/erp/image2.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>02</div>
                            <h3>CRM Solutions</h3>
                            <p>
                                Track sales pipelines, customer interactions, and lead generation funnels using centralized custom CRM software. You receive tailored customer relationship management solutions engineered to boost client retention and accelerate sales cycles.
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
                                    Tracks active sales pipelines.
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
                                    Logs central customer interactions.
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
                                    Optimizes business lead conversion.
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
                                    Simplifies customer retention strategies.
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
                            <h3>HRMS</h3>
                            <p>
                                Centralize employee onboarding, performance tracking, and document management using secure employee directory software. You establish structured HR management system solutions designed to simplify workforce administration and improve organizational transparency.
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
                                    Streamlines digital employee onboarding.
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
                                    Centralizes workforce performance logs.
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
                                    Secure employee directory tracking.
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
                                    Automates basic administrative tasks.
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
                            <img src='/images/erp/image3.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/erp/image4.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>04</div>
                            <h3>Payroll Systems</h3>
                            <p>
                                Automate salary distribution, tax calculations, and compliance reporting through secure payroll management software. You obtain accurate automated payroll systems engineered to reduce administrative overhead and ensure timely, error-free processing.
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
                                    Automates accurate salary distributions.
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
                                    Accurate automated tax calculations.
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
                                    Minimizes payroll processing errors.
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
                                    Generates clear compliance reports.
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
                            <div className='countDiv'>05</div>
                            <h3>POS Solutions</h3>
                            <p>
                                Streamline retail transactions, inventory updates, and multi-channel sales tracking with integrated custom POS systems. You receive responsive point of sale solutions designed to optimize customer checkout experiences and simplify store management.
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
                                    Speeds up store checkout processing.
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
                                    Real-time retail inventory synchronization.
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
                                    Simplifies multi-channel sales tracking.
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
                                    Built for reliable retail management.
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
                            <img src='/images/erp/image5.png' />
                        </div>
                    </div>

                    <div className='row mt-5' data-aos="fade-up" data-aos-duration="700">
                        <div className='col-md-6 imgDiv'>
                            <img src='/images/erp/image6.png' />
                        </div>
                        <div className='col-md-6 pl-5'>
                            <div className='countDiv'>06</div>
                            <h3>Accounting Software</h3>
                            <p>
                                Track business expenses, generate financial statements, and manage invoicing using secure financial management tools. You deploy reliable business accounting software designed to maintain cash flow visibility and simplify tax compliance.
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
                                    Continuous business cashflow monitoring.
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
                                    Automated invoice creation pipelines.
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
                                    Simplifies tax calculation processes.
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
                                    Generates reliable financial reports.
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
                </div>
            </section>

            <div className='sectionProcess'>
                <div className='container'>
                    <h4>Our Process</h4>
                    <h2>A collaborative implementation plan bridging departmental data silos smoothly</h2>

                    <div className='processCardMain'>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>01</h3>
                                <span />
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                Deep dive into your current business workflows, team structures, and bottlenecks.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>02</h3>
                                <span />
                            </div>
                            <h3>Customisation</h3>
                            <p>
                                Tailoring the database schema, core workflows, and third-party software integrations.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>03</h3>
                                <span />
                            </div>
                            <h3>Validation</h3>
                            <p>
                                Comprehensive system dry-runs, automated pipeline testing, and data verification.
                            </p>
                        </div>
                        <div className='processCard'>
                            <div className='countDiv'>
                                <h3>04</h3>
                                <span />
                            </div>
                            <h3>Rollout</h3>
                            <p>
                                Smooth production environment launch, system onboarding, and staff training.
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
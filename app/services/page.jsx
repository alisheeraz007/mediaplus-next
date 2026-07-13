import React from 'react'
import TrustedClient from '../components/TrustedClient'
import Cta from '../components/Cta'

function page() {
    return (
        <>

            <div className="inner-banner">
                <figure>
                    <img src="images/serviceHero.png" className="img-fluid" alt="img" />
                </figure>
                <div className="container">
                    <article>
                        <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Enterprise Solutions</h4>
                        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Our Services</h1>
                    </article>
                </div>
            </div>

            <section className="branding position-relative overflow-hidden">
                <div className="container">
                    <hgroup>
                        <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
                            <figure>
                                <img src="images/subHead-img2.webp" className="img-fluid" alt="icon" />
                            </figure>
                            <span>End-to-End Solutions</span>
                        </h3>
                        <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Transforming
                            Complex <br />
                            Challenges into Digital Assets.</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Bridging the gap between creative
                            vision and technical excellence. Our team engineers robust, secure,
                            and scalable digital experiences designed to give your business a competitive edge.</p>
                    </hgroup>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                            data-aos-delay="300">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>Development Services</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon1.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            From custom software engineering to high-performance web development, we build
                                            platforms
                                            and enterprise e-commerce solutions that look great, handle complex logic, and scale
                                            smoothly as your company grows.
                                        </p>
                                    </div>
                                </div>
                                <a href="/services/development-services" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
                            data-aos-delay="400">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>AI Solutions</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon2.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            Automate your daily business tasks and customer conversations with smart AI systems.
                                            We
                                            build practical AI chatbots, AI voice agents, and customer support tools that cut
                                            down
                                            your manual workload.
                                        </p>
                                    </div>
                                </div>
                                <a href="website-and-digital-development.php" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
                            data-aos-delay="500">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>Mobile App Development</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon3.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            We design and develop fast, secure native iOS and Android apps. From internal tools
                                            for
                                            your team to client-facing mobile platforms, we ensure a smooth user experience on
                                            every
                                            screen.
                                        </p>
                                    </div>
                                </div>
                                <a href="mobile-app-development.php" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-left" data-aos-duration="800"
                            data-aos-delay="600">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>Cloud & Infrastructure Solutions</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon4.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            Move your business operations securely to the cloud with minimal downtime. We handle
                                            everything from AWS and Azure management to setting up Microsoft 365 and Google
                                            Workspace environments.
                                        </p>
                                    </div>
                                </div>
                                <a href="digital-marketing-and-promotion.php" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
                            data-aos-delay="300">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>Cyber Security</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon1.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            We protect your business data and networks from modern threats. Through deep cyber
                                            security audits and penetration testing, we find vulnerabilities and secure your
                                            infrastructure before problems happen.
                                        </p>
                                    </div>
                                </div>
                                <a href="branding-and-graphic-design.php" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
                            data-aos-delay="400">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>ERP & CRM</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon2.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            We integrate custom ERP systems and CRMs to keep your business operations organized.
                                            We set up tailored payroll software, HR systems, accounting platforms, and POS tools
                                            to streamline your entire corporate workflow.
                                        </p>
                                    </div>
                                </div>
                                <a href="website-and-digital-development.php" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
                            data-aos-delay="500">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>Managed IT Services</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon3.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            We keep your daily tech running reliably with proactive managed IT support. We
                                            provide secure document management systems and comprehensive annual maintenance
                                            contracts (AMC) tailored to protect your corporate infrastructure.
                                        </p>
                                    </div>
                                </div>
                                <a href="mobile-app-development.php" className="themeBtn">View More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-left" data-aos-duration="800"
                            data-aos-delay="600">
                            <div className="brand-card">
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <h3>Digital Marketing</h3>
                                    <div>
                                        <figure>
                                            <img src="images/brand-icon4.webp" className="img-fluid" alt="icon" />
                                        </figure>
                                        <p>
                                            Our data-driven digital marketing services elevate your online presence. We manage
                                            your strategy across SEO, Google Ads, Meta paid media, content marketing, and
                                            premium branding & creative design.
                                        </p>
                                    </div>
                                </div>
                                <a href="digital-marketing-and-promotion.php" className="themeBtn">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="award-sec position-relative overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-md-6" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                            <figure>
                                <img src="images/award-img1.png" className="img-fluid award-img" alt="img" />
                            </figure>
                        </div>
                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                            <figure>
                                <img src="images/award-img2.png" className="img-fluid award-img" alt="img" />
                            </figure>
                        </div>
                        <div className="col-md-6" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                            <figure>
                                <img src="images/award-img3.png" className="img-fluid award-img" alt="img" />
                            </figure>
                        </div>
                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
                            <figure>
                                <img src="images/award-img4.png" className="img-fluid award-img" alt="img" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="award-circle" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="500">
                    <a href="/portfolio.php">
                        <div className="award-content">
                            <h3>Award<br />Winning<br />Portfolio</h3>
                            <p>View All Portfolio</p>
                        </div>
                        <img src="images/award-img.webp" alt="image" className="rotate-circle" />
                    </a>
                </div>
            </section>

            <section className="hiring">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1200">
                            <figure>
                                <img src="images/section7img.webp" className="img-fluid" alt="img" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <article className="hiring-content">
                                <h3 className="subHead" data-aos="fade-left" data-aos-duration="800">
                                    <figure><img src="images/subHead.webp" alt="img" /></figure>
                                    <span>Strategic Partnership</span>
                                </h3>
                                <h2 className="mainHead" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">Stop
                                    Hiring <br />
                                    <span>Vendors. Start Hiring</span> Partners.
                                </h2>
                                <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">For growing corporations,
                                    start-ups, and real estate firms, legacy technology is a liability. You
                                    don't just need a service provider; you need a Venture Builder who will stress-test your
                                    business model and execute with precision. Whether you are launching a new digital asset or
                                    modernizing your current infrastructure, MediaPlus provides the engineering firepower to
                                    secure
                                    your market share.
                                </p>
                                <a href="contact.php" className="themeBtn" data-aos="fade-left" data-aos-duration="800"
                                    data-aos-delay="600">Book Your Strategy Session</a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <TrustedClient />

            <Cta/>

        </>
    )
}

export default page
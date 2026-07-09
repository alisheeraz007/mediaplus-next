import React from 'react'

function Footer() {
    return (
        <footer>
            <button id="scrollTopBtn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>

            <a href="https://wa.me/971501614417" target="_blank" id="whatsapp-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path
                        d="M20.52 3.48A11.8 11.8 0 0 0 12.01 0C5.38 0 .02 5.36.02 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.61a11.94 11.94 0 0 0 5.83 1.49h.01c6.63 0 11.99-5.36 11.99-11.99 0-3.2-1.25-6.2-3.48-8.41zM12 21.5c-1.78 0-3.52-.48-5.05-1.38l-.36-.21-3.66.96.98-3.56-.23-.37a9.48 9.48 0 0 1-1.46-5.05C2.22 6.22 6.22 2.22 12 2.22c2.63 0 5.1 1.02 6.97 2.9a9.77 9.77 0 0 1 2.9 6.97c0 5.78-4 9.78-9.87 9.78zm5.41-7.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.1 4.48.71.3 1.26.48 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
            </a>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
                        <h3 data-aos="fade-up" data-aos-duration="800">About Us</h3>
                        <div className="about-footer">
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Your Strategic Tech Partner in
                                Dubai. We don't just write code; we engineer scalable digital
                                ecosystems. From complex enterprise software to market-dominating mobile apps, we build the
                                digital assets that power the region's industry leaders.</p>
                            <ul className="social-link">
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"><a
                                    href="https://www.facebook.com/Mediaplusofficial/"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500"><a
                                    href="https://www.linkedin.com/company/mediaplus-information-technology/"><i
                                        className="fab fa-linkedin-in"></i></a></li>
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600"><a
                                    href="https://www.instagram.com/mediaplusofficial/"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <h3 data-aos="fade-up" data-aos-duration="800">Quick Links</h3>
                        <ul className="quick-list">
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="300"><a href="/"><i
                                className="fal fa-long-arrow-right"></i> Home</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="400"><a href="about-us.php"><i
                                className="fal fa-long-arrow-right"></i> About Us</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="500"><a href="portfolio.php"><i
                                className="fal fa-long-arrow-right"></i> Our Portfolio</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="500"><a href="case-study.php"><i
                                className="fal fa-long-arrow-right"></i> Case Studies</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="500"><a href="blog.php"><i
                                className="fal fa-long-arrow-right"></i> Blogs</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="600"><a href="contact.php"><i
                                className="fal fa-long-arrow-right"></i> Let' Connect</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        <h3 data-aos="fade-up" data-aos-duration="800">Our Services</h3>
                        <ul className="quick-list">
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="500"><a
                                href="branding-and-graphic-design.php"><i className="fal fa-long-arrow-right"></i> Branding &
                                Graphic Design</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="600"><a
                                href="website-and-digital-development.php"><i className="fal fa-long-arrow-right"></i> Website &
                                Digital Development</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="700"><a
                                href="mobile-app-development.php"><i className="fal fa-long-arrow-right"></i> Mobile App
                                Development</a></li>
                            <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="800"><a
                                href="digital-marketing-and-promotion.php"><i className="fal fa-long-arrow-right"></i> Digital
                                Marketing & Promotion</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                        <h3 data-aos="fade-up" data-aos-duration="800">Contact Info</h3>
                        <ul className="contactInfo">
                            <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="700"><a
                                href="tel:+971501614417"><i className="fas fa-phone-alt"></i> +971 50 161 4417</a></li>
                            <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="800"><a
                                href="mailto:info@mediaplusuae.com"><i className="fas fa-envelope"></i>
                                info@mediaplusuae.com</a></li>
                            <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="900"><a
                                href="javascript:void(0)"><i className="fas fa-map-marker-alt"></i> Office 906, Business Avenue
                                Building, Al Khabaisi, Dubai, United Arab Emirates</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row copyRight justify-content-center text-center">
                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                        <p> &copy; <span id="currentyear">2026</span> Copyright Media Plus. All Right Reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'

function Header() {
    return (
        <>
            <div class="header-top">
                <div class="container">
                    <div class="row justify-content-lg-between">
                        <div class="col-md-3" data-aos="fade-right" data-aos-duration="800">
                            <ul class="social-icon-header">
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"><a
                                    href="https://www.facebook.com/Mediaplusofficial/" target="_blank"><i
                                        class="fab fa-facebook-f"></i></a></li>
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"><a
                                    href="https://www.instagram.com/mediaplusofficial/" target="_blank"><i
                                        class="fab fa-instagram"></i></a></li>
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"><a
                                    href="https://www.linkedin.com/company/mediaplus-information-technology/" target="_blank"><i
                                        class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-md-8" data-aos="fade-left" data-aos-duration="800">
                            <ul class="contact-info">
                                <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                                    <a href="tel:+971501614417">
                                        <i class="fas fa-phone-alt"></i>
                                        <span>+971 50 161 4417</span>
                                    </a>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a href="mailto:info@mediaplusuae.com">
                                        <i class="fas fa-envelope"></i>
                                        <span>info@mediaplusuae.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <nav class="navbar navbar-expand-lg p-0">
                    <div class="container">
                        <a class="navbar-brand" href="/" data-aos="fade-right" data-aos-duration="1000">
                            <img src="images/logo.webp" alt="img" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu"
                            aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fas fa-bars"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navMenu">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                                    <a class="nav-link" href="about-us">About Us</a>
                                </li>
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                                    <a class="nav-link" href="services">Our Services</a>
                                </li>
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a class="nav-link" href="portfolio">Portfolio</a>
                                </li>
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a class="nav-link" href="case-study">Case Studies</a>
                                </li>
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a class="nav-link" href="blog">Blogs</a>
                                </li>
                                <li class="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
                                    <a class="nav-link" href="contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
'use client'
import { useEffect, useRef, useState } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const collapseNav = () => {
        setIsOpen((prev) => !prev);
    };

    // Outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* <div className="header-top">
                <div className="container">
                    <div className="row justify-content-lg-between">
                        <div className="col-md-3" data-aos="fade-right" data-aos-duration="800">
                            <ul className="social-icon-header">
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"><a
                                    href="https://www.facebook.com/Mediaplusofficial/" target="_blank"><i
                                        className="fab fa-facebook-f"></i></a></li>
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"><a
                                    href="https://www.instagram.com/mediaplusofficial/" target="_blank"><i
                                        className="fab fa-instagram"></i></a></li>
                                <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"><a
                                    href="https://www.linkedin.com/company/mediaplus-information-technology/" target="_blank"><i
                                        className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-8" data-aos="fade-left" data-aos-duration="800">
                            <ul className="contact-info">
                                <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                                    <a href="tel:+971501614417">
                                        <i className="fas fa-phone-alt"></i>
                                        <span>+971 50 161 4417</span>
                                    </a>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a href="mailto:info@mediaplusuae.com">
                                        <i className="fas fa-envelope"></i>
                                        <span>info@mediaplusuae.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <header>
                <nav className="navbar navbar-expand-lg p-0" ref={navRef}>
                    <div className="container">
                        <a className="navbar-brand" href="/" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/images/logo.webp" alt="img" />
                        </a>
                        <button onClick={() => collapseNav()} className="navbar-toggler" type="button">
                            <span className="fas fa-bars"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navMenu" style={{ display: isOpen ? "block" : "none" }}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                                    <a className="nav-link" href="/about-us">About Us</a>
                                </li>
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
                                    <a className="nav-link" href="/services">Our Services</a>
                                </li>
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a className="nav-link" href="/portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a className="nav-link" href="/case-study">Case Studies</a>
                                </li>
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
                                    <a className="nav-link" href="/blog">Blogs</a>
                                </li>
                                <li className="nav-item" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
                                    <a className="nav-link" href="/contact">Contact</a>
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
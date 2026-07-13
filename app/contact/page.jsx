import React from 'react'

function page() {
    return (
        <>

            <div className="inner-banner">
                <figure>
                    <img src="images/contactHero.png" className="img-fluid" alt="img" />
                </figure>
                <div className="container">
                    <article>
                        <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">We Are Best Creative Agency</h4>
                        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Let’s Connect</h1>
                    </article>
                </div>
            </div>

            <section className="contact">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1000">
                            <div className="contact-form">
                                <h3 className="subHead" data-aos="fade-up" data-aos-duration="800">
                                    <figure><img src="images/subHead-img2.webp" className="img-fluid" alt="icon" /></figure>
                                    <span>Contact Us</span>
                                </h3>
                                <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Start a
                                    Conversation
                                    With Us</h2>
                                <form action="sendmail" method="POST">
                                    <div className="row">
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" placeholder="Email"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                            <div className="form-group">
                                                <input type="tel" name="phone" className="form-control" placeholder="Phone"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                            <div className="form-group">
                                                <input type="text" name="subject" className="form-control" placeholder="Subject"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                            <div className="form-group">
                                                <select name="service" className="form-control" required>
                                                    <option disabled>Select an option</option>
                                                    <option>Branding & Graphic Design</option>
                                                    <option>Website & Digital Development</option>
                                                    <option>Mobile App Development</option>
                                                    <option>Digital Marketing & Promotion</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" placeholder="Message"
                                                    required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
                                            <button type="submit" className="themeBtn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1000">
                            <div className="contacts-info">
                                <h3 className="subHead" data-aos="fade-up" data-aos-duration="800">
                                    <figure><img src="images/subHead-img2.webp" className="img-fluid" alt="icon" /></figure>
                                    <span>Contact Us</span>
                                </h3>
                                <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Contact
                                    Info</h2>
                                <div className="media-info">
                                    <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                        <li><img src="images/flag1.png" className="img-fluid" alt="flag" />
                                            <h4>Media Plus Dubai</h4>
                                        </li>
                                        <li><a href="tel:+971501614417"> <img src="images/phone-icon.webp" className="img-fluid"
                                            alt="flag" /> +971 50 161 4417</a></li>
                                        <li><a href="mailto:info@mediaplusuae.com"> <img src="images/mail-icon.webp"
                                            className="img-fluid" alt="flag" /> info@mediaplusuae.com</a></li>
                                        <li>
                                            <a href="https://maps.app.goo.gl/TdM2Yd1TcdSzPrpD6"
                                                target="_blank">
                                                <img src="images/location.webp" className="img-fluid" alt="flag" />
                                                Office 906, Business Avenue Building, Al Khabaisi, Dubai, United Arab Emirates
                                            </a>
                                        </li>
                                    </ul>
                                    <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                        <li><img src="images/flag2.png" className="img-fluid" alt="flag" />
                                            <h4>Media Plus Pakistan</h4>
                                        </li>

                                        <li><a href="tel:+923232443134"> <img src="images/phone-icon.webp" className="img-fluid"
                                            alt="flag" /> +92 32 32443134</a></li>
                                        <li><a href="mailto:info@mediaplusuae.com"> <img src="images/mail-icon.webp"
                                            className="img-fluid" alt="flag" /> info@mediaplusuae.com</a></li>
                                        <li>
                                            <a href="https://www.google.com/maps?q=Plot+B+16/2B,+Nazimabad+3+Block+3,+Karachi,+Pakistan"
                                                target="_blank">
                                                <img src="images/location.webp" className="img-fluid" alt="flag" />
                                                Plot B 16/2B, Nazimabad 3 Block 3 Nazimabad, Karachi, Pakistan
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="follow-us" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">Follow us
                                </h3>
                                <ul className="social-icons" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                    <li><a href="https://www.facebook.com/Mediaplusofficial/" target="_blank"><img
                                        src="images/f-icon.webp" className="img-fluid" alt="Facebook" /></a>
                                    </li>
                                    <li><a href="https://www.linkedin.com/company/mediaplus-information-technology/" target="_blank"><img
                                        src="images/l-icon.png" className="img-fluid" alt="LinkedIn" /></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/mediaplusofficial/" target="_blank"><img
                                        src="images/i-icon.webp" className="img-fluid" alt="Instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
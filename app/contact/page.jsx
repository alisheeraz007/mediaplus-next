import React from 'react'

function page() {
    return (
        <>

            <div class="inner-banner">
                <figure>
                    <img src="images/contactHero.png" class="img-fluid" alt="img" />
                </figure>
                <div class="container">
                    <article>
                        <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">We Are Best Creative Agency</h4>
                        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Let’s Connect</h1>
                    </article>
                </div>
            </div>

            <section class="contact">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1000">
                            <div class="contact-form">
                                <h3 class="subHead" data-aos="fade-up" data-aos-duration="800">
                                    <figure><img src="images/subHead-img2.webp" class="img-fluid" alt="icon" /></figure>
                                    <span>Contact Us</span>
                                </h3>
                                <h2 class="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Start a
                                    Conversation
                                    With Us</h2>
                                <form action="sendmail" method="POST">
                                    <div class="row">
                                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                            <div class="form-group">
                                                <input type="text" name="name" class="form-control" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                            <div class="form-group">
                                                <input type="email" name="email" class="form-control" placeholder="Email"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                            <div class="form-group">
                                                <input type="tel" name="phone" class="form-control" placeholder="Phone"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                            <div class="form-group">
                                                <input type="text" name="subject" class="form-control" placeholder="Subject"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-md-12" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                            <div class="form-group">
                                                <select name="service" class="form-control" required>
                                                    <option disabled selected>Select an option</option>
                                                    <option>Branding & Graphic Design</option>
                                                    <option>Website & Digital Development</option>
                                                    <option>Mobile App Development</option>
                                                    <option>Digital Marketing & Promotion</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control" placeholder="Message"
                                                    required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
                                            <button type="submit" class="themeBtn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1000">
                            <div class="contacts-info">
                                <h3 class="subHead" data-aos="fade-up" data-aos-duration="800">
                                    <figure><img src="images/subHead-img2.webp" class="img-fluid" alt="icon" /></figure>
                                    <span>Contact Us</span>
                                </h3>
                                <h2 class="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Contact
                                    Info</h2>
                                <div class="media-info">
                                    <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                        <li><img src="images/flag1.png" class="img-fluid" alt="flag" />
                                            <h4>Media Plus Dubai</h4>
                                        </li>
                                        <li><a href="tel:+971501614417"> <img src="images/phone-icon.webp" class="img-fluid"
                                            alt="flag" /> +971 50 161 4417</a></li>
                                        <li><a href="mailto:info@mediaplusuae.com"> <img src="images/mail-icon.webp"
                                            class="img-fluid" alt="flag" /> info@mediaplusuae.com</a></li>
                                        <li>
                                            <a href="https://maps.app.goo.gl/TdM2Yd1TcdSzPrpD6"
                                                target="_blank">
                                                <img src="images/location.webp" class="img-fluid" alt="flag" />
                                                Office 906, Business Avenue Building, Al Khabaisi, Dubai, United Arab Emirates
                                            </a>
                                        </li>
                                    </ul>
                                    <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                        <li><img src="images/flag2.png" class="img-fluid" alt="flag" />
                                            <h4>Media Plus Pakistan</h4>
                                        </li>

                                        <li><a href="tel:+923232443134"> <img src="images/phone-icon.webp" class="img-fluid"
                                            alt="flag" /> +92 32 32443134</a></li>
                                        <li><a href="mailto:info@mediaplusuae.com"> <img src="images/mail-icon.webp"
                                            class="img-fluid" alt="flag" /> info@mediaplusuae.com</a></li>
                                        <li>
                                            <a href="https://www.google.com/maps?q=Plot+B+16/2B,+Nazimabad+3+Block+3,+Karachi,+Pakistan"
                                                target="_blank">
                                                <img src="images/location.webp" class="img-fluid" alt="flag" />
                                                Plot B 16/2B, Nazimabad 3 Block 3 Nazimabad, Karachi, Pakistan
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 class="follow-us" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">Follow us
                                </h3>
                                <ul class="social-icons" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                    <li><a href="https://www.facebook.com/Mediaplusofficial/" target="_blank"><img
                                        src="images/f-icon.webp" class="img-fluid" alt="Facebook" /></a>
                                    </li>
                                    <li><a href="https://www.linkedin.com/company/mediaplus-information-technology/" target="_blank"><img
                                        src="images/l-icon.png" class="img-fluid" alt="LinkedIn" /></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/mediaplusofficial/" target="_blank"><img
                                        src="images/i-icon.webp" class="img-fluid" alt="Instagram" /></a>
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
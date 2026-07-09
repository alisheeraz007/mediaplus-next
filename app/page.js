"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <section className="main-slider p-0" id="mainSlider">
        <div className="image-layer video-layer">
          <video autoPlay muted loop playsInline preload="true" controlsList="nodownload"
            poster="images/poster.webp">
            <source src="images/banner.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="homeSlider">
          <div className="container">
            <div className="row aic">
              <div className="col-lg-10">
                <div className="slideOne" data-aos="fade-up">
                  <h3>STRATEGIC TECH PARTNER</h3>
                  <h1>From Vision to
                    Venture.</h1>
                  <p>We don't just write
                    code; we build digital
                    ecosystems.
                    MediaPlus engineers Enterprise Software, AI Solutions, and Mobile Platforms for
                    Dubai's most ambitious leaders.
                  </p>
                  <div>
                    <a href="contact.php" className="themeBtn">Book Strategy Session</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="our-app position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="our-app-head">
                <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                  <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure> <span>Who We
                    Are</span>
                </h3>
                <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">We
                  Build the <span>Technology That Powers</span> Your Business.</h2>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">In a market flooded with
                  vendors who just "take tickets," MediaPlus serves as your Strategic Partner. Since 2019, we
                  have shifted the paradigm from simple development to full-cycle Venture Building.</p>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">Whether you need a
                  high-performance Mobile App, an AI-driven dashboard, or a complete Digital Transformation
                  roadmap, we bring the "Owner's Mindset" to every line of code we write.</p>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                  <a href="about-us.php" className="themeBtn">More About Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <figure data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                <img src="images/app-img.webp" className="img-fluid" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <img src="images/app-img2.webp" className="img-fluid app-img2" alt="image" data-aos="fade-right"
          data-aos-duration="1500" data-aos-delay="800" />
      </section>

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
            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-right" data-aos-duration="800"
              data-aos-delay="300">
              <div className="brand-card">
                <div>
                  <h3>Branding & Graphic Design</h3>
                  <figure>
                    <img src="images/brand-icon1.webp" className="img-fluid" alt="icon" />
                  </figure>
                  <p>A premium business requires a premium aesthetic. We craft comprehensive brand identities,
                    professional marketing collateral, and strategic packaging designs that command
                    authority
                    and establish immediate market trust.</p>
                </div>
                <a href="branding-and-graphic-design.php" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <div className="brand-card">
                <div>
                  <h3>Website & Digital Development</h3>
                  <figure>
                    <img src="images/brand-icon2.webp" className="img-fluid" alt="icon" />
                  </figure>
                  <p>We engineer high-performance web applications tailored to your complex business logic.
                    From
                    custom CRMs and interactive dashboards to scalable e-commerce portals, we build digital
                    assets that drive growth.</p>
                </div>
                <a href="website-and-digital-development.php" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
              <div className="brand-card">
                <div>
                  <h3>Mobile App Development</h3>
                  <figure>
                    <img src="images/brand-icon3.webp" className="img-fluid" alt="icon" />
                  </figure>
                  <p>Deploy secure, high-speed iOS and Android applications. We design custom business apps
                    and
                    user-centric mobile solutions that put your enterprise directly in your customers'
                    hands,
                    ensuring a flawless user experience.</p>
                </div>
                <a href="mobile-app-development.php" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-left" data-aos-duration="800"
              data-aos-delay="600">
              <div className="brand-card">
                <div>
                  <h3>Digital Marketing & Promotion</h3>
                  <figure>
                    <img src="images/brand-icon4.webp" className="img-fluid" alt="icon" />
                  </figure>
                  <p>The best platforms are useless if they are invisible. We drive high-ticket revenue
                    through
                    aggressive Technical SEO, targeted PPC campaigns, strategic social media marketing, and
                    conversion-focused email promotions.</p>
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
            <div className="col-md-6 h-100" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
              <figure>
                <a href="branding-and-graphic-design.php">
                  <img src="images/award-img1.png" className="img-fluid award-img" alt="img" />
                </a>
              </figure>
            </div>
            <div className="col-md-6 h-100" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <figure>
                <a href="website-and-digital-development.php">
                  <img src="images/award-img2.png" className="img-fluid award-img" alt="img" />
                </a>
              </figure>
            </div>
            <div className="col-md-6 h-100" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
              <figure>
                <a href="mobile-app-development.php">
                  <img src="images/award-img3.png" className="img-fluid award-img" alt="img" />
                </a>
              </figure>
            </div>
            <div className="col-md-6 h-100" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <figure>
                <a href="digital-marketing-and-promotion.php">
                  <img src="images/award-img4.png" className="img-fluid award-img" alt="img" />
                </a>
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

      <section className="our-success position-relative overflow-hidden">
        <hgroup>
          <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
            <figure><img src="images/subHead-img2.webp" alt="icon" /></figure>
            <span>Our Milestones</span>
          </h3>
          <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Our <span>Journey
            Of Building</span> Success experience</h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">From a boutique agency to a premier
            Venture Builder, our journey has been defined by one mission:
            empowering Dubai's enterprises to dominate their industries through superior technology.</p>
        </hgroup>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
              <div className="success-card">
                <h3 className="counter">200+</h3>
                <h4>Digital Assets Delivered</h4>
              </div>
            </div>
            <div className="col-md-4 col-sm-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <div className="success-card">
                <h3 className="counter">7+</h3>
                <h4>Years of Innovation</h4>
              </div>
            </div>
            <div className="col-md-4 col-sm-4" data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
              <div className="success-card">
                <h3 className="counter">98%</h3>
                <h4>Client Retention Rate</h4>
              </div>
            </div>
          </div>

          <div className="our-client" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <h3>Our Happy Clients</h3>
            <h2 className="mainHead">Trusted <span>By <br />
              Visionaries & Market</span> Leaders</h2>
            <p>From government entities to high-growth startups, we power the brands that power Dubai.</p>
          </div>

          <ul className="client-images">
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700"><img src="images/client-img1.webp"
              className="img-fluid client-logo" alt="Client 1" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="750"><img src="images/client-img2.webp"
              className="img-fluid client-logo" alt="Client 2" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"><img src="images/client-img3.webp"
              className="img-fluid client-logo" alt="Client 3" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="850"><img src="images/client-img4.webp"
              className="img-fluid client-logo" alt="Client 4" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900"><img src="images/client-img5.webp"
              className="img-fluid client-logo" alt="Client 5" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="950"><img src="images/client-img7.webp"
              className="img-fluid client-logo" alt="Client 7" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"><img src="images/client-img6.webp"
              className="img-fluid client-logo" alt="Client 6" /></li>
            <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1050"><img src="images/client-img8.webp"
              className="img-fluid client-logo" alt="Client 8" /></li>
          </ul>
        </div>
      </section>

      <section className="testimonial position-relative overflow-hidden">
        <div className="container">
          <hgroup>
            <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
              <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
              <span>Client Success Stories</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Trusted <span>by
              <br />
              Industry</span> Leaders.
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Don't just take our word for it.
              Hear from the visionaries who partnered with MediaPlus to build
              their digital future.
            </p>
          </hgroup>

          <div className="swiper testimonialSlider" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
            <div>
              <Slider {...settings}>
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <figure>
                      <img src="images/quote.webp" className="img-fluid" alt="quote" />
                    </figure>
                    <p>"MediaPlus was amazing! I had no idea exactly what I was looking for, just needed a logo
                      for my new company and I provided them with some examples of competitors and
                      information and they came back with the perfect logo!! they really does beautiful work
                      and gets it to you quickly with wonderful communication! We are so happy with their
                      work. We will definitely use them again for anything else we need!!"</p>
                    <div className="testimonial-content">
                      <figure>
                        <img src="images/testmonial4.webp" className="img-fluid" alt="img" />
                      </figure>
                      <div>
                        <h4>- Hussain Al Mannai</h4>
                        <ul>
                          <li>
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <figure>
                      <img src="images/quote.webp" className="img-fluid" alt="quote" />
                    </figure>
                    <p>"I highly recommend Media Plus for Mobile Application Development. Attentive and
                      available team, professional and well organized, thanks to Mr Muhammad for his quality
                      work.
                    </p>
                    <div className="testimonial-content">
                      <figure>
                        <img src="images/testmonial48.webp" className="img-fluid" alt="img" />
                      </figure>
                      <div>
                        <h4>- Ayoub Aydi</h4>
                        <ul>
                          <li>
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <figure>
                      <img src="images/quote.webp" className="img-fluid" alt="quote" />
                    </figure>
                    <p>"I had the pleasure of working with MediaPlus on a simple, yet detailed project for my
                      new business. I reviewed proposals from several different individuals and eventually
                      chose MediaPlus because thye assured me that I would be working with an “expert” in
                      business branding and image. From the onset, I was very particular about what I wanted
                      and they were able to take my notes and ideas and create incredible renderings for me.
                      They were all SO good that I had a hard time choosing the final piece. Additionally, I
                      provided them a copy of my business logo and they reworked the color scheme to the point
                      that I changed my logo altogether.</p>
                    <div className="testimonial-content">
                      <figure>
                        <img src="images/testmonial45.webp" className="img-fluid" alt="img" />
                      </figure>
                      <div>
                        <h4>- Ghassan (Lawyer)</h4>
                        <ul>
                          <li>
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <figure>
                      <img src="images/quote.webp" className="img-fluid" alt="quote" />
                    </figure>
                    <p>"The quality of MediaPlus's work is very good. They are creative, able to work from a
                      blank page and with basic instructions create something attractive using their own
                      initiative. We had website design and 2 labels for the brief. Communication and
                      availability were good and they were willing to accommodate our many revisions, the one
                      thing to say is to pay more attention to detail by versioning approved samples will save
                      a lot of time on both sides. Overall, good work."</p>
                    <div className="testimonial-content">
                      <figure>
                        <img src="images/testmonial46.webp" className="img-fluid" alt="img" />
                      </figure>
                      <div>
                        <h4>- Mr. Yahyah</h4>
                        <ul>
                          <li>
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                            <img src="images/star.webp" className="img-fluid" alt="star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="achievements position-relative overflow-hidden">
        <div className="container">
          <hgroup>
            <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
              <figure>
                <img src="images/subHead.webp" className="img-fluid" alt="icon" />
              </figure>
              <span>Proven Excellence</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Awards <span>&
              Recognitions</span></h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">We don't just claim to build
              high-performance digital assets—our track record proves it. MediaPlus IT
              is consistently ranked among the top B2B development firms globally for engineering robust,
              scalable, and ROI-driven technology solutions.</p>
          </hgroup>
        </div>

        <div className="container-fluid p-0" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
          <div className="marquee-container">
            <div className="marquee">
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img1.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>RightFirms</h3>
                <p>Recognized for excellence in custom software and enterprise web development.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img2.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>GoodFirms</h3>
                <p>Ranked among top-tier digital partners for driving measurable business growth.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img3.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>AppFirm Reviews</h3>
                <p>Celebrated for engineering secure, high-retention native mobile applications.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img4.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>GoodFirms</h3>
                <p>Awarded for superior UX/UI design and corporate visual identity architecture.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img5.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>Clutch</h3>
                <p>Maintaining a 5-star rating for transparent, agile, and results-driven project delivery.</p>
              </div>

              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img1.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>RightFirms</h3>
                <p>Recognized for excellence in custom software and enterprise web development.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img2.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>GoodFirms</h3>
                <p>Ranked among top-tier digital partners for driving measurable business growth.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img3.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>AppFirm Reviews</h3>
                <p>Celebrated for engineering secure, high-retention native mobile applications.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img4.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>GoodFirms</h3>
                <p>Awarded for superior UX/UI design and corporate visual identity architecture.</p>
              </div>
              <div className="brand-icon">
                <figure>
                  <img src="images/brand-img5.webp" className="img-fluid brand-logo" alt="Brand" />
                </figure>
                <h3>Clutch</h3>
                <p>Maintaining a 5-star rating for transparent, agile, and results-driven project delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <img src="images/achievement-img.webp" className="img-fluid achievement-img" alt="Achievement" data-aos="fade-left"
          data-aos-duration="1500" data-aos-delay="800" />
      </section>

      <section className="engineering position-relative overflow-hidden">
        <div className="container">
          <hgroup>
            <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
              <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure> <span>Industry
                Expertise</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Engineering
              <span>Solutions <br />
                Across</span> Complex Sectors.
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">A one-size-fits-all approach
              guarantees mediocrity. Whether you need a secure FinTech portal, a
              disruptive PropTech CRM, or a frictionless E-Commerce platform, we architect digital ecosystems
              tailored to the exact regulatory and operational demands of your industry.</p>
          </hgroup>
        </div>

        <div className="container-fluid p-0">
          <div className="engineering-grid">
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <figure>
                <img src="images/engineering-img1.webp" className="img-fluid engineering-img" alt="SaaS" />
              </figure>
              <h3>SaaS & On-Demand</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <figure>
                <img src="images/engineering-img2.webp" className="img-fluid engineering-img" alt="HealthTech" />
              </figure>
              <h3>HealthTech & Wellness</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              <figure>
                <img src="images/engineering-img3.webp" className="img-fluid engineering-img" alt="Logistics" />
              </figure>
              <h3>Logistics & Mobility</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
              <figure>
                <img src="images/engineering-img4.webp" className="img-fluid engineering-img" alt="Retail" />
              </figure>
              <h3>Retail & E-Commerce</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
              <figure>
                <img src="images/engineering-img5.webp" className="img-fluid engineering-img" alt="Hospitality" />
              </figure>
              <h3>Hospitality & Travel</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <figure>
                <img src="images/engineering-img6.webp" className="img-fluid engineering-img" alt="Real Estate" />
              </figure>
              <h3>Real Estate & PropTech</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
              <figure>
                <img src="images/engineering-img7.webp" className="img-fluid engineering-img" alt="EdTech" />
              </figure>
              <h3>EdTech & E-Learning</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">
              <figure>
                <img src="images/engineering-img8.webp" className="img-fluid engineering-img" alt="Media" />
              </figure>
              <h3>Media & Entertainment</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="experienced position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="experienced-head">
                <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                  <figure><img src="images/subHead-img2.webp" className="img-fluid" alt="icon" /></figure>
                  <span>Core Competencies</span>
                </h3>
                <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Where
                  <span>Strategy Meets</span> Engineering.
                </h2>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">We don't just guess; we
                  execute with precision. MediaPlus combines deep technical knowledge
                  with creative innovation to deliver digital assets that stand the test of time. From complex
                  backend architecture to pixel-perfect frontend design, we handle it all in-house.</p>

                <div className="skill" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
                  <div className="skill-top">
                    <span>Analysis</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-width="90%"></div>
                  </div>
                </div>

                <div className="skill" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                  <div className="skill-top">
                    <span>Design</span>
                    <span>94%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-width="94%"></div>
                  </div>
                </div>

                <div className="skill" data-aos="fade-right" data-aos-duration="800" data-aos-delay="700">
                  <div className="skill-top">
                    <span>Marketing</span>
                    <span>97%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-width="97%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <figure data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                <img src="images/experienced-img.webp" className="img-fluid" alt="img" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation">
        <div className="marquee-section">

          <div className="marquee-wrapper purple">
            <div className="marquee-track go-left">
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
            </div>
          </div>

          <div className="marquee-wrapper white">
            <div className="marquee-track go-right">
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
              <span className="marquee-item">Innovation <span className="star">✦</span></span>
              <span className="marquee-item">Enterprise <span className="star">✦</span></span>
              <span className="marquee-item">Business Growth <span className="star">✦</span></span>
              <span className="marquee-item">Result <span className="star">✦</span></span>
            </div>
          </div>
        </div>

        <div className="container">
          <hgroup>
            <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
              <figure><img src="images/subHead-img2.webp" className="img-fluid" alt="" /></figure>
              <span>How We Work</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000">From <br />
              Concept to Code to Scale.</h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">We don't rely on guesswork.
              MediaPlus utilizes a proven Agile Methodology that ensures transparency,
              speed, and pixel-perfect execution at every stage of the lifecycle.</p>
          </hgroup>

          <div className="cards-container">
            <div className="process-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
              <img src="images/process-img1.webp" className="img-fluid" alt="Strategy" />
              <div className="card-left-bar">
                <div className="card-label">Strategy &amp; Blueprinting <span>01</span></div>
              </div>
            </div>

            <div className="process-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <img src="images/process-img2.webp" className="img-fluid" alt="Engineering" />
              <div className="card-left-bar">
                <div className="card-label">Agile Engineering <span>02</span></div>
              </div>
            </div>

            <div className="process-card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
              <img src="images/process-img3.webp" className="img-fluid" alt="Launch" />
              <div className="card-left-bar">
                <div className="card-label">Launch &amp; Optimization <span>03</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pull-trigger position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <article className="trigger-content">
                <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                  <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
                  <span>Pull the Trigger!</span>
                </h3>
                <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  Looking
                  <span>to
                    Elevate Your</span> Digital Presence?
                </h2>
                <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Schedule a free
                  consultation with us & discover how our cutting-edge mobile and web
                  development solutions
                  can transform your business.</p>
                <a href="contact.php" className="themeBtn" data-aos="fade-right" data-aos-duration="1000"
                  data-aos-delay="600">Let's Connect!</a>
              </article>
            </div>
            <div className="col-md-5">
              <figure className="trigger-img" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                <img src="images/trigger-img.webp" className="img-fluid" alt="img" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="blog position-relative overflow-hidden">
        <div className="container">
          <hgroup>
            <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
              <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
              <span>Our Blogs</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000">Expert Insights <br />
              Fo<span>r Smarter Digital</span> Marketing
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </hgroup>
          <div className="row" id="blogRow">
            <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
              <article className="blog-card">
                <figure><img src="images/blog-img1.webp" className="img-fluid" alt="img" /></figure>
                <h4>Digital <br /> Marketing Strategy</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard</p>
                <a href="blog-details.php" className="themeBtn">Read More</a>
              </article>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <article className="blog-card">
                <figure><img src="images/blog-img2.webp" className="img-fluid" alt="img" /></figure>
                <h4>Search Engine <br /> Optimization (SEO)</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard</p>
                <a href="blog-details.php" className="themeBtn">Read More</a>
              </article>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
              <article className="blog-card">
                <figure><img src="images/blog-img3.webp" className="img-fluid" alt="img" /></figure>
                <h4>Pay-Per <br /> Click Advertising (PPC)</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard</p>
                <a href="blog-details.php" className="themeBtn">Read More</a>
              </article>
            </div>

          </div>
        </div>
        <img src="images/app-img2.webp" className="img-fluid blog-img" alt="img" data-aos="fade-right"
          data-aos-duration="1500" data-aos-delay="600" />
      </section>
    </div>
  );
}

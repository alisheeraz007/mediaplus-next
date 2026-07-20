import React from 'react'

function page() {
    return (
        <>

            <div className="inner-banner overFlowXHidden">
                <figure>
                    <img src="images/portfolioHero.png" className="img-fluid" alt="img" />
                </figure>
                <div className="container">
                    <article>
                        <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">We Are Best Creative Agency</h4>
                        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Our Portfolio</h1>
                    </article>
                </div>
            </div>

            <section className="portfolio-tabs overFlowXHidden">
                <ul className="nav nav-tabs" id="myTab" role="tablist">

                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="logo-tab" data-toggle="tab" data-target="#logo" type="button"
                            role="tab">
                            Logo
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="website-tab" data-toggle="tab" data-target="#website" type="button"
                            role="tab">
                            Website
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="webapp-tab" data-toggle="tab" data-target="#webapp" type="button"
                            role="tab">
                            Web App
                        </button>
                    </li>

                </ul>


                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="logo" role="tabpanel">
                        <section className="recent-work">
                            <div className="container">

                                <hgroup data-aos="fade-up" data-aos-duration="800" className="aos-init aos-animate">
                                    <h2 className="mainHead">Recent Work Showcase</h2>
                                    <p>Click on the images below to see the detailed view of the brand</p>
                                </hgroup>

                                <div className="row">

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-delay="100">
                                        <a href="https://mideasl.com/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img20.png" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-delay="150">
                                        <a href="https://timeflyz.co/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img21.png" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-delay="200">
                                        <a href="https://tabeebnow.com/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img22.png" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-delay="250">
                                        <a href="https://haempath.co.uk/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img19.png" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-delay="300">
                                        <a href="https://syneraproperty.com/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img16.png" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init aos-animate" data-aos="zoom-in"
                                        data-aos-delay="350">
                                        <figure>
                                            <img src="images/recent-img12.webp" className="img-fluid" alt="img" />
                                        </figure>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init" data-aos="zoom-in"
                                        data-aos-delay="400">
                                        <a href="https://pcma.ae/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img15.webp" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init" data-aos="zoom-in"
                                        data-aos-delay="450">
                                        <figure>
                                            <img src="images/recent-img25.png" className="img-fluid" alt="img" />
                                        </figure>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 aos-init" data-aos="zoom-in"
                                        data-aos-delay="500">
                                        <a href="https://elephantuae.com/" target="_blank">
                                            <figure>
                                                <img src="images/recent-img10.webp" className="img-fluid" alt="img" />
                                            </figure>
                                        </a>
                                    </div>

                                    <div className="col-md-12 aos-init" data-aos="fade-up" data-aos-delay="200">
                                        <div className="load-more">
                                            <a href="logo-design.php" className="themeBtn">View More Project</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="our-success position-relative overflow-hidden">

                            <div className="container">
                                <div className="our-client about-client" data-aos="fade-up" data-aos-duration="1000"
                                    data-aos-delay="600">
                                    <h3>Our Happy Clients</h3>
                                    <h2 className="mainHead">Trusted <span>By <br />
                                        Visionaries & Market</span> Leaders</h2>
                                    <p>From government entities to high-growth startups, we power the brands that power Dubai.
                                    </p>
                                </div>

                                <ul className="client-images">
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700"><img
                                        src="images/client-img1.webp" className="img-fluid client-logo" alt="Client 1" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="750"><img
                                        src="images/client-img2.webp" className="img-fluid client-logo" alt="Client 2" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"><img
                                        src="images/client-img3.webp" className="img-fluid client-logo" alt="Client 3" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="850"><img
                                        src="images/client-img4.webp" className="img-fluid client-logo" alt="Client 4" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900"><img
                                        src="images/client-img5.webp" className="img-fluid client-logo" alt="Client 5" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="950"><img
                                        src="images/client-img7.webp" className="img-fluid client-logo" alt="Client 7" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"><img
                                        src="images/client-img6.webp" className="img-fluid client-logo" alt="Client 6" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1050"><img
                                        src="images/client-img8.webp" className="img-fluid client-logo" alt="Client 8" /></li>
                                </ul>
                            </div>
                        </section>

                        <section className="pull-trigger position-relative overflow-hidden inner-page">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <article className="trigger-content">
                                            <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                                                <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
                                                <span>Pull the Trigger!</span>
                                            </h3>
                                            <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000"
                                                data-aos-delay="200">
                                                Looking
                                                <span>to
                                                    Elevate Your</span> Digital Presence?
                                            </h2>
                                            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Schedule a
                                                free
                                                consultation with us & discover how our cutting-edge mobile and web
                                                development solutions
                                                can transform your business.</p>
                                            <a href="contact.php" className="themeBtn" data-aos="fade-right"
                                                data-aos-duration="1000" data-aos-delay="600">Let's Connect!</a>
                                        </article>
                                    </div>
                                    <div className="col-md-5">
                                        <figure className="trigger-img" data-aos="fade-left" data-aos-duration="1200"
                                            data-aos-delay="300">
                                            <img src="images/trigger-img.webp" className="img-fluid" alt="img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="website" role="tabpanel">
                        <section className="web-cms-sec">
                            <div className="container-fluid p-0">
                                <div className="row">

                                    <div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="600">
                                        <figure>
                                            <a href="images/web-cms-img1.png" data-fancybox="gallery">
                                                <img src="images/web-cms-img1.png" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="150">
                                        <figure>
                                            <a href="images/web-cms-img2.png" data-fancybox="gallery">
                                                <img src="images/web-cms-img2.png" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                                        <figure>
                                            <a href="images/web-cms-img3.png" data-fancybox="gallery">
                                                <img src="images/web-cms-img3.png" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="600">
                                        <figure>
                                            <a href="images/web-cms-img4.png" data-fancybox="gallery">
                                                <img src="images/web-cms-img4.png" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="150">
                                        <figure>
                                            <a href="images/web-cms-img5.png" data-fancybox="gallery">
                                                <img src="images/web-cms-img5.png" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                                        <figure>
                                            <a href="images/web-cms-img6.png" data-fancybox="gallery">
                                                <img src="images/web-cms-img6.png" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-12 aos-init" data-aos="fade-up" data-aos-duration="800"
                                        data-aos-delay="400">
                                        <div className="load-more">
                                            <a href="web-cms.php" className="themeBtn">View More Project</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="our-success position-relative overflow-hidden">
                            <div className="container">
                                <div className="our-client about-client" data-aos="fade-up" data-aos-duration="1000"
                                    data-aos-delay="600">
                                    <h3>Our Happy Clients</h3>
                                    <h2 className="mainHead">Trusted <span>By <br />
                                        Visionaries & Market</span> Leaders</h2>
                                    <p>From government entities to high-growth startups, we power the brands that power Dubai.
                                    </p>
                                </div>

                                <ul className="client-images">
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700"><img
                                        src="images/client-img1.webp" className="img-fluid client-logo" alt="Client 1" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="750"><img
                                        src="images/client-img2.webp" className="img-fluid client-logo" alt="Client 2" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"><img
                                        src="images/client-img3.webp" className="img-fluid client-logo" alt="Client 3" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="850"><img
                                        src="images/client-img4.webp" className="img-fluid client-logo" alt="Client 4" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900"><img
                                        src="images/client-img5.webp" className="img-fluid client-logo" alt="Client 5" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="950"><img
                                        src="images/client-img7.webp" className="img-fluid client-logo" alt="Client 7" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"><img
                                        src="images/client-img6.webp" className="img-fluid client-logo" alt="Client 6" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1050"><img
                                        src="images/client-img8.webp" className="img-fluid client-logo" alt="Client 8" /></li>
                                </ul>
                            </div>
                        </section>

                        <section className="pull-trigger position-relative overflow-hidden inner-page">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <article className="trigger-content">
                                            <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                                                <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
                                                <span>Pull the Trigger!</span>
                                            </h3>
                                            <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000"
                                                data-aos-delay="200">
                                                Looking
                                                <span>to
                                                    Elevate Your</span> Digital Presence?
                                            </h2>
                                            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Schedule a
                                                free
                                                consultation with us & discover how our cutting-edge mobile and web
                                                development solutions
                                                can transform your business.</p>
                                            <a href="contact.php" className="themeBtn" data-aos="fade-right"
                                                data-aos-duration="1000" data-aos-delay="600">Let's Connect!</a>
                                        </article>
                                    </div>
                                    <div className="col-md-5">
                                        <figure className="trigger-img" data-aos="fade-left" data-aos-duration="1200"
                                            data-aos-delay="300">
                                            <img src="images/trigger-img.webp" className="img-fluid" alt="img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="webapp" role="tabpanel">
                        <section className="mobile-app">
                            <div className="container-fluid p-0">
                                <div className="row align-items-center">

                                    <div className="col-md-4 aos-init aos-animate" data-aos="fade-right" data-aos-duration="900">
                                        <figure>
                                            <a href="images/mobile-app-img1.webp" data-fancybox="mobile-gallery">
                                                <img src="images/mobile-app-img1.webp" className="img-fluid" alt="img" />
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <figure>
                                                    <a href="images/mobile-app-img2.webp" data-fancybox="mobile-gallery">
                                                        <img src="images/mobile-app-img2.webp" className="img-fluid" alt="img" />
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="col-md-6">
                                                <figure>
                                                    <a href="images/mobile-app-img3.webp" data-fancybox="mobile-gallery">
                                                        <img src="images/mobile-app-img3.webp" className="img-fluid" alt="img" />
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="col-md-6">
                                                <figure>
                                                    <a href="images/mobile-app-img4.webp" data-fancybox="mobile-gallery">
                                                        <img src="images/mobile-app-img4.webp" className="img-fluid" alt="img" />
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="col-md-6">
                                                <figure>
                                                    <a href="images/mobile-app-img5.webp" data-fancybox="mobile-gallery">
                                                        <img src="images/mobile-app-img5.webp" className="img-fluid" alt="img" />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="load-more">
                                            <a href="mobile-app.php" className="themeBtn">View More Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="our-success position-relative overflow-hidden">

                            <div className="container">
                                <div className="our-client about-client" data-aos="fade-up" data-aos-duration="1000"
                                    data-aos-delay="600">
                                    <h3>Our Happy Clients</h3>
                                    <h2 className="mainHead">Trusted <span>By <br />
                                        Visionaries & Market</span> Leaders</h2>
                                    <p>From government entities to high-growth startups, we power the brands that power Dubai.
                                    </p>
                                </div>

                                <ul className="client-images">
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700"><img
                                        src="images/client-img1.webp" className="img-fluid client-logo" alt="Client 1" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="750"><img
                                        src="images/client-img2.webp" className="img-fluid client-logo" alt="Client 2" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"><img
                                        src="images/client-img3.webp" className="img-fluid client-logo" alt="Client 3" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="850"><img
                                        src="images/client-img4.webp" className="img-fluid client-logo" alt="Client 4" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900"><img
                                        src="images/client-img5.webp" className="img-fluid client-logo" alt="Client 5" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="950"><img
                                        src="images/client-img7.webp" className="img-fluid client-logo" alt="Client 7" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"><img
                                        src="images/client-img6.webp" className="img-fluid client-logo" alt="Client 6" /></li>
                                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1050"><img
                                        src="images/client-img8.webp" className="img-fluid client-logo" alt="Client 8" /></li>
                                </ul>
                            </div>
                        </section>

                        <section className="pull-trigger position-relative overflow-hidden inner-page">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <article className="trigger-content">
                                            <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                                                <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
                                                <span>Pull the Trigger!</span>
                                            </h3>
                                            <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000"
                                                data-aos-delay="200">
                                                Looking
                                                <span>to
                                                    Elevate Your</span> Digital Presence?
                                            </h2>
                                            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Schedule a
                                                free
                                                consultation with us & discover how our cutting-edge mobile and web
                                                development solutions
                                                can transform your business.</p>
                                            <a href="contact.php" className="themeBtn" data-aos="fade-right"
                                                data-aos-duration="1000" data-aos-delay="600">Let's Connect!</a>
                                        </article>
                                    </div>
                                    <div className="col-md-5">
                                        <figure className="trigger-img" data-aos="fade-left" data-aos-duration="1200"
                                            data-aos-delay="300">
                                            <img src="images/trigger-img.webp" className="img-fluid" alt="img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
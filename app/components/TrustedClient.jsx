import React from 'react'

function TrustedClient() {
    return (
        <section className="our-success trusted position-relative overflow-hidden">

            <div className="container">
                <div className="our-client about-client" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <h3>Our Happy Clients</h3>
                    <h2 className="mainHead">Trusted <span>By <br />
                        Visionaries & Market</span> Leaders</h2>
                    <p>From government entities to high-growth startups, we power the brands that power Dubai.</p>
                </div>

                <ul className="client-images">
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="700"><img src="/images/client-img1.webp"
                        className="img-fluid client-logo" alt="Client 1" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="750"><img src="/images/client-img2.webp"
                        className="img-fluid client-logo" alt="Client 2" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800"><img src="/images/client-img3.webp"
                        className="img-fluid client-logo" alt="Client 3" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="850"><img src="/images/client-img4.webp"
                        className="img-fluid client-logo" alt="Client 4" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="900"><img src="/images/client-img5.webp"
                        className="img-fluid client-logo" alt="Client 5" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="950"><img src="/images/client-img7.webp"
                        className="img-fluid client-logo" alt="Client 7" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"><img src="/images/client-img6.webp"
                        className="img-fluid client-logo" alt="Client 6" /></li>
                    <li data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1050"><img src="/images/client-img8.webp"
                        className="img-fluid client-logo" alt="Client 8" /></li>
                </ul>
            </div>
        </section>
    )
}

export default TrustedClient
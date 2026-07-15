import React from 'react'

function Cta({ fromHome }) {
    return (
        <section className="pull-trigger position-relative overflow-hidden" style={{ paddingTop: !fromHome && 100 }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-9">
                        <article className="trigger-content">
                            <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                                <figure><img src="/images/subHead.webp" className="img-fluid" alt="icon" /></figure>
                                <span>Pull the Trigger!</span>
                            </h3>
                            <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                Looking
                                <span> to
                                    Elevate Your</span> Digital Presence?
                            </h2>
                            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Schedule a free
                                consultation with us & discover how our cutting-edge mobile and web
                                development solutions
                                can transform your business.</p>
                        </article>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <a href="contact.php" className="themeBtn">Book Strategy Session</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta
import React from 'react'

function Cta({fromHome}) {
    return (
        <section className="pull-trigger position-relative overflow-hidden" style={{paddingTop: !fromHome && 100}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <article className="trigger-content">
                            <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                                <figure><img src="/images/subHead.webp" className="img-fluid" alt="icon" /></figure>
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
                            <img src="/images/trigger-img.webp" className="img-fluid" alt="img" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta
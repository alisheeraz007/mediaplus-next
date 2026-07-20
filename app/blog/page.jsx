import React from 'react'

function page() {
    return (
        <>

            <div className="inner-banner overFlowXHidden">
                <figure>
                    <img src="images/heroBg.webp" className="img-fluid" alt="img" />
                </figure>
                <div className="container">
                    <article>
                        <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">We Are Best Creative Agency</h4>
                        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">Blogs</h1>
                    </article>
                </div>
            </div>

            <section className="blog position-relative overflow-hidden overFlowXHidden">
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
            </section>

        </>
    )
}

export default page
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProvenExp from "./components/ProvenExp";
import Cta from "./components/Cta";
import TrustedClient from "./components/TrustedClient";

export default function Home() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="">
      <section className="main-slider p-0 overFlowXHidden" id="mainSlider">
        <div className="image-layer video-layer">
          <video autoPlay muted loop playsInline controlsList="nodownload"
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
                  <p>
                    We empower businesses with AI Solutions, Enterprise Software, Cloud Infrastructure, Cyber Security, Managed IT Services, Mobile Apps, and Digital Marketing, helping ambitious companies scale faster through intelligent technology.
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

      <section className="our-app position-relative overFlowXHidden">
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
                <img src="images/app-img.webp" className="img-fluid" alt="icon" />
              </figure>
            </div>
          </div>
        </div>
        {/* <img src="images/app-img2.webp" className="img-fluid app-img2" alt="image" data-aos="fade-right"
          data-aos-duration="1500" data-aos-delay="800" /> */}
      </section>

      <section className="branding position-relative overFlowXHidden">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
              data-aos-delay="300">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Development Services</h3>
                    <p>
                      From custom software engineering to high-performance web development, we build
                      platforms
                      and enterprise e-commerce solutions that look great, handle complex logic, and scale
                      smoothly as your company grows.
                    </p>
                  </div>
                </div>
                <a href="/services/development-services" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
              data-aos-delay="400">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>AI Solutions</h3>
                    <p>
                      Automate your daily business tasks and customer conversations with smart AI systems.
                      We
                      build practical AI chatbots, AI voice agents, and customer support tools that cut
                      down
                      your manual workload.
                    </p>
                  </div>
                </div>
                <a href="/services/ai-solutions" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
              data-aos-delay="500">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Mobile App Development</h3>
                    <p>
                      We design and develop fast, secure native iOS and Android apps. From internal tools
                      for
                      your team to client-facing mobile platforms, we ensure a smooth user experience on
                      every
                      screen.
                    </p>
                  </div>
                </div>
                <a href="/services/mobile-app-development" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-left" data-aos-duration="800"
              data-aos-delay="600">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Cloud & Infrastructure Solutions</h3>
                    <p>
                      Move your business operations securely to the cloud with minimal downtime. We handle
                      everything from AWS and Azure management to setting up Microsoft 365 and Google
                      Workspace environments.
                    </p>
                  </div>
                </div>
                <a href="/services/cloud-and-infrastructure-solutions" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-right" data-aos-duration="800"
              data-aos-delay="300">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Cyber Security</h3>
                    <p>
                      We protect your business data and networks from modern threats. Through deep cyber
                      security audits and penetration testing, we find vulnerabilities and secure your
                      infrastructure before problems happen.
                    </p>
                  </div>
                </div>
                <a href="/services/cyber-security" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
              data-aos-delay="400">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>ERP & CRM</h3>
                    <p>
                      We integrate custom ERP systems and CRMs to keep your business operations organized.
                      We set up tailored payroll software, HR systems, accounting platforms, and POS tools
                      to streamline your entire corporate workflow.
                    </p>
                  </div>
                </div>
                <a href="/services/erp-and-crm" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-up" data-aos-duration="800"
              data-aos-delay="500">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Managed IT Services</h3>
                    <p>
                      We keep your daily tech running reliably with proactive managed IT support. We
                      provide secure document management systems and comprehensive annual maintenance
                      contracts (AMC) tailored to protect your corporate infrastructure.
                    </p>
                  </div>
                </div>
                <a href="/services/managed-it-services" className="themeBtn">View More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-4" data-aos="fade-left" data-aos-duration="800"
              data-aos-delay="600">
              <div className="brand-card">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.3214C0 5.96418 5.96417 0 13.3214 0H39.9641C47.3212 0 53.2854 5.96417 53.2854 13.3214V39.9641C53.2854 47.3212 47.3212 53.2854 39.9641 53.2854H13.3214C5.96418 53.2854 0 47.3212 0 39.9641V13.3214Z" fill="#E8006E" fillOpacity="0.094" />
                      <path d="M28.308 21.0823C28.6145 21.0823 28.863 20.8338 28.863 20.5272C28.863 20.2207 28.6145 19.9722 28.308 19.9722C28.0014 19.9722 27.7529 20.2207 27.7529 20.5272C27.7529 20.8338 28.0014 21.0823 28.308 21.0823Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.7484 25.5276C33.055 25.5276 33.3035 25.2791 33.3035 24.9725C33.3035 24.666 33.055 24.4175 32.7484 24.4175C32.4419 24.4175 32.1934 24.666 32.1934 24.9725C32.1934 25.2791 32.4419 25.5276 32.7484 25.5276Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.7572 22.1921C23.0638 22.1921 23.3123 21.9436 23.3123 21.6371C23.3123 21.3305 23.0638 21.082 22.7572 21.082C22.4507 21.082 22.2021 21.3305 22.2021 21.6371C22.2021 21.9436 22.4507 22.1921 22.7572 22.1921Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5375 27.7468C20.844 27.7468 21.0925 27.4983 21.0925 27.1918C21.0925 26.8852 20.844 26.6367 20.5375 26.6367C20.2309 26.6367 19.9824 26.8852 19.9824 27.1918C19.9824 27.4983 20.2309 27.7468 20.5375 27.7468Z" fill="#E8006E" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.6431 15.5405C20.5375 15.5405 15.542 20.536 15.542 26.6417C15.542 32.7473 20.5375 37.7428 26.6431 37.7428C27.6711 37.7428 28.4726 36.9146 28.4726 35.8689C28.4726 35.3838 28.2728 34.942 27.9875 34.62C27.6655 34.2992 27.5012 33.8962 27.5012 33.3712C27.497 33.1268 27.542 32.8842 27.6336 32.6576C27.7252 32.4311 27.8614 32.2252 28.0342 32.0525C28.207 31.8797 28.4128 31.7434 28.6394 31.6519C28.8659 31.5603 29.1086 31.5153 29.3529 31.5195H31.5687C34.9556 31.5195 37.7354 28.7409 37.7354 25.3539C37.7054 19.9943 32.7054 15.5405 26.6431 15.5405Z" stroke="#E8006E" strokeWidth="1.77618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Digital Marketing</h3>
                    <p>
                      Our data-driven digital marketing services elevate your online presence. We manage
                      your strategy across SEO, Google Ads, Meta paid media, content marketing, and
                      premium branding & creative design.
                    </p>
                  </div>
                </div>
                <a href="/services/digital-marketing" className="themeBtn">View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featuredWork">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-5 stickyDiv">
              <h2 className="mainHead">
                Featured <br />
                works
              </h2>
              <div className="badgeDivMain">
                <div className="badgeDiv">Software</div>
                <div className="badgeDiv">Development</div>
              </div>
              <hr />
              <svg
                className="circleBtn"
                width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1435_1638)">
                  <rect className="purpleDot" x="47.2822" y="112.579" width="15.0104" height="15.0104" rx="7.50522" fill="#C803E7" />
                  <path d="M66.0462 38.277V43.5307C66.0462 43.7496 65.9759 43.9294 65.8351 44.0701C65.6944 44.2109 65.5146 44.2812 65.2957 44.2812C65.0768 44.2812 64.897 44.2109 64.7563 44.0701C64.6156 43.9294 64.5452 43.7496 64.5452 43.5307V40.083L59.831 44.8207C59.6746 44.9614 59.4948 45.0317 59.2915 45.0317C59.0883 45.0317 58.9085 44.9614 58.7521 44.8207C58.6114 44.6643 58.541 44.4845 58.541 44.2812C58.541 44.078 58.6114 43.8981 58.7521 43.7418L63.4898 39.0276H60.0421C59.8232 39.0276 59.6433 38.9572 59.5026 38.8165C59.3619 38.6758 59.2915 38.4959 59.2915 38.277C59.2915 38.0581 59.3619 37.8783 59.5026 37.7376C59.6433 37.5969 59.8232 37.5265 60.0421 37.5265H65.2957C65.5146 37.5265 65.6944 37.5969 65.8351 37.7376C65.9759 37.8783 66.0462 38.0581 66.0462 38.277Z" fill="white" />
                  <path d="M24.6457 66.7881V58.0547H30.5305V59.5771H26.4922V61.6581H30.2277V63.1805H26.4922V65.2657H30.5475V66.7881H24.6457ZM33.4825 60.2381L34.685 62.528L35.9174 60.2381H37.7809L35.8833 63.5131L37.8321 66.7881H35.9771L34.685 64.5237L33.4142 66.7881H31.5379L33.4825 63.5131L31.6062 60.2381H33.4825ZM38.8598 69.2443V60.2381H40.6508V61.3383H40.7318C40.8114 61.162 40.9266 60.9829 41.0772 60.801C41.2308 60.6162 41.4298 60.4627 41.6742 60.3404C41.9216 60.2153 42.2286 60.1528 42.5953 60.1528C43.0729 60.1528 43.5136 60.2779 43.9173 60.5281C44.321 60.7754 44.6436 61.1492 44.8853 61.6496C45.1269 62.1471 45.2477 62.7711 45.2477 63.5216C45.2477 64.2522 45.1298 64.8691 44.8938 65.3723C44.6607 65.8727 44.3423 66.2522 43.9386 66.5109C43.5378 66.7668 43.0886 66.8947 42.5911 66.8947C42.2386 66.8947 41.9386 66.8364 41.6913 66.7199C41.4468 66.6033 41.2464 66.4569 41.09 66.2806C40.9337 66.1015 40.8143 65.921 40.7318 65.7391H40.6764V69.2443H38.8598ZM40.638 63.5131C40.638 63.9026 40.692 64.2423 40.8001 64.5323C40.9081 64.8222 41.0644 65.0482 41.2691 65.2103C41.4738 65.3695 41.7226 65.4491 42.0154 65.4491C42.311 65.4491 42.5612 65.3681 42.7659 65.206C42.9706 65.0411 43.1255 64.8137 43.2307 64.5237C43.3388 64.2309 43.3928 63.894 43.3928 63.5131C43.3928 63.135 43.3402 62.8024 43.235 62.5152C43.1298 62.2281 42.9749 62.0035 42.7702 61.8415C42.5655 61.6794 42.3139 61.5984 42.0154 61.5984C41.7197 61.5984 41.4696 61.6766 41.2649 61.8329C41.063 61.9893 40.9081 62.211 40.8001 62.4982C40.692 62.7853 40.638 63.1236 40.638 63.5131ZM48.2754 58.0547V66.7881H46.4588V58.0547H48.2754ZM52.6901 66.916C52.0277 66.916 51.4548 66.7753 50.9715 66.4938C50.4911 66.2096 50.1201 65.8144 49.8586 65.3084C49.597 64.7995 49.4662 64.2096 49.4662 63.5387C49.4662 62.8621 49.597 62.2707 49.8586 61.7647C50.1201 61.2558 50.4911 60.8607 50.9715 60.5792C51.4548 60.2949 52.0277 60.1528 52.6901 60.1528C53.3525 60.1528 53.9239 60.2949 54.4043 60.5792C54.8876 60.8607 55.26 61.2558 55.5216 61.7647C55.7831 62.2707 55.9139 62.8621 55.9139 63.5387C55.9139 64.2096 55.7831 64.7995 55.5216 65.3084C55.26 65.8144 54.8876 66.2096 54.4043 66.4938C53.9239 66.7753 53.3525 66.916 52.6901 66.916ZM52.6986 65.5088C52.9999 65.5088 53.2515 65.4235 53.4534 65.2529C53.6552 65.0795 53.8073 64.8436 53.9097 64.545C54.0149 64.2465 54.0674 63.9068 54.0674 63.5259C54.0674 63.1449 54.0149 62.8052 53.9097 62.5067C53.8073 62.2082 53.6552 61.9722 53.4534 61.7988C53.2515 61.6254 52.9999 61.5387 52.6986 61.5387C52.3944 61.5387 52.1385 61.6254 51.931 61.7988C51.7263 61.9722 51.5714 62.2082 51.4662 62.5067C51.3639 62.8052 51.3127 63.1449 51.3127 63.5259C51.3127 63.9068 51.3639 64.2465 51.4662 64.545C51.5714 64.8436 51.7263 65.0795 51.931 65.2529C52.1385 65.4235 52.3944 65.5088 52.6986 65.5088ZM57.0951 66.7881V60.2381H58.8563V61.3809H58.9245C59.0439 60.9744 59.2443 60.6674 59.5258 60.4598C59.8072 60.2494 60.1313 60.1443 60.4981 60.1443C60.589 60.1443 60.6871 60.1499 60.7923 60.1613C60.8975 60.1727 60.9899 60.1883 61.0695 60.2082V61.8201C60.9842 61.7946 60.8662 61.7718 60.7155 61.7519C60.5649 61.732 60.427 61.7221 60.3019 61.7221C60.0347 61.7221 59.7959 61.7803 59.5855 61.8969C59.378 62.0106 59.2131 62.1698 59.0908 62.3745C58.9714 62.5792 58.9117 62.8152 58.9117 63.0824V66.7881H57.0951ZM64.6888 66.916C64.0151 66.916 63.4351 66.7796 62.949 66.5066C62.4657 66.2309 62.0933 65.8414 61.8317 65.3382C61.5702 64.8322 61.4394 64.2338 61.4394 63.5429C61.4394 62.8692 61.5702 62.2778 61.8317 61.769C62.0933 61.2601 62.4614 60.8635 62.9362 60.5792C63.4138 60.2949 63.9738 60.1528 64.6163 60.1528C65.0485 60.1528 65.4507 60.2224 65.8231 60.3617C66.1984 60.4982 66.5253 60.7043 66.8039 60.9801C67.0854 61.2558 67.3043 61.6027 67.4606 62.0206C67.617 62.4356 67.6952 62.9218 67.6952 63.479V63.9779H62.1643V62.8521H65.9852C65.9852 62.5906 65.9283 62.3589 65.8146 62.157C65.7009 61.9552 65.5431 61.7974 65.3413 61.6837C65.1423 61.5671 64.9106 61.5088 64.6462 61.5088C64.3704 61.5088 64.1259 61.5728 63.9127 61.7007C63.7023 61.8258 63.5375 61.995 63.4181 62.2082C63.2987 62.4186 63.2375 62.6531 63.2347 62.9118V63.9822C63.2347 64.3062 63.2944 64.5863 63.4138 64.8222C63.536 65.0582 63.708 65.2401 63.9298 65.3681C64.1515 65.496 64.4145 65.56 64.7187 65.56C64.9205 65.56 65.1053 65.5315 65.273 65.4747C65.4408 65.4178 65.5843 65.3325 65.7037 65.2188C65.8231 65.1051 65.9141 64.9658 65.9767 64.8009L67.6568 64.9118C67.5715 65.3155 67.3967 65.668 67.1323 65.9693C66.8707 66.2678 66.5324 66.501 66.1174 66.6687C65.7052 66.8336 65.229 66.916 64.6888 66.916ZM71.6941 58.0547H73.9712L76.3763 63.9225H76.4786L78.8837 58.0547H81.1609V66.7881H79.3698V61.1037H79.2974L77.0373 66.7454H75.8177L73.5576 61.0824H73.4851V66.7881H71.6941V58.0547ZM85.6075 66.916C84.9451 66.916 84.3723 66.7753 83.889 66.4938C83.4085 66.2096 83.0375 65.8144 82.776 65.3084C82.5144 64.7995 82.3837 64.2096 82.3837 63.5387C82.3837 62.8621 82.5144 62.2707 82.776 61.7647C83.0375 61.2558 83.4085 60.8607 83.889 60.5792C84.3723 60.2949 84.9451 60.1528 85.6075 60.1528C86.2699 60.1528 86.8413 60.2949 87.3217 60.5792C87.805 60.8607 88.1775 61.2558 88.439 61.7647C88.7005 62.2707 88.8313 62.8621 88.8313 63.5387C88.8313 64.2096 88.7005 64.7995 88.439 65.3084C88.1775 65.8144 87.805 66.2096 87.3217 66.4938C86.8413 66.7753 86.2699 66.916 85.6075 66.916ZM85.616 65.5088C85.9174 65.5088 86.169 65.4235 86.3708 65.2529C86.5726 65.0795 86.7247 64.8436 86.8271 64.545C86.9323 64.2465 86.9849 63.9068 86.9849 63.5259C86.9849 63.1449 86.9323 62.8052 86.8271 62.5067C86.7247 62.2082 86.5726 61.9722 86.3708 61.7988C86.169 61.6254 85.9174 61.5387 85.616 61.5387C85.3118 61.5387 85.056 61.6254 84.8484 61.7988C84.6437 61.9722 84.4888 62.2082 84.3836 62.5067C84.2813 62.8052 84.2301 63.1449 84.2301 63.5259C84.2301 63.9068 84.2813 64.2465 84.3836 64.545C84.4888 64.8436 84.6437 65.0795 84.8484 65.2529C85.056 65.4235 85.3118 65.5088 85.616 65.5088ZM90.0125 66.7881V60.2381H91.7737V61.3809H91.8419C91.9613 60.9744 92.1618 60.6674 92.4432 60.4598C92.7246 60.2494 93.0487 60.1443 93.4155 60.1443C93.5064 60.1443 93.6045 60.1499 93.7097 60.1613C93.8149 60.1727 93.9073 60.1883 93.9869 60.2082V61.8201C93.9016 61.7946 93.7836 61.7718 93.6329 61.7519C93.4823 61.732 93.3444 61.7221 93.2193 61.7221C92.9521 61.7221 92.7133 61.7803 92.5029 61.8969C92.2954 62.0106 92.1305 62.1698 92.0082 62.3745C91.8888 62.5792 91.8291 62.8152 91.8291 63.0824V66.7881H90.0125ZM97.6062 66.916C96.9325 66.916 96.3525 66.7796 95.8664 66.5066C95.3831 66.2309 95.0107 65.8414 94.7491 65.3382C94.4876 64.8322 94.3568 64.2338 94.3568 63.5429C94.3568 62.8692 94.4876 62.2778 94.7491 61.769C95.0107 61.2601 95.3788 60.8635 95.8536 60.5792C96.3312 60.2949 96.8913 60.1528 97.5337 60.1528C97.9659 60.1528 98.3681 60.2224 98.7405 60.3617C99.1158 60.4982 99.4427 60.7043 99.7213 60.9801C100.003 61.2558 100.222 61.6027 100.378 62.0206C100.534 62.4356 100.613 62.9218 100.613 63.479V63.9779H95.0818V62.8521H98.9026C98.9026 62.5906 98.8457 62.3589 98.732 62.157C98.6183 61.9552 98.4605 61.7974 98.2587 61.6837C98.0597 61.5671 97.828 61.5088 97.5636 61.5088C97.2878 61.5088 97.0433 61.5728 96.8301 61.7007C96.6198 61.8258 96.4549 61.995 96.3355 62.2082C96.2161 62.4186 96.1549 62.6531 96.1521 62.9118V63.9822C96.1521 64.3062 96.2118 64.5863 96.3312 64.8222C96.4534 65.0582 96.6254 65.2401 96.8472 65.3681C97.0689 65.496 97.3319 65.56 97.6361 65.56C97.8379 65.56 98.0227 65.5315 98.1904 65.4747C98.3582 65.4178 98.5017 65.3325 98.6211 65.2188C98.7405 65.1051 98.8315 64.9658 98.8941 64.8009L100.574 64.9118C100.489 65.3155 100.314 65.668 100.05 65.9693C99.7882 66.2678 99.4498 66.501 99.0348 66.6687C98.6226 66.8336 98.1464 66.916 97.6062 66.916ZM38.9525 87.7881V79.0547H42.3981C43.0605 79.0547 43.6248 79.1812 44.0911 79.4343C44.5573 79.6844 44.9126 80.0327 45.1571 80.479C45.4045 80.9225 45.5281 81.4342 45.5281 82.0142C45.5281 82.5941 45.403 83.1059 45.1529 83.5493C44.9027 83.9928 44.5402 84.3382 44.0655 84.5856C43.5935 84.8329 43.0221 84.9566 42.3512 84.9566H40.1551V83.4768H42.0527C42.4081 83.4768 42.7009 83.4157 42.9312 83.2935C43.1643 83.1684 43.3377 82.9964 43.4514 82.7775C43.568 82.5558 43.6262 82.3013 43.6262 82.0142C43.6262 81.7242 43.568 81.4712 43.4514 81.2551C43.3377 81.0362 43.1643 80.8671 42.9312 80.7477C42.698 80.6254 42.4024 80.5643 42.0442 80.5643H40.799V87.7881H38.9525ZM46.6934 87.7881V81.2381H48.4545V82.3809H48.5228C48.6422 81.9744 48.8426 81.6674 49.124 81.4598C49.4055 81.2494 49.7296 81.1443 50.0963 81.1443C50.1873 81.1443 50.2853 81.1499 50.3905 81.1613C50.4957 81.1727 50.5881 81.1883 50.6677 81.2082V82.8201C50.5824 82.7946 50.4644 82.7718 50.3138 82.7519C50.1631 82.732 50.0252 82.7221 49.9001 82.7221C49.6329 82.7221 49.3941 82.7803 49.1837 82.8969C48.9762 83.0106 48.8113 83.1698 48.6891 83.3745C48.5697 83.5792 48.51 83.8152 48.51 84.0824V87.7881H46.6934ZM54.2615 87.916C53.5991 87.916 53.0262 87.7753 52.5429 87.4938C52.0625 87.2096 51.6915 86.8144 51.43 86.3084C51.1684 85.7995 51.0376 85.2096 51.0376 84.5387C51.0376 83.8621 51.1684 83.2707 51.43 82.7647C51.6915 82.2558 52.0625 81.8607 52.5429 81.5792C53.0262 81.2949 53.5991 81.1528 54.2615 81.1528C54.9239 81.1528 55.4953 81.2949 55.9757 81.5792C56.459 81.8607 56.8314 82.2558 57.093 82.7647C57.3545 83.2707 57.4853 83.8621 57.4853 84.5387C57.4853 85.2096 57.3545 85.7995 57.093 86.3084C56.8314 86.8144 56.459 87.2096 55.9757 87.4938C55.4953 87.7753 54.9239 87.916 54.2615 87.916ZM54.27 86.5088C54.5713 86.5088 54.8229 86.4235 55.0248 86.2529C55.2266 86.0795 55.3787 85.8436 55.4811 85.545C55.5863 85.2465 55.6389 84.9068 55.6389 84.5259C55.6389 84.1449 55.5863 83.8052 55.4811 83.5067C55.3787 83.2082 55.2266 82.9722 55.0248 82.7988C54.8229 82.6254 54.5713 82.5387 54.27 82.5387C53.9658 82.5387 53.71 82.6254 53.5024 82.7988C53.2977 82.9722 53.1428 83.2082 53.0376 83.5067C52.9353 83.8052 52.8841 84.1449 52.8841 84.5259C52.8841 84.9068 52.9353 85.2465 53.0376 85.545C53.1428 85.8436 53.2977 86.0795 53.5024 86.2529C53.71 86.4235 53.9658 86.5088 54.27 86.5088ZM58.6665 81.2381H60.4831V88.1122C60.4831 88.6182 60.3836 89.0276 60.1846 89.3403C59.9856 89.653 59.6999 89.8819 59.3275 90.0269C58.9579 90.1718 58.5159 90.2443 58.0013 90.2443C57.9387 90.2443 57.879 90.2429 57.8222 90.2401C57.7625 90.2401 57.6999 90.2387 57.6346 90.2358V88.8158C57.6829 88.8186 57.7255 88.8201 57.7625 88.8201C57.7966 88.8229 57.8336 88.8243 57.8734 88.8243C58.1662 88.8243 58.3709 88.7618 58.4874 88.6367C58.6068 88.5144 58.6665 88.3297 58.6665 88.0823V81.2381ZM59.5706 80.3937C59.3033 80.3937 59.0731 80.3042 58.8797 80.1251C58.6864 79.9431 58.5898 79.7257 58.5898 79.4726C58.5898 79.2225 58.6864 79.0078 58.8797 78.8287C59.0731 78.6468 59.3033 78.5558 59.5706 78.5558C59.8435 78.5558 60.0752 78.6468 60.2656 78.8287C60.459 79.0078 60.5556 79.2225 60.5556 79.4726C60.5556 79.7257 60.459 79.9431 60.2656 80.1251C60.0752 80.3042 59.8435 80.3937 59.5706 80.3937ZM64.9234 87.916C64.2496 87.916 63.6696 87.7796 63.1835 87.5066C62.7002 87.2309 62.3278 86.8414 62.0663 86.3382C61.8047 85.8322 61.6739 85.2338 61.6739 84.5429C61.6739 83.8692 61.8047 83.2778 62.0663 82.769C62.3278 82.2601 62.696 81.8635 63.1707 81.5792C63.6483 81.2949 64.2084 81.1528 64.8509 81.1528C65.283 81.1528 65.6853 81.2224 66.0577 81.3617C66.4329 81.4982 66.7599 81.7043 67.0385 81.9801C67.3199 82.2558 67.5388 82.6027 67.6952 83.0206C67.8515 83.4356 67.9297 83.9218 67.9297 84.479V84.9779H62.3989V83.8521H66.2197C66.2197 83.5906 66.1629 83.3589 66.0491 83.157C65.9354 82.9552 65.7776 82.7974 65.5758 82.6837C65.3768 82.5671 65.1451 82.5088 64.8807 82.5088C64.605 82.5088 64.3605 82.5728 64.1473 82.7007C63.9369 82.8258 63.772 82.995 63.6526 83.2082C63.5332 83.4186 63.4721 83.6531 63.4692 83.9118V84.9822C63.4692 85.3062 63.5289 85.5863 63.6483 85.8222C63.7706 86.0582 63.9426 86.2401 64.1643 86.3681C64.3861 86.496 64.649 86.56 64.9532 86.56C65.1551 86.56 65.3398 86.5315 65.5076 86.4747C65.6753 86.4178 65.8189 86.3325 65.9383 86.2188C66.0577 86.1051 66.1486 85.9658 66.2112 85.8009L67.8913 85.9118C67.806 86.3155 67.6312 86.668 67.3668 86.9693C67.1053 87.2678 66.767 87.501 66.3519 87.6687C65.9397 87.8336 65.4635 87.916 64.9234 87.916ZM72.0746 87.916C71.4037 87.916 70.8266 87.7739 70.3433 87.4896C69.8629 87.2025 69.4933 86.8044 69.2346 86.2956C68.9787 85.7867 68.8508 85.2011 68.8508 84.5387C68.8508 83.8677 68.9802 83.2793 69.2389 82.7732C69.5004 82.2644 69.8714 81.8678 70.3519 81.5835C70.8323 81.2964 71.4037 81.1528 72.0661 81.1528C72.6375 81.1528 73.1379 81.2566 73.5672 81.4641C73.9964 81.6716 74.3362 81.963 74.5863 82.3383C74.8365 82.7135 74.9744 83.1542 75 83.6602H73.2857C73.2374 83.3333 73.1094 83.0703 72.9019 82.8713C72.6972 82.6695 72.4286 82.5685 72.096 82.5685C71.8145 82.5685 71.5686 82.6453 71.3582 82.7988C71.1507 82.9495 70.9887 83.1698 70.8721 83.4598C70.7555 83.7498 70.6973 84.1009 70.6973 84.5131C70.6973 84.931 70.7541 85.2863 70.8678 85.5792C70.9844 85.872 71.1479 86.0951 71.3582 86.2487C71.5686 86.4022 71.8145 86.4789 72.096 86.4789C72.3035 86.4789 72.4897 86.4363 72.6546 86.351C72.8223 86.2657 72.9602 86.1421 73.0682 85.98C73.1791 85.8151 73.2516 85.6175 73.2857 85.3873H75C74.9715 85.8876 74.8351 86.3283 74.5906 86.7092C74.3489 87.0873 74.0149 87.383 73.5885 87.5962C73.162 87.8094 72.6574 87.916 72.0746 87.916ZM79.647 81.2381V82.6027H75.7025V81.2381H79.647ZM76.598 79.6688H78.4146V85.7753C78.4146 85.9431 78.4402 86.0738 78.4914 86.1676C78.5426 86.2586 78.6136 86.3226 78.7046 86.3595C78.7984 86.3965 78.9065 86.415 79.0287 86.415C79.114 86.415 79.1993 86.4079 79.2846 86.3937C79.3698 86.3766 79.4352 86.3638 79.4807 86.3553L79.7664 87.7071C79.6755 87.7355 79.5475 87.7682 79.3826 87.8051C79.2177 87.8449 79.0173 87.8691 78.7814 87.8776C78.3436 87.8947 77.9598 87.8364 77.63 87.7028C77.3031 87.5692 77.0486 87.3617 76.8667 87.0802C76.6847 86.7988 76.5952 86.4434 76.598 86.0141V79.6688ZM86.1981 83.1059L84.535 83.2082C84.5066 83.0661 84.4455 82.9381 84.3516 82.8244C84.2578 82.7078 84.1342 82.6155 83.9806 82.5472C83.83 82.4762 83.6494 82.4406 83.4391 82.4406C83.1576 82.4406 82.9202 82.5003 82.7269 82.6197C82.5336 82.7363 82.437 82.8926 82.437 83.0888C82.437 83.2452 82.4995 83.3773 82.6246 83.4854C82.7497 83.5934 82.9643 83.6801 83.2685 83.7455L84.454 83.9843C85.0908 84.1151 85.5656 84.3255 85.8783 84.6154C86.191 84.9054 86.3473 85.2863 86.3473 85.7583C86.3473 86.1875 86.2208 86.5642 85.9678 86.8883C85.7176 87.2124 85.3737 87.4654 84.9359 87.6474C84.5009 87.8265 83.9991 87.916 83.4305 87.916C82.5635 87.916 81.8726 87.7355 81.3581 87.3744C80.8464 87.0106 80.5464 86.5159 80.4583 85.8905L82.2451 85.7966C82.2991 86.061 82.4298 86.2629 82.6374 86.4022C82.8449 86.5386 83.1107 86.6069 83.4348 86.6069C83.7532 86.6069 84.0091 86.5457 84.2024 86.4235C84.3985 86.2984 84.498 86.1378 84.5009 85.9416C84.498 85.7767 84.4284 85.6417 84.2919 85.5365C84.1555 85.4285 83.9451 85.346 83.6608 85.2892L82.5265 85.0632C81.8869 84.9352 81.4107 84.7135 81.098 84.3979C80.7881 84.0824 80.6331 83.6801 80.6331 83.1911C80.6331 82.7704 80.7469 82.4079 80.9743 82.1037C81.2046 81.7995 81.5272 81.565 81.9423 81.4001C82.3602 81.2352 82.8492 81.1528 83.4092 81.1528C84.2365 81.1528 84.8875 81.3276 85.3623 81.6773C85.8399 82.027 86.1185 82.5032 86.1981 83.1059Z" fill="white" />
                </g>
                <rect x="0.375261" y="0.375261" width="123.836" height="123.836" rx="61.9181" stroke="white" strokeWidth="0.750522" />
                <defs>
                  <clipPath id="clip0_1435_1638">
                    <rect width="124.587" height="124.587" rx="62.2933" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="col-md-7">
              <div className="scrollDiv">
                <div data-aos="fade-up" data-aos-duration="800" className="awardCardMain">
                  <img src="/images/award-img1.png" alt="icon" />
                  <div className="textDiv">
                    <div className="textDiv1">
                      <h2>Digital desk</h2>
                      <div className="badgeDivMain">
                        <div className="badgeDiv">Mobile</div>
                        <div className="badgeDiv">Cloud</div>
                        <div className="badgeDiv">Network</div>
                      </div>
                    </div>
                    <h4>(2025)</h4>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className="awardCardMain">
                  <img src="/images/award-img2.png" alt="icon" />
                  <div className="textDiv">
                    <div className="textDiv1">
                      <h2>Smart connect</h2>
                      <div className="badgeDivMain">
                        <div className="badgeDiv">Mobile</div>
                        <div className="badgeDiv">Cloud</div>
                        <div className="badgeDiv">Network</div>
                      </div>
                    </div>
                    <h4>(2025)</h4>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className="awardCardMain">
                  <img src="/images/award-img3.png" alt="icon" />
                  <div className="textDiv">
                    <div className="textDiv1">
                      <h2>Smart connect</h2>
                      <div className="badgeDivMain">
                        <div className="badgeDiv">Mobile</div>
                        <div className="badgeDiv">Cloud</div>
                        <div className="badgeDiv">Network</div>
                      </div>
                    </div>
                    <h4>(2025)</h4>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className="awardCardMain">
                  <img src="/images/award-img4.png" alt="icon" />
                  <div className="textDiv">
                    <div className="textDiv1">
                      <h2>Smart connect</h2>
                      <div className="badgeDivMain">
                        <div className="badgeDiv">Mobile</div>
                        <div className="badgeDiv">Cloud</div>
                        <div className="badgeDiv">Network</div>
                      </div>
                    </div>
                    <h4>(2025)</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* <section className="award-sec position-relative  ">
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
      </section> */}

      <section section className="our-success position-relative overFlowXHidden" >
        <hgroup>
          <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
            <figure><img src="images/subHead.webp" alt="icon" /></figure>
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
        </div>
      </section>

      <TrustedClient />

      <ProvenExp />

      <section className="engineering position-relative overFlowXHidden">
        <div className="container">
          <hgroup>
            <h3 className="subHead" data-aos="fade-down" data-aos-duration="800">
              <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure> <span>Industry
                Expertise</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Engineering
              <span> Solutions <br />
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
                <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6161 44.3946V48.0919H22.9794L10.9688 60.267L13.5474 62.881L25.558 50.7058V59.1837H29.2054V44.3946H14.6161ZM51.0893 46.2432H54.7366V55.4864H51.0893V46.2432ZM43.7946 37H47.442V55.4864H43.7946V37ZM36.5 40.6973H40.1473V55.4864H36.5V40.6973Z" fill="#C803E7" />
                  <path d="M58.3839 11.1191H14.6161C13.6487 11.1191 12.721 11.5087 12.037 12.2021C11.353 12.8954 10.9688 13.8358 10.9688 14.8164V37.0001H14.6161V31.4542H58.3857L58.3876 59.1838H36.5V62.8811H58.3839C59.3508 62.8797 60.2777 62.4897 60.9614 61.7966C61.6451 61.1035 62.0298 60.164 62.0312 59.1838V14.8164C62.0312 13.8358 61.647 12.8954 60.963 12.2021C60.279 11.5087 59.3513 11.1191 58.3839 11.1191ZM29.2054 27.7569H14.6161V14.8164H29.2054V27.7569ZM32.8527 27.7569V14.8164H58.3839V27.7569H32.8527Z" fill="#C803E7" />
                </svg>
              </figure>
              <h3>SaaS & On-Demand</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <figure>
                <svg width="74" height="55" viewBox="0 0 74 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53.2129 53.2135L65.5722 40.8542C65.936 40.4909 66.1406 39.998 66.141 39.4838V22.5092C66.141 21.2234 65.6303 19.9903 64.7211 19.0811C63.8119 18.1719 62.5788 17.6611 61.293 17.6611C60.0072 17.6611 58.7741 18.1719 57.8649 19.0811C56.9557 19.9903 56.4449 21.2234 56.4449 22.5092V37.0534" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.34766 16.1611C8.03127 16.1611 9.64642 16.83 10.8369 18.0205C12.0273 19.2109 12.6962 20.8254 12.6963 22.5088V37.0537C12.6961 37.8819 12.0245 38.5536 11.1963 38.5537C10.368 38.5537 9.69648 37.882 9.69629 37.0537V22.5088C9.69618 21.621 9.34355 20.7694 8.71582 20.1416C8.08794 19.5137 7.23562 19.1611 6.34766 19.1611C5.45984 19.1612 4.60826 19.5138 3.98047 20.1416C3.35268 20.7694 3.00011 21.621 3 22.5088V39.4824L3.00879 39.5684C3.02005 39.6246 3.0424 39.6779 3.07422 39.7256L3.12891 39.793L15.4893 52.1533C16.0746 52.7391 16.0748 53.6888 15.4893 54.2744C14.9035 54.8602 13.953 54.8602 13.3672 54.2744L1.00781 41.915L1.00879 41.9141C0.364149 41.2698 0.000852343 40.3968 0 39.4854V22.5088C0.000105563 20.8253 0.668978 19.2109 1.85938 18.0205C3.04977 16.8301 4.66419 16.1612 6.34766 16.1611ZM49.9814 32.21C51.6301 31.9428 53.3214 32.2008 54.8154 32.9473H54.8164L56.248 33.6621L56.2578 33.667L56.4434 33.7695C56.8659 34.0222 57.2232 34.3726 57.4834 34.793C57.7808 35.2734 57.9398 35.8266 57.9443 36.3916V36.3965C57.9462 36.8017 57.8679 37.2038 57.7129 37.5781C57.5586 37.9507 57.3307 38.2878 57.0449 38.5723L57.0459 38.5732L54.2734 41.3457C53.6877 41.9315 52.7381 41.9315 52.1523 41.3457C51.5666 40.7599 51.5666 39.8104 52.1523 39.2246L54.9248 36.4512L54.9297 36.4473C54.9344 36.4426 54.9378 36.4368 54.9404 36.4307C54.9428 36.4248 54.9432 36.4184 54.9434 36.4121C54.9427 36.398 54.94 36.3841 54.9326 36.3721C54.9245 36.359 54.9121 36.3487 54.8984 36.3418V36.3408L53.4766 35.6318H53.4756C52.5441 35.1661 51.4899 35.0053 50.4619 35.1719C49.4341 35.3384 48.4838 35.8228 47.7471 36.5586L44.8555 39.4521H44.8545C43.9236 40.3829 43.4007 41.6456 43.4004 42.9619V53.2139C43.4002 54.0421 42.7287 54.7139 41.9004 54.7139C41.0721 54.7138 40.4006 54.0421 40.4004 53.2139V42.9609C40.4009 40.8492 41.2401 38.8242 42.7334 37.3311L45.627 34.4375C46.8089 33.2567 48.3323 32.4773 49.9814 32.21Z" fill="black" />
                  <path d="M12.8252 32.9463C14.3195 32.1994 16.0112 31.9418 17.6602 32.209C19.3094 32.4763 20.8327 33.2557 22.0147 34.4365L24.9082 37.3301C25.3837 37.8055 25.7409 38.4153 26.0059 38.9639C26.2796 39.5307 26.5023 40.133 26.6758 40.667C26.8505 41.2047 26.9835 41.6978 27.0723 42.0557C27.1169 42.2353 27.1506 42.3829 27.1739 42.4873C27.1855 42.5394 27.1949 42.5808 27.2012 42.6104C27.2043 42.6251 27.2063 42.6379 27.208 42.6465C27.2089 42.6504 27.2095 42.6537 27.21 42.6562C27.2103 42.6576 27.2108 42.6592 27.211 42.6602V42.6621C27.2044 42.6637 27.1094 42.6832 25.7412 42.9609L27.2119 42.6621C27.2219 42.7112 27.2294 42.7608 27.2344 42.8105L27.2412 42.9609V53.2129C27.2411 54.0412 26.5696 54.7129 25.7412 54.7129C24.913 54.7128 24.2414 54.0411 24.2412 53.2129V43.1182C24.2226 43.0352 24.1952 42.9193 24.1602 42.7783C24.0834 42.4688 23.9695 42.0469 23.8223 41.5938C23.6739 41.1369 23.4987 40.6721 23.3037 40.2686C23.1509 39.9521 23.0106 39.7235 22.8946 39.5742L22.7871 39.4512L19.8946 36.5586C19.1578 35.8226 18.2077 35.3375 17.1797 35.1709C16.1518 35.0044 15.0975 35.1651 14.166 35.6309H14.1651L12.7412 36.3418L12.7061 36.3721C12.7015 36.3797 12.7004 36.3878 12.6993 36.3945C12.7019 36.4206 12.7121 36.445 12.7305 36.4639H12.7295L15.4903 39.2236C16.0759 39.8093 16.0757 40.7589 15.4903 41.3447C14.9045 41.9305 13.954 41.9305 13.3682 41.3447L10.5821 38.5586C10.0238 37.986 9.70704 37.2205 9.6973 36.4209C9.69723 36.4149 9.6973 36.4084 9.6973 36.4023C9.69746 35.2366 10.3595 34.1846 11.3858 33.665L11.3936 33.6611L12.8252 32.9463ZM39.209 0C40.0374 0 40.709 0.671573 40.709 1.5V7.54004H46.75C47.5782 7.54022 48.2499 8.21186 48.25 9.04004V19.8164C48.2498 20.6445 47.5782 21.3162 46.75 21.3164H40.709V27.3564C40.7089 28.1848 40.0374 28.8564 39.209 28.8564H28.4336C27.6053 28.8564 26.9337 28.1848 26.9336 27.3564V21.3164H20.8936C20.0653 21.3164 19.3938 20.6446 19.3936 19.8164V9.04004C19.3938 8.21175 20.0653 7.54004 20.8936 7.54004H26.9336V1.5C26.9336 0.671614 27.6053 6.59679e-05 28.4336 0H39.209ZM29.9336 9.04004C29.9336 9.86847 29.2621 10.54 28.4336 10.54H22.3936V18.3164H28.4336C29.2621 18.3164 29.9336 18.988 29.9336 19.8164V25.8564H37.709V19.8164C37.709 18.9881 38.3807 18.3166 39.209 18.3164H45.25V10.54H39.209C38.3807 10.5399 37.709 9.86835 37.709 9.04004V3H29.9336V9.04004Z" fill="black" />
                  <g clipPath="url(#clip0_1435_1788)">
                    <path d="M60.0449 38.1469H59.7402L65.334 43.7406L69.9277 39.1469H71.3418L65.334 45.1547L58.5762 38.4047C58.3939 38.2224 58.2324 38.0271 58.0918 37.8187C57.9512 37.6104 57.8288 37.3864 57.7246 37.1469H59.623L61.834 34.9437L65.334 38.4359L67.834 35.9437L69.0449 37.1469H71.8184C71.985 36.8812 72.1126 36.6 72.2012 36.3031C72.2897 36.0062 72.334 35.7015 72.334 35.389C72.334 34.9359 72.2507 34.514 72.084 34.1234C71.9173 33.7328 71.6855 33.3943 71.3887 33.1078C71.0918 32.8213 70.748 32.5948 70.3574 32.4281C69.9668 32.2614 69.5423 32.1781 69.084 32.1781C68.6465 32.1781 68.2585 32.2458 67.9199 32.3812C67.5814 32.5166 67.2689 32.6989 66.9824 32.9281C66.696 33.1573 66.4225 33.4099 66.1621 33.6859C65.9017 33.962 65.6257 34.251 65.334 34.5531C65.0527 34.2719 64.7793 33.988 64.5137 33.7015C64.248 33.4151 63.972 33.1573 63.6855 32.9281C63.3991 32.6989 63.084 32.5114 62.7402 32.3656C62.3965 32.2198 62.0111 32.1469 61.584 32.1469C61.1361 32.1469 60.7168 32.2302 60.3262 32.3969C59.9355 32.5635 59.5918 32.7953 59.2949 33.0922C58.998 33.389 58.7663 33.7328 58.5996 34.1234C58.4329 34.514 58.347 34.9359 58.3418 35.389C58.3418 35.6338 58.3704 35.8864 58.4277 36.1469H57.4043C57.3783 36.0219 57.3626 35.8969 57.3574 35.7719C57.3522 35.6469 57.347 35.5219 57.3418 35.3969C57.3418 34.8083 57.4512 34.2562 57.6699 33.7406C57.8887 33.225 58.1908 32.7745 58.5762 32.389C58.9616 32.0036 59.4121 31.7015 59.9277 31.4828C60.4434 31.264 60.9954 31.1521 61.584 31.1469C62.0163 31.1469 62.4017 31.1963 62.7402 31.2953C63.0788 31.3943 63.3913 31.5297 63.6777 31.7015C63.9642 31.8734 64.2402 32.0844 64.5059 32.3344C64.7715 32.5844 65.0475 32.8526 65.334 33.139C65.6204 32.8474 65.8939 32.5791 66.1543 32.3344C66.4147 32.0896 66.6908 31.8812 66.9824 31.7094C67.2741 31.5375 67.5892 31.3995 67.9277 31.2953C68.2663 31.1911 68.6517 31.1416 69.084 31.1469C69.6673 31.1469 70.2168 31.2562 70.7324 31.475C71.248 31.6937 71.696 31.9958 72.0762 32.3812C72.4564 32.7666 72.7585 33.2146 72.9824 33.725C73.2064 34.2354 73.3184 34.7849 73.3184 35.3734C73.3184 35.8786 73.2298 36.3682 73.0527 36.8422C72.8757 37.3161 72.623 37.751 72.2949 38.1469H68.623L67.834 37.35L65.334 39.8578L61.834 36.35L60.0449 38.1469Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1435_1788">
                      <rect width="16" height="16" fill="white" transform="translate(57.334 30.1465)" />
                    </clipPath>
                  </defs>
                </svg>
              </figure>
              <h3>HealthTech & Wellness</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              <figure>
                <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0625 0H7.125C5.23533 0 3.42306 0.750667 2.08686 2.08686C0.750667 3.42306 0 5.23533 0 7.125V35.625C0 37.5147 0.750667 39.3269 2.08686 40.6631C3.42306 41.9993 5.23533 42.75 7.125 42.75H8.90625L5.7 47.025C5.55965 47.2121 5.45753 47.4251 5.39948 47.6517C5.34142 47.8783 5.32857 48.1141 5.36165 48.3457C5.39473 48.5772 5.4731 48.8 5.59228 49.0013C5.71146 49.2026 5.86912 49.3784 6.05625 49.5187C6.24338 49.6591 6.45633 49.7612 6.68293 49.8193C6.90953 49.8773 7.14534 49.8902 7.37691 49.8571C7.60847 49.824 7.83126 49.7456 8.03254 49.6265C8.23382 49.5073 8.40965 49.3496 8.55 49.1625L13.3594 42.75H25.8281L30.6375 49.1625C30.921 49.5404 31.3429 49.7903 31.8106 49.8571C32.2783 49.9239 32.7533 49.8022 33.1313 49.5187C33.5092 49.2353 33.759 48.8133 33.8258 48.3457C33.8927 47.878 33.771 47.4029 33.4875 47.025L30.2812 42.75H32.0625C33.9522 42.75 35.7644 41.9993 37.1006 40.6631C38.4368 39.3269 39.1875 37.5147 39.1875 35.625V7.125C39.1875 5.23533 38.4368 3.42306 37.1006 2.08686C35.7644 0.750667 33.9522 0 32.0625 0ZM3.5625 21.375V12.4688H17.8125V21.375H3.5625ZM21.375 12.4688H35.625V21.375H21.375V12.4688ZM7.125 3.5625H32.0625C33.0073 3.5625 33.9135 3.93783 34.5816 4.60593C35.2497 5.27403 35.625 6.18017 35.625 7.125V8.90625H3.5625V7.125C3.5625 6.18017 3.93783 5.27403 4.60593 4.60593C5.27403 3.93783 6.18017 3.5625 7.125 3.5625ZM32.0625 39.1875H7.125C6.18017 39.1875 5.27403 38.8122 4.60593 38.1441C3.93783 37.476 3.5625 36.5698 3.5625 35.625V24.9375H35.625V35.625C35.625 36.5698 35.2497 37.476 34.5816 38.1441C33.9135 38.8122 33.0073 39.1875 32.0625 39.1875ZM12.4688 32.9531C12.4688 33.4816 12.312 33.9981 12.0185 34.4375C11.7249 34.8769 11.3076 35.2194 10.8194 35.4216C10.3311 35.6238 9.79391 35.6768 9.27562 35.5737C8.75732 35.4706 8.28124 35.2161 7.90757 34.8424C7.53391 34.4688 7.27943 33.9927 7.17634 33.4744C7.07324 32.9561 7.12616 32.4189 7.32838 31.9306C7.53061 31.4424 7.87307 31.0251 8.31246 30.7315C8.75185 30.438 9.26843 30.2812 9.79688 30.2812C10.5055 30.2812 11.1851 30.5628 11.6862 31.0638C12.1873 31.5649 12.4688 32.2445 12.4688 32.9531ZM32.0625 32.9531C32.0625 33.4816 31.9058 33.9981 31.6122 34.4375C31.3186 34.8769 30.9013 35.2194 30.4131 35.4216C29.9249 35.6238 29.3877 35.6768 28.8694 35.5737C28.3511 35.4706 27.875 35.2161 27.5013 34.8424C27.1277 34.4688 26.8732 33.9927 26.7701 33.4744C26.667 32.9561 26.7199 32.4189 26.9221 31.9306C27.1244 31.4424 27.4668 31.0251 27.9062 30.7315C28.3456 30.438 28.8622 30.2812 29.3906 30.2812C30.0993 30.2812 30.7789 30.5628 31.2799 31.0638C31.781 31.5649 32.0625 32.2445 32.0625 32.9531Z" fill="black" />
                </svg>
              </figure>
              <h3>Logistics & Mobility</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
              <figure>
                <svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.025 12.4C10.6073 12.4 10.2067 12.5633 9.91131 12.854C9.61594 13.1447 9.45 13.5389 9.45 13.95V23.25C9.45 23.6611 9.61594 24.0553 9.91131 24.346C10.2067 24.6367 10.6073 24.8 11.025 24.8H39.375C39.7927 24.8 40.1933 24.6367 40.4887 24.346C40.7841 24.0553 40.95 23.6611 40.95 23.25V13.95C40.95 13.5389 40.7841 13.1447 40.4887 12.854C40.1933 12.5633 39.7927 12.4 39.375 12.4H11.025ZM12.6 21.7V15.5H37.8V21.7H12.6ZM29.925 27.9C29.5073 27.9 29.1067 28.0633 28.8113 28.354C28.5159 28.6447 28.35 29.0389 28.35 29.45V35.65C28.35 36.0611 28.5159 36.4553 28.8113 36.746C29.1067 37.0367 29.5073 37.2 29.925 37.2H39.375C39.7927 37.2 40.1933 37.0367 40.4887 36.746C40.7841 36.4553 40.95 36.0611 40.95 35.65V29.45C40.95 29.0389 40.7841 28.6447 40.4887 28.354C40.1933 28.0633 39.7927 27.9 39.375 27.9H29.925ZM31.5 34.1V31H37.8V34.1H31.5ZM6.49646e-07 4.65C6.49646e-07 3.41675 0.497812 2.234 1.38392 1.36196C2.27003 0.489915 3.47185 5.16509e-06 4.725 5.16509e-06H45.675C46.7909 -0.00163085 47.8713 0.38543 48.7249 1.09263C49.5786 1.79984 50.1504 2.78155 50.339 3.86388C50.5277 4.94622 50.321 6.05933 49.7556 7.00607C49.1902 7.95282 48.3026 8.67209 47.25 9.0365V41.85C47.25 42.2611 47.0841 42.6553 46.7887 42.946C46.4933 43.2367 46.0927 43.4 45.675 43.4H4.725C4.30728 43.4 3.90668 43.2367 3.61131 42.946C3.31594 42.6553 3.15 42.2611 3.15 41.85V9.0365C2.22838 8.71583 1.43051 8.12175 0.866339 7.33613C0.302173 6.5505 -0.000511812 5.61202 6.49646e-07 4.65ZM4.725 3.10001C4.30728 3.10001 3.90668 3.26331 3.61131 3.55399C3.31594 3.84467 3.15 4.23892 3.15 4.65C3.15 5.06109 3.31594 5.45534 3.61131 5.74602C3.90668 6.0367 4.30728 6.20001 4.725 6.20001H45.675C46.0927 6.20001 46.4933 6.0367 46.7887 5.74602C47.0841 5.45534 47.25 5.06109 47.25 4.65C47.25 4.23892 47.0841 3.84467 46.7887 3.55399C46.4933 3.26331 46.0927 3.10001 45.675 3.10001H4.725ZM6.3 9.3V40.3H9.45V29.45C9.45 29.0389 9.61594 28.6447 9.91131 28.354C10.2067 28.0633 10.6073 27.9 11.025 27.9H23.625C24.0427 27.9 24.4433 28.0633 24.7387 28.354C25.0341 28.6447 25.2 29.0389 25.2 29.45V40.3H44.1V9.3H6.3ZM12.6 40.3H22.05V31H12.6V40.3Z" fill="black" />
                </svg>
              </figure>
              <h3>Retail & E-Commerce</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
              <figure>
                <svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.98325 0L0.84375 2.88225L0.0697498 22.6395L0 24.3968L1.6875 24.8918L16.101 29.25L3.8655 37.7573L0.423 40.149L4.2885 41.6948L10.6875 44.226L11.5312 44.577L12.375 44.226L34.875 34.875L49.2885 39.2332C53.0865 40.3763 57.1455 38.1712 58.2885 34.3823C59.4315 30.5842 57.2243 26.5252 53.4375 25.3822L40.6373 21.4447L32.1323 7.38225L31.6395 6.60825L30.7957 6.327L24.8197 4.7115L21.5145 3.86775L22.0072 7.24275L23.202 16.0312L13.6395 13.077L9.98325 3.65625L9.5625 2.601L8.50725 2.25L3.726 0.843749L0.98325 0ZM5.202 5.976L6.1875 6.25725L9.77175 15.6803L10.125 16.7332L11.178 17.0145L52.101 29.6707C52.4455 29.7679 52.7669 29.9331 53.0465 30.1565C53.326 30.38 53.5579 30.6573 53.7284 30.9719C53.8989 31.2866 54.0047 31.6322 54.0393 31.9884C54.074 32.3446 54.0369 32.7041 53.9302 33.0457C53.8331 33.3902 53.6679 33.7117 53.4445 33.9912C53.221 34.2707 52.9437 34.5026 52.6291 34.6731C52.3144 34.8437 51.9688 34.9494 51.6126 34.9841C51.2564 35.0187 50.8969 34.9817 50.5552 34.875L35.3677 30.303L34.5938 30.0938L33.8895 30.375L11.5312 39.726L9.84375 39.0218L22.5 30.303L26.3678 27.6322L21.8678 26.2957L4.6395 21.0938L5.202 5.976ZM26.8582 9.98325L28.6875 10.476L34.1707 19.4062L27.8438 17.5072L26.8582 9.98325ZM39.4448 38.3198C38.5496 38.3198 37.6912 38.6753 37.0583 39.3083C36.4253 39.9412 36.0698 40.7996 36.0698 41.6948C36.0698 42.5899 36.4253 43.4483 37.0583 44.0812C37.6912 44.7142 38.5496 45.0698 39.4448 45.0698C40.3399 45.0698 41.1983 44.7142 41.8312 44.0812C42.4642 43.4483 42.8198 42.5899 42.8198 41.6948C42.8198 40.7996 42.4642 39.9412 41.8312 39.3083C41.1983 38.6753 40.3399 38.3198 39.4448 38.3198ZM0.0697498 49.5698V54.0698H58.5698V49.5698H0.0697498Z" fill="black" />
                </svg>
              </figure>
              <h3>Hospitality & Travel</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <figure>
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6667 43.9169V54.2503M7.75 43.9169V38.2233C7.75 35.9396 7.75 34.7978 8.20467 33.7877C8.65675 32.7776 9.51183 32.0181 11.2194 30.5017L18.4088 24.1079C19.0308 23.5547 19.8342 23.249 20.6667 23.249C21.4991 23.249 22.3025 23.5547 22.9245 24.1079L30.1165 30.5017C31.8215 32.0181 32.6766 32.7776 33.1313 33.7877C33.5833 34.7952 33.5833 35.9396 33.5833 38.2233V43.9169C33.5833 48.7891 33.5833 51.2226 32.0695 52.7364C30.5557 54.2503 28.1222 54.2503 23.25 54.2503H18.0833C13.2112 54.2503 10.7777 54.2503 9.26383 52.7364C7.75 51.2226 7.75 48.7891 7.75 43.9169Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23.25 54.25H41.3333C47.4222 54.25 50.4654 54.25 52.359 52.359C54.25 50.4654 54.25 47.4222 54.25 41.3333V20.6667C54.25 14.5777 54.25 11.532 52.359 9.641C50.4654 7.75 47.4222 7.75 41.3333 7.75H36.1667C30.0777 7.75 27.032 7.75 25.141 9.641C23.25 11.532 23.25 14.5777 23.25 20.6667V23.25" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M33.9062 18.0833H33.5833M44.2396 18.0833H43.9167M44.2396 28.4167H43.9167M44.2396 38.75H43.9167M34.2292 18.0833C34.2292 18.2546 34.1611 18.4189 34.04 18.54C33.9189 18.6611 33.7546 18.7292 33.5833 18.7292C33.412 18.7292 33.2478 18.6611 33.1267 18.54C33.0055 18.4189 32.9375 18.2546 32.9375 18.0833C32.9375 17.912 33.0055 17.7478 33.1267 17.6267C33.2478 17.5055 33.412 17.4375 33.5833 17.4375C33.7546 17.4375 33.9189 17.5055 34.04 17.6267C34.1611 17.7478 34.2292 17.912 34.2292 18.0833ZM44.5625 18.0833C44.5625 18.2546 44.4945 18.4189 44.3733 18.54C44.2522 18.6611 44.088 18.7292 43.9167 18.7292C43.7454 18.7292 43.5811 18.6611 43.46 18.54C43.3389 18.4189 43.2708 18.2546 43.2708 18.0833C43.2708 17.912 43.3389 17.7478 43.46 17.6267C43.5811 17.5055 43.7454 17.4375 43.9167 17.4375C44.088 17.4375 44.2522 17.5055 44.3733 17.6267C44.4945 17.7478 44.5625 17.912 44.5625 18.0833ZM44.5625 28.4167C44.5625 28.588 44.4945 28.7522 44.3733 28.8733C44.2522 28.9945 44.088 29.0625 43.9167 29.0625C43.7454 29.0625 43.5811 28.9945 43.46 28.8733C43.3389 28.7522 43.2708 28.588 43.2708 28.4167C43.2708 28.2454 43.3389 28.0811 43.46 27.96C43.5811 27.8389 43.7454 27.7708 43.9167 27.7708C44.088 27.7708 44.2522 27.8389 44.3733 27.96C44.4945 28.0811 44.5625 28.2454 44.5625 28.4167ZM44.5625 38.75C44.5625 38.9213 44.4945 39.0856 44.3733 39.2067C44.2522 39.3278 44.088 39.3958 43.9167 39.3958C43.7454 39.3958 43.5811 39.3278 43.46 39.2067C43.3389 39.0856 43.2708 38.9213 43.2708 38.75C43.2708 38.5787 43.3389 38.4144 43.46 38.2933C43.5811 38.1722 43.7454 38.1042 43.9167 38.1042C44.088 38.1042 44.2522 38.1722 44.3733 38.2933C44.4945 38.4144 44.5625 38.5787 44.5625 38.75Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </figure>
              <h3>Real Estate & PropTech</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
              <figure>
                <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.1875 34.375H12.25V37.5H6.125V6.25H3.0625V40.625H12.25V43.75H0V3.125H6.125V0H15.3125C16.7161 0 18.064 0.219727 19.356 0.65918C20.6479 1.09863 21.8522 1.75781 22.9688 2.63672C24.0693 1.75781 25.2656 1.09863 26.5576 0.65918C27.8496 0.219727 29.2054 0 30.625 0H39.8125V3.125H45.9375V23.1201L42.875 21.7041V6.25H39.8125V20.2881L36.75 18.8477V3.125H30.625C29.4925 3.125 28.4079 3.32031 27.3711 3.71094C26.3343 4.10156 25.3773 4.67936 24.5 5.44434V20.2881L21.4375 21.7041V5.44434C20.5762 4.69564 19.6271 4.12598 18.5903 3.73535C17.5535 3.34473 16.4609 3.14128 15.3125 3.125H9.1875V34.375ZM42.875 40.6006L32.1562 46.0938L21.4375 40.6006C21.4375 40.0146 21.4455 39.3962 21.4614 38.7451C21.4774 38.0941 21.5412 37.4349 21.6528 36.7676C21.7645 36.1003 21.924 35.4736 22.1313 34.8877C22.3387 34.3018 22.6258 33.7565 22.9927 33.252L18.375 31.1035V45.3125H15.3125V29.6875L32.1562 21.875L49 29.6875L41.3198 33.252L41.5112 33.5205C41.8462 34.0251 42.1014 34.5703 42.2769 35.1562C42.4523 35.7422 42.5879 36.3363 42.6836 36.9385C42.7793 37.5407 42.8351 38.1592 42.8511 38.7939C42.867 39.4287 42.875 40.0309 42.875 40.6006ZM32.1562 25.293L22.7056 29.6875L32.1562 34.082L41.6069 29.6875L32.1562 25.293ZM32.1562 42.6025L39.8125 38.6719C39.7966 38.2487 39.7646 37.8662 39.7168 37.5244C39.6689 37.1826 39.5812 36.849 39.4536 36.5234C39.326 36.1979 39.1984 35.8805 39.0708 35.5713C38.9432 35.262 38.7598 34.9202 38.5205 34.5459L32.1562 37.5L25.792 34.5459C25.5527 34.9365 25.3613 35.2865 25.2178 35.5957C25.0742 35.9049 24.9466 36.2142 24.835 36.5234C24.7233 36.8327 24.6515 37.1582 24.6196 37.5C24.5877 37.8418 24.5558 38.2406 24.5239 38.6963L32.1562 42.6025Z" fill="black" />
                </svg>
              </figure>
              <h3>EdTech & E-Learning</h3>
            </div>
            <div className="engineering-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">
              <figure>
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.475 9.69792C35.3997 8.72954 35.3064 7.76265 35.1953 6.79773C35.0391 5.45227 34.2234 4.3416 32.9004 4.04863C30.8384 3.59333 26.8398 3.0625 19.3958 3.0625C11.9519 3.0625 7.95433 3.59333 5.89123 4.04863C4.56925 4.3416 3.75258 5.45227 3.5964 6.79773C3.24263 9.89565 3.06438 13.0111 3.0625 16.1292C3.0625 20.4861 4.42021 24.6766 6.88552 28.0729" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5621 13.3462C16.0603 12.0865 17.1363 11.2249 18.4899 11.2841C20.6 11.378 24.5996 11.9007 31.7893 13.827C38.979 15.7533 42.7041 17.3009 44.5783 18.2748C45.7809 18.8995 46.2811 20.1837 46.084 21.5241C45.6238 24.6081 44.9896 27.6635 44.1843 30.6759C42.2753 37.7982 36.7322 43.4557 29.5251 45.0176C27.119 45.5392 24.8395 45.7842 23.3348 45.381C21.8301 44.9777 19.9783 43.6251 18.1551 41.9714C12.6956 37.0142 10.7224 29.3437 12.6303 22.2213C13.4394 19.2097 14.4183 16.2462 15.5621 13.3452" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32.0838 24.0969C32.0838 24.0969 34.0917 22.5626 36.6183 24.0204C39.1438 25.4792 38.8192 27.9853 38.8192 27.9853M26.4008 22.5739C26.4008 22.5739 25.4289 20.2402 22.5114 20.2402C19.5959 20.2402 18.623 22.5739 18.623 22.5739M33.6722 34.4125C31.6019 37.0278 27.6493 39.1389 25.185 38.4784C22.7197 37.818 20.3523 34.0133 19.8664 30.713" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </figure>
              <h3>Media & Entertainment</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="experienced position-relative overFlowXHidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="experienced-head">
                <h3 className="subHead" data-aos="fade-right" data-aos-duration="800">
                  <figure><img src="images/subHead.webp" className="img-fluid" alt="icon" /></figure>
                  <span>Core Competencies</span>
                </h3>
                <h2 className="mainHead" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Where
                  <span> Strategy Meets</span> Engineering.
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

      <section className="innovation overFlowXHidden">
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
              <figure><img src="images/subHead.webp" className="img-fluid" alt="img" /></figure>
              <span>How We Work</span>
            </h3>
            <h2 className="mainHead" data-aos="fade-up" data-aos-duration="1000">From <br />
              <span>Concept</span> to Code to Scale.</h2>
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


      <section className="blog position-relative overFlowXHidden">
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
        {/* <img src="images/app-img2.webp" className="img-fluid blog-img" alt="img" data-aos="fade-right"
          data-aos-duration="1500" data-aos-delay="600" /> */}
      </section>

      <section className="testimonial position-relative overFlowXHidden">
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

      <Cta fromHome={"abc"} />

    </div >
  );
}

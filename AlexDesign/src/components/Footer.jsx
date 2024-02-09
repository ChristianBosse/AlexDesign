import React from "react";
import "./Footer.css";
import logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <>
            <footer class="footer-section">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="widget company-intro-widget">
                                    <a href="index.html" class="site-logo">
                                        <img src={logo} alt="logo" />
                                        AlexDesign
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="widget course-links-widget">
                                    <h5 class="widget-title">Services</h5>
                                    <ul class="courses-link-list">
                                        <li>
                                            <a href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                                Brand Identity Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                                Web Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                                Customer Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                                Digital Marketing Graphics
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="widget latest-news-widget">
                                    <h5 class="widget-title">Contact</h5>
                                    <ul class="small-post-list">
                                        <li>
                                            <div class="small-post-item">
                                                <a
                                                    href="mailto:alexbosse19@gmail.com"
                                                    class="post-date"
                                                >
                                                    alexbosse19@gmail.com
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="small-post-item">
                                                <a href="#" class="post-date">
                                                    +1(506)838-1608
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="widget newsletter-widget">
                                    <h5 class="widget-title">Follow me</h5>
                                    <div class="footer-newsletter">
                                        <ul>
                                            <li>
                                                <i class="fas fa-facebook"></i>
                                            </li>
                                        </ul>
                                        <p>
                                            Sign Up to Our Newsletter to Get
                                            Latest Updates & Services
                                        </p>
                                        <form class="news-letter-form">
                                            <input
                                                type="email"
                                                name="news-email"
                                                id="news-email"
                                                placeholder="Your email address"
                                            />
                                            <input type="submit" value="Send" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 text-sm-left text-center">
                                <span class="copy-right-text">
                                    © 2024 <a href="/">AlexDesign.</a> All
                                    Rights Reserved.
                                </span>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

import React, {Component} from 'react';
import Link from 'next/link';


const Footer = () => {
return(
    <footer>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="footer_left">
                <ul className="list-unstyled d-flex">
                    <li><a href="/"> Privacy Statement</a></li>
                    <li><a href="/"> Terms & Conditions </a></li>
                    <li><a href="/"> Cookie Policy </a></li>
                    <li><a href="/"> Accessibility </a></li>
                    <li><a href="/"> Sitemap</a></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="footer_right">
                <h4><a href="/"><i className="far fa-envelope"></i> Connect with us</a></h4>
                <ul className="list-unstyled d-flex">
                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
                </div>
            </div>
        </div>
        {/* <div className="copyright_wrap">
            <p className="copyright">
                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="93d0fce3eae1faf4fbe7d3c7dfd4">[email&#160;protected]
                </a> India Pvt. Ltd. Division Indigo Consulting
            </p>
        </div> */}
    </div>
    </footer>
)

}

export default Footer;
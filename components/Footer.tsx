import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return(
        <div className = 'footer_section'>
            <div className = 'footer_section_links grid grid-cols-2 md:grid-cols-4 gap-6'>
                <div className = 'Product'>
                    <h5 className="font-bold">Product</h5>
                    <ul>
                        <li><a href = "#"><p>MenstruEase for tracking cycle</p></a></li>
                        <li><a href = "#"><p>MenstruEase for getting pregnant</p></a></li>
                        <li><a href = "#"><p>MenstruEase for pregnancy</p></a></li>
                        <li><a href = "#"><p>MenstruEase for Help Center</p></a></li>
                    </ul>
                </div>
                <div className = 'Company'>
                    <h5 className="font-bold">Company</h5>
                    <ul>
                        <li><a href = "#"><p>About us</p></a></li>
                        <li><a href = "#"><p>Contact</p></a></li>
                        <li><a href = "#"><p>Careers</p></a></li>
                        <li><a href = "#"><p>Affiliates</p></a></li>
                    </ul>
                </div>
                <div className = 'Privacy'>
                    <h5 className="font-bold">Privacy</h5>
                    <ul>
                        <li><a href = "#"><p>Privacy Policy</p></a></li>
                        <li><a href = "#"><p>Terms of Use</p></a></li>
                        <li><a href = "#"><p>Cookie Policy</p></a></li>
                        <li><a href = "#"><p>Guidelines for Using Flo</p></a></li>
                    </ul>
                </div>
                <div className = 'Social_Media'>
                    <h5 className="font-bold">Social Media</h5>
                    <ul> 
                        <li><a href = "#"><FaFacebook /><p>Facebook</p></a></li>
                        <li><a href = "#"><AiFillInstagram /><p>Instagram</p></a></li>
                        <li><a href = "#"><FaXTwitter /><p>Twitter</p></a></li>
                        <li><a href = "#"><FaLinkedin /><p>Linkedin</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import '../css/footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='borders'>
                <div className='firstBorder'></div>
                <div className='secondBorder'></div>
                <div className='thirdBorder'></div>
            </div>
            <div className='content'>
                <div className='servicesTitle'>
                    <h4>Services</h4>
                    <div className='services'>
                        <ExternalLink to='/consulting'>
                            <p>Home</p>
                        </ExternalLink>
                        <ExternalLink to='/construction'>
                            <p>Projects</p>
                        </ExternalLink>
                        <ExternalLink to='/development'>
                            <p>Github</p>
                        </ExternalLink>
                    </div>
                </div>
                <div className='projectTitle'>
                    <h4>Projects</h4>
                    <div className='projects'>
                        <ExternalLink to='/consulting/private-projects'>
                            <p>Private Projects</p>
                        </ExternalLink>
                        <ExternalLink to='/consulting/public-projects'>
                            <p>Public Projects</p>
                        </ExternalLink>
                    </div>
                </div>
                <div className='contactTitle'>
                    <h4>Contact</h4>
                    <div className='info'>
                        <p>Email: <Link to="#" onClick={(e) => {window.location.href = "mailto:nicochikuji@gmail.com"; e.preventDefault();}}>nicochikuji@gmail.com</Link></p>
                        <p>Phone: <a href="tel:+1-786-473-1948">(786)473-1948</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
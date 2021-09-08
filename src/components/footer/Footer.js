import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link className="logo" to={`/`}><i className='bx bx-film'/>
                <div className="logo-title">watch with soul</div>
            </Link>
            <p>© 2021 Erzhan Taalaibekov</p>
            <div>
                <Link hre className="icon-contact">
                    <i className='bx bxl-facebook-circle'/>
                </Link>
                <Link className="icon-contact">
                    <i className='bx bxl-instagram-alt'/>
                </Link>
                <Link className="icon-contact">
                    <i className='bx bxl-linkedin-square'/>
                </Link>
            </div>

        </footer>
    );
};

export default Footer;

import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="container header">
           <p className="logo-title">watch with soul</p>
            <div className="p">
                    <p>Home</p>
                    <p>Films</p>
                    <p>Serials</p>
            </div>
        </header>
    );
};

export default Header;
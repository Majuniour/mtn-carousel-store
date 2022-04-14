import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import Logo from '../../assets/mtn.png';


const Header = ({ }) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img className="logo" src={Logo} />
            </Link>
            
            <div className="options">

                <Link className="option" to="/store">
                    Store
                </Link>

                <Link className="option" to="/produts">
                    Product & Services
                </Link>
                
                <Link className="option" to="/help">
                    Help & Support
                </Link>

            </div>
        </div>
    )
}



export default Header;
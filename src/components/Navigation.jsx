//NPM Packages
import React from 'react'
import {Link} from 'react-router-dom'

//Project files
import logo from '../assets/images/logo.svg'
export default function Navigation() {
    return (
    <nav id="navigation-bar">
        {/* <Link to="/" > */}
            <img src={logo} alt="logo" className="logo"/>
        {/* </Link> */}

    </nav>
);
}


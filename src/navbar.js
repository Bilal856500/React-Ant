import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css'
function Navbar(props) {
    return (
        <nav>
            <ul className={'nav-links'}>
                <Link to ='/'>
                    <li>SignUp</li>
                </Link>
                <Link to ='/login'>
                    <li>Login</li>
                </Link>
            </ul>
            <Link>

            </Link>
        </nav>
    );
}

export default Navbar;
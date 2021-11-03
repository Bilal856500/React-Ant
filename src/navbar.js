import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import './navbar.css'

function Navbar(props) {
    const {logout} = props;
    const history = useHistory();
    return (
        <nav style={{'display': 'flex', 'justifyContent': 'center'}}>
            <ul className={'nav-links'}>
                {!logout ? <>
                    <Link to='/'>
                        <li>SignUp</li>
                    </Link>
                    <Link to='/login'>
                        <li>Login</li>
                    </Link>
                </> : null}
                {logout ? <button style={{border: 'none', color: 'red', background: 'none'}} onClick={() => {
                    history.push('/login');
                    localStorage.removeItem('token');
                    localStorage.removeItem('email');
                    localStorage.removeItem('isAdmin');
                }}> Logout
                </button> : null}
            </ul>
        </nav>
    );
}

export default Navbar;
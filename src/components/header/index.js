import React from 'react';
import './header.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div className="nav">
            <div className="nav-header">
                <div className="nav-title">
                    Admin Dashboard
                </div>
            </div>
            <div className="nav-links">
                {/* <a href="//github.io/jo_geek" target="_blank">Github</a>
                    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
                    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a> */}
                <a href="https://jsfiddle.net/user/jo_Geek/">Signin</a>
            </div>
        </div>
    )

}

export default Header;
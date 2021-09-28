import React from 'react';
import './header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Logo Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,400x400,075,f.u2.jpg" alt="user" />
                </a>
            </div>
        </header>
    )
}
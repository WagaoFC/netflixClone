import React from 'react';
import './header.css';
import { IoMdNotifications } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Logo Netflix" />
                </a>
            </div>
            <div className="links">
                <a href="/">Início</a>
                <a href="/">Séries</a>
                <a href="/">Filmes</a>
                <a href="/">Bombando</a>
                <a href="/">Minha lista</a>
            </div>
            <div className="icons">
                <div className="search">
                    <FaSearch size={20} />
                </div>
                <div className="notifications">
                    <IoMdNotifications size={20} />
                </div>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-2124-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUAcaDX2-P091dLEFUNR0mKUnvOFbw0fDUDr0wK-ixdAFlAkZ9K5bwHPEiZ12klt1dkSJpf4R-SIZJDAhLSKDns.png?r=f08" alt="user" />
                </a>
            </div>
        </header>
    )
}
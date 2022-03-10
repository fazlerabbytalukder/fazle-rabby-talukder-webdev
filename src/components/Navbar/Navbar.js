import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('#')
    return (
        <div>
            <nav>
                <a href="#home" onClick={()=>setActive('#home')} className={active === '#home' ? 'active':''}><i class="fa-solid fa-house-chimney-user"></i></a>
                <a href="#about" onClick={()=>setActive('#about')} className={active === '#about' ? 'active':''}><i class="fa-solid fa-user"></i></a>
                <a href="#experience" onClick={()=>setActive('#experience')} className={active === '#experience' ? 'active':''}><i class="fa-solid fa-book-open-reader"></i></a>
                <a href="#projects" onClick={()=>setActive('#projects')} className={active === '#projects' ? 'active':''}><i class="fa-solid fa-handshake"></i></a>
                <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact' ? 'active':''}><i class="fa-solid fa-address-card"></i></a>
            </nav>
        </div>
    );
};

export default Navbar;
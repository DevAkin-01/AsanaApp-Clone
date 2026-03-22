
import React, { useState } from 'react'
import "./Header.css"
import Btn from "./Btn"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    function toggle() {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className='header_section'>
            <nav className='header_box'>
                
                <div className='left_side'>
                    <img className='img1' src="https://assets.asana.biz/m/5f083bc48e06e1e2/original/asana-logo-1200x1200.png" alt="Asana" />
                    <ul className='nav_links'>
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Learning & Support</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className='right_side'>
                    <div className='desktop_only'>
                        <img className='img2' src="https://assets.asana.biz/transform/3ac30492-304b-4644-a39b-e89fad0df303/SD040-web-nav-GlobeIcon-en-US" alt="" />
                        <span>Contact sales</span>
                    </div>
                    <Btn className="btn" text="Log In" />
                    <Btn className="btn" text="Get Started" />
                    <button onClick={toggle} className='hamburger'>MENU</button>
                </div>

            </nav>

            {isOpen && (
                <div className="mobile_menu">
                    <p>Products</p>
                    <p>Solutions</p>
                    <p>Learning & Support</p>
                    <p>Pricing</p>
                    <p>Contact sales</p>
                </div>
            )}
        </header>
    )
}

export default Header;
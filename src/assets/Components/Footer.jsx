import React from 'react';
import './Footer.css';
import { footerColumns } from './Extra';

function Footer() {
    return (
        <footer className="footer_main">
            <div className="footer_bg">
                <div className="footer_section">
                    <h1>The only platform <br /> that can support <br /> your company at <br /> any scale</h1>
                    <button className="footer_get_started">Get started</button>
                    <p className="footer_disclaimer">1. Accurate as of December 2023, includes free and paid users.</p>
                </div>

                <div className="footer_links_grid">
                    <div className="footer_logo_box">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" alt="Asana" />
                    </div>
                    
                    {footerColumns.map((list) => (
                        <div key={list.id} className="footer_column">
                            <h3>{list.title}</h3>
                            <ul>
                                {list.links.map((link, i) => (
                                    <li key={i}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            
        </footer>
    );
}

export default Footer;
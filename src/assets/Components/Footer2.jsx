import React from 'react'
import "./Footer2.css"
import { socialIcons } from './Extra'
import { legalLinks } from './Extra'

function Footer2() {
  return (
    <div>
      <div className="footer_bottom_bar">
    <div className="footer_copyright_group">
        <span className="copy_text">© 2026 Asana, Inc.</span>
        <div className="lang_selector">
            <img src="https://cdn-icons-png.flaticon.com/512/814/814513.png" alt="globe" />
            <span>English</span>
        </div>
    </div>

    <div className="footer_social_links">
        {socialIcons.map((icon) => (
            <a key={icon.id} className="social_icon">
                <img src={icon.img} alt="social" />
            </a>
        ))}
    </div>

    <div className="footer_legal_apps">
        {legalLinks.map((link, i) => (
            <span key={i} className="legal_link">{link}</span>
        ))}
        <div className="app_badges">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer2


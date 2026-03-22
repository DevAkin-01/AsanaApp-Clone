import React from 'react'
import "./Gov.css"
import Btn from "./Btn"

function Gov() {
  return (
    <div>
      <section className="gov_section">
    <div className="gov_card">
        <div className="gov_logo_side">
            <img src="https://assets.asana.biz/transform/9d71c62a-0d94-48e1-a980-68a38f671b00/web-uses-governmentindustry-asanagovdesktop-en-US?io=transform:fill,width:1120&format=webp" alt="Gov" />
            <h3>Asana Gov</h3>
        </div>

        <div className="gov_text_side">
            <h2>Stay secure and compliant with Asana Gov</h2>
            <p>
                Asana Gov empowers government agencies to coordinate critical work—
                from strategic planning to rapid response—on a platform that’s easy to 
                implement, scales seamlessly, and meets your compliance needs.
            </p>
        </div>

        <div className="gov_btn_side">
            <Btn className="btn" text="Check out Asana Gov"/>
        </div>
    </div>
</section>
    </div>
  )
}

export default Gov

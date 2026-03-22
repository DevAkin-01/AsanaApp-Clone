import React from 'react'
import Btn from "./Btn"
import "./Integration.css"

function Integration() {
  return (
    <div>
      <section className="integrations_section">
    <div className="integrations_content">
        <h1>Connect over 300+ <br /> integrations</h1>
        <p>
            Asana connects with the enterprise tools your <br />
            organization already uses, right out of the box.
        </p>
        <Btn className="btn" text="See all integrations"/>
    </div>
</section>
    </div>
  )
}

export default Integration

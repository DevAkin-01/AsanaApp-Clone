import React from 'react'
import { integrationsData } from './Extra'
import "./IntegrationImg.css"

function IntegrationImg() {
  return (
    <div>
      <div className="integrations_grid">
    {integrationsData.map((item) => (
        <div key={item.id} className="integration_item">
            <img src={item.photo} alt="Integration Logo" />
        </div>
    ))}
</div>
    </div>
  )
}

export default IntegrationImg

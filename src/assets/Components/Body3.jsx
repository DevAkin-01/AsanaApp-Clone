import React from 'react'
import { useCaseData } from './Extra'
import "./Body3.css"

function Body3() {
  return (
<div className="usecase_section">
    <h1 className="usecase_main_title">See how Asana keeps work moving across use cases</h1>
    
    <div className="usecase_grid">
        {useCaseData.map((item) => (
            <div key={item.id} className="usecase_card">
                <img className='b3_img' src={item.image} alt="" />
                <div className="usecase_icon"></div> 
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
                <a>{item.paragraph2} →</a>
            </div>
        ))}
    </div>
</div>
  )
}

export default Body3

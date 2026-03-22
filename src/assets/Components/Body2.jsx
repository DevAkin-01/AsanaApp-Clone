import React from 'react'
import Btn from "./Btn"
import "./Body2.css"

function Body2() {
  return (
    <div className='b2_parent_cont'>
                <h1 className='b2_title'>The platform for human + AI  <br />collaboration
</h1>   
      <section className='b2_container'>

        <article className='b2_img_container'>
            <div className='b2_btn'>
                <Btn text="Marketting" className="btn"/>
                <Btn text="Operation" className="btn"/>
                <Btn text="IT" className="btn"/>
                <Btn text="Leadership" className="btn"/>
            </div>
            <div className='b2_imgs'>
               
                    <img className='b2_img' src="https://assets.asana.biz/transform/a06e7cef-41f6-4474-b06e-ae0e43501edb/homepage_ai_update?io=transform:fill,width:960&format=webp" alt="" />
               
                <section className='max_txt'>
                    <h1>Maximize campaign ROI</h1>
                    <ul>
                        <li>Streamline campaign management</li>
                        <li>Enhance creative production</li>
                        <li>Manage events and editorial calendars</li>
                    </ul>
                    <Btn className="btn" text="Get Started"/>
                </section>
            </div>
        </article>
      </section>
    </div>
  )
}

export default Body2

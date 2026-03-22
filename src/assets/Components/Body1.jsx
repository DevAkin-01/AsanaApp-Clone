import React from 'react'
import Btn from "./Btn"
import "./Body1.css"
import { Images1 } from './Extra'

function Body1() {
  return (
    <div className='b1_main_container'>
      <section className="b1_parent">
        <h1 className="b1_txt">Supercharge your teams <br /> with AI that gets work done
              </h1>
              <p className="b1_txt2">Give your teams AI that understands their work, keeps projects moving, and gets <br />better the more your teams use it.</p>
             <div className='b1_btn'>
               <Btn style={{height:"8vh",width:"100%"}}   className="btn" text="Get Started"/>
              <Btn  style={{ height:"8vh",width:"100%",backgroundColor:"white",color:"black",border:"1px solid black"}} className="btn" text="Contact Sale"/>
             </div>
      </section>
      <img className='vid_img' src="https://embed-ssl.wistia.com/deliveries/5db8175a0d68c14dcbed7b9fcc50dbac.jpg" alt="" />
      <div className='b1_logos_container'>
        <h1 className='b1_logo_txt'>85% of Fortune 100 <br />companies choose Asana¹
</h1>
        <div className='b1_logo'> 
            {Images1.map((item)=>(
                <img className='logos' key={item.id}  src={item.photo} alt="" />
            ))}
        </div>

      </div>
    </div>
  )
}

export default Body1

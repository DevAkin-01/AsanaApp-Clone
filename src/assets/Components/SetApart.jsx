import React from 'react';
import './SetApart.css';
import Btn from './Btn';

function SetApart() {
    return (
        <div className='setapart_parent_cont'>
            <h1 className='setapart_title'>What sets Asana apart</h1>
            
            <div className='setapart_cards_wrapper'>
                <section className='setapart_card_wide overlap_card'>
                    <div className='card_text_content'>
                        <h1>Amplify your impact <br /> with AI</h1>
                        <p>
                            Let Asana AI handle work for you—with the full
                            context of your business—so your teams can
                            achieve their goals faster.
                        </p>
                        <Btn className="btn" text="Meet AI Teammates" />
                    </div>
                    
                    <div className='setapart_overlapping_img'>
             <img src="https://assets.asana.biz/transform/9c192ab3-d6e7-483b-abed-b2e08ba2e6c0/homepage_ai_update?io=transform:fill,width:1440&format=webp" alt="AI Interface" />
                    </div>
                </section>

                <section className='setapart_card_small'>
                    <h1>More clarity and <br /> accountability</h1>
                    <p>
                        Connect strategic goals to the teams that help
                        achieve them. Keep your company on track with AI
                        working alongside your teams.
                    </p>
                    <Btn className="btn" text="Learn about goal" />
                </section>
            </div>
        </div>
    );
}

export default SetApart;
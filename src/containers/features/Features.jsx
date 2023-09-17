import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [{
    title: "Helps you collaborate",
    text: "There are many people who eagerly participate in it with whom you can collaborate and learn from them.",
},
{

    title:"Networking",
    text: "Helps you network with cool and awesome people",
},
{
    title: "Entertainment",
    text: "Enjoy yourself in the concerts and dance shows"
},
{
    title: "SkillSet",
    text:"Can build up your own skillset",
}
]
 
const Features = () =>
{
    return(
        <div className='features section__padding' id="features">
           <div className='features-heading'>
            <h1 className="gradient__text">Come and be a part of this amazing fest.</h1>
        
                <p>Bring out your hidden talents</p>
                </div>
             <div className='features-container'>
                {
                    featuresData.map((item,index)=>(
                        <Feature title={item.title} text={item.text} key={item.title + index}/>
                    ))
                }

                
                
                </div>   
           </div>
        
    )
}
export default Features
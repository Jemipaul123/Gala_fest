import React from 'react';
import './new.css';
import Article from '../../components/article/Article';
import {new01, new02, new03,new04,new05} from './imports';
 
const New =() =>
{
    return(
        <div className='new section__padding' id="new">
          <div className='new-heading'>
            <h4 className='gradient__text'>These are some of the cool events you can participate in.</h4>
          </div>
          <div className='new-container'>
            
            <div className='new-container2'>

            <Article imgurl={new01} title="X-coding" info="Show your coding skills and crack this brain-cracking problems."/>
            <Article imgurl={new02} title="Entre-Preneur" info="Always wanted to be an entreupreneur, test your leadership skills."/>
           
            <Article imgurl={new04} title="Escape Room"info="Have some fun and save yourself from the escape room."/>
          
      
            <Article imgurl={new05} title="4*120" info="Code with your friends in an exciting way"/>
           
            <Article imgurl={new03} title="Treasure hunt" info="Hunt down the treasure with your friends"/>
            
            </div>
          </div>
          
        </div>
    )
}
export default New
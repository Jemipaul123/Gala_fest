import React from 'react';
import './article.css';
 
const Article = ({imgurl,title,info}) =>
{
    return(
        <div className='new-container_article'>
            <div className='new-container_article-image'>
                <img src={imgurl} alt='new image'/>

            </div>
          <div className='new-container_article-content'>
            <div>
             <h3>{title}</h3>
             <p1>{info}</p1>
            </div>
            <p>More info</p>

          </div>
        </div>
    )
}
export default Article
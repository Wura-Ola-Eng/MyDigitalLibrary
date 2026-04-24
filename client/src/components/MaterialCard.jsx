import React from 'react'
import './MaterialCard.css'


/* Material card component*/

const MaterialCard = ({material}) => {
        const {title, level, course, topic, description} = material
  return (
    <>
  <div className='cardDesign'>
    <div className='materialDescription'>
      <h2>{title}</h2>  
    </div>

    <div className='materialDisplay'>
          <p>Level:  {level} </p>
          <p>Course:  {course} </p>
          <p>Topic:  {topic} </p>
          <p>Description:  {description}</p>
    </div>
    

 </div>
    </>
    
  )
}

export default MaterialCard
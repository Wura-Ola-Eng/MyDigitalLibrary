import React from 'react'


/* Material card component*/

const MaterialCard = ({material}) => {
        const {title, level, course, topic} = material
  return (
    <div>
    <h2>{title}</h2>
    <p>Level: {level} </p>
    <p>Course:{course} </p>
    <p>Topic: {topic} </p>

    </div>
  )
}

export default MaterialCard
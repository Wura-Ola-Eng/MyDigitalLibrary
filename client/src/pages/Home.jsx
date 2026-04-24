import React from 'react'
import { useNavigate } from 'react-router-dom'
import BannerImage from '../Images/BannerImage.png'
import './Home.css'
const Home = () => {
const navigate = useNavigate();

  return (
    <div className='homeBackground' style={{backgroundImage: `url(${BannerImage})`} }>
     <h1>Personal Digital Library</h1>
      <p>
          Your personal academic library. Store, organise and find your study materials,
     </p>
     <p>
          notes, past questions and PDFs. All in one place.   
     </p>
      <button onClick={() => navigate('/dashboard')}>Get Started</button>
    </div>  
)
}

export default Home
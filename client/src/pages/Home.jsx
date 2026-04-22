import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();

  return (
    <div>
     <h1>Personal Digital Library</h1>
      <p>
      Welcome to your personal digital library where you can easily access and manage all your study material in one place. Whether you are a student looking to organize your notes and resources or a lifelong learner seeking to create a digital repository of knowledge and information, this platform is designed to help you stay organized and make the most of your learning journey. Start building your  digital library today and unlock the full potential of your personal study materials.
      </p>
      <button onClick={() => navigate('/dashboard')}>Get Started</button>
    </div>  
)
}

export default Home
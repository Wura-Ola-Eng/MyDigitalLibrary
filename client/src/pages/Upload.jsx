import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Upload.css'

const Upload = () => {
 const [title, setTitle] = useState("")
 const [level, setLevel] = useState("")
 const [course, setCourse] = useState("")
 const [topic, setTopic] = useState("")
 const [type, setType] = useState("")
 const [description, setDescription] = useState("")
 const [successMessage, setSuccessMessage] = useState("")

 const navigate = useNavigate();

 const handleSubmit = () => {
  if (!title || !level|| !course || !topic|| !type) {
    setSuccessMessage("Please fill in all fields")
    return
}

    const newMaterials = {
      id: Date.now(),
      title: title,
      level: Number(level),
      course: course,
      topic: topic,
      type: type,
      description: description
    }

    const existingMaterials = localStorage.getItem("materials")
    ? JSON.parse(localStorage.getItem("materials"))
    : []

  const updatedMaterials = [...existingMaterials, newMaterials]
  
  localStorage.setItem("materials", JSON.stringify(updatedMaterials))
    
  setSuccessMessage("Material uploaded Successfully")
  setTitle("")
  setLevel("")
  setCourse("")
  setTopic("")
  setType("")
  setDescription("")

  navigate('/dashboard')


 }

   return (
    <>
<div className='uploadArea'>
  <div className='uploadForm'>
<h2>Upload Material</h2>
      <input type="text" placeholder='Material title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder='Topic' value={topic} onChange={(e) => setTopic(e.target.value)} />

      <input type="text" placeholder="Course name" value={course} onChange={(e) => setCourse(e.target.value)} />
       
        <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Class note">Class note</option>
        <option value="PDF material">PDF material</option>
        <option value="past question">past question</option>
      </select>
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="">Select Level</option>
        <option value="300">300</option> 
        <option value="400">400</option>
      </select>

      <textarea  placeholder = 'Brief description' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={handleSubmit}>UPLOAD</button> 
       {successMessage !== "" && <p>{successMessage}</p>}
  </div>
      

      
    </div>

    </>
    
  )
}

export default Upload
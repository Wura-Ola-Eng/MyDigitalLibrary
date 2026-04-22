import React from 'react'
import { useState, useEffect } from 'react'
import MaterialCard from '../components/MaterialCard'
import materials from '../data/materials'

const Dashboard = () => {

  //keeping track of what the user is currently typing or clicking
  const [allMaterials, setAllMaterials] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {setAllMaterials(materials)}, [])

  //Create a new list based on the user's choices. 
  // Chain .filter() calls so each one narrows down the list further

  const filteredMaterials = allMaterials
   .filter((material) => selectedLevel === "" ? true : material.level === Number(selectedLevel))
   .filter((material) => selectedCourse === "" ? true : material.course === selectedCourse)
  .filter((material) =>  material.title.toLowerCase().includes(searchTerm.toLowerCase()))
  


  return (
    <div>
      <h1>My  Library</h1>
      <input type="text" placeholder='Search materials' value={searchTerm} onChange={(e) => setSearchTerm (e.target.value)}/>

      {/* LEVEL DROPDOWN */}
      <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
        <option value="">All Levels </option>
        <option value="300"> 300 level</option>
        <option value="400">400 Level</option>
      </select>

      {/* COURSE DROPDOWN */}
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">All Courses </option>
        <option value="Communication for Development"> Communication for Development</option>
        <option value="Comparative Media Planning"> Comparative Media Planning </option>
        <option value="Consumer Behaviour"> Consumer Behaviour </option>
        <option value="Data Analysis"> Data Analysis </option>
      </select>

        {/* Loop through the filtered list and create a card for every item found */}

      {filteredMaterials.map((material) => (<MaterialCard key={material.id} material={material}/>))}

      {/* Show a "No results" message only if the filtered list is empty */}

      {filteredMaterials.length === 0 && <p>No materials found</p>}
      
      </div>


)


}

export default Dashboard
import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>Task management</h1>
          <Link to ="/addtask"> Add Task</Link>
      
      </div>
  )
}

export default Homepage
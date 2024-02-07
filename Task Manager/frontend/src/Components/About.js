import React from 'react'
import { useContext , useEffect } from 'react'
import taskContext from '../Context/Task/TaskContext'

const About = () => {

    const a = useContext(taskContext);
    
    
    return (
    <div>
      My name is saad
    </div>
  )
}

export default About

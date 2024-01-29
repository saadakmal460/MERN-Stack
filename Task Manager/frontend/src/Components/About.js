import React from 'react'
import { useContext , useEffect } from 'react'
import taskContext from '../Context/Task/TaskContext'

const About = () => {

    const a = useContext(taskContext);
    
    useEffect(()=>{
        a.update();
    }, []);
    return (
    <div>
      My name is {a.state.name}
    </div>
  )
}

export default About
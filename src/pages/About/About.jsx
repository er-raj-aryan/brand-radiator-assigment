import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './About.css'
function About() {
  const [apiData, setAPIData] = useState([]);

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
    Axios.get(url).then(res => {
      setAPIData(res.data.results);
    })
  },[])

  return (
    <div className='about-root'>
    <h2>List of Pokemon :-</h2>
    <br/>
    <div className='flex'>
    {
      apiData.map((item,index) => (
        <div className="flex-item">
          {item.name}
        </div>
      )
      )
    }
    </div>
    </div>
  )
}

export default About
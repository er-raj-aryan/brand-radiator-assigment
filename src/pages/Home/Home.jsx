import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='root-home'>
    <div className='left-side'>
      <h1 className='left-label'>Brand Radiator Assignment</h1>
      <p className='left-description'>Loren Gray Beech is an American social media personality and singer</p>
    </div>
    <div className='right-side'>
      <img src="/plan.svg" alt="" className="right-side-image"/>
    </div>
    </div>
  )
}

export default Home
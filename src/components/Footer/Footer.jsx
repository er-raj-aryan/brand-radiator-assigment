import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

function Footer() {
  return (
    <footer style={{position:'fixed',left:0,bottom:0,padding:20,background:'rgba(245, 245, 245, 0.93)',width:'100%'}}>
        <div style={{display:'flex',justifyContent:"space-between"}}>
            <h4 variant="p" color="initial"> Brand Assigment</h4>
            <div style={{display:'flex',gap:'10px'}}>
                <a href="https://github.com/er-raj-aryan" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/er-raj-aryan/" target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
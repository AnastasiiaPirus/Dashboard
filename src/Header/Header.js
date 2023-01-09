import React from 'react'
import './header.css'

export default function Header() {
  return (    
      <div  className='header'>
        <div id="title" style = {{ marginLeft: "15px", marginTop:"10px"}}>DESIGN CREATED BY <a href="https://midjourney.com" className="active" style = {{color: "#dcc4c4"}}>MIDJOURNEY</a> <br />FRONT-END MADE BY <a href="https://www.linkedin.com/in/anastasia-pirus/" className="active" style = {{color: "#dcc4c4"}}>A. PIRUS</a></div>
        <div className='circles-container' >
        <div className='circle-text'><span className="circle" style={{backgroundColor: "#ffc98c", color:"#b78177"}}>Dii</span><b>Consentes</b></div>
        <div className='circle-text'><span className="circle" >Juno</span><b>Jupiter</b><br />Minerva<br />Apollo</div>
        <div className='circle-text'><span className="circle" style={{backgroundColor: "#ffc98c", color:"#b78177"}}>Mars</span><b>Ceres</b><br />Mercurius</div>
        <div className='circle-text'><span className="circle" >Diana</span><b>Bacchus</b></div>
        <div className='circle-text'><span className="circle" >Vulcanus</span><b>Pluto</b></div>
        <div className='circle-text'><span className="circle" >Vesta</span><b>Venus</b></div>
        </div>
      <div id="bottom-item"><span className='orange'>Houston,</span> we've had a problem here.</div>
      </div>
    
  )
}

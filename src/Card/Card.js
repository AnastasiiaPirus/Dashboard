import React from 'react'
import "./card.css"


export default function Card({ text = "abc", content , objHeight = 1}) {
  const Tag = content
  let objHeightVh = (12*objHeight + 'vh')
  let objHeightPx= (120*objHeight + 'px')
  const mystyle = {
    height: objHeightVh,
    // minHeight: objHeightVh,
    maxWidth: "100vw",
    margin:"auto",
    width: "95%",    
    
  };
  let height = window.innerHeight
  let width = window.innerWidth
  if (height > 1000 ) {
    mystyle.height = objHeightPx;
    mystyle.minHeight = objHeightPx;
  }


  return (
    <div className='card' id={text} style={mystyle} >
      <Tag />
    </div>
  )
}

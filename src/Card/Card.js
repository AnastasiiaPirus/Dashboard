import React from 'react'
import "./card.css"


export default function Card({ text = "abc", content , objHeight = 1}) {
  const Tag = content
  objHeight = (12*objHeight + 'vh')
  const mystyle = {
    minHeight: objHeight,
    maxWidth: "100vw",
    margin:"auto",
    width: "95%",    
    
  };
  return (
    <div className='card' id={text} style={mystyle} >
      <Tag />
    </div>
  )
}

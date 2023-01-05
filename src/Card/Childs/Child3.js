import React from 'react'



export default function Child3() {
  let year = new Date().getFullYear()

  return (
    <div style={{ height: "100%" }}>
      <p><span>WEATHER FORECAST</span><span className='more'>100 years</span></p>
      <div className='weather' style={{ width: "95%" }}>
        <span className="sun" style={{  marginTop:"15px", marginBottom: "10px"}}>451°F</span>
        <div className='line'>
        <hr />
        <div className='number year'>{year+100}</div>        
        <div>It's going to be warmer.</div>
        </div>

      </div>

    </div>
  )
}

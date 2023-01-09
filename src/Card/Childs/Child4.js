import React from 'react'
import AreaChart from './AreaChart'

export default function Child4() {
  return (
    <div style={{ height: "100%" }}>
      <p><span>EARTH CONDITIONS</span><span className='more'>Rate</span></p>
      <div className='number onChart'>13/37</div>
      <div className='chart chart2'>
        
        <AreaChart />
      </div>
    </div>
  )
}

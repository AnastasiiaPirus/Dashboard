import React from 'react'
import Example from './PieChartCustom'

export default function Child5() {
  return (
    <div>
      <p><span>CLOSEST PLANETS FACTS</span><span className='more'>Quiz</span></p>
      <div className='chart-box' style={{ height: "100%", width: "100%" }}>

        <div className='chart' style={{ height: "20vh", width: "30%", marginTop: "-10px" }} >
          <Example />
        </div>
        <div className='ulist_chart'>
          <ul>
            <li>Roman god of financial gain</li>
            <li>Goddess of love and beauty </li>
            <li>Mars, god of war</li>
            <li>Jupiter</li>
            <li>Time, agriculture, renewal</li>
            <li>Personification of the Sky</li>
            <li>Counterpart of the Poseidon</li>
            
          </ul>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>MERCURY</th>
              <th>VENUS</th>
              <th>MARS</th>
              
              <th>SATURN</th>
              <th>URANUS</th>
              <th>NEPTUNE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{textAlign: "left"}}>Mass</th>
              <td>0.330</td>
              <td>4.87</td>
              <td>0.64</td>
              
              <td>568</td>
              <td>86.8</td>
              <td>102</td>
            </tr>
            <tr>
              <th style={{textAlign: "left"}}>Gravity</th>
              <td>3.7</td>
              <td>8.9</td>
              <td>3.7</td>
              
              <td>9.0</td>
              <td>8.7</td>
              <td>11.0</td>
            </tr>
            <tr>
              <th style={{textAlign: "left"}}>Moons</th>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              
              <td>82</td>
              <td>27</td>
              <td>14</td>
              
            </tr>
          </tbody>
        </table>


      </div>
    </div>
  )
}

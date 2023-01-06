import React from 'react'



export default function Child6() {
  return (
    <div>
      <p><span>TOP 4 MYSTERIOUS PLANETS</span><span className='more'>Conspiracy</span></p>
      <table>
        <tbody>
          <tr>
            <td><img src={process.env.PUBLIC_URL + '/images/planet1.png'} alt="planet" className='planets'></img></td>
            <td>
              <table className='table'>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>VULCAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hides between Mercury and the Sun</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td><img src={process.env.PUBLIC_URL +'/images/planet2.png'} alt="planet" className='planets'></img></td>
            <td>
              <table className='table'>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>PHAETON</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Destruction led to the formation of the asteroid belt</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td><img src={process.env.PUBLIC_URL +'/images/planet3.png'} alt="planet" className='planets'></img></td>
            <td>
              <table className='table'>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>COUNTER-EARTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Revolve around a "Central Fire"</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td><img src={process.env.PUBLIC_URL +'/images/planet4.png'} alt="planet" className='planets'></img></td>
            <td>
              <table className='table'>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>NIBIRU</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Collapsed in 2012</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

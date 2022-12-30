import { render } from '@testing-library/react';
import React from 'react'
import "./card.css"

export default function Card({ text = "abc" }, { content = "lala" }) {

  function ContentInside() {
    function parent() {
      return (
        <div className='card' id={text}></div>
      )
    }
    let par = parent();
    console.log(par);
    let elem = document.createElement(content);
    

  }


  return (

    // <div className="card"  >
    // Card {text}
    <ContentInside />
    // </div>

  )
}

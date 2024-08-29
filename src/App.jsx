import { useState } from 'react'
import './App.css';
import left_arrow from "./assets/arrow-left-circle-fill.svg";
import right_arrow from "./assets/arrow-right-circle-fill.svg";
function App() {
 
  return (
    <>
      <div>
        <div className="calendar">
          <div className="header">
            <button>
              <img src={left_arrow} alt="left-arrow" />
            </button>
            <select></select>
            <select></select>
            <button>
              <img src={right_arrow} alt="right-arrow" />      
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'

const StartPage = ({onStart, started}) => (

  <div id="start-page" className={started === false ? "show" : "hide"}>
    <div className="inner-title">
    <h1 className="title">To Do List</h1>
      <h3 className="description"><em>Accomplish your goals today!</em></h3>
      <div className="btn">
        <button type="button" name="button" onClick={onStart}>Get started!</button>
        <div className="shadow">
        </div>
      </div>
    </div>
  </div>
)

export default StartPage;

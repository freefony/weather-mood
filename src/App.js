import React, { Component } from 'react'
import './App.css'

import WeatherMeter from './WeatherMeter'
class App extends Component {
  render () {
    return (
      <div className='App'>
        Weather Mood
        <WeatherMeter value={90} />
      </div>
    )
  }
}

export default App

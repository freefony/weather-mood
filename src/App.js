import React, { Component } from 'react'
import './App.css'
import WeatherMeter from './WeatherMeterContainer'
import Header from './Header'

const cities = ['Moscow, RU', 'New York, US', 'Amsterdam, NL']
class App extends Component {
  constructor () {
    super()
    this.state = {
      cities,
      activeCity: cities[0]
    }
  }

  switchCity = (newCity) => {
    this.setState(() => ({activeCity: newCity}))
  }

  render () {
    const { cities, activeCity } = this.state
    return (
      <div className='App'>
        <Header 
          cities={cities}
          activeCity={activeCity}
          switchCity={this.switchCity}
        />
        <WeatherMeter city={activeCity} />
      </div>
    )
  }
}

export default App

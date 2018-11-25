import React, { Component } from 'react'
import WeatherMeter from './WeatherMeter'

import { fetchForecast } from './weather-api'

export default class WeatherMeterContainer extends Component {
  constructor ({ city }) {
    super()
    this.state = {
      city,
      value: 0
    }
  }

  async componentWillMount () {
    const { city } = this.props
    const value = await fetchForecast(city)
    this.setState(() => ({value}))
  }

  render () {
    const { value } = this.state
    return <WeatherMeter value={value} />
  }
}

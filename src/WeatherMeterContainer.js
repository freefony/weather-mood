import React, { Component } from 'react'
import WeatherMeter from './WeatherMeter'

import { fetchForecast, scheduleUpdate } from './weather-api'

export default class WeatherMeterContainer extends Component {
  constructor ({ city }) {
    super()
    this.state = {
      city,
      value: 0
    }
  }

  updateValue = (value) => {
    this.setState(() => ({value}))
  }

  getAndScheduleFetch = async (city, delay) => {
    const value = await fetchForecast(city)
    this.updateValue(value)
    const intervalKey = scheduleUpdate(city, this.updateValue, delay)
    this.setState({intervalKey})
  }

  async componentWillMount () {
    const { city, delay } = this.props
    this.getAndScheduleFetch(city, delay)
  }

  async componentDidUpdate (prevProps, prevState) {
    const { city, delay } = this.props
    if (city !== prevState.city) {
      clearInterval(this.state.intervalKey)
      this.getAndScheduleFetch(city, delay)
      this.setState(() =>({city}))
    }
  }

  componentWillUnmount () {
    const { intervalKey } = this.state
    clearInterval(intervalKey)
  }

  render () {
    const { value } = this.state
    return <WeatherMeter value={value} />
  }
}

/* global describe it expect */

import LondonWeather from './london.forecast.json'

import { 
  calculateConditions, MIN_LEVEL, MAX_LEVEL
} from './weather-api'

describe('weather api', () => {
  const level = calculateConditions(LondonWeather)
  it('should return numeric value between 0 - 100', () => {
    expect(level).toBeDefined()
  })
  it('should be a positive interger', () => {
    expect(level).toBeGreaterThanOrEqual(MIN_LEVEL)
  })
  it('should not be grater than MAX_LEVEL', () => {
    expect(level).toBeLessThanOrEqual(MAX_LEVEL)
  })
})
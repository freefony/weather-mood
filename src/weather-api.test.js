/* global describe it expect */

import LondonWeather from './london.forecast.json'

import { 
  calculateConditions, minLevel, maxLevel
} from './weather-api'

describe('weather api', () => {
  const level = calculateConditions(LondonWeather)
  it('should return numeric value between 0 - 100', () => {
    expect(level).toBeDefined()
  })
  it('should be a positive interger', () => {
    expect(level).toBeGreaterThanOrEqual(minLevel)
  })
  it('should not be grater than maxLevel', () => {
    expect(level).toBeLessThanOrEqual(maxLevel)
  })
})
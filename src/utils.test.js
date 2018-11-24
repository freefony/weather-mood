/* global describe it expect */
import {
  getIndicatorLevel,
  VERY_GOOD_WEATHER,
  GOOD_WEATHER,
  POOR_WEATHER,
  EXTREME_WEATHER
} from './utils'

describe('utility functions', () => {
  describe('getIndicatorLevel', () => {
    it('should return very good weather by default', () => {
      const weather = getIndicatorLevel()
      expect(weather).toBeDefined()
      expect(weather).toBe(VERY_GOOD_WEATHER)
    })

    it('should return good weather indicator for value between 50-75', () => {
      const weather = getIndicatorLevel(65)
      const weather50 = getIndicatorLevel(50)
      expect(weather).toBe(GOOD_WEATHER)
      expect(weather50).toBe(GOOD_WEATHER)
    })

    it('should return poor weather for values between 25-50', () => {
      const weather25 = getIndicatorLevel(25)
      const weather49 = getIndicatorLevel(49)
      expect(weather25).toBe(POOR_WEATHER)
      expect(weather49).toBe(POOR_WEATHER)
    })

    it('should return extreme weather for values less than 25', () => {
      const weather = getIndicatorLevel(24)
      expect(weather).toBe(EXTREME_WEATHER)
    })
  })
})

/* global describe it expect */
import {
  getIndicatorLevel
} from './utils'

describe('utility functions', () => {
  describe('getIndicatorLevel', () => {
    it('should return very good weather by default', () => {
      const weather = getIndicatorLevel()
      expect(weather).toBeDefined()
      expect(weather).toEqual('qtr-4') // indicator for good weather
    })

    it('should return good weather indicator for value between 50-75', () => {
      const weather = getIndicatorLevel(65)
      expect(weather).toEqual('qtr-3')
    })
  })
})

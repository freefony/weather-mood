const VERY_GOOD_WEATHER = 'qtr-4'
const GOOD_WEATHER = 'qtr-3'
const POOR_WEATHER = 'qtr-2'
const EXTREME_WEATHER = 'qtr-1'

export const getIndicatorLevel = (value) => {
  switch (true) {
    case value < 25 :
      return EXTREME_WEATHER
    case (value >= 25 && value < 50) :
      return POOR_WEATHER
    case (value >= 50 && value < 75) :
      return GOOD_WEATHER
    default :
      return VERY_GOOD_WEATHER
  }
}

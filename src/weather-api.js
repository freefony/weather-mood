export const MAX_LEVEL = 100
export const MIN_LEVEL = 0
export const REDUCE_LEVEL = 50

const conditions = {
  clear: { weight: 2 },
  clouds: { weight: 1 },
  drizzle: { weight: -1 },
  thunderstorm: { weight: -1 },
  rain: { weight: -2 },
  snow: { weight: -2 },
  atmosphere: { weight: -3 }
}

const weatherForecastReducer = (level, { weather }) => {
  const key = weather[0].main.toLowerCase()
  const newLevel = level + conditions[key].weight
  if (newLevel >= MIN_LEVEL || newLevel <= MAX_LEVEL) return newLevel
  return newLevel > MAX_LEVEL ? MAX_LEVEL : MIN_LEVEL
}

export const calculateConditions = apiResponse => (apiResponse.list.reduce(weatherForecastReducer, REDUCE_LEVEL))

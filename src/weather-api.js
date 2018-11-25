export const maxLevel = 100
export const minLevel = 0
export const reduceLevel = 50

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
  if (newLevel >= minLevel || newLevel <= maxLevel) return newLevel
  return newLevel > maxLevel ? maxLevel : minLevel
}

export const calculateConditions = apiResponse => (apiResponse.list.reduce(weatherForecastReducer, reduceLevel))

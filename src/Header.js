import React from 'react'

export default ({cities, activeCity, switchCity}) => {
  const isActive = (city) => (city === activeCity) ? 'active-tab': ''

  const citiesEl = cities.map((city, i) => <button
    key={i} 
    onClick={() => switchCity(city)}
    className={isActive(city)}
    >{city}</button>)

  return <div className='wm-header-wrapper'>
    <div className='wm-app-name'>Weather Mood</div>
    <div className='wm-app-controls'>
      {citiesEl}
    </div>
  </div>
}

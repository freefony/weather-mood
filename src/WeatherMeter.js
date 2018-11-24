import React from 'react'

import { getIndicatorLevel } from './utils'

export default ({
  isActive = true,
  value
}) => {
  const wrapperClassesArr = ['wm-meter-wrapper']
  if (!isActive) {
    wrapperClassesArr.push('disabled')
  }

  const wrapperClasses = wrapperClassesArr.join(' ')

  const indicatorClasses = ['wm-meter-indicator', getIndicatorLevel(value)].join(' ')

  return (
    <div className={wrapperClasses}>
      <div className={indicatorClasses} style={{height: `${value}%`}}>
        <span className='label'>{value}</span>
      </div>
    </div>
  )
}

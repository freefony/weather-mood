import React from 'react'

export default ({
  isActive = true,
  value
}) => {
  const wrapperClassesArr = ['wm-meter-wrapper']
  if (!isActive) {
    wrapperClassesArr.push('disabled')
  }

  const wrapperClasses = wrapperClassesArr.join(' ')

  const indicatorClasses = ['wm-meter-indicator', 'qtr-4'].join(' ')

  return (
    <div className={wrapperClasses}>
      <div className={indicatorClasses} style={{height: `${value}%`}}>
        <span className='label'>{value}</span>
      </div>
    </div>
  )
}

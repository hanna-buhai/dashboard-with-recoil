import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Progressbar = ({ value, colorMarker }) => {
  return (
    <div className="progressbar">
      <div
        className={`progressbar-display progressbar-display--${colorMarker}`}
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

Progressbar.propTypes = {
  value: PropTypes.number,
  colorMarker: PropTypes.string,
}

export default Progressbar

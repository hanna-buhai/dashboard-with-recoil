import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const RisedCardItem = ({ children }) => {
  return <div className="rised-card-item">{children}</div>
}

RisedCardItem.propTypes = {
  children: PropTypes.node,
}

export default RisedCardItem

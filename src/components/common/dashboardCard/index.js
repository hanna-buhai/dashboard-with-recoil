import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const DashboardCard = ({ children, fullContainer }) => {
  return (
    <div className={`dashboard-card ${fullContainer ? 'dashboard-card__full-card ' : ''}`}>
      <div className="dashboard-card__content">{children}</div>
    </div>
  )
}

DashboardCard.propTypes = {}

export default DashboardCard

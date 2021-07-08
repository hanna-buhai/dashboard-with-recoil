import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const DashboardCard = ({ children }) => {
  return <div className="dashboard-card"><div className="dashboard-card__content">{children}</div></div>
}

DashboardCard.propTypes = {}

export default DashboardCard

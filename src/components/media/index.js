import React from 'react'
import PropTypes from 'prop-types'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import './index.css'

const Media = props => {
  return (
    <DashboardCard>
      <div className="media">
        <SectionHeader
          header="Media for Lessons"
          actionsList={selectorOptions}
          selectedActionId="viewAll"
        />
        <p>Media</p>
        <p>Media</p>
        <p>Media</p>
        <p>Media</p>
      </div>
    </DashboardCard>
  )
}

export default Media

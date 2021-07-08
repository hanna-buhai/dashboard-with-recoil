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
          actionLinkName="View All"
          actionLink={() => console.log('View All in Media')}
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

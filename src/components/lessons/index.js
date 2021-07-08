import React from 'react'
import PropTypes from 'prop-types'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import './index.css'

const Lessons = props => {
  return (
    <DashboardCard>
      <div className="lessons">
        <SectionHeader
          header="Lessons"
          actionLinkName="View All"
          actionLink={() => console.log('View All in Lessons')}
        />
        <p>Lessons</p>
        <p>Lessons</p>
        <p>Lessons</p>
      </div>
    </DashboardCard>
  )
}

export default Lessons

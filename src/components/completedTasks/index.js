import React from 'react'
import PropTypes from 'prop-types'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import './index.css'

const CompletedTasks = props => {
  return (
    <DashboardCard>
      <div className="completed-tasks">
        <SectionHeader
          header="Completed Tasks"
          actionLinkName="View All"
          actionLink={() => console.log('View All in Completed Tasks')}
        />
        <p>List</p>
        <p>List</p>
        <p>List</p>
        <p>List</p>
      </div>
    </DashboardCard>
  )
}

export default CompletedTasks

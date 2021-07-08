import React from 'react'
import PropTypes from 'prop-types'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import './index.css'

const selectorOptions = [
  {
    id: 'viewAll',
    isDefault: true,
    text: 'View All',
    onPress: () => console.log('View All in Completed Tasks'),
  },
]

const CompletedTasks = props => {
  return (
    <DashboardCard>
      <div className="completed-tasks">
        <SectionHeader
          header="Completed Tasks"
          actionsList={selectorOptions}
          selectedActionId="viewAll"
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

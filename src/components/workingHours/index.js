import React from 'react'
import PropTypes from 'prop-types'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import './index.css'

const selectorOptions = [
  {
    id: 'today',
    isDefault: true,
    text: 'Today',
    onPress: () => console.log('Today in Working Hours'),
  },
]

const WorkingHours = props => {
  return (
    <DashboardCard>
      <div className="working-hours">
        <SectionHeader
          header="Working Hours"
          actionsList={selectorOptions}
          selectedActionId="today"
          selectorType="highlight"
        />
        <p>Diagram</p>
      </div>
    </DashboardCard>
  )
}

export default WorkingHours

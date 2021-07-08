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
    onPress: () => console.log('View All in Media'),
  },
]
const Media = props => {
  return (
    <DashboardCard>
      <div className="media">
        <SectionHeader
          header="Completed Tasks"
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

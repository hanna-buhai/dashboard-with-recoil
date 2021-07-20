import React from 'react'
import PropTypes from 'prop-types'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { finishedAssignmentsList } from '../../state/selectors'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import Task from './task'

import './index.css'

const CompletedTasks = () => {
  const finishedAssignments = useRecoilValue(finishedAssignmentsList)

  return (
    <DashboardCard>
      <div className="completed-tasks">
        <SectionHeader
          header="Completed Tasks"
          actionLinkName="View All"
          actionLink={() => console.log('View All in Completed Tasks')}
        />
        {finishedAssignments.map(id => (
          <Task taskId={id} />
        ))}
      </div>
    </DashboardCard>
  )
}

export default CompletedTasks

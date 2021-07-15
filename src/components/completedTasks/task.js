import React from 'react'
import PropTypes from 'prop-types'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { studentsItemStateWithId, assignmentItemStateWithId } from '../../state/atoms'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'

import './index.css'

var options = { day: 'numeric', month: 'long' }
var today = new Date()

const Task = ({ taskId }) => {
  const assignment = useRecoilValue(assignmentItemStateWithId(taskId))
  const student = useRecoilValue(studentsItemStateWithId(assignment.assigneeId))
  if (!assignment) return null
  // console.log(assignment)
  // console.log(student)
  return (
    <div className="task">
      <div className="task__icon" />
      <div className="task__info">
        <div>
          <span>{assignment.name}</span>
        </div>
        <div>
          <span>{student.name}</span>,{' '}
          <span>{assignment.finishedDate.toLocaleDateString('en-US', options)}</span>
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  taskId: PropTypes.string,
}

export default Task

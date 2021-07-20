import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilValue } from 'recoil'
import { studentsItemStateWithId, assignmentItemStateWithId } from '../../state/atoms'

import './index.css'

var options = { day: 'numeric', month: 'long' }

const Task = ({ taskId }) => {
  const assignment = useRecoilValue(assignmentItemStateWithId(taskId))
  const student = useRecoilValue(studentsItemStateWithId(assignment?.assigneeId))
  if (!assignment) return null

  return (
    <div className="task">
      <div className="task__icon" />
      <div className="task__info">
        <div>
          <span>{assignment?.name}</span>
        </div>
        <div>
          <span>{student.name}</span>,{' '}
          <span>{assignment?.finishedDate?.toLocaleDateString('en-US', options)}</span>
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  taskId: PropTypes.string,
}

export default Task

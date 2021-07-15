import React, { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  classesListState,
  classItemStateWithId,
  studyGroupsItemStateWithId,
  subjectsItemStateWithId,
  assignmentsListState,
  assignmentItemStateWithId,
} from '../../state/atoms'

import './index.css'

const ClassUpdater = ({ classId }) => {
  const classWithData = useRecoilValue(classItemStateWithId(classId))
  const attendeesList = useRecoilValue(studyGroupsItemStateWithId(classWithData.attendees))
  const subjectData = useRecoilValue(subjectsItemStateWithId(classWithData.subjectId))

  const [assignmentsList, set1] = useRecoilState(assignmentsListState)
  const [newCount, setNewCount] = useState(assignmentsList.length + 1)
  const set2 = useSetRecoilState(assignmentItemStateWithId(`assignment-${newCount}`))

  const generateAssignment = () => {
    attendeesList.forEach(attendee => {
      set1(oldTodoList => [...oldTodoList, `assignment-${newCount}`])
      set2({
        id: `assignment-${newCount}`,
        name: 'Temp assignment',
        subjectId: classWithData.subjectId,
        assigneeId: attendee,
        dueDate: new Date('2021-12-17T00:00:00'),
        finishedDate: null,
      })
      setNewCount(oldCount => oldCount + 1)
    })
  }

  return (
    <div>
      <div>{subjectData.name}</div>
      <div>Amount of students: {attendeesList.length}</div>
      <button onClick={generateAssignment}>Generate assignment</button>
    </div>
  )
}

const DataUpdater = props => {
  const classes = useRecoilValue(classesListState)

  return (
    <div className="data-updater">
      <h2 className="data-updater__header">Data Updater</h2>
      {classes.map(classId => (
        <ClassUpdater classId={classId} />
      ))}
    </div>
  )
}

export default DataUpdater

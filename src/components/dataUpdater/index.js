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

const AssignmentGeneratorForClass = ({ classId }) => {
  const classWithData = useRecoilValue(classItemStateWithId(classId))
  const attendeesList = useRecoilValue(studyGroupsItemStateWithId(classWithData.attendees))
  const subjectData = useRecoilValue(subjectsItemStateWithId(classWithData.subjectId))

  const [assignmentsList, setAssignmentsList] = useRecoilState(assignmentsListState)
  const [newCount, setNewCount] = useState(assignmentsList.length + 1)
  const newAssignmentId = `assignment-${newCount}`
  const setAssignmentData = useSetRecoilState(assignmentItemStateWithId(newAssignmentId))

  const generateAssignment = () => {
    attendeesList.forEach(attendee => {
      setAssignmentsList(oldTodoList => [...oldTodoList, newAssignmentId])
      setAssignmentData({
        id: newAssignmentId,
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
    <div className="assignment-generator">
      <div className="assignment-generator__data">
        <div className="assignment-generator__subject">{subjectData.name}</div>
        <div className="assignment-generator__group">
          Amount of students: {attendeesList.length}
        </div>
      </div>
      <button onClick={generateAssignment} className="assignment-generator__button">
        Generate
      </button>
    </div>
  )
}

const DataUpdater = () => {
  const classes = useRecoilValue(classesListState)

  return (
    <div className="data-updater">
      <h2 className="data-updater__header">Data Updater</h2>
      <h3 className="generator__header ">Generate Assignment</h3>
      {classes.map(classId => (
        <AssignmentGeneratorForClass classId={classId} />
      ))}
    </div>
  )
}

export default DataUpdater

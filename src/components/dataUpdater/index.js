import React from 'react'
import { useRecoilValue, useRecoilCallback } from 'recoil'
import {
  classesListState,
  classItemStateWithId,
  studyGroupsItemStateWithId,
  subjectsItemStateWithId,
  assignmentsListState,
  assignmentItemStateWithId,
} from '../../state/atoms'
import getRandomAssignmentName from '../../utils/getRandomAssignment'

import './index.css'

const AssignmentGeneratorForClass = ({ classId }) => {
  const classWithData = useRecoilValue(classItemStateWithId(classId))
  const attendeesList = useRecoilValue(studyGroupsItemStateWithId(classWithData.attendees))
  const subjectData = useRecoilValue(subjectsItemStateWithId(classWithData.subjectId))
  const assignmentsList = useRecoilValue(assignmentsListState)

  const generateAssignment = useRecoilCallback(
    ({ set }) =>
      (id, value) => {
        set(assignmentsListState, oldAssignmentsList => [...oldAssignmentsList, id])
        set(assignmentItemStateWithId(id), value)
      },
    [],
  )

  const generateAssignmentsForGroup = () => {
    const assignmentName = getRandomAssignmentName()
    const dueDate = new Date('2021-12-17T00:00:00')

    attendeesList.forEach((attendee, index) => {
      const newAssignmentId = `assignment-${assignmentsList.length + index + 1}`
      return generateAssignment(newAssignmentId, {
        id: newAssignmentId,
        name: assignmentName,
        subjectId: classWithData.subjectId,
        assigneeId: attendee,
        dueDate,
        finishedDate: null,
      })
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
      <button onClick={generateAssignmentsForGroup} className="assignment-generator__button">
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

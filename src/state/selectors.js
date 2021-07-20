import { atom, selector } from 'recoil'
import { students, subjects, studyGroups, classes, lessons, assignments } from '../defaultData'
import memoize from '../utils/memoize'
import getColorMarker from '../utils/getColorMarker'
import { studentsItemStateWithId, assignmentsListState, assignmentItemStateWithId } from './atoms'

export const studentProgressStatsWithId = memoize(id =>
  selector({
    key: `${id}-progress-stats`,
    get: ({ get }) => {
      const assignments = get(assignmentsListState)

      const studentAssignments = []
      assignments.forEach(assignmentId => {
        const assignment = get(assignmentItemStateWithId(assignmentId))

        if (assignment?.assigneeId === id) {
          studentAssignments.push(assignment)
        }
      })

      const finishedAssignments = studentAssignments.filter(assignment => assignment?.finishedDate)

      return studentAssignments.length > 0
        ? Math.round((100 * finishedAssignments.length) / studentAssignments.length)
        : 0
    },
  }),
)

export const finishedAssignmentsList = selector({
  key: 'finishedAssignmentsListState',
  get: ({ get }) => {
    const assignments = get(assignmentsListState)
    const finishedAssignments = []
    assignments.forEach(assignmentId => {
      const assignment = get(assignmentItemStateWithId(assignmentId))

      if (assignment?.finishedDate) {
        finishedAssignments.push(assignmentId)
      }
    })
    return finishedAssignments
  },
})

export const studentsProgressStats = selector({
  key: 'students-total-progress-stats',
  get: ({ get }) => {
    const assignments = get(assignmentsListState)
    const finishedAssignment = get(finishedAssignmentsList)

    return assignments.length > 0
      ? Math.round((100 * finishedAssignment.length) / assignments.length)
      : 0
  },
})

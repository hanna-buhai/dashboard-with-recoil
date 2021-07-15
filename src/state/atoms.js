import { atom } from 'recoil'
import { students, subjects, studyGroups, classes, lessons, assignments } from '../defaultData'
import memoize from '../utils/memoize'
import getColorMarker from '../utils/getColorMarker'
import getRandomAssignment from '../utils/getRandomAssignment'

export const studentsListState = atom({
  key: 'studentsListState',
  default: Object.keys(students),
})

export const studentsItemStateWithId = memoize(id => {
  const student = students[id]
  if (!student) {
    return atom({
      key: id,
      default: null,
    })
  }

  return atom({
    key: id,
    default: {
      ...student,
      colorMarker: getColorMarker(),
    },
  })
})

export const subjectsListState = atom({
  key: 'subjectsListState',
  default: Object.keys(subjects),
})

export const subjectsItemStateWithId = memoize(id => {
  const subject = subjects[id]
  if (!subject) {
    return atom({
      key: id,
      default: null,
    })
  }

  return atom({
    key: id,
    default: {
      ...subject,
      colorMarker: getColorMarker(),
    },
  })
})

export const studyGroupsListState = atom({
  key: 'studyGroupsListState',
  default: Object.keys(studyGroups),
})

export const studyGroupsItemStateWithId = memoize(id => {
  const studyGroup = studyGroups[id]
  if (!studyGroup) {
    return atom({
      key: id,
      default: null,
    })
  }

  return atom({
    key: id,
    default: studyGroup,
  })
})

export const classesListState = atom({
  key: 'classesListState',
  default: Object.keys(classes),
})

export const classItemStateWithId = memoize(id => {
  const studyClass = classes[id]
  if (!studyClass) {
    return atom({
      key: id,
      default: null,
    })
  }

  return atom({
    key: id,
    default: studyClass,
  })
})

export const lessonsListState = atom({
  key: 'lessonsListState',
  default: Object.keys(lessons),
})

export const lessonItemStateWithId = memoize(id => {
  const lesson = lessons[id]
  if (!lesson) {
    return atom({
      key: id,
      default: null,
    })
  }

  return atom({
    key: id,
    default: lesson,
  })
})

export const assignmentsListState = atom({
  key: 'assignmentsListState',
  default: Object.keys(assignments),
})

export const assignmentItemStateWithId = memoize(id => {
  const assignment = assignments[id]
  if (!assignment) {
    return atom({
      key: id,
      default: null,
    })
  }

  return atom({
    key: id,
    default: { ...assignment, name: getRandomAssignment() },
  })
})

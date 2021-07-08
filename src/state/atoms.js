import { atom } from 'recoil'
import { students, subjects, studyGroups, classes, lessons, assignments } from '../defaultData'
import memoize from '../utils/memoize'

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

  const colorMarkerId = Math.ceil(Math.random() * 3)
  console.log({ colorMarkerId })

  return atom({
    key: id,
    default: {
      ...student,
      colorMarker: 'blue',
    },
  })
})

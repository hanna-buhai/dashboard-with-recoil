export const students = {
  'student-1': {
    id: 'student-1',
    name: 'Amelia Collier',
  },
  'student-2': {
    id: 'student-2',
    name: 'Estelle Baldwin',
  },
  'student-3': {
    id: 'student-3',
    name: 'Michael Watts',
  },
  'student-4': {
    id: 'student-4',
    name: 'Amanda Wood',
  },
}

export const subjects = {
  'subject-1': {
    id: 'subject-1',
    name: 'Common English',
  },
  'subject-2': {
    id: 'subject-2',
    name: 'Business English',
  },
  'subject-3': {
    id: 'subject-3',
    name: 'Speaking Club',
  },
  'subject-4': {
    id: 'subject-4',
    name: 'Spanish Grammar',
  },
}

export const studyGroups = {
  'group-1': ['student-1', 'student-3'],
  'group-2': ['student-2'],
  'group-3': ['student-2', 'student-3'],
  'group-4': ['student-4'],
}

export const classes = {
  'class-1': {
    id: 'class-1',
    subjectId: 'subject-1',
    attendees: 'group-1',
  },
  'class-2': {
    id: 'class-2',
    subjectId: 'subject-2',
    attendees: 'group-2',
  },
  'class-3': {
    id: 'class-3',
    subjectId: 'subject-3',
    attendees: 'group-3',
  },
  'class-4': {
    id: 'class-4',
    subjectId: 'subject-4',
    attendees: 'group-4',
  },
}

export const lessons = {
  'lesson-1': {
    id: 'lesson-1',
    classId: 'class-1',
    dateTime: new Date(),
  },
}

export const assignments = {
  'assignment-1': {
    id: 'assigment-1',
    name: 'Spanish - Essey',
    subjectId: 'subject-4',
    assigneeId: 'student-4',
    dueDate: new Date(),
    finishedDate: null,
  },
}

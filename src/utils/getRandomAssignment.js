const ASSIGNMENTS_BY_ID = {
  1: 'Essay',
  2: 'Grammar Test',
  3: 'Irregular Verbs Test',
  4: 'Past Tenses Test',
}

export default function getRandomAssignment() {
  const assignmentId = Math.ceil(Math.random() * 4)

  return ASSIGNMENTS_BY_ID[assignmentId] || 'Essay'
}

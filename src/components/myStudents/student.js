import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { studentsItemStateWithId } from '../../state/atoms'

import './index.css'

const Student = ({ studentId }) => {
  const student = useRecoilValue(studentsItemStateWithId(studentId))
  if (!student) return null

  return (
    <div className="my-student-info">
      <div>AA</div>
      <span className="my-student-info__name">{student.name}</span>
      <div className="my-student-info__progressbar">*****</div>
      <div>95</div>
    </div>
  )
}

export default Student

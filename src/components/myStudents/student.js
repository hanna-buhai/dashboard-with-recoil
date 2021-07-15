import React from 'react'
import PropTypes from 'prop-types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { studentsItemStateWithId } from '../../state/atoms'
import { studentProgressStatsWithId } from '../../state/selectors'
import Progressbar from '../common/progressbar'

import './index.css'

const StudentProgress = ({ studentId, colorMarker }) => {
  const studentProgression = useRecoilValue(studentProgressStatsWithId(studentId))

  return (
    <>
      <div className="my-student-info__progressbar">
        <Progressbar value={studentProgression} colorMarker={colorMarker} />
      </div>
      <div className="my-student-info__progress-percentage-container ">
        <span className="my-student-info__progress-percentage">{studentProgression}%</span>
      </div>
    </>
  )
}

const Student = ({ studentId }) => {
  const student = useRecoilValue(studentsItemStateWithId(studentId))

  if (!student) return null

  return (
    <div className="my-student-info">
      <div className={`my-student-info__avatar my-student-info__avatar--${student.colorMarker}`} />
      <span className="my-student-info__name">{student.name}</span>
      <StudentProgress studentId={studentId} colorMarker={student.colorMarker} />
    </div>
  )
}

export default Student

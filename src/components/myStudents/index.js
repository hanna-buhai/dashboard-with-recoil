import React from 'react'
// import PropTypes from 'prop-types'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { studentsListState, studentsItemStateWithId } from '../../state/atoms'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'
import Student from './student'

import './index.css'

const MyStudents = () => {
  const studentsList = useRecoilValue(studentsListState)

  return (
    <DashboardCard fullContainer>
      <div className="my-students">
        <SectionHeader
          header="My Students"
          actionLinkName="View All"
          actionLink={() => console.log('View All in My Students')}
        />
        {studentsList.map(student => (
          <Student studentId={student} />
        ))}
      </div>
    </DashboardCard>
  )
}

export default MyStudents

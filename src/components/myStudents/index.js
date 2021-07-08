import React from 'react'
import PropTypes from 'prop-types'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { studentsListState, studentsItemStateWithId } from '../../state/atoms'
import DashboardCard from '../common/dashboardCard'
import SectionHeader from '../common/sectionHeader'
import Student from './student'

import './index.css'

const selectorOptions = [
  {
    id: 'viewAll',
    isDefault: true,
    text: 'View All',
    onPress: () => console.log('View All in My Students'),
  },
]

const MyStudents = props => {
  const studentsList = useRecoilValue(studentsListState)

  return (
    <DashboardCard>
      <div className="my-students">
        <SectionHeader
          header="My Students"
          actionsList={selectorOptions}
          selectedActionId="viewAll"
        />
        {studentsList.map(student => (
          <Student studentId={student} />
        ))}
      </div>
    </DashboardCard>
  )
}

export default MyStudents

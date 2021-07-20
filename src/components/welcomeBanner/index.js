import React from 'react'
// import PropTypes from 'prop-types'
import { useRecoilValue } from 'recoil'
import { studentsProgressStats } from '../../state/selectors'
import DashboardCard from '../common/dashboardCard'

import './index.css'

const WelcomeBanner = () => {
  const totalProgressStats = useRecoilValue(studentsProgressStats)

  return (
    <DashboardCard>
      <div className="welcome-banner">
        <span className="welcome-banner__welcome">
          Welcome back, <span className="welcome-banner__welcome--bold">Hanna</span>!
        </span>
        <span className="welcome-banner__stats">
          Your students completed{' '}
          <span className="welcome-banner__stats--bold">{totalProgressStats}%</span> of the tasks
        </span>
        <span className="welcome-banner__stats">
          Progress is <span className="welcome-banner__stats--bold">{'good'}</span>
        </span>
      </div>
    </DashboardCard>
  )
}

export default WelcomeBanner

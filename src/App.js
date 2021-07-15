import './App.css'
import Calendar from './components/calendar'
import CompletedTasks from './components/completedTasks'
import Lessons from './components/lessons'
import Media from './components/media'
import MyStudents from './components/myStudents'
import UserProfile from './components/userProfile'
import WelcomeBanner from './components/welcomeBanner'
import WorkingHours from './components/workingHours'
import DataUpdater from './components/dataUpdater'

function App() {
  return (
    <div className="content">
<DataUpdater />
      <div className="App">
        <div className="app__section app__section--left ">
          <WelcomeBanner />
          <div className="app__section-group">
            <MyStudents />
            <WorkingHours />
          </div>
          <Media />
        </div>
        <div className="app__section app__section--right">
          <UserProfile />
          <Calendar />
          <Lessons />
          <CompletedTasks />
        </div>
      </div>
    </div>
  )
}

export default App

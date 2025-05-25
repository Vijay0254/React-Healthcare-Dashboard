import React from 'react'
import DashboardOverview from './DashboardOverview'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import ActivityFeed from './ActivityFeed'
import styles from '../styles/DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <section className={styles.container}>
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </section>
  )
}

export default DashboardMainContent
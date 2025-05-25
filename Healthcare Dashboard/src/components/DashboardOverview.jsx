import React from 'react'
import AnatomySection from './AnatomySection'
import { ArrowRight, ChevronDown, MoveRight } from 'lucide-react'
import styles from '../styles/DashboardOverview.module.css';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => {
  return (
    <div className={styles.container}>
      {/* Dashboard Heading */}
      <div className={styles.heading}>
        <h1>Dashboard</h1>
        <p>This Week <ChevronDown size={14} /></p>
      </div>

      {/* Parts of Dashboard */}
      <div className={styles.subContainer}>
        <AnatomySection />
        <HealthStatusCards />
      </div>

      <p className={styles.details}>Details <ArrowRight /></p>
    </div>
  )
}

export default DashboardOverview
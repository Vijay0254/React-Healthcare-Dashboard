import React from 'react'
import styles from '../styles/SimpleAppointmentCard.module.css'

const SimpleAppointmentCard = ({label, time, doctorName, icon, bgColor, color}) => {
  return (
    <div style={{backgroundColor: bgColor, color: color}} className={styles.container}>
      {/* Name and Icon */}
      <div className={styles.nameIconContainer}>
        <p>{label}</p>
        <span>{icon}</span>
      </div>

      {/* Time and Doctor Name */}
      <div className={styles.timeDoctorContainer}>
        <p>{time}</p>
        <p>{doctorName}</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
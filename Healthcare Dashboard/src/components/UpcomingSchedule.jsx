import React from 'react'
import styles from '../styles/UpcomingSchedule.module.css'
import { appointmentData } from '../data/appointments'
import SimpleAppointmentCard from './SimpleAppointmentCard'

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h1>The Upcoming Schedule</h1>

      <div className={styles.subContainer}>
        {/* Top */}
        <div className={styles.eachDayContainer}>
          <h3>On Thursday</h3>
          <div className={styles.appointmentContainer}>
            {appointmentData.slice(2, 4).map((element) =>(
              <SimpleAppointmentCard key={element.id} label={element.label} time={element.time} icon={element.icon} doctorName={element.doctorName} bgColor={element.bgColor} color={element.color} />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.eachDayContainer}>
          <h3>On Saturday</h3>
          <div className={styles.appointmentContainer}>
            {appointmentData.slice(4, 6).map((element) =>(
              <SimpleAppointmentCard key={element.id} label={element.label} time={element.time} icon={element.icon} doctorName={element.doctorName} bgColor={element.bgColor} color={element.color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingSchedule
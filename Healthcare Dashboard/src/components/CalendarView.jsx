import React from 'react'
import styles from '../styles/CalendarView.module.css'
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import { calendarDetails } from '../data/calendarDetails'
import { appointmentData } from '../data/appointments'
import SimpleAppointmentCard from './SimpleAppointmentCard'

const CalendarView = () => {
  return (
    <div className={styles.container}>
      {/* Month */}
      <div className={styles.monthContainer}>
        <h1>October 2021</h1>

        {/* Arrow */}
        <div className={styles.monthNavContainer}>
          <svg width="25" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,10 10,5 10,15" fill="#1E1BFF"/>
            <line x1="10" y1="10" x2="20" y2="10" stroke="#D1D5DB" stroke-width="2"/>
          </svg>

          <svg width="25" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="30,10 20,5 20,15" fill="#1E1BFF"/>
            <line x1="10" y1="10" x2="20" y2="10" stroke="#D1D5DB" stroke-width="2"/>
          </svg>
        </div>
      </div>

      {/* Calendar */}
      <div className={styles.calendarContainer}>
        {calendarDetails.map((element) =>(
          <div key={element.rowId} className={`${element.rowId == 2 ? styles.date : styles.exceptDate} ${styles.rowContainer}`}>
            {element.rowElements.map((item) =>(
              <div key={item.id} className={(element.rowId == 3 && item.id == 6) ? styles.twoTimeLeftItemContainer : ((element.rowId == 3 && item.id == 7) ? styles.twoTimeRightItemContainer : styles.itemContainer)} style={{backgroundColor: item.bgColor, color: item.color}}>
                {element.rowId == 3 && item.id == 6 && <div className={styles.gapColor}></div>}
                <p>{item.label}</p>
                {item.bgColor == "#adafda" && <p className={styles.dot}></p>}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Appointment */}
      <div className={styles.appointmentContainer}>
        {appointmentData.slice(0, 2).map((element) =>(
          <SimpleAppointmentCard key={element.id} label={element.label} time={element.time} icon={element.icon} doctorName={element.doctorName} bgColor={element.bgColor} color={element.color} />
        ))}
      </div>
    </div>
  )
}

export default CalendarView
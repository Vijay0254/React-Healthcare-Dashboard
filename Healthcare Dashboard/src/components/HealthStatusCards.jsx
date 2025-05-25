import React from 'react'
import { healthData } from '../data/healthData';
import styles from '../styles/HealthStatusCards.module.css'

const HealthStatusCards = () => {
  return (
    <div className={styles.healthDataContainer}>
      {healthData.map((element) =>(
        <div key={element.id} className={styles.healthData}>
          <div className={styles.healthDataHeader}>
            <img style={{width: element.name == "Teeth" ? "30px" : "", marginTop: element.name == "Teeth" ? "-10px" : "", marginLeft: element.name == "Teeth" ? "10px" : ""}} src={element.img} alt="HumanPartImg" />
            <h1>{element.name}</h1>
          </div>
          <p>{element.date}</p>
          <div className={styles.colorBox}>
            <div style={{backgroundColor: element.color, width: "80%", height: "100%", borderRadius: "10px"}}></div>
          </div>
        </div>
      ))}  
    </div>
  )
}

export default HealthStatusCards
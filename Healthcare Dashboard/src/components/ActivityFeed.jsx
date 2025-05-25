import React from 'react'
import styles from '../styles/ActivityFeed.module.css'
import Type1Graph from './Type1Graph'
import Type2Graph from './Type2Graph'

const ActivityFeed = () => {
  return (
    <div className={styles.container}>
      {/* Activity Header */}
      <div className={styles.activityHeader}>
        <h2>Activity</h2>
        <p>3 appointments on this week</p>
      </div>

      {/* Graph */}
      <div className={styles.graphContainer}>
        <div className={styles.graph}>
          <Type1Graph color1={"#dee1e8"} color2={"var(--primary-color)"} color3={"#dee1e8"} color4={"#dee1e8"} color5={"#dee1e8"} />
          <Type2Graph color1={"var(--primary-color)"} color2={"var(--secondary-color)"} color3={"var(--secondary-color)"} color4={"#dee1e8"} color5={"#dee1e8"} color6={"var(--primary-color)"} />

          <Type1Graph color1={"#dee1e8"} color2={"#dee1e8"} color3={"var(--primary-color)"} color4={"var(--secondary-color)"} color5={"var(--secondary-color)"} />
          <Type2Graph color1={"#dee1e8"} color2={"#dee1e8"} color3={"var(--primary-color)"} color4={"var(--primary-color)"} color5={"var(--secondary-color)"} color6={"#dee1e8"} />
          
          <Type1Graph color1={"#dee1e8"} color2={"var(--secondary-color)"} color3={"#dee1e8"} color4={"#dee1e8"} color5={"#dee1e8"} />
          <Type2Graph color1={"var(--primary-color)"} color2={"var(--secondary-color)"} color3={"var(--primary-color)"} color4={"#dee1e8"} color5={"#dee1e8"} color6={"var(--secondary-color)"} />

          <Type1Graph color1={"#dee1e8"} color2={"#dee1e8"} color3={"var(--primary-color)"} color4={"var(--secondary-color)"} color5={"var(--secondary-color)"} />
          <Type2Graph color1={"#dee1e8"} color2={"#dee1e8"} color3={"var(--primary-color)"} color4={"#dee1e8"} color5={"#dee1e8"} color6={"var(--secondary-color)"} />
        </div>

        {/* Days */}
        <div className={styles.daysContainer}>
          {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((element, index) =>(
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
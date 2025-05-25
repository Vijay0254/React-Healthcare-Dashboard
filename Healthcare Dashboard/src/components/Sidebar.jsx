import React from 'react'
import { navigation } from '../data/Navigation'
import styles from '../styles/Sidebar.module.css';
import { Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.topContainer}>
          {navigation.map((element) =>(
            <div key={element.id} className={styles.subContainer}>
              <p className={styles.groupHeading}>{element.group}</p>
              
              {/* Items */}
              <div className={styles.itemsContainer}>
                {element.items.map((item) =>(
                  <div key={item.id} className={`${item.label === "Dashboard" ? styles.dashboardIcon : ""} ${styles.item}`}>
                    {/* Icon */}
                    <span className={styles.iconWrapper}>{item.icon}</span>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className={styles.item}>
        {/* Settings */}
        <Settings size={20} />
        <p>Setting</p> 
      </div> 

    </nav>
  )
}

export default Sidebar
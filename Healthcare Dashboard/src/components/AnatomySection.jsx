import React from 'react';
import styles from '../styles/AnatomySection.module.css';
import humanBodyImg from '../assets/humanBody.png';
import { ZoomIn } from 'lucide-react';
import turnAroundImage from '../assets/turnAround.png'

const AnatomySection = () => {
  return (
    <div className={styles.humanBodyContainer}>
      {/* Zoom in Icon */}
      <div className={styles.zoomInIcon}>
        <ZoomIn />
      </div>

      {/* Human Body */}
      <img src={humanBodyImg} alt="humanBodyImg" />
      
      {/* Turn Around Image */}
      <div>
        <img className={styles.turnImg} src={turnAroundImage} alt="turnAroundImage" />
      </div>

      {/* Healthy Heart Indicator */}
      <div className={styles.healthyHeartIndicator}>
        {/* Scanner */}
        <div className={styles.scannerBox}>
          <div className={styles.bottomLeft}></div>
          <div className={styles.bottomRight}></div>
        </div>
        <div className={styles.healthyHeartBox}>
          <span style={{fontSize: "17px"}}>❤️</span>
          <span>Healthly Heart</span>
        </div>
      </div>

      {/* Healthy Leg Indicator */}
      <div className={styles.healthyLegIndicator}>
        <div className={styles.healthyLegBox}>
          <span style={{fontSize: "17px"}}>🦵</span>
          <span>Healthly Leg</span>
        </div>
        {/* Scanner */}
        <div className={styles.scannerBox}>
          <div className={styles.bottomLeft}></div>
          <div className={styles.bottomRight}></div>
        </div>
      </div> 
    </div>
  )
}

export default AnatomySection
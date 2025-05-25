import React from 'react'
import styles from '../styles/ActivityFeed.module.css'

const Type1Graph = ({ color1, color2, color3, color4, color5 }) => {
  return (
    <>
        <div className={styles.eachBar} style={{width: color1 == "#dee1e8" ? "3px" : "5px" , backgroundColor: color1}}></div>
        <div className={styles.eachBar} style={{width: color1 == "#dee1e8" ? "3px" : "5px", backgroundColor: "white", display: "flex", alignItems: "center"}}><div style={{width: "100%", height: "50%", borderRadius: "20px", backgroundColor: color2}}></div></div>
        <div className={styles.eachBar} style={{width: color1 == "#dee1e8" ? "3px" : "5px", backgroundColor: "white", display: "flex", flexDirection: "column", gap: "4px"}}><div style={{width: "100%", height: "20%", borderRadius: "20px", backgroundColor: color3, marginTop: "43px"}}></div><div style={{width: "100%", height: "20%", borderRadius: "20px", backgroundColor: color4}}></div></div>
        <div className={styles.eachBar} style={{width: color1 == "#dee1e8" ? "3px" : "5px", backgroundColor: "white", display: "flex", alignItems: "end"}}><div style={{width: "100%", height: "25%", borderRadius: "20px", backgroundColor: color5}}></div></div>
    </>
  )
}

export default Type1Graph
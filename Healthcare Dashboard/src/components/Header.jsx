import { Bell, Plus, Search } from 'lucide-react'
import styles from '../styles/Header.module.css';
import React from 'react'
import userProfileImg from '../assets/userProfile.png'

const Header = () => {
  return (
    <header className={styles.container}>
        <div className={styles.subContainer}>
            {/* App Logo/Title */}
            <h1 className={styles.logo}><span>Health</span>care.</h1>

            {/* Search Bar & Notification Icon. */}
            <div className={styles.search}>
                <Search size={22} />
                <input placeholder='Search' name='search' id='search' type="text" />
                <Bell className={styles.bell} />
            </div>
        </div>

        {/* User Profile & "Add" Button */}
        <div className={styles.userProfile}>
            {/* Search Icon */}
            <Search className={styles.searchIcon} />
            <div className={styles.userProfileImg}>
                <img src={userProfileImg} alt="UserProfileImg" />
            </div>
            <div className={styles.addBtn}>
                <Plus size={20} />
            </div>
        </div>
    </header>
  )
}

export default Header
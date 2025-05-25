import React from 'react'
import Header from './components/Header'
import './App.css'
import DashboardMainContent from './components/DashboardMainContent'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
    <main className='app'>
      <Header />

      <div className='app_container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='dashboard_content'>
          <DashboardMainContent />
        </div>
      </div>
    </main>
  )
}

export default App
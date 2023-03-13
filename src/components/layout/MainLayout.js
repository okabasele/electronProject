import React from 'react'
import SideBar from '../../components/partials/SideBar'

const MainLayout = ({children}) => {
  return (
    <>
    <SideBar />
    <div className="container">
    {children}
    </div>
    </>
  )
}

export default MainLayout
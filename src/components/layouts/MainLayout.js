import React from 'react'
import SideBar from '../partials/SideBar'
import Player from '../blocks/Player'

const MainLayout = ({children}) => {
  return (
    <>
    <SideBar />
    <div className="container">
    {children}
    </div>
    <Player />
    </>
  )
}

export default MainLayout
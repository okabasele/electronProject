import React from 'react'
import Header from '../partials/Header.js'
import SideBar from '../partials/SideBar.js'
import Player from '../UI/Player.js'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    <SideBar />
    <div className="container">
    {children}
    </div>
    <Player />
    </>
  )
}

export default MainLayout
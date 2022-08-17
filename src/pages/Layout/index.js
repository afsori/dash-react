import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../organizm/Sidebar'

function Layout(props) {
  console.log('props', props)
  return (
    <>
    <Sidebar></Sidebar>
    <div className="home_content">
      <div className="text">{props.children}</div>
      {/* <Outlet/> */}
    </div>
  </>
  )
}

export default Layout
import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
          <div className="itemContainer">
            <Person/>
            <span>linkedin</span>
          </div>
          <div className="itemContainer">
          <Mail/>
            <span>javieraguilar@gmail.com</span>
          </div>
        </div>
        <div className="right">
          this is right
        </div>
      </div>
    </div>
  )
}

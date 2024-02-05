import React from 'react'
import "./topbar.css"
import { Chat, Notifications, Person, Search } from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <div className="span logo">Only-Chat</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input 
            placeholder='Search for friend, post or video' 
            className='searchInput' 
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className='topbarLink'>Home</span>
          <span className='topbarLink'>Time-line</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className='topbarIconBadge'>23</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className='topbarIconBadge'>4</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className='topbarIconBadge'>27</span>
          </div>
        </div>
        <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar
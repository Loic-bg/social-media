import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src='assets/gift.png' alt=''/>
          <span className="birthdayText">
            <b>Martial Gueyo</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User informations</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Samara</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Yaounde</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpg" alt='' className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">Enora</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpg" alt='' className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">Victor Alex</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpg" alt='' className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">Master</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpg" alt='' className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">Romeo</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpg" alt='' className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">Mater</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
import React from 'react'

const Profile = () => {
  return (
    <div className='profile jonuralayout'>
      <h2>프로필</h2>
      <div className="profileCard">
        <div className="profileHeader">
          <div className="profilePic">
            <img src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="" />
          </div>
          <div className="profileInfo">
            <h2>홍길동 <span>@honggildong</span></h2>
            <p>Email : honggildong@example.com</p>
          </div>
        </div>
        <div className="profileSettings"></div>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img 
                    className='shareProfileImg'
                    src='assets/person/6.jpg' alt='' 
                />
                <input 
                    placeholder='What is your mind Enora?' 
                    className='shareInput' 
                />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="PaleVioletRed" className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="DarkOrange" className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
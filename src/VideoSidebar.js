import React, {useState} from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import {Avatar} from '@mui/material';

function VideoSidebar({likes, shares, messages, avatar}) {
    const [liked, setLiked] = useState(false);
  return (
    <div className='videoSidebar'>
        <div className='videoSidebar___button'>
            <Avatar src={avatar} />
        </div>
        <div className='videoSidebar___button'>
            {liked ? (

                <FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} />
            ):(
                <FavoriteBorderIcon fontSize='large' onClick={(e) => setLiked(true)} />
            )}
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSidebar___button'>
            <SmsRoundedIcon fontSize='large' />
            <p>{messages}</p>
        </div>
        <div className='videoSidebar___button'>
            <ReplyIcon fontSize='large' className='rotate' />
            <p>{shares}</p>
        </div>
        
    </div>
  )
}

export default VideoSidebar
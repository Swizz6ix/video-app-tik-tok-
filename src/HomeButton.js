import React from 'react';
import "./HomeButton.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { pink } from '@mui/material/colors';

function HomeButton() {
    const btns = [
        {
            id: 1,
            btn: "Home",
            icon: <HomeIcon fontSize="large" />,
            active: "active"
        },
        {
            id: 2,
            btn: "Discover",
            icon: <SearchIcon fontSize="large"  />,
        },
        {
            id: 3,
            btn: "",
            icon: <AddToQueueIcon fontSize="large"sx={{color: pink[500]}} />,
        },
        {
            id: 4,
            btn: "Inbox",
            icon: <MoveToInboxIcon fontSize="large" />,
        },
        {
            id: 5,
            btn: "Me",
            icon: <PersonOutlineOutlinedIcon fontSize="large" />,
        }
    ]
  return (
    <div className='homeButton'>
        <div className='homeButton__container'>
        {btns.map((btn) => (
            <div key={btn.id}  className={`homeButton__btns ${btn.active? "btn__active" : 'btn__inActive'}`}>
                {btn.icon}
                {btn.btn}
            </div>

        ))}
        </div>
  </div>
  )
}

export default HomeButton

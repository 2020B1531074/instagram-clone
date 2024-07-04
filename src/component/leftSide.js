import React from 'react';
import './leftSide.css'
import instagramLogo from '../assets/instagramLogo'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import ProfileImg from '../assets/profile.jpeg';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';

const LeftSide = () => {
  return (
    <div className="leftSidePart">
        <div className="logoPart">
            <img className='logoImg' src={instagramLogo} alt='Instagram' />
        </div>
        <div className="navLinkPart">
            <div className="navLink">
            <HomeIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Home</div>
            </div>
            <div className="navLink">
            <SearchIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Search</div>
            </div>
            <div className="navLink">
            <ExploreIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Explore</div>
            </div>
            <div className="navLink">
            <LibraryMusicIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Reels</div>
            </div>
            <div className="navLink">
            <MessageIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Messages</div>
            </div>
            <div className="navLink">
            <NotificationsIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Notifications</div>
            </div>
            <div className="navLink">
            <AddIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Create</div>
            </div>
            <div className="navLink">
          <img className='ProfileImg' src={ProfileImg} alt='profile imag' />
                <div className="navName">Profile</div>
            </div>
            <div className="belowPart">
            <div className="navLink">
            <GestureIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">Thread</div>
            </div>
            </div>

            <div className="navLink">
            <MenuIcon sx={{fontsize:"30px",margin:"0 20px 0 0"} }/>
                <div className="navName">More</div>
            </div>
        </div>
    </div>
  )
}

export default LeftSide;

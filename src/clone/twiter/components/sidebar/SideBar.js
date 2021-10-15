import { Home, NotificationImportant, Twitter } from '@material-ui/icons'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import React from 'react'
import SideIcon from './SideIcon';
import './SideBar.css'
const SideBar = () => {
    return (
        <div 
        // style={{color:'white'
        // ,display:'flex',flexDirection:'column'
        // ,marginLeft:'80px'
        // // ,marginTop:'80px'
        // }}
        className='sidebar'
        >

            <SideIcon Icon={Twitter} />
            <SideIcon Icon={HomeOutlinedIcon} text='Home'/>
            <SideIcon text='Explore' Icon={ExploreIcon}/>
            <SideIcon text='Notifcations' Icon={NotificationsNoneIcon}/>
            <SideIcon text='Messages' Icon={EmailOutlinedIcon}/>
            <SideIcon text='Bookmarks' Icon={BookmarkBorderOutlinedIcon}/>
            <SideIcon text='Lists' Icon={SubjectOutlinedIcon}/>
            <SideIcon text='Profile' Icon={PersonOutlineOutlinedIcon}/>
            <SideIcon text='More' Icon={MoreHorizIcon}/>
            <button  type="button" className=" btn-primary Twitter">Twitter</button>

            
        </div>
    )
}

export default SideBar

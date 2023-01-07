import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmailIcon from '@mui/icons-material/Email';
import SideBarItem from './SideBarItem';
import React from 'react';

export default function SideBar() {
    return (
        <div className="fixed flex flex-col top-12 left-0 text-white">
            <SideBarItem Icon={HomeIcon} text="Home" linkTo='/' />
            <SideBarItem Icon={BuildIcon} text="Skills" linkTo='/Skills' />
            <SideBarItem Icon={SchoolIcon} text="Education" linkTo='/Education' />
            <SideBarItem Icon={WorkIcon} text="Experience" linkTo='/Experience' />
            <SideBarItem Icon={AccountTreeIcon} text="Projects" linkTo='/Projects' />
            <SideBarItem Icon={MusicNoteIcon} text="Art" linkTo='/Art' />
            <SideBarItem Icon={EmailIcon} text="Contact Me" linkTo='/Contact' />
        </div>
    );
}
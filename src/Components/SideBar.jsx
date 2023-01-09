import React from 'react';

// import icons:
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmailIcon from '@mui/icons-material/Email';

// import components:
import SideBarItem from './SideBarItem';

// import sounds:
import PianoAudio from '../Audio/mixkit-greeting-music-box-tone-699.wav';
import ChordAudio from '../Audio/mixkit-chord-swell-short-692.wav';

export default function SideBar() {
    return (
        <div className="z-100 fixed flex flex-row bottom-0 bg-background md:flex-col md:top-12 md:left-0">
            <SideBarItem Icon={HomeIcon} text="Home" linkTo='/' audio={ChordAudio} />
            <SideBarItem Icon={BuildIcon} text="Skills" linkTo='Skills' audio={ChordAudio} />
            <SideBarItem Icon={SchoolIcon} text="Education" linkTo='Education' audio={ChordAudio} />
            <SideBarItem Icon={WorkIcon} text="Experience" linkTo='Experience' audio={ChordAudio}/>
            <SideBarItem Icon={AccountTreeIcon} text="Projects" linkTo='Projects' audio={ChordAudio} />
            <SideBarItem Icon={MusicNoteIcon} text="Art" linkTo='Art' audio={PianoAudio}/>
            <SideBarItem Icon={EmailIcon} text="Contact Me" linkTo='Contact' audio={ChordAudio} />
        </div>
    );
}
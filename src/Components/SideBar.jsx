import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmailIcon from '@mui/icons-material/Email';
import SideBarItem from './SideBarItem';

export default function SideBar() {
    return (
        <div className="fixed flex flex-col top-15 left-0 text-white">
            <SideBarItem icon={HomeIcon} text="Home" />
            <SideBarItem icon={BuildIcon} text="Skills" />
            <SideBarItem icon={SchoolIcon} text="Education" />
            <SideBarItem icon={WorkIcon} text="Experience" />
            <SideBarItem icon={AccountTreeIcon} text="Projects" />
            <SideBarItem icon={MusicNoteIcon} text="Art" />
            <SideBarItem icon={EmailIcon} text="Contact Me" />
        </div>
    );
}
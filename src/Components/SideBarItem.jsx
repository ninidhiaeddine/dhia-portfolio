import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBarItem({icon, text, linkTo}) {
    const [isHovered, setIsHovered] = useState(false);
    const ItemIcon = icon;

    const navigate = useNavigate();

    return (
        <div className={`flex items-center border border-white text-white rounded-full m-2 w-14 h-14 text-center 
            hover:w-36 hover:scale-105 hover:bg-primary hover:border-none
            transition-all duration-200`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(linkTo)}>
            <ItemIcon sx={{
                color: 'white',
                fontSize: 22,
                margin: 2
            }} />
            {
                isHovered && 
                    <div className="animate-slide-right min-w-max">
                        {text}
                    </div>
            }
            
        </div>
    );
}
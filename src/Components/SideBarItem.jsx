import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBarItem({Icon, text, linkTo, audio}) {
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    function playAudio() {
        new Audio(audio).play();
    }

    return (
        <div className={`flex items-center md:border md:border-white text-white rounded-full text-center 
            md:m-2 md:w-14 md:h-14 focus:bg-primary
            md:hover:w-36 m-1 md:hover:scale-105 md:hover:bg-primary md:hover:border-none
            transition-all duration-200
            animate-pulse hover:animate-none
            z-50`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                navigate(linkTo);
                navigate(0);
                playAudio();
                }}>
            <Icon sx={{
                color: 'white',
                fontSize: {xs: 20, md: 22},
                margin: {xs: 1, md: 2}
            }}/>
            {
                isHovered && 
                    <div className="hidden md:block animate-slide-right min-w-max">
                        {text}
                    </div>
            }
        </div>
    );
}
import { useState } from "react";

export default function SideBarItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const ItemIcon = props.icon;
    const ItemText = props.text;

    return (
        <div className={`flex items-center border border-white text-white rounded-full m-2 w-14 h-14 text-center 
            hover:w-36 hover:scale-105 hover:bg-primary hover:border-none
            transition-all duration-200`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ItemIcon sx={{
                color: 'white',
                fontSize: 22,
                margin: 2
            }} />
            {
                isHovered && 
                    <div className="animate-slide-right min-w-max">
                        {ItemText}
                    </div>
            }
            
        </div>
    );
}
import Stack from "@mui/material/Stack";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ExperienceCard({title, timeRangeString, locationString, companyName, imgSrc, description}) {
    return (
        <div className="bg-gradient-to-r from-dark-purple to-secondary rounded-lg w-[26rem] p-5
        hover:from-primary hover:to-secondary hover:scale-110 transition-all ease-in-out">
            <Stack direction="row" spacing={4}>
                <img src={imgSrc} className="rounded-full h-20 w-20 border-2 border-white" />
                <Stack direction="column">
                    <div className="text-white font-bold">{title}</div>
                    <div className="text-white">{timeRangeString}</div>
                    <div className="flex mt-1">
                        <LocationOnIcon sx={{fontSize: 20}}/>
                        <div className="text-white text-sm">{locationString}</div>
                    </div>
                    <div>{companyName}</div>                    
                </Stack>
            </Stack>
            <div className="mt-5">{description}</div>
        </div>
    );
}
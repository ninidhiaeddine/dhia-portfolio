import ExperienceCard from "../Components/ExperienceCard";
import CommunityWork from "./CommunityWork";
import Stack from '@mui/material/Stack';

// import logos:
import SaidNgoLogo from './Images/SaidNgoLogo.png';
import VgsLogo from './Images/VgsLogo.jpg'

export default function Experience() {
    return (
        <>
            <div className="text-primary font-bold text-5xl pt-8 text-center">Experience</div>
            <div class="flex justify-center">
                <Stack spacing={2} sx={{ marginTop: 4 }}>
                    <ExperienceCard
                        title="Mobile Developer Intern"
                        timeRangeString="Winter 2023"
                        locationString="Beirut, Lebanon"
                        companyName="SAID NGO"
                        description='Description to be filled'
                        imgSrc={SaidNgoLogo} />

                    <ExperienceCard
                        title="Game Developer Intern"
                        timeRangeString="Summer 2022"
                        locationString="Beirut, Lebanon"
                        companyName="Video Game Studio (VGS)"
                        description='Description to be filled'
                        imgSrc={VgsLogo} />
                </Stack>
            </div>

            <CommunityWork />
        </>
    );
}
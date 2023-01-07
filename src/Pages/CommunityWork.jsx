import HighlightedText from "../Components/HighlightedText";
import ExperienceCard from "../Components/ExperienceCard";
import Stack from "@mui/material/Stack";

// import logos:
import AlbertNassarLogo from './Images/AlbertNassarLogo.png';
import JafraLogo from './Images/JafraLogo.png';
import FoodBlessedLogo from './Images/FoodBlessedLogo.png';
import SosLogo from './Images/SosLogo.png';
import SeLogo from './Images/SELogo.png';
import TedLogo from './Images/TedLogo.png';
import SpiritOfYouthLogo from './Images/SpiritOfYouthLogo.png';

export default function CommunityWork() {
    return (
        <div className="bg-secondary mt-10 pb-10">
            <div className="text-tertiary font-bold text-5xl pt-8 text-center">Community Work & Volunteering</div>

            { /* 2022 Community Work */}
            <div className="flex flex-col items-center mt-8">
            <HighlightedText text="2022" highlightColor="tertiary" />
            <Stack spacing={2}>
                <ExperienceCard
                    title="Sorting Clothes & Food"
                    timeRangeString="Winter 2023"
                    locationString="Bqennaya, Lebanon"
                    companyName="Albert Nassar Fondation"
                    imgSrc={AlbertNassarLogo}
                    description="" />
                <ExperienceCard
                    title="Computer Science Basics Instructor"
                    timeRangeString="Fall 2022"
                    locationString="Borj El Brajneh, Lebanon"
                    companyName="Jafra Foundation"
                    imgSrc={JafraLogo}
                    description="" />
                <ExperienceCard 
                    title="Packing Food for The Needy"
                    timeRangeString="Fall 2022"
                    locationString="Beirut, Lebanon"
                    companyName="Food Blessed"
                    imgSrc={FoodBlessedLogo}
                    description="" />
                <ExperienceCard 
                    title="Arabic To English Translator"
                    timeRangeString="Spring 2022"
                    locationString="Remote"
                    companyName="SOS Children Villages NGO"
                    imgSrc={SosLogo}
                    description="" />
            </Stack>

            { /* 2020 Community Work */}
            <HighlightedText text="2020" highlightColor="tertiary" />
            <Stack spacing={2}>
                <ExperienceCard
                    title="English Courses Instructor"
                    timeRangeString="Fall 2020"
                    locationString="Remote"
                    companyName="Jafra Foundation"
                    imgSrc={JafraLogo}
                    description=""/>
            </Stack>

            { /* 2019 Community Work */}
            <HighlightedText text="2019" highlightColor="tertiary" />
            <Stack spacing={2}>
                <ExperienceCard 
                    title="TED Talk Instructor"
                    timeRangeString="Fall 2022"
                    locationString="Borj El Brajneh, Lebanon"
                    companyName="Jafra Foundation"
                    imgSrc={TedLogo}
                    description="" />
                <ExperienceCard 
                    title="Cleaning Campaign Leader"
                    timeRangeString="Summer 2019"
                    locationString="Oum El Bouaghi, Algeria"
                    companyName="Spirit of Youth (Group)"
                    imgSrc={SpiritOfYouthLogo}
                    description="" />
            </Stack>
            </div>

        </div>
    );
}
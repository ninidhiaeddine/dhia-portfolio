import Stack from "@mui/material/Stack";
import EducationCard from "../Components/EducationCard";
import AuLogo from './Images/au logo.png';
import AubLogo from './Images/Aub logo.png';

export default function Education() {
    return (
        <>
            <div className="text-primary font-bold text-5xl pt-8 text-center">Education</div>
            <div class="flex justify-center">
                <Stack spacing={2} sx={{ marginTop: 4 }}>
                    <EducationCard
                        title="American University of Beirut"
                        timeRangeString="2019 - 2023"
                        locationString="Beirut, Lebanon"
                        descriptions={['BSc in Computer Science', 'Minor in Music']}
                        imgSrc={AubLogo} />

                    <EducationCard
                        title="American University"
                        timeRangeString="Fall 2019"
                        locationString="Washington, D.C, USA"
                        descriptions={['BSc in Computer Science', 'Minor in Music']}
                        imgSrc={AuLogo} />
                </Stack></div>

        </>
    );
}
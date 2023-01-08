import ExperienceCard from "../Components/ExperienceCard";
import CommunityWork from "./CommunityWork";
import Stack from '@mui/material/Stack';

// import data:
import { data } from '../Data/experience';

export default function Experience() {
    return (
        <>
            <div className="text-primary font-bold text-5xl pt-8 text-center">Experience</div>
            <div class="flex justify-center">
                <Stack spacing={2} sx={{ marginTop: 4 }}>
                    {
                        data.map(x => {
                            return <ExperienceCard
                            title={x.role}
                            timeRangeString={x.timeRange}
                            locationString={x.location}
                            companyName={x.company}
                            description={x.description}
                            imgSrc={x.imgSrc} />
                        })
                    }
                </Stack>
            </div>

            <CommunityWork />
        </>
    );
}
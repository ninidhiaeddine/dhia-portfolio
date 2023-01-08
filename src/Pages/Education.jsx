import Stack from "@mui/material/Stack";
import EducationCard from "../Components/EducationCard";

// import data:
import { data } from '../Data/education';

export default function Education() {
    return (
        <>
            <div className="text-primary font-bold text-5xl pt-8 text-center">Education</div>
            <div class="flex justify-center">
                <Stack spacing={2} sx={{ marginTop: 4 }}>
                    {
                        data.map(x => {
                            return <EducationCard
                                title={x.university}
                                timeRangeString={x.timeRange}
                                locationString={x.location}
                                descriptions={x.descriptions}
                                imgSrc={x.imgSrc} />
                        })
                    }
                </Stack>
            </div>

        </>
    );
}
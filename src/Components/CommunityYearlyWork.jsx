// import components:
import ExperienceCard from './ExperienceCard';
import HighlightedText from './HighlightedText';
import Stack from '@mui/material/Stack';

// import data:
import { data } from '../Data/communityWork';

export default function CommunityYearlyWork({ year }) {
    let filteredData = data.filter(x => x.year === year);

    return (
        <div className="flex flex-col items-center mt-8">
            <HighlightedText text={year} highlightColor="tertiary" />
            <Stack spacing={2}>
                {
                    filteredData.map(x => {
                        return <ExperienceCard
                        title={x.role}
                        timeRangeString={x.timeRange}
                        locationString={x.location}
                        companyName={x.ngo}
                        description={x.description}
                        imgSrc={x.imgSrc} />
                    })
                }
            </Stack>
        </div>
    );
}
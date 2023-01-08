import Grid from '@mui/material/Grid';
import ProjectCard from '../ProjectCard';

export default function MobileTabView() {
    let projectsCards = [
        <ProjectCard />,
        <ProjectCard />,
    ];

    return (
        <Grid container spacing={2}>
            {
                projectsCards.map((ProjectCard) => {
                    return <Grid item xs={4}>
                        {ProjectCard}
                    </Grid>
                })
            }
        </Grid>
    );
}
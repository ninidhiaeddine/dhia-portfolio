import Grid from '@mui/material/Grid';
import ProjectCard from '../ProjectCard';

export default function GameTabView() {
    let projectsCards = [
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
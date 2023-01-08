import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import { data } from '../Data/projects';

export default function TabView({typeFilter}) {
    let filteredData = data.filter(x => x.type === typeFilter);

    return (
        <Grid container spacing={2}>
            {
                filteredData.map((x) => {
                    return <Grid item xs={4}>
                        <ProjectCard 
                            title={x.title}
                            imgSrc={x.imgSrc}
                            description={x.description}
                            skills={x.skills}
                            link={x.githubLink} />
                    </Grid>
                })
            }
        </Grid>
    );
}
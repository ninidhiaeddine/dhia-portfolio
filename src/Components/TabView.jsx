import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import { data } from '../Data/projects';

export default function TabView({typeFilter}) {
    let filteredData = data.filter(x => x.type === typeFilter);

    return (
        <Grid container spacing={6} sx={{paddingBottom: 3}}>
            {
                filteredData.map((x) => {
                    return <Grid item xs={12} md={4} >
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
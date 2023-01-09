import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

export default function ProjectCard({ title, imgSrc, skills, description, link }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={imgSrc}
      />
      <CardContent sx={{paddingTop: 3, paddingLeft: 3, paddingRight: 3}} >
        <Typography gutterBottom variant="h5" component="div" className='h-16'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-justify h-[8rem]' >
          {description}
        </Typography>
        <Grid container spacing={1} sx={{textAlign: 'center', marginTop: 2, height: 50}}>
          {
            skills.map(x => {
              return <Grid item xs={4}>
                <Chip label={x} variant="outlined" />
              </Grid>
            })
          }
        </Grid>
      </CardContent>
      <CardActions sx={{padding: 2, justifyContent: 'end'}}>
        <a href={link}
          target="_blank"
          rel="noopener noreferrer">
          <button className='bg-background text-primary py-1 px-3 border border-primary rounded 
        hover:bg-primary hover:text-white hover:border-transparent hover:scale-110
        transition ease-in-out'>
            View Source Code
          </button>
        </a>
      </CardActions>
    </Card>
  );
}
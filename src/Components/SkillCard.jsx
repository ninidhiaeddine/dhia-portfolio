import Grid from '@mui/material/Grid';

export default function SkillCard({ Title, Icons }) {
    return (
        <div className="bg-secondary rounded">
            <p>{Title}</p>
            <Grid container spacing={1}>
            {
                Icons.map((Icon) => {
                    <Icon className="text-white hover:scale-110" size={40}/>
                })
            }
            </Grid>
        </div>
    );
}
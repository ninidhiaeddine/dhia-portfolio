import Grid from '@mui/material/Grid';

export default function SkillCard({ Title, Icons }) {
    return (
        <div className="bg-secondary rounded p-6 
        hover:-translate-y-1 hover:border hover:border-primary hover:bg-background transition-all ease-in-out duration-500">
            <p className='font-bold -translate-y-10 text-lg'>{Title}</p>
            <Grid container spacing={5}>
                {
                    Icons.map((Icon) => {
                        return <Grid item xs={1}>
                            <Icon className="text-white hover:scale-125 hover:animate-spin" size={30} />
                        </Grid>
                    })
                }
            </Grid>
        </div>
    );
}
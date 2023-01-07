import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SocialMediaBar from "../Components/SocialMediaBar";

export default function Contact() {
    return (
        <div className="text-center">
            <div className="text-primary font-bold text-5xl pt-8">Send me a message!</div>
            <div className="text-white text-xl pt-6 w-[22rem] m-auto">Got a question, proposal, or just want to say Hi? Go ahead!</div>
            <Stack spacing={2} sx={{ margin: 'auto', paddingTop: 2, width: 400 }}>
                <TextField id="filled-basic" label="Full Name" variant="filled" />
                <TextField id="filled-basic" label="Email Address" variant="filled" />
                <TextField
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    variant="filled"
                />

                <button className="bg-background text-primary py-2 px-4 mt-5 w-[25rem] border border-primary rounded 
        hover:bg-primary hover:text-white hover:border-transparent hover:scale-110
        transition ease-in-out">
                    Shoot
                </button>

                <div className='flex justify-center pt-6 pb-5'>
                    <SocialMediaBar />
                </div>
            </Stack>

        </div>
    );
}
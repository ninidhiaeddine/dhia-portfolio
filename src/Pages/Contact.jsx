import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SocialMediaBar from "../Components/SocialMediaBar";
import { useState, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);

    function resetForm() {
        setFullName('');
        setEmail('');
        setMessage('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // prepare email body:
        const body = {
            fullName,
            email,
            message
        }

        // open backdrop:
        setBackdropOpen(true);

        // send email:
        emailjs.send(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            body, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                setSuccessOpen(true);
                resetForm();
                setBackdropOpen(false);
            }, (error) => {
                setErrorOpen(true);
                setBackdropOpen(false);
            });
    }

    return (
        <div className="text-center">
            <div className="text-primary font-bold text-5xl pt-8">Send me a message!</div>
            <div className="text-white text-xl pt-6 w-[22rem] m-auto">Got a question, proposal, or just want to say Hi? Go ahead!</div>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{ margin: 'auto', paddingTop: 2, width: 400 }}>
                    <TextField label="Full Name" variant="filled" type="text" value={fullName}
                        onChange={(event) => setFullName(event.target.value)} />
                    <TextField label="Email Address" variant="filled" type='email' value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <TextField
                        label="Message"
                        type='text'
                        multiline
                        rows={4}
                        variant="filled"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />

                    <button className="bg-background text-primary py-2 px-4 mt-5 w-[25rem] border border-primary rounded 
        hover:bg-primary hover:text-white hover:border-transparent hover:scale-110
        transition ease-in-out"
                        type="submit">
                        Shoot
                    </button>

                    <div className='flex justify-center pt-6 pb-5'>
                        <SocialMediaBar />
                    </div>
                </Stack>
            </form>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropOpen} >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar open={successOpen} autoHideDuration={4000} onClose={() => setSuccessOpen(false)}>
                <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
                    Successfully sent the message!
                </Alert>
            </Snackbar>

            <Snackbar open={errorOpen} autoHideDuration={4000} onClose={() => setErrorOpen(false)}>
                <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
                    An error has occured while sending the message!
                </Alert>
            </Snackbar>
        </div>
    );
}
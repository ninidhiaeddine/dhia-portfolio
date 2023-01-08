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
    const initialState = {
        fullName: "",
        email: "",
        message: ""
    };

    const regexPatterns = {
        fullName: /^[a-zA-Z ]{3,}$/,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: /^[a-zA-Z0-9 ]{5,}$/,
    }

    const [input, setInput] = useState(initialState);

    const [validation, setValidation] = useState({
        fullName: true,
        email: true,
        message: true
    });

    // snackbars and backdrop open states:
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const handleChange = (e) => {

        setInput((oldState) => {
            return { ...oldState, [e.target.name]: e.target.value }
        })
        
        let targetRegex = regexPatterns[e.target.name];
        let targetString = String(input[e.target.name]);

        setValidation({
            ...validation,
            [e.target.name]: targetRegex.test(targetString),
        })
    }

    // function validateForm() {
    //     setValidation({
    //         fullName: input.fullName.length > 0,
    //         email: input.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) != null,
    //         message: input.message.length > 0
    //     })
    // }

    function resetForm() {
        setInput(initialState);
    }

    function formIsValid() {
        console.log(validation);
        return validation.fullName && validation.email && validation.message;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formIsValid() === false) {
            return;
        }

        // open backdrop:
        setBackdropOpen(true);
        /*
            // send email:
            emailjs.send(process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                input, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    setSuccessOpen(true);
                    resetForm();
                    setBackdropOpen(false);
                }, (error) => {
                    setErrorOpen(true);
                    setBackdropOpen(false);
                });*/
    }

    return (
        <div className="text-center">
            <div className="text-primary font-bold text-5xl pt-8">Send me a message!</div>
            <div className="text-white text-xl pt-6 w-[22rem] m-auto">Got a question, proposal, or just want to say Hi? Go ahead!</div>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{ margin: 'auto', paddingTop: 2, width: 400 }}>
                    <TextField label="Full Name" variant="filled" type="text" value={input.fullName} name="fullName"
                        onChange={handleChange}
                        error={!validation.fullName}
                        helperText={!validation.fullName && "Invalid Full Name."} />

                    <TextField label="Email Address" variant="filled" type='email' value={input.email} name="email"
                        error={!validation.email}
                        helperText={!validation.email && "Invalid Email Address."}
                        onChange={handleChange}

                    />
                    <TextField
                        error={!validation.message}
                        helperText={!validation.message && "Message must not be empty."}
                        label="Message"
                        type='text'
                        multiline
                        rows={4}
                        variant="filled"
                        value={input.message}
                        onChange={handleChange}
                        name="message"
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
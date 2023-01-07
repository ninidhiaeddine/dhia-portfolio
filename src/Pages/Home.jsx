import React from "react";
import SocialMediaBar from "../Components/SocialMediaBar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DhiaHero from "./Images/DhiaHero.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                    <div className="text-white text-2xl pt-16">Hi! I am</div>
                    <div className="font-bold text-primary text-6xl after:text-white after:content-['.']">Dhia Eddine Nini</div>
                    <div className="text-white w-[40rem] text-2xl pt-4 text-justify">A computer science senior who is passionate about <b>software engineering</b>, <b>game development</b>, and <b>music</b>.</div>

                    <Stack direction="row" spacing={2} sx={{paddingTop: 5}}>
                        <button className="bg-primary text-white py-2 px-4 border border-primary
            hover:text-primary hover:border-primary hover:bg-background rounded hover:scale-110
            transition ease-in-out"
            onClick={() => navigate('/Contact')}>
                            Contact Me
                        </button>
                        <button className="bg-background text-primary py-2 px-4 border border-primary rounded 
        hover:bg-primary hover:text-white hover:border-transparent hover:scale-110
        transition ease-in-out">
                            Resume
                        </button>
                    </Stack>


                    <div className="pt-7">
                        <SocialMediaBar />
                    </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src={DhiaHero} alt="Dhia's Picture" className="grayscale float-right"/>
            </Grid>
        </Grid>
    );
}
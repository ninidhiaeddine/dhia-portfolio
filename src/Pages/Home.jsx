import React, { useEffect, useState } from "react";
import SocialMediaBar from "../Components/SocialMediaBar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DhiaHero from "./Images/DhiaHero.png";
import DhiaRound from "./Images/DhiaRound.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const [image, setImage] = useState(window.innerWidth > 768 ? DhiaHero : DhiaRound);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setImage(window.innerWidth > 768 ? DhiaHero : DhiaRound);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, [])

    return (
        <div className="ml-10 mr-10 mb-24 md:mb-0">
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <div className="text-white text-2xl mt-24">Hi! I am</div>
                    <div className="font-bold text-primary text-6xl after:text-white after:content-['.']">Dhia Eddine Nini</div>
                    <div className="text-white md:mr-20 text-2xl pt-4 text-justify">A computer science senior who is passionate about <b>software engineering</b>, <b>game development</b>, and <b>music</b>.</div>

                    <Stack direction="row" spacing={2} sx={{ paddingTop: 5 }}>
                        <button className="bg-primary text-white py-2 px-4 border border-primary
            hover:text-primary hover:border-primary hover:bg-background rounded hover:scale-110
            transition ease-in-out"
                            onClick={() => navigate('Contact')}>
                            Contact Me
                        </button>
                        <a href="https://rxresu.me/ninidhia/dhia-eddine-nini"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="bg-background text-primary py-2 px-4 border border-primary rounded 
        hover:bg-primary hover:text-white hover:border-transparent hover:scale-110
        transition ease-in-out">
                                Resume
                            </button>
                        </a>
                    </Stack>


                    <div className="pt-7">
                        <SocialMediaBar />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={image} alt="Dhia" className="grayscale
                            rounded-full
                            md:rounded-none" />
                </Grid>
            </Grid>
        </div>
    );
}
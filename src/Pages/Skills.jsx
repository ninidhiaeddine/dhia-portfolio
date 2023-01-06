import SkillCard from "../Components/SkillCard";
import {
    SiTailwindcss,
    SiCss3,
    SiJavascript,
    SiMysql,
    SiJava,
    SiDotnet,
    SiUnity,
    SiPython,
    SiMicrosoftazure,
    SiFlask,
    SiFigma,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiBootstrap,
    SiMaterialdesign,
} from 'react-icons/si';
import { FaReact, FaDatabase, FaGithub } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiAndroid } from 'react-icons/di';
import Grid from "@mui/material/Grid";
import IconCplusplus from "../Icons/IconCPlusPlus";
import IconLanguageCsharp from "../Icons/IconCSharp";
import IconPostman from '../Icons/IconPostman';
import IconJson from '../Icons/IconJson';
import IconVolley from '../Icons/IconVolley';
import IconSqlite from "../Icons/IconSqlite";
import IconApi from "../Icons/IconApi";
import Stack from "@mui/material/Stack";

export default function Skills() {
    const webMobileSkillsIcons = [
        AiFillHtml5,
        SiCss3,
        SiTailwindcss,
        SiFlask,
        SiBootstrap,
        FaReact,
        IconPostman,
        IconJson,
        IconApi,
        DiAndroid,
        IconVolley];
    const gameSkillsIcons = [SiUnity];
    const generalSkillsIcons = [
        SiMysql,
        IconSqlite,
        SiDotnet,
        SiMicrosoftazure,
        SiFigma,
        SiMaterialdesign,
        SiAdobephotoshop,
        SiAdobepremierepro,
        FaDatabase,
        FaGithub];
    const programmingLanguagesIcons = [SiJava, SiPython, IconCplusplus, IconLanguageCsharp, SiJavascript,];

    return (
        <>
            <div className="text-primary font-bold text-5xl pt-8 text-center">Skills</div>
            <div className="m-20 mt-14">
                <Grid container columnSpacing={2} rowSpacing={4} >
                    <Grid item xs={4}>
                        <SkillCard Title="Web & Mobile" Icons={webMobileSkillsIcons} />
                    </Grid>

                    <Grid item xs={4}>
                        <SkillCard Title="General" Icons={generalSkillsIcons} />
                    </Grid>

                    <Grid item xs={4}>
                        <SkillCard Title="Game" Icons={gameSkillsIcons} />
                    </Grid>

                    <Grid item xs={12}>
                        <SkillCard Title="Programming Languages" Icons={programmingLanguagesIcons} />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
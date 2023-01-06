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
} from 'react-icons/si';
import { FaReact, FaDatabase, FaGithub } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiAndroid } from 'react-icons/di';

export default function Skills() {
    const webSkillsIcons = [
        AiFillHtml5,
        SiCss3,
        SiTailwindcss,
        SiJavascript,
        SiFlask,
        SiBootstrap,
        FaReact];
    const mobileSkillsIcons = [DiAndroid];
    const gameSkillsIcons = [SiUnity];
    const generalSkillsIcons = [
        SiMysql,
        SiDotnet,
        SiMicrosoftazure,
        SiFigma,
        SiAdobephotoshop,
        SiAdobepremierepro,
        FaDatabase,
        FaGithub];
    const programmingLanguagesIcons = [SiJava, SiPython];

    return (
        <>
            <SkillCard Title="Web" Icons={webSkillsIcons} />
            <SkillCard Title="Mobile" Icons={mobileSkillsIcons} />
            <SkillCard Title="Game" Icons={gameSkillsIcons} />
            <SkillCard Title="General" Icons={generalSkillsIcons} />
            <SkillCard Title="Programming Languages" Icons={programmingLanguagesIcons} />
        </>
    );
}
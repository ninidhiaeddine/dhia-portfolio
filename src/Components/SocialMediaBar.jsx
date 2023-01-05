import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import SocialMediaLink from './SocialMediaLink';

export default function SocialMediaBar() {
    const linkToLinkedIn = 'https://www.linkedin.com/in/ninidhiaeddine/';
    const linkToFacebook = 'https://www.facebook.com/DhiaEddineNini';
    const linkToInstagram = 'https://www.instagram.com/dhia.eddine.n/';
    const linkToGitHub = 'https://github.com/ninidhiaeddine';

    return (
        <Stack direction="row" spacing={2}>
            <SocialMediaLink Icon={LinkedInIcon} linkTo={linkToLinkedIn} />
            <SocialMediaLink Icon={GitHubIcon} linkTo={linkToGitHub} />
            <SocialMediaLink Icon={FacebookIcon} linkTo={linkToFacebook} />
            <SocialMediaLink Icon={InstagramIcon} linkTo={linkToInstagram} />
        </Stack>
    );
}
export default function SocialMediaLink({Icon, linkTo}) {
    return (
        <a href={linkTo} target="_blank" rel="noopener noreferrer" 
        className="transition ease-in-out hover:scale-150 hover:animate-pulse">
            <Icon sx={{color: 'white'}}/>
        </a>
    );
}
import SoloPic from './Images/ArtSoloPic.jpg';
import GroupPic from './Images/ArtGroupPic.jpg';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export default function Art() {
    const navigate = useNavigate();

    return (
        <>
            <div className="text-primary font-bold text-5xl pt-8 text-center">Art</div>
            <div className="mt-4 text-center text-white after:content-['_music!'] after:text-primary after:font-bold">
                I am currently pursuing a minor in
            </div>
            <div className="text-center text-white">Here are excerpts of my artistic works:</div>
            <img src={GroupPic} alt="" className="mt-4 rounded-xl grayscale w-[40rem] animate-pulse"></img>
            <img src={SoloPic} alt="" className="rounded-xl grayscale absolute z-10 w-[35rem]
            -translate-y-[15rem] right-0 -translate-x-[5rem]
            animate-pulse"></img>

            <div className='relative top-[35rem]'>
                <div className='bg-secondary pb-10'>
                    <div className='text-2xl text-center text-tertiary font-bold p-4'>Chamber Music Performance</div>
                    <div className='flex justify-center'>
                        <iframe width="700" height="394" src="https://www.youtube.com/embed/RNaKVZNk5-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='text-2xl text-center text-tertiary font-bold p-4'>Shoft Films</div>
                    <div className='flex justify-center'>
                        <iframe width="700" height="394" src="https://www.youtube.com/embed/No9A6AG1ym4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='bg-secondary mt-10 pb-5'>
                    <div className='text-2xl text-center text-tertiary font-bold p-4'>Piano Covers</div>
                    <div className='flex flex-col items-center'>
                        You can find them on my Instagram Reels section!
                        <a href="https://www.instagram.com/dhia.eddine.n/reels/" target="_blank" rel="noreferrer">
                            <button className="w-[15rem] mt-5 bg-tertiary text-black py-2 px-4 border border-tertiary
            hover:text-tertiary hover:border-tertiary hover:bg-background rounded hover:scale-110
            transition ease-in-out"
                            >
                                Watch on my IG profile!
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
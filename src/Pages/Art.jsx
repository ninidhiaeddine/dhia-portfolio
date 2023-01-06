import SoloPic from './Images/SoloPic.jpg';
import GroupPic from './Images/GroupPic.jpg';

export default function Art() {
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
                <div className='bg-secondary '>
                    <div className='text-2xl text-center text-tertiary text-bold p-4'>Chamber Music Performance</div>
                    <div className='flex justify-center'>
                        <iframe width="700" height="394" src="https://www.youtube.com/embed/RNaKVZNk5-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div>
                    <div className='text-2xl text-center text-white text-bold p-4'>Piano Covers</div>
                </div>

                <div className='bg-secondary '>
                    <div className='text-2xl text-center text-tertiary text-bold p-4'>Shoft Films</div>
                    <div className='flex justify-center'>
                        <iframe width="700" height="394" src="https://www.youtube.com/embed/No9A6AG1ym4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
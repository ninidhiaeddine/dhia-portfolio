import DashedLine from "../Components/DashedLine";
import CommunityYearlyWork from '../Components/CommunityYearlyWork';

export default function CommunityWork() {
    return (
        <>
            <div className="bg-secondary mt-10 pb-10 relative">
                <div className="text-tertiary font-bold text-5xl pt-8 text-center">Community Work & Volunteering</div>

                { /* 2023 Community Work */}
                <CommunityYearlyWork year="2023" />

                { /* 2022 Community Work */}
                <CommunityYearlyWork year="2022" />

                { /* 2020 Community Work */}
                <CommunityYearlyWork year="2020" />

                { /* 2019 Community Work */}
                <CommunityYearlyWork year="2019" />

                { /* vertical dashed lines */}
                <div className="absolute top-[10rem] left-[10rem] hidden lg:block">
                    <DashedLine length={2300} />
                </div>

                { /* horizontal dashed lines */}
                <div className="absolute top-[18rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>

                <div className="absolute top-[44rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>
                <div className="absolute top-[63rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>
                <div className="absolute top-[77.5rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>
                <div className="absolute top-[104.5rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>
                <div className="absolute top-[127.5rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>
                <div className="absolute top-[146.5rem] left-[10rem] hidden lg:block">
                    <DashedLine length={170} isVertical={false} />
                    <div className="h-4 w-[4rem] bg-tertiary rounded-full absolute -top-2 left-[9rem]
                    shadow-xl shadow-tertiary transform -rotate-90"></div>
                </div>
            </div>
            <div className="h-[9rem] md:h-0"></div>
        </>
    );
}
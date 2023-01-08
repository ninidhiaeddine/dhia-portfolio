import DashedLine from "../Components/DashedLine";
import CommunityYearlyWork from '../Components/CommunityYearlyWork';

export default function CommunityWork() {
    return (
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

            { /* vertical dashed lines */ }
            <div className="absolute top-[10rem] left-[10rem] hidden lg:block">
                <DashedLine length={2250}/>
            </div>

            { /* horizontal dashed lines */ }
            <div className="absolute top-[22rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            
            <div className="absolute top-[47rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[62rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[79rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[103rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[127rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[145rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
        </div>
    );
}
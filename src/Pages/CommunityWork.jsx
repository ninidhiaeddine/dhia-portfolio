import DashedLine from "../Components/DashedLine";
import CommunityYearlyWork from '../Components/CommunityYearlyWork';

// import data:
import { data } from '../Data/communityWork';

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
                <DashedLine length={1830}/>
            </div>

            { /* horizontal dashed lines */ }
            <div className="absolute top-[19rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            
            <div className="absolute top-[40rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[53rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[65rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[86rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[107rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
            <div className="absolute top-[120rem] left-[10rem] hidden lg:block">
                <DashedLine length={160} isVertical={false} />
                <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
            </div>
        </div>
    );
}
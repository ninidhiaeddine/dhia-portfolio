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
                <div className="absolute top-[22rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>

                <div className="absolute top-[47rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>
                <div className="absolute top-[65rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>
                <div className="absolute top-[81rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>
                <div className="absolute top-[105rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>
                <div className="absolute top-[131rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>
                <div className="absolute top-[149rem] left-[10rem] hidden lg:block">
                    <DashedLine length={160} isVertical={false} />
                    <div className="h-3 w-3 bg-white rounded-full absolute -top-1 left-[10rem]"></div>
                </div>
            </div>
            <div className="h-[8rem] md:h-0"></div>
        </>
    );
}
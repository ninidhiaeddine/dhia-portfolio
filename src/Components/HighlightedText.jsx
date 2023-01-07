export default function HighlightedText({text, highlightColor}) {
    return (
        <div className="mt-14 text-center">
            <svg width="85" height= "15" className={`fill-${highlightColor} z-0 
            hover:scale:150 transition ease-in-out`}>
                <rect width="100" height="100"  />
            </svg>
            <div className="text-4xl font-bold z-10 -translate-y-10">{text}</div> 
        </div>
    );
}
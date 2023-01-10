export default function HighlightedText({text, highlightColor}) {
    return (
        <div className="text-center flex justify-center my-10">
            <div className="w-3 h-fill bg-tertiary"></div>
            <div className="ml-2 text-4xl font-bold z-10">{text}</div> 
        </div>
    );
}
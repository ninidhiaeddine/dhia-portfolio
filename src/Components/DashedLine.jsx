export default function DashedLine({ length, thickness = 3, isVertical = true }) {
    return (
        <div style={{
            height: isVertical ? length : thickness,
            width: isVertical ? thickness : length,
            background: `repeating-linear-gradient(to ${isVertical ? "bottom" : "right"}, transparent, transparent 5px, white 5px, white 10px)`,
        }}>
        </div>
    );  
}
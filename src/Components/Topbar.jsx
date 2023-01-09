import { useNavigate } from "react-router-dom";

export default function TopBar() {
    let navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-fit mt-3" onClick={() => {
            navigate('/');
            navigate(0);
        }}>
            <div className="flex transition hover:scale-110 duration-300 ease-in-out animate-pulse">
                <div className="text-white text-2xl"><b>Dhia Eddine</b> Nini</div>
                <div className="font-bold text-primary text-2xl">.</div>
            </div>
        </div>
    );
}
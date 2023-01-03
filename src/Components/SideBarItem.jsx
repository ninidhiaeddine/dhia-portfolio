export default function SideBarItem(props) {
    const ItemIcon = props.icon;

    return (
        <div className="border-2 border-white rounded-full m-2">
            <ItemIcon sx={{ 
                color: 'white', 
                fontSize: 40,
                margin: 2 }}  />
        </div>
    );
}
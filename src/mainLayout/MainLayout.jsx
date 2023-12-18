import Navber from "../navber/Navber";
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;
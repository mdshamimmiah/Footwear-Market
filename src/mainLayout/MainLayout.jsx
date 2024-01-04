import Footer from "../footer/Footer";
import Navber from "../navber/Navber";
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet></Outlet>
          <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;
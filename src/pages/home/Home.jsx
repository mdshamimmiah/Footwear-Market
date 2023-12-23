import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import Brand from "./OurBrand/Brand";


const Home = () => {

  const AuthInfo = useContext(AuthContext);
  console.log(AuthInfo);
    return (
        <div className=" bg-black">
          {/* {AuthInfo.name} */}
          <Banner></Banner>
          <Brand></Brand>
        </div>
    );
};

export default Home;
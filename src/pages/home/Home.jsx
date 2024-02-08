import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import Brand from "./OurBrand/Brand";
import Category from "./Category/Category";
import Search from "./Search";


const Home = () => {

  const AuthInfo = useContext(AuthContext);
  console.log(AuthInfo);
    return (
        <div className=" bg-black">
          {/* {AuthInfo.name} */}
          <Banner></Banner>
          <Search></Search>
          <Brand></Brand>
          <Category></Category>
        </div>
    );
};

export default Home;
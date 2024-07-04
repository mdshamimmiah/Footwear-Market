import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import Brand from "./OurBrand/Brand";
import Category from "./Category/Category";
import Search from "./Search";
import Banner2 from "./Banner2/Banner2";
import About from "./about/About";


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
          <Banner2></Banner2>
          <About></About>
        </div>
    );
};

export default Home;
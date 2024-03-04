import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import Brand from "./OurBrand/Brand";
import Category from "./Category/Category";
import Search from "./Search";
import Banner2 from "./Banner2/Banner2";


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
        </div>
    );
};

export default Home;
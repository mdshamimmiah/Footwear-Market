import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
      <div className="pt-12">
          <div className=" w-64 min-h-screen bg-blue-300 mt-6 ">
            <h1 className="text-black text-2xl text-center pt-10 font-bold">Dashboard</h1>
        </div>
        <div className="">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />

                                        </div>
                                    </label>

                                </div>
          
      </div>
    );
};

export default Dashboard;
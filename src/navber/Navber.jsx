import { NavLink } from "react-router-dom";

const Navber = () => {

    const navlinks = <>
    <div className='flex gap-2'>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/'>Home Page</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/album'>Gallery page</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/trainer'>Trainer Page</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/login'>Login</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/register'>Register</NavLink></li>
        </div>

                        </>
    return (
        <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navber;
import { Link } from 'react-router-dom';
import img from '../../assets/undraw_access_account_re_8spm.svg'

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
    }
    return (
        <div>
          <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row ">
    <img className='w-[300px] shadow-[#f72e05]	shadow-2xl' src={img} alt="" />
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-[500px] max-w-sm shadow-[#f72e05]	shadow-2xl bg-black rounded-none">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
        
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center text-blue-600'>New to website? Please <Link to='/register'><button className='btn btn-outline text-white mb-4'>Register</button></Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
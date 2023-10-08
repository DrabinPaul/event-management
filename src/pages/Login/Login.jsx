import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'))
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content  flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <div className='flex justify-center pb-5'>
                                <img src="https://pro-theme.com/html/dvents/assets/media/general/ui-decor-1.png" alt="" />
                            </div>
                            <h1 className="text-5xl text-center font-bold"><span className='text-[#fe3e01]'>Login</span> now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <p className="text-center mt-5">Do not have an account<Link className="text-[#fe3e01] font-bold" to="/register"> Register</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#fe3e01] text-white">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
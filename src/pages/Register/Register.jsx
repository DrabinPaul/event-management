import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const location = useLocation();
    console.log('locaction login', location);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('email');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.error(error)
        })
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
                            <h1 className="text-5xl text-center font-extrabold"><span className='text-[#fe3e01]'>Register</span> your account now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
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
                                        <p className="text-center mt-5">Already have an account?<Link className="text-[#fe3e01] font-bold" to="/login"> Login</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#fe3e01] text-white">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;
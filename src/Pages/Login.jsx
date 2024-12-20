import Lottie from 'lottie-react'
import LoginAnimationData from '../assets/Lottie/login_lottie.json';
import React, { useContext } from 'react';
import AuthContext from '../Auth/Context/AuthContext';
import Social_login from './Common/Social_login';
import { data, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const {loginUser}=useContext(AuthContext)

    const navigate=useNavigate();
    const location = useLocation();
    const from=location.state || '/'

    const handleSignIn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email,password)
        .then(result=>{
            console.log('Sign In :', result.user.email);  
            const user={email: email};
            axios.post('http://localhost:5000/jwt',user, {withCredentials:true})
            .then(res=>{
                console.log(res.data);
               
            })
            // navigate(from)
        })
        .catch(error=>{
            console.log(error.message);
        })

     
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={LoginAnimationData}>

                    </Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Social_login/>
                </div>
            </div>
        </div>
    );
};

export default Login;
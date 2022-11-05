import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Login = () => {

    const {user,loginUser}=useContext(AuthContext)
    const location =useLocation()
    const navigate=useNavigate();
    const from=location?.state?.from?.pathname || '/';

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        loginUser(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            const currentUser={
                email:user.email
            }
            // get jst token
            fetch('https://y-five-pink.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
                
            })
            .then(res=>res.json())
            .then(data=>{
                // local storage is not the best place to store jwt token
                localStorage.setItem('token',data.token)
                navigate(from,{replace:true})
                
            })
        })
        .catch(err=>console.error(err));
    }
    // useEffect(()=>{
    //     if(user){
    //         navigate(from,{replace:true})
    //     }
    // },[navigate,from,user])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Create a new account.<Link className='btn btn-link' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
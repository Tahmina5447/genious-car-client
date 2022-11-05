import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signUpImg from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const SignUp = () => {
    const {createUser}=useContext(AuthContext);

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(err=>console.error(err));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signUpImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Sign Up  now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p>Already have an account? <Link className='btn btn-link' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
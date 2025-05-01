import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className=" mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form className="fieldset">
            <label className="label">Name : </label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Enter Your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
            //   name="email"
              placeholder="Enter Your Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Enter Your Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button onClick={handleRegister} className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p>
            Already have an account? Please
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;
import React, {useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "./Contexts/AuthContext";

const Login = () => {

  const {signInUser} = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);


    //login user
    signInUser(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })

  };
  return (
    <div className=" mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
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
          <button type="Submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
        <p>
          New to this site? Please{" "}
          <Link className="text-blue-500 underline" to="/register">
            Rigister
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

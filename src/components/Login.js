import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credential,setCredential] =useState({email:"",password:""});
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setCredential({...credential,[e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) =>{
        //prevent page refresh
        e.preventDefault();
        
        //fetch data from backend
        const response= await fetch("http://localhost:5500/api/auth/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        })
        const json = await response.json();
        console.log(json)
        //redirect to home page
        navigate("/");
    }

    return (

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label"> Email address </label>
                                    <input type="email" className="form-control" value={credential.email} id="email" name="email" onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"> Password</label>
                                    <input type="password" className="form-control" value={credential.password} id="password" name="password" onChange={handleChange} required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary"> Login </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

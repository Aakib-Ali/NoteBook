import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials,setCredentials] =useState({name:"", email:"", password:"", cpassword:""})
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value });
    }
    const handleSubmit =  async (e) =>{
        e.preventDefault();
        const {name , email , password} =credentials;
        const response= await fetch("http://localhost:5500/api/auth/createuser",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        const json = await response.json();
        console.log(json)
        //redirect to home page
        if(json.success === true)
            navigate("/");
        else{
            alert("invalid credentials");
        }
    }

  return (
    <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">SignUp</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="name" className="form-control" value={credentials.name} id="name" name="name" onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label"> Email address </label>
                                    <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"> Password</label>
                                    <input type="password" className="form-control" value={credentials.password} id="password" minLength={5} name="password" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
                                    <input type="password" className="form-control" value={credentials.cpassword} id="cpassword" minLength={5} name="cpassword" onChange={handleChange} required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary"> SignUp </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Signup

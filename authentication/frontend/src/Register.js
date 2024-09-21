import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Register(){

    const [ values, setValues] = useState({
        name : '',
        email : '',
        password : ''
    })

    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8082/register', values)
        .then(res => {
            console.log(res);
            navigate('/login')

        })
           
        .catch(err => console.log({err : 'Frontend post', error : err}))
    }

    return(
        <div className="d-flex bg-light justify-content-center align-items-center vh-100">
            <div className="bg-white rounded w-25 p-3 border border-success" >
                <form onSubmit={handleSubmit}>
                    <h3>Register Account</h3>
                    <label className="form-label">Name</label>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={e => setValues({...values, name: e.target.value})}
                    />
                    <label className="form-label">Email</label>
                    <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={e => setValues({...values, email: e.target.value})}
                    />
                    <label className="form-label">Password</label>
                    <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={e => setValues({...values, password: e.target.value})}
                    />
                    <button className="btn btn-success mt-3 mb-2 w-100 rounded-0 ">Register</button>

                    <p>If you had an account login</p>

                    <Link to={'/login'} className="btn btn-outline-primary border mt-1 w-100 rounded-0 ">Login</Link>

                </form>
            </div>
        </div>
    )
}

export default Register;
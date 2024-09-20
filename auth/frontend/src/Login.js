import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
function Login(){

    const [ values, setValues] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8082/login', values)
        .then(res => {
            if (res.data.Status === 'Success'){
            console.log(res)
            navigate('/')
        }
        else{
            console.log(res) 
            alert(res.data.Error)
            
        }

        })
           
        .catch(err => console.log({err : 'Error has occured', error:err}))
    }

    

    return(
        <div className="d-flex bg-light justify-content-center align-items-center vh-100">
            <div className="bg-white rounded w-25 p-3 border border-success" >
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <label className="form-label">Email</label>
                    <input
                    className="form-control"
                    type="email"
                    onChange={e => setValues({...values, email: e.target.value})}

                    />
                    <label className="form-label">Password</label>
                    <input
                    className="form-control"
                    type="password"
                    onChange={e => setValues({...values, password: e.target.value})}

                    />
                    <button className="btn btn-success mt-3 mb-2 w-100 rounded-0">Login</button>

                    <p>Please register if you dont have an account</p>

                    <Link to={'/register'} className="btn btn-outline-warning border mt-1 w-100 rounded-0 ">Register</Link>

                </form>
            </div>
        </div>
    )
}

export default Login;
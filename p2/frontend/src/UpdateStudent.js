

import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdateStudent(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.put('http://localhost:8081/update/'+id, {name, email})
            .then((res)=>{
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="d-flex align-items-center justify-content-center vh-100"> 
            <div className="w-50 bg-dark text-white p-3 rounded">
                <h3>Update Student</h3>
                <form onSubmit={handleSubmit}>
                    <label className="form-label m-2"> Name</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={e=>setName(e.target.value)}
                        placeholder="Name here ..."
                    />
                    <label className="form-label m-2"> Email</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="Email here ...."
                    />
                    <button className="btn btn-outline-success mt-4">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent
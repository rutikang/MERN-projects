import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function CreateStudent(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/create',{name, email})
            .then((res)=>{
                console.log(res);
                navigate('/');
            })
            .catch((err)=>console.log(err));
    }



    return(
        <>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Student</h2>
                        <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        </div>
                        <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                        type="text"
                        placeholder="Enter Email"
                        className="form-control"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        </div>
                        <button className="btn btn-success mt-2">Submit</button>
                    </form>
                </div>
                </div>        
        </>
    )
}

export default CreateStudent;
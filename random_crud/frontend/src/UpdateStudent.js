import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function UpdateStudent(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8082/update/'+id,{name, email})
            .then((res)=>{
                console.log(res);
                navigate('/');
            })
            .catch((err)=>{
                console.log(err)
            }) ;
        
    }

    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="w-50 bg-white p-5 rounded">
            <h3>Update Student</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                        type="text"
                        placeholder="Enter your name "
                        onChange={(e)=>{setName(e.target.value)}}
                        className="form-control"
                        />
                    </div>
                    <div className="mb-2"> 
                        <label htmlFor="">Email</label>
                        <input
                        type="text"
                        placeholder="Enter your Email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="form-control"
                        />
                    </div>
                    <button className="btn btn-success mt-2">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateStudent;
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Student(){

    const [student, setStudent] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/')
            .then((res)=>setStudent(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/student/'+id)
            window.location.reload()
        }
        catch(err){
            console.log(err)
        }
    }


    return(
        <div className="bg-white d-flex align-items-center justify-content-center vh-100">
            <div className="bg-dark w-50 p-3 rounded">
                <Link to={'/create'} className="btn btn-outline-success mb-3">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className="btn btn-outline-warning" >Update</Link>
                                        <button className="btn btn-outline-danger ms-2 " onClick={e=>handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student;
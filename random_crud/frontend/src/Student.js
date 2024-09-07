import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
function Student(){

    const [students, setStudents] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8082')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err))
    },[])

    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8082/student/'+id);
            window.location.reload();
        }
        catch(err){
            console.log(err)
        }
    }

    return(

    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">

        <div className="w-50 bg-white p-3 rounded "> 
            <Link to={'/create'} className="btn btn-success">Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((data,i)=>(
                            <tr key = {i}>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className="btn btn-primary mt-2 ">Update</Link>
                                    <button className="btn btn-danger mt-2 ms-2" onClick={(e)=>handleDelete(data.id)}>Delete</button>
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


export default Student
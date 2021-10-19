import React, {useState, useEffect} from "react";
import axios from "axios";
import Example from "./Example";
import UpdateData from "./src/updateData";





const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {

            try {
                const data = (await axios.get('http://localhost:5000/api/user')).data;
                setUsers(data)
            } catch (e) {
                console.log(e.error);
            }
        })()
    }, [])


    const handleDelete = async (person) => {
   await  axios.delete(`http://localhost:5000/api/user/${person._id}`).then(res=>{
         console.log(res);
         console.log(res.data);
         window.location.reload()

     });
    };



    return (
        <div>
            <Example/>
            <table className="table">
                <thead>
               <tr>
                   <th>UserName</th>
                   <th>Email</th>
                   <th>Address</th>
                   <th>action</th>
                   <th>Update</th>
               </tr>
                </thead>
                <tbody >
                {users.map(person => <tr key={person._id}>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>{person.address}</td>
                    <td>
                        <button onClick={() => handleDelete(person)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                    <td><UpdateData user={person}/></td>

                </tr>)}

                </tbody>
            </table>

        </div>

    );

}


export default Users;
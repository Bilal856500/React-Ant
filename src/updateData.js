import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";


const UpdateData=({user})=> {

    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([])
    const[name,setName]=useState(user.username);
    const[email,setEmail]=useState(user.email);
    const[password,setPassword]=useState(user.password);
    const[address,setAddress]=useState(user.address);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        setUsers(users)
        }
    , [users])
    // useEffect(() => {
    //     (async () => {

            // axios.get('http://localhost:5000/api/user')
            //     .then(res=>{
            //         setUsers(res.data)
            //     })
            //     .catch(error=>{
            //         console.log(error)
            //     })
    //         try {
    //             const data = (await axios.get(`http://localhost:5000/api/user/${users._id}`)).data;
    //             setUsers(data)
    //             setName(data.name)
    //             setAddress(data.address)
    //             setEmail(data.email)
    //             setPassword(data.password)
    //         } catch (e) {
    //             console.log(e.error);
    //         }
    //     })()
    // }, [])


//     const handleChange = async (users)=>{
//         handleShow();
// console.log(users)

    //     await axios.put(`http://localhost:5000/api/user/${users._id}`,{
    //         username:name,
    //         email:email,
    //         address:address,
    //         password:password
    //     }).then(res=>{
    //         console.log(res.data)
    //     })
    //
    // }
    const getData = (user) => {
        handleShow()


    }

    const  handleUpdate = (user) => {
        axios.patch(`http://localhost:5000/api/user/${user._id}`,{
            username:name,
            email:email,
            address:address,
            password:password
        }).then(res=>{
            console.log(res.data)
        })
        window.location.reload()


    }


    return (
        <div>
            <Button variant="primary" onClick={()=>{getData(user)}}>
                Update Data
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Entries</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*{users.}*/}
                    <label>UserName:</label>
                    <input type='text' value={name} onChange={e=>setName(e.target.value)}/>  <br/>
                    <label>Email:</label>
                    <input type='text' value={email}  onChange={e=>setEmail(e.target.value)} />  <br/>
                    <label>Password:</label>
                    <input type='password' value={password}  onChange={e=>setPassword(e.target.value)}/>  <br/>
                    <label>Address:</label>
                    <input type='text' value={address}  onChange={e=>setAddress(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={()=>handleUpdate(user)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default UpdateData;
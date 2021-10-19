import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Example=()=> {
    const [show, setShow] = useState(false);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[address,setAddress]=useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const handleChange = async ()=>{
       await axios.post('http://localhost:5000/api/user/register',{
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
            <Button variant="primary" onClick={handleShow}>
                Add Data
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Entries</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <Button variant="primary" onClick={handleChange}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Example;
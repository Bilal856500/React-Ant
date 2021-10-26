import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from "axios";

function Update({record}) {
    const [name, setName] = useState(record.username);
    const [email, setEmail] = useState(record.email);
    const [password, setPassword] = useState(record.password);
    const [address, setAddress] = useState(record.address);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const  handleOk = (record) => {
        axios.patch(`http://localhost:5000/api/user/${record._id}`,{
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
            <Button type="primary" onClick={showModal}>
                Update Data
            </Button>
            <Modal title="Updating  Data" visible={isModalVisible} onOk={()=>handleOk(record)} onCancel={handleCancel}>

                <label>UserName:</label>
                <input type='text' value={name} onChange={e => setName(e.target.value)}/> <br/>
                <label>Email:</label>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/> <br/>
                <label>Password:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/> <br/>
                <label>Address:</label>
                <input type='text' value={address} onChange={e => setAddress(e.target.value)}/>
            </Modal>
        </div>
    );
}

export default Update;
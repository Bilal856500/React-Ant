import React, {useState} from 'react';
import {Modal, Button} from 'antd';
import axios from "axios";


const AddData = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [error, setError] = useState('');

	const showModal = () => {
		setIsModalVisible(true);
	};


	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleOk = async () => {
		try {
			await axios.post('http://localhost:5000/api/user/register', {
				username: name,
				email: email,
				address: address,
				password: password
			});
			window.location.reload()
		} catch (e) {
			setError(e.response.data.error);
		}
	}

	return (
		<>
			<Button type="primary" onClick={showModal}>
				Add Data
			</Button>
			<Modal title="Adding New Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				<label>UserName:</label>
				<input type='text' value={name} onChange={e => setName(e.target.value)}/> <br/>
				<label>Email:</label>
				<input type='text' value={email} onChange={e => setEmail(e.target.value)}/> <br/>
				<label>Password:</label>
				<input type='password' value={password} onChange={e => setPassword(e.target.value)}/> <br/>
				<label>Address:</label>
				<input type='text' value={address} onChange={e => setAddress(e.target.value)}/>
			</Modal>
		</>
	);
};

export default AddData;
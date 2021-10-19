import React, {useState, useEffect} from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {Button} from "antd";
import AddData from "./addData";

function Ant(props) {


	const columns = [
		{
			title: "Username",
			dataIndex: "username",
		},

		{
			title: "Email",
			dataIndex: "email",
		},

		{
			title: "Address",
			dataIndex: "address",
		},

		{
			title: 'Action',
			render: (text, record) => <Button onClick={() => handleDelete(record._id)} danger>Delete</Button>
		},

	]

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


	const handleDelete = async (id) => {
		try {
			await axios.delete('http://localhost:5000/api/user/' + id);
			window.location.reload();
		} catch (e) {
			alert(e);
		}
	};

	return (
		<div>
			<AddData/>
			<Table columns={columns} dataSource={users} rowKey='_id'/>
		</div>
	);
}

export default Ant;
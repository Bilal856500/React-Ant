import React, {useState, useEffect} from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {Button} from "antd";
import AddData from "./addData";
import Update from "./update";

function Ant(props) {


    const columns = [
        {
            title:"Username",
            dataIndex:"username",
        },

        {
            title:"Email",
            dataIndex:"email",
        },

        {
            title:"Address",
            dataIndex:"address",
        },

        {
            title: 'Action',
            render: (text,record) =>  <Button onClick={() => handleDelete(record._id)} danger>Delete</Button>
        },

        {
            title: '',
            render: (text,record) =>  <Update record={record}/>
        },




    ]

    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {

            try {
                const data = (await axios.get('http://localhost:5000/api/user')).data;
               const value= data.filter(user=>user.isAdmin===false)
                setUsers(value)
                // console.log(value)
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

            {/*{users.filter(user=>user.isAdmin===users.isAdmin)}*/}


            <AddData/>

        <Table columns={columns} dataSource ={users} rowKey ='_id' pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}/>
        </div>
    );
}

export default Ant;
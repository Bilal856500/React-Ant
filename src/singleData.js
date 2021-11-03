import React, {useState, useEffect} from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {Button} from "antd";
import Update from "./update";
import Navbar from "./navbar";

function SingleData(props) {
    const [value, setValue] = useState([]);
    const [info, setInfo] = useState('');
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
            render: (text, record) => {
                setInfo(record._id);
            }
        },

    ];
    useEffect(async () => {
        try {
            const data = (await axios.get('http://localhost:5000/api/user/' + props.match.params.email)).data;
            setValue(prevArray => [...prevArray, data])
        } catch (e) {
            console.log(e.error);
        }
    }, [])
    return (
        <div>
            <Navbar logout={true}/>
            <Table columns={columns} dataSource={value} rowKey='_id'/>

        </div>
    );
}

export default SingleData;
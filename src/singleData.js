import React, {useState, useEffect} from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {Button} from "antd";
import Update from "./update";

function SingleData(props) {
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


    ]
    return (
        <div>

        </div>
    );
}

export default SingleData;
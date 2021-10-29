import React,{useState} from 'react';
import { Form, Input, Button } from 'antd';
import axios from "axios";
import Ant from "./ant";

function Login(props) {
    const[email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const[value,setValue]=useState('');
    const [error,setError]=useState('');
    const Login = async (values) => {    try {
     const info = (await axios.post('http://localhost:5000/api/user/login', {
         email: email,
         password: password
     })).data;
     setValue(info)
        console.log(info)

    } catch (e) {
        setError(e.response.data)

    }

        // console.log('Success:', values);
    };
    return (
        <div>
            <Form
                // name="basic"
                labelCol={{
                    span: 8
                }}
                wrapperCol={{
                    span: 16,
                }}

                onFinish={Login}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                            type:"email"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            {value.isAdmin?<Ant/>:<p>{value.user}</p>}

        </div>
    );
}

export default Login;

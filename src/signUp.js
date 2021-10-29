import React, {useState} from 'react';
import { Form, Input, Button ,Checkbox} from 'antd';
import axios from "axios";

function SignUp(props) {
    const[email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const[address,setAddress] = useState('');
    const [name,setName]=useState('');
    const[admin,setAdmin]=useState(false);
    const onFinish = async (values) => {
        try {
          const info =  (await axios.post('http://localhost:5000/api/user/register', {
              username: name,
              email: email,
              address: address,
              password: password,
              isAdmin: admin
          })).data;
          console.log(info)

        } catch (e) {
            // setError(e.response.data.error);+
            console.log(e)

        }

        // console.log('Success:', values);
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8
                }}
                wrapperCol={{
                    span: 16,
                }}
                // initialValues={{
                //     remember: true,
                // }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"
            >
                <Form.Item
                    label="UserName"
                    name="username"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


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
                    label="Address"
                    name="address"
                    value={address}
                    onChange={e=>setAddress(e.target.value)}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    defaultChecked={admin}
                    onChange={() => setAdmin(!admin)}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Admin</Checkbox>
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

        </div>
    );
}

export default SignUp;
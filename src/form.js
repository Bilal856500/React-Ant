
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Formik = () => {

    return (
        <div>
            <Form>
                <Form.Item
                    label="Username"
                    allowClear
                    name="username"

                    rules={[
                        {
                            required: true,
                            prefix:{UserOutlined},
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
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
                    name="remember"
                    valuePropName="checked"
                    // wrapperCol={{
                    //     offset: 8,
                    //     span: 16,
                    // }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    // wrapperCol={{
                    //     offset: 8,
                    //     span: 16,
                    // }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Formik;
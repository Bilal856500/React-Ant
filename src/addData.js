import React, {useState} from 'react';
import {Modal, Button, Form, Input} from 'antd';
import axios from "axios";
import {Formik} from "formik";
import * as Yup from 'yup';

const schemaObj = Yup.object().shape({
    username: Yup.string().min(6).required(),
    password: Yup.string().required().min(6),
    email: Yup.string().required().email(),
    address: Yup.string().required()
});


const AddData = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [address, setAddress] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [error, setError] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {

        // console.log(data)
        setIsModalVisible(false);
    };

    const handleSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/user/register', {
                username: data.username,
                email: data.email,
                address: data.address,
                password: data.password
            });
            window.location.reload()
        } catch (e) {
            // setError(e.response.data.error);+
            console.log(e)

        }
        // console.log(data)

    }


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Data
            </Button>
            <Modal title="Adding New Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {/*{error ? <p style={{color: 'red'}}>{error}</p> : null}*/}
                <Formik initialValues={{username: '', address: '', password: '', email: ''}}
                        validationSchema={schemaObj} onSubmit={handleSubmit}>
                    {({touched, handleChange, errors, values, handleBlur, handleSubmit}) => {
                        // console.log(values)
                        // console.log(errors)

                        return (
                            <div className="container">

                                <Form

                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    onFinish={handleSubmit}
                                >
                                    <Form.Item
                                        label="Email"
                                        onChange={handleChange}
                                        value={values.email} onBlur={handleBlur}
                                    >
                                        <Input name={"email"} placeholder={"email"}/>
                                        {errors.email && touched.email &&
                                        <p style={{color: "red"}} className={"error"}>{errors.email}</p>}

                                    </Form.Item>
                                    <Form.Item
                                        label="UserName"
                                        onChange={handleChange}
                                        value={values.username}
                                        onBlur={handleBlur}
                                    >
                                        <Input name={"username"}/>
                                        {errors.username && touched.username &&
                                        <p style={{color: "red"}} className={"error"}>{errors.username}</p>}

                                    </Form.Item>

                                    <Form.Item
                                        label={"Password"}
                                        placeholder="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <Input.Password name={"password"}/>
                                        {errors.password && touched.password &&
                                        <p style={{color: "red"}} className={"error"}>{errors.password}</p>}
                                    </Form.Item>

                                    <Form.Item
                                        label={"Address"}
                                        placeholder="confirmPassword"
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <Input name={"address"}/>
                                        {errors.address && touched.address &&
                                        <p style={{color: "red"}} className={"error"}>{errors.address}</p>}
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType={"submit"}>
                                            Submit
                                        </Button>
                                    </Form.Item>


                                </Form>
                            </div>
                        )
                    }}

                </Formik>

                {/*<label>UserName:</label>*/}
                {/*<input type='text' value={name} onChange={e => setName(e.target.value)}/> <br/>*/}
                {/*<label>Email:</label>*/}
                {/*<input type='text' value={email} onChange={e => setEmail(e.target.value)}/> <br/>*/}
                {/*<label>Password:</label>*/}
                {/*<input type='password' value={password} onChange={e => setPassword(e.target.value)}/> <br/>*/}
                {/*<label>Address:</label>*/}
                {/*<input type='text' value={address} onChange={e => setAddress(e.target.value)}/>*/}
            </Modal>
        </>
    );
};

export default AddData;
import React from 'react';
import './antedForm.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {Formik} from "formik";
import * as Yup from 'yup';
import { Select } from 'antd';
const { Option } = Select;

const schemaObj = Yup.object().shape({
    username:Yup.string().required().min(6),
    password:Yup.string().required().min(6),
});

function LoginForm(props) {
    return(<>
            <Formik initialValues={{username:"",password:""}} validationSchema={schemaObj} onSubmit={(data)=>console.log(data)}>
                {({handleSubmit ,touched,handleChange ,errors,values,handleBlur})=>{
                    console.log(values)
                    // console.log(errors)

                    return(
                        <div className="container">

                            <Form
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                onSubmit={handleSubmit}
                            >

                                <Form.Item
                                    label="UserName"
                                    onChange={handleChange}
                                    value = {values.username}
                                    onBlur={handleBlur}
                                >
                                    <Input  name={"username"}/>
                                    {errors.username&&touched.username&&<p  style={{color: "red"}} className={"error"}>{errors.username}</p> }

                                </Form.Item>

                                <Form.Item
                                    label={"Password"}
                                    placeholder="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <Input.Password name={"password"} />
                                    {errors.password&&touched.password&&<p style={{color: "red"}} className={"error"}>{errors.password}</p> }
                                </Form.Item>

                                <Form.Item>
                                    <Select defaultValue="user" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="admin">Admin</Option>
                                        <Option value="user">User</Option>

                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType={"submit"} >
                                    Login
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    )
                }}

            </Formik>

        </>
    );

}

export default LoginForm;
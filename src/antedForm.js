// import React from 'react';
// import './antedForm.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import {Formik} from "formik";
// import * as Yup from 'yup';
//
//
// const schemaObj = Yup.object().shape({
//     username:Yup.string().required().min(6),
//     password:Yup.string().required().min(6),
//     email:Yup.string().required().email(),
//     address:Yup.string().required()
// });
//
// function AntedForm(props) {
//     return(<>
//             <Formik initialValues={{username:"",address:"",password:"",email:''}} validationSchema={schemaObj} onSubmit={(data)=>console.log(data)}>
//                 {({touched,handleChange ,errors,values,handleBlur})=>{
//                     console.log(values)
//                     // console.log(errors)
//
//                     return(
//                         <div className="container">
//
//                             <Form
//                                 labelCol={{
//                                     span: 8,
//                                 }}
//                                 wrapperCol={{
//                                     span: 16,
//                                 }}
//                             >
//                                 <Form.Item
//                                     label="Email"
//                                     onChange={e => setEmail(e.target.value)}
//                                     value = {values.email } onBlur={handleBlur}
//                                 >
//                                     <Input  name={"email"} placeholder={"email"}/>
//                                     {errors.email&&touched.email&&<p style={{color: "red"}} className={"error"}>{errors.email}</p> }
//
//                                 </Form.Item>
//                                 <Form.Item
//                                     label="UserName"
//                                     onChange={e => setName(e.target.value)}
//                                     value = {values.username}
//                                     onBlur={handleBlur}
//                                 >
//                                     <Input  name={"username"}/>
//                                     {errors.username&&touched.username&&<p  style={{color: "red"}} className={"error"}>{errors.username}</p> }
//
//                                 </Form.Item>
//
//                                 <Form.Item
//                                     label={"Password"}
//                                     placeholder="password"
//                                     value={values.password}
//                                     onChange={e => setPassword(e.target.value)}
//                                     onBlur={handleBlur}
//                                 >
//                                     <Input.Password name={"password"} />
//                                     {errors.password&&touched.password&&<p style={{color: "red"}} className={"error"}>{errors.password}</p> }
//                                 </Form.Item>
//
//                                 <Form.Item
//                                     label={"Address"}
//                                     placeholder="confirmPassword"
//                                     value={values.address}
//                                     onChange={e => setAddress(e.target.value)}
//                                     onBlur={handleBlur}
//                                 >
//                                     <Input name={"address"} />
//                                     {errors.address&&touched.address&&<p style={{color: "red"}} className={"error"}>{errors.address}</p> }
//                                 </Form.Item>



//
//                             </Form>
//                         </div>
//                     )
//                 }}
//
//             </Formik>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//         {/*<Formik initialValues={{username:"",address:"",password:"",email:''}} validationSchema={schemaObj} onSubmit={(data)=>console.log(data)}>*/}
//         {/*    {({handleSubmit ,touched,handleChange ,errors,values,handleBlur})=>{*/}
//         {/*        console.log(values)*/}
//         {/*        // console.log(errors)*/}
//
//         {/*        return(*/}
//         {/*            <div className="container">*/}
//
//         {/*                <Form*/}
//         {/*                    labelCol={{*/}
//         {/*                        span: 8,*/}
//         {/*                    }}*/}
//         {/*                    wrapperCol={{*/}
//         {/*                        span: 16,*/}
//         {/*                    }}*/}
//         {/*                    onSubmit={handleSubmit}*/}
//         {/*                >*/}
//         {/*                    <Form.Item*/}
//         {/*                        label="Email"*/}
//         {/*                        onChange={handleChange}*/}
//         {/*                        value = {values.email}*/}
//         {/*                        onBlur={handleBlur}*/}
//         {/*                    >*/}
//         {/*                        <Input  name={"email"} placeholder={"email"}/>*/}
//         {/*                        {errors.email&&touched.email&&<p style={{color: "red"}} className={"error"}>{errors.email}</p> }*/}
//
//         {/*                    </Form.Item>*/}
//         {/*                    <Form.Item*/}
//         {/*                        label="UserName"*/}
//         {/*                        onChange={handleChange}*/}
//         {/*                        value = {values.username}*/}
//         {/*                        onBlur={handleBlur}*/}
//         {/*                    >*/}
//         {/*                        <Input  name={"username"}/>*/}
//         {/*                        {errors.username&&touched.username&&<p  style={{color: "red"}} className={"error"}>{errors.username}</p> }*/}
//
//         {/*                    </Form.Item>*/}
//
//         {/*                    <Form.Item*/}
//         {/*                        label={"Password"}*/}
//         {/*                        placeholder="password"*/}
//         {/*                        value={values.password}*/}
//         {/*                        onChange={handleChange}*/}
//         {/*                        onBlur={handleBlur}*/}
//         {/*                    >*/}
//         {/*                        <Input.Password name={"password"} />*/}
//         {/*                        {errors.password&&touched.password&&<p style={{color: "red"}} className={"error"}>{errors.password}</p> }*/}
//         {/*                    </Form.Item>*/}
//
//         {/*                    <Form.Item*/}
//         {/*                        label={"Address"}*/}
//         {/*                        placeholder="confirmPassword"*/}
//         {/*                        value={values.address}*/}
//         {/*                        onChange={handleChange}*/}
//         {/*                        onBlur={handleBlur}*/}
//         {/*                    >*/}
//         {/*                        <Input name={"confirmPassword"} />*/}
//         {/*                        {errors.address&&touched.address&&<p style={{color: "red"}} className={"error"}>{errors.address}</p> }*/}
//         {/*                    </Form.Item>*/}
//         {/*                    <Form.Item*/}
//         {/*                        name="remember"*/}
//         {/*                        valuePropName="checked"*/}
//         {/*                        wrapperCol={{*/}
//         {/*                            offset: 8,*/}
//         {/*                            span: 16,*/}
//         {/*                        }}*/}
//         {/*                    >*/}
//         {/*                        <Checkbox>Remember me</Checkbox>*/}
//         {/*                    </Form.Item>*/}
//
//         {/*                    <Form.Item*/}
//         {/*                        wrapperCol={{*/}
//         {/*                            offset: 8,*/}
//         {/*                            span: 16,*/}
//         {/*                        }}*/}
//         {/*                    >*/}
//         {/*                        <Button type="primary" htmlType={"submit"} >*/}
//         {/*                            Submit*/}
//         {/*                        </Button>*/}
//         {/*                    </Form.Item>*/}
//         {/*                </Form>*/}
//         {/*            </div>*/}
//         {/*        )*/}
//         {/*    }}*/}
//
//         {/*</Formik>*/}
//
//         </>
//     );
//
// }
//
// export default AntedForm;
import React from 'react';
import {Formik} from "formik";
import * as Yup from 'yup';
import {Button} from "react-bootstrap";

const schema = Yup.object().shape(
    {
    username:Yup.string().required().min(6),
    email:Yup.string().required().email(),
    password:Yup.string().required().min(8)
});
function Data(props) {
    return (
        <div>
            <Formik validationSchema={schema} initialValues={{username:"",email:"",password:""}} onSubmit={(values,{setSubmitting})=>{
                console.log("submitting values",values)
            } }>
                {props=>{
                    const{
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        touched

                    }=props

                    console.log(errors)
                    console.log(values)

                    return(
                        <div>
                            <form autoComplete="off" onSubmit={handleSubmit}>
                            <label htmlFor="username">User Name :</label>
                            <input type="text"  value={values.username}  name={'username'} onChange={handleChange} placeholder="Username"/><br/>
                                {errors.username && touched.username && <p className={'error'}>{errors.username}</p>}
                            <label htmlFor="email">Email :</label>
                            <input type="text" value={values.email}  onChange={handleChange} name={'email'} placeholder="Email"/><br/>
                                {errors.email && touched.email && <p className={'error'}>{errors.email}</p>}
                            <label htmlFor="password">Password :</label>
                            <input type="password" value={values.password}  name={'password'} onChange={handleChange}  placeholder="Password"/><br/>
                                {errors.password && touched.password && <p className={'error'}>{errors.password}</p>}
                           <Button type='submit'>Log In</Button>
                        </form>
                        </div>
                    )

                }}

            </Formik>
        </div>
    );
}

export default Data;
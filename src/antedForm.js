import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Formik} from "formik";
import * as Yup from 'yup';

const schemaObj = Yup.object().shape({
	username:Yup.string().required().min(6),
	password:Yup.string().required().min(6),
	email:Yup.string().required().email(),
	confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'password must match').required()
});
function AntedForm(props) {
	return(
		<Formik initialValues={{username:"",confirmPassword:"",password:"",email:''}} validationSchema={schemaObj} onSubmit={(data)=>console.log(data)}>
			{({handleSubmit ,touched,handleChange ,errors,values,handleBlur})=>{
				console.log(values)
				// console.log(errors)

				return(
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
							label="Email"
							onChange={handleChange}
							value = {values.email}
							onBlur={handleBlur}
						>
							<Input  name={"email"} placeholder={"email"}/>
							{errors.email&&touched.email&&<h1 style={{color: "red"}} className={"error"}>{errors.email}</h1> }

						</Form.Item>
						<Form.Item
							label="UserName"
							onChange={handleChange}
							value = {values.username}
							onBlur={handleBlur}
						>
							<Input  name={"username"}/>
							{errors.username&&touched.username&&<h1  style={{color: "red"}} className={"error"}>{errors.username}</h1> }

						</Form.Item>

						<Form.Item
							label={"Password"}
							placeholder="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						>
							<Input.Password name={"password"} />
							{errors.password&&touched.password&&<h1 style={{color: "red"}} className={"error"}>{errors.password}</h1> }
						</Form.Item>

						<Form.Item
							label={"Confirm-Password"}
							placeholder="confirmPassword"
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
						>
							<Input.Password name={"confirmPassword"} />
							{errors.confirmPassword&&touched.confirmPassword&&<h1 style={{color: "red"}} className={"error"}>{errors.confirmPassword}</h1> }
						</Form.Item>

						<Form.Item
							name="remember"
							valuePropName="checked"
							wrapperCol={{
								offset: 8,
								span: 16,
							}}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<Form.Item
							wrapperCol={{
								offset: 8,
								span: 16,
							}}
						>
							<Button type="primary" htmlType={"submit"} >
								Submit
							</Button>
						</Form.Item>
					</Form>
				)
			}}

		</Formik>
	);

}

export default AntedForm;
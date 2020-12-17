import React, { useState } from "react";
import BaseForm from "./common/form";
import {login} from "../services/auth";
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';


const fieldDetails = [
    {
        name: "email", label: "Email", required: true, placeholder: "Please enter your email!", type: "text"
    },
    {
        name: "password", label: "Password", required: true, placeholder: "Please enter your password!", type: "password"
    }

]
const Login = () => {

    const [data] = useState({email:"",password:""});

    const doSubmit = ({email, password})=>{
        console.log(email,password)
        try{
            const user = login(email,password);
            alert(`Welcome to Form Builder ${user}`)
             
            window.location = "/dashboard";
        }catch(ex){
            console.log(ex);
        }
    }

    const handleChange = ({currentTarget: input}) => {
        console.log(input.value,input.type)

        if(!input.value){
            input.placeholder = ""
            return
        }

     }

    return(
    <Layout.Content style={{marginTop:"2%"}} >
        <Row >
            <Col style={{border:"1px solid black",height:"400px"}} id="login" xs={20} sm={15} lg={7} xl={7} >
                <h1 style={{marginLeft:"45%",marginBottom:"10%"}}>Login</h1>
                <div style={{marginLeft:"20%"}}>
                    <BaseForm  handleChange={handleChange} data={data} fieldDetails={fieldDetails} doSubmit={doSubmit} submitable={true}  btnText={"login >"}/>
                </div>
            </Col>
        </Row>
    </Layout.Content>
    )
}

Login.propTypes = {
    location: PropTypes.object
}

export default Login;
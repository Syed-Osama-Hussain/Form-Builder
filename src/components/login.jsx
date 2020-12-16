import React, { useState } from "react";
import BaseForm from "./common/form";
import {login} from "../services/auth";
import { Layout } from 'antd';

const Login = () => {

    const [data, setData] = useState({email:"",password:""});

    const doSubmit = (data)=>{
        try{
            const email = login(data.email,data.password);
            alert(`Welcome to Form Builder ${email}`)

            //Temporary. Will be replaced by redirect
            window.location.reload();
        }catch(ex){
            console.log(ex);
        }
    }


    return(
    <Layout.Content className="site-layout" style={{marginTop:"2%"}} >
        <h1 style={{marginLeft:"45%"}}>Login</h1>
        <BaseForm data={data} doSubmit={doSubmit} submitable={true} setData={setData} btnText={"login >"}/>
    </Layout.Content>
    )
}

export default Login;
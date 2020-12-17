import React, { useState } from "react";
import NavBar from "./navbar";
import { Layout, Row, Col, Button } from 'antd';
import SelectComp from './common/select';
import InputComp from './common/input';
import BaseForm from "./common/form";
import { getUser } from "../services/auth";
import { Redirect } from "react-router";

const options = ["Text","Number","Checkbox"]

const Dashboard = () => {

    const user = getUser()
    if(!user) return <Redirect to="/login"/>

    let data = {}
    const [fieldDetails,setFieldDetails] = useState([]);

    const [previewDisabled,setPreviewDisabled] = useState(true);

    const handleChange = ({currentTarget: input}) => {
        if(!input.value) {
            setPreviewDisabled(true)
            return
        }

        setPreviewDisabled(false)
    }

    const handleChangeSelect = (value) =>{
        const field = fieldDetails.find(detail => { return detail.type == value.toLowerCase()})
        if(field){
            alert(`Field of ${value} is already added.`)
            return;
        }

        let newField = {name: `question${fieldDetails.length+1}`, label:`Question ${fieldDetails.length+1}`, required: false, placeholder: "", type: value.toLowerCase()}
        
        const newFieldData = [...fieldDetails,newField]; 
        
        setFieldDetails(newFieldData)
    }
    return(<div>
        <NavBar/>

        <Layout.Content style={{marginTop:"2%"}} >
            <Row >
            <Col xs={20} sm={15} lg={7} xl={1}></Col>
            <Col id="login" xs={20} sm={15} lg={7} xl={7} >
                <SelectComp onChange={handleChangeSelect} options={options}/>
                <Button style={{marginLeft:"5px"}} disabled={previewDisabled} type="primary" htmlType="button">
                Preview
                </Button>
                <div style={{marginTop:"10%"}}>
                    <InputComp name={"title"} label={""} required={true} placeholder={"Enter Form Title"} type={"text"} onChange={handleChange}/>
                </div>
                <div style={{border:"1px solid #d9d9d9",marginTop: "-25px", height: "273px"}}>
                    <div style={{marginLeft:"10%",marginTop:"5%"}}>
                    <BaseForm  data={data} fieldDetails={fieldDetails} submitable={false} btnText={"login >"}/>
                    </div>
                </div>
            </Col>
            </Row>
        </Layout.Content>

    </div>)
}

export default Dashboard;
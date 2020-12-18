import React, { useState } from "react";
import NavBar from "./navbar";
import { Layout, Row, Col, Button } from 'antd';
import SelectComp from './common/select';
import InputComp from './common/input';
import BaseForm from "./common/form";
import DisplayModal from "./displayModal";
import { getUser } from "../services/auth";
import { Redirect } from "react-router";

const options = ["Text","Number","Checkbox"]

const Dashboard = () => {

    const user = getUser()
    if(!user) return <Redirect to="/login"/>

    const [title, setTitle] = useState("");

    const [data,setData] = useState({});

    const [fieldDetails,setFieldDetails] = useState([]);

    const [previewDisabled,setPreviewDisabled] = useState(true);

    const [editMode,setEditmode] = useState(true);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const doSubmit = (values) =>{
        const fieldData = {}
        for(let i=0;i<fieldDetails.length;i++){
            if(fieldDetails[i].type === "checkbox" && !values[fieldDetails[i].name ]){
                fieldData[fieldDetails[i].label] = false;    
            }else{
                fieldData[fieldDetails[i].label] = values[fieldDetails[i].name];
            }
        }
        setData(fieldData)
        setIsModalVisible(true)
    }

    const handleChangeTitle = ({currentTarget: input}) => {
        setTitle(input.value);
        if(!input.value) {
            setPreviewDisabled(true)
            return
        }

        setPreviewDisabled(false)
    }

    const handleChangeFields = (value) => {
        if(value.target && value.target.type === "checkbox"){
            value.target.value = value.target.checked
        }
    }

    const handleChangeSelect = (value) =>{
        let newField = {name: `question${fieldDetails.length+1}`, label:`Question ${fieldDetails.length+1}`, required: false, placeholder: "", type: value.toLowerCase()}
        
        const newFieldData = [...fieldDetails,newField]; 
        setFieldDetails(newFieldData)
    }

    const handleClick = () =>{
        setEditmode(false)
    }

    const height = fieldDetails.length > 2 ? "auto": "273px";

    return(<div>
        <DisplayModal title={title} data={data} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}/>
        <NavBar/>

        <Layout.Content style={{marginTop:"2%"}} >
            <Row >
            <Col xs={20} sm={15} lg={7} xl={1}></Col>
            <Col id="dashboard" xs={20} sm={15} lg={7} xl={7} >
            {editMode &&  <React.Fragment>  <SelectComp onChange={handleChangeSelect} options={options}/>
                <Button onClick={handleClick} style={{marginLeft:"5px"}} disabled={previewDisabled} type="primary" htmlType="button">
                Preview
                </Button></React.Fragment>}
                <div style={{marginTop:"10%"}}>
                    <InputComp name={"title"} label={""} required={true} placeholder={"Enter Form Title"} type={"text"} onChange={handleChangeTitle}/>
                </div>
                <div style={{border:"1px solid #d9d9d9",marginTop: "-25px", height: height}}>
                    <div style={{marginLeft:"10%",marginTop:"5%"}}>
                    <BaseForm doSubmit={doSubmit} handleChange={handleChangeFields} data={data} fieldDetails={fieldDetails} submitable={!editMode} btnText={"Submit"}/>
                    </div>
                </div>
            </Col>
            </Row>
        </Layout.Content>

    </div>)
}

export default Dashboard;
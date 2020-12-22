import React, { useState } from "react";
import NavBar from "./navbar";
import { Layout } from 'antd';
import DisplayModal from "./displayModal";
import { getUser } from "../services/auth";
import { Redirect } from "react-router";
import SideBar from "./sideBar";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import MainContent from "./content";


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
        fieldDetails.map((field) => {
            if(field.type === "checkbox" && !values[field.name]){
                fieldData[field.label] = false;
                return
            }
            
            if(field.type === "select"){
                fieldData[field.label] = [];
                return
            }

            fieldData[field.label] = values[field.name];            
        })
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

    const handleDrop = (value) =>{
        let newField = {name: `question${fieldDetails.length+1}`, label:`Question ${fieldDetails.length+1}`, required: false, placeholder: "", type: value.toLowerCase()}
        
        const newFieldData = [...fieldDetails,newField]; 
        setFieldDetails(newFieldData)
    }

    const handleClick = () =>{
        setEditmode(false)
    }


    return(
    <DndProvider backend={HTML5Backend}>
        <div>
            <DisplayModal title={title} data={data} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}/>
            
            <NavBar/>
            
            <Layout className="site-layout-background" style={{ padding: '0px 0', paddingTop:"0px", backgroundColor:"#001529" }}>            
                <SideBar/>
                
                <MainContent handleDrop={handleDrop} previewDisabled={previewDisabled} editMode={editMode} doSubmit={doSubmit} handleChangeTitle={handleChangeTitle} handleClick={handleClick} data={data} fieldDetails={fieldDetails}/>
            </Layout>

        </div>
    </DndProvider>)
}

export default Dashboard;
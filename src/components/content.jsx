import React from "react"
import FormItemComp from './common/formItem';
import DropWrapper from "./dropWrapper";
import { Layout, Row, Col, Button } from 'antd';
import PropTypes from "prop-types";

const MainContent = ({handleDrop, editMode, handleClick, previewDisabled, handleChangeTitle, doSubmit, data, fieldDetails}) => {

    return(
        <Layout.Content className="site-layout-background" style={{padding:'20px',margin: 0, minHeight: 280,marginTop:"2%"}} >
                <Row style={{backgroundColor: "#001529", paddingTop: "20px", marginTop:"-2%"}}>
                    <Col xs={2} sm={5} lg={7} xl={1}></Col>
                    <Col id="dashboard" xs={22} sm={19} lg={9} xl={9} >
                        {editMode &&  
                        <React.Fragment>  
                            <Button onClick={handleClick} style={{marginLeft:"38%"}} disabled={previewDisabled} type="primary" htmlType="button">
                            Preview
                            </Button>
                        </React.Fragment>}
                        <div id="title" style={{marginTop:"10%"}}>
                            <FormItemComp name={"title"} label={""} required={true} placeholder={"Enter Form Title"} type={"text"} onChange={handleChangeTitle}/>
                        </div>
                        <DropWrapper handleDrop={handleDrop} doSubmit={doSubmit} data={data} fieldDetails={fieldDetails} editMode={editMode}/>
                    </Col>
                </Row>
        </Layout.Content>
    )
}


MainContent.propTypes = {
    handleDrop: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    previewDisabled: PropTypes.bool.isRequired,
    handleChangeTitle: PropTypes.func.isRequired,
    fieldDetails: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    doSubmit: PropTypes.func
}


export default MainContent;
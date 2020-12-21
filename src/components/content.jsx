import React from "react"
import FormItemComp from './common/formItem';
import BaseForm from "./common/form";
import { Layout, Row, Col, Button } from 'antd';
import PropTypes from "prop-types";
import { ItemTypes } from '../Constants';
import { useDrop } from 'react-dnd'

const MainContent = ({handleDrop, editMode, handleClick, previewDisabled, handleChangeTitle, doSubmit, data, fieldDetails}) => {

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.TEXT,
        drop: () => handleDrop("text"),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return(
    <Layout.Content className="site-layout-background" style={{padding: '20px', margin: 0, minHeight: 280,marginTop:"2%"}} >
        <Row style={{backgroundColor: "#001529", paddingTop: "20px", marginTop:"-2%"}}>
            <Col xs={15} sm={15} lg={7} xl={1}></Col>
            <Col id="dashboard" xs={22} sm={19} lg={7} xl={7} >
                {editMode &&  
                <React.Fragment>  
                    <Button onClick={handleClick} style={{marginLeft:"33%"}} disabled={previewDisabled} type="primary" htmlType="button">
                    Preview
                    </Button>
                </React.Fragment>}
                <div id="title" style={{marginTop:"10%"}}>
                    <FormItemComp name={"title"} label={""} required={true} placeholder={"Enter Form Title"} type={"text"} onChange={handleChangeTitle}/>
                </div>
                <div style={{border:"1px solid #d9d9d9",marginTop: "-25px", height: "273px",overflowY:"scroll",backgroundColor:"white"}}>
                    <span ref={drop}>
                    <div  style={{marginLeft:"10%",marginTop:"5%"}}>
                    <BaseForm doSubmit={doSubmit} data={data} fieldDetails={fieldDetails} submitable={!editMode} btnText={"Submit"}/>
                    {isOver && (<div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                zIndex: 1,
                                opacity: 0.5,
                                backgroundColor: 'yellow',
                            }}
                            />)}
                    </div>
                    </span>
                </div>
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
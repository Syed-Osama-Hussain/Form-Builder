import React from "react"
import BaseForm from "./common/form";
import PropTypes from "prop-types";
import { ItemTypes } from '../Constants';
import { useDrop } from 'react-dnd'


const DropWrapper = ({handleDrop, doSubmit, data, fieldDetails, editMode}) => {

    const [, drop] = useDrop({
        accept: [ItemTypes.TEXT, ItemTypes.SELECT,ItemTypes.CHECKBOX],
        drop: (item) =>  handleDrop(item.type),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return(
        <div ref={drop}>
            <div style={{border:"1px solid #d9d9d9",marginTop: "-25px", height: "300px",overflowY:"scroll",backgroundColor:"white"}}>
                <div  style={{marginLeft:"10%",marginTop:"5%"}}>
                    <BaseForm doSubmit={doSubmit} data={data} fieldDetails={fieldDetails} submitable={!editMode} btnText={"Submit"}/>
                </div>
            </div>
        </div>
    )
}

DropWrapper.propTypes = {
    handleDrop: PropTypes.func.isRequired,
    doSubmit: PropTypes.func,
    data: PropTypes.object.isRequired,
    fieldDetails: PropTypes.array.isRequired,
    editMode: PropTypes.bool.isRequired
}

export default DropWrapper;
import React from "react";
import PropTypes from 'prop-types';
import { Input, InputNumber, Checkbox, Select} from 'antd';
// import { ItemTypes } from '../../Constants';
// import { useDrag } from 'react-dnd'

const InputComp = ({ label="", type, onChange}) => {

  // const [{isDragging}, drag] = useDrag({
  //   item: { type: ItemTypes.INPUTCOMP },
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // })

  const getElement = (type) => {
    if(type === "text")
    {
      return <Input onChange={onChange}/>
    }
    if(type === "password"){
      return <Input.Password onChange={onChange}/>
    }

    if(type === "number"){
      return <InputNumber onChange={onChange}/>
    }

    if(type === "checkbox"){
      return <Checkbox value={false} onChange={onChange}>{label}</Checkbox>
    }

    if(type==="select")
    return <Select  onChange={onChange} placeholder="Select your answer" >
    </Select>

  }
  
  return (
    <span 
    // ref={drag} style={{
    //   opacity: isDragging ? 0.5 : 1,
    //   fontSize: 25,
    //   fontWeight: 'bold',
    //   cursor: 'move',
    // }} 
    >
    {getElement(type)} 
    </span>
  );
  
};

InputComp.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

InputComp.defaultProps = {
    type: "text"
};
  
export default InputComp;
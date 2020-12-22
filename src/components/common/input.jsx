import React from "react";
import PropTypes from 'prop-types';
import { Input, InputNumber, Checkbox, Select} from 'antd';

const InputComp = ({ label="", type, onChange}) => {

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
      return <Checkbox onChange={onChange}>{label}</Checkbox>
    }

    if(type==="select")
    return <Select  onChange={onChange} placeholder="Select your answer" >
    </Select>

  }
  
  return (
    <span>
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
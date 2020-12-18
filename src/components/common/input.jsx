import React from "react";
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Checkbox} from 'antd';


const InputComp = ({ name, label, required, type, onChange}) => {
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

  }
  
  const rules = [
    {
      required: required,
      message: 'Please Enter required field',
    },
  ]
  if(type==="checkbox"){
  return (
    <div>
    <Form.Item
    valuePropName="checked"
    name={name}
    rules={rules}
  >
    {getElement(type)} 
    
  </Form.Item>
  </div>
  );
  }else{
    return(<Form.Item
      label={label}
      name={name}
      rules={rules}
    >
      {getElement(type)}
    </Form.Item>
  )
  }
};

InputComp.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

InputComp.defaultProps = {
    required: false,
    placeholder: "",
    type: "text"
  };
  
export default InputComp;
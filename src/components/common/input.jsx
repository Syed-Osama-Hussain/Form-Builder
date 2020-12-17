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
      return <Checkbox onChange={onChange}/>
    }

  }
  
  return (
    <Form.Item
    label={label}
    name={name}
    rules={[
      {
        required: {required},
        message: 'Please Enter required field',
      },
    ]}
  >
    {getElement(type)}
  </Form.Item>
  );
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
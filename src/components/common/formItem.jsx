import React from "react";
import PropTypes from 'prop-types';
import { Form } from 'antd';
import InputComp from "./input";

const FormItemComp = ({ name, label, required, type, onChange}) => {
  
  const rules = [
    {
      required: required,
      message: 'Please Enter required field',
    },
  ]
  if(type==="checkbox"){
  return (
    <div >
    <Form.Item
    valuePropName="checked"
    name={name}
    rules={rules}
  >
    <InputComp type={type} onChange={onChange} label={label}/>
  </Form.Item>
  </div>
  );
  }

    return(<div ><Form.Item
      label={label}
      name={name}
      rules={rules}
    >
      <InputComp type={type} onChange={onChange}/>
    </Form.Item>
    </div>
  )

};

FormItemComp.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

FormItemComp.defaultProps = {
    required: false,
    placeholder: "",
    type: "text"
  };
  
export default FormItemComp;
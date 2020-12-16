import React from "react";
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';


const InputComp = ({ name, label, required, placeholder }) => {
  return (
    <Form.Item
    label={label}
    name={name}
    rules={[
      {
        required: {required},
        message: {placeholder},
      },
    ]}
  >
    <Input />
  </Form.Item>
  );
};

InputComp.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string
}

InputComp.defaultProps = {
    required: false,
    placeholder: ""
  };
  
export default InputComp;
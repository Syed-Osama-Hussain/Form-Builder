import React from "react";

const Input = ({ name, label, required, placeholder }) => {
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

BaseForm.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string
}

export default Input;
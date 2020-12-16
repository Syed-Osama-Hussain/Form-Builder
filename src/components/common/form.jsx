import React from "react";
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 16,
  },
};

const BaseForm = ({submitable, doSubmit, btnText}) => {

    const handleSubmit = (values)=>{
        try{
            doSubmit(values);
        }catch(ex){
            console.log(ex);
        }
    }

  return (
      <React.Fragment>
    <Form 
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >

      <Form.Item
        label="Username"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {submitable &&  
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {btnText}
        </Button>
      </Form.Item>}
    </Form>
    </React.Fragment>
  );
};

BaseForm.propTypes = {
    data: PropTypes.object.isRequired,
    submitable: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
    doSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired
}

export default BaseForm;
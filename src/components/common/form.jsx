import React from "react";
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import InputComp from "./input";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 7,
    span: 16,
  },
};

const BaseForm = ({handleChange, fieldDetails, submitable, doSubmit, btnText}) => {

    const btnFloat = btnText === "login >" ? "none":"right"
    const handleSubmit = (values)=>{
      console.log(values)
        try{
            doSubmit(values);
        }catch(ex){
            console.log(ex);
        }
    }

    const onFinishFailed = (errorInfo) => {
      console.log(errorInfo)
    }
  return (
      <React.Fragment>
    <Form 
      {...layout}
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
    >
      {fieldDetails.map((field,index) => {
        return (
          <div key={index}>
            <InputComp name={field.name} label={field.label} required={field.required} 
            placeholder={field.placeholder} type={field.type} onChange={handleChange}/>
          </div>
          )
        }
      )}

      {submitable &&  
      <Form.Item {...tailLayout}>
        <Button style={{float:btnFloat}} shape={btnText === "login >" ? "round":""} type="primary" htmlType="submit">
          {btnText}
        </Button>
      </Form.Item>}
    </Form>
    </React.Fragment>
  );
};

BaseForm.propTypes = {
    fieldDetails: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    submitable: PropTypes.bool.isRequired,
    doSubmit: PropTypes.func,
    btnText: PropTypes.string.isRequired,
    handleChange: PropTypes.func
}

export default BaseForm;
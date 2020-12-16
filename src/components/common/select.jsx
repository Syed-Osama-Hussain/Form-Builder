import React from "react";
import PropTypes from 'prop-types';
import { Select } from 'antd';
const { Option } = Select;

const SelectComp = ({ options}) => {
  return (
    <Select  placeholder="Select an input method" style={{ width: "20%" }} >
    {options.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

SelectComp.propTypes = {
    options: PropTypes.array.isRequired
}

export default SelectComp;
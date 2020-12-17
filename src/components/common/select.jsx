import React from "react";
import PropTypes from 'prop-types';
import { Select } from 'antd';
const { Option } = Select;

const SelectComp = ({ options, onChange}) => {
  return (
    <Select  onChange={onChange} placeholder="Select an input method" style={{ width: "60%" }} >
    {options.map(option => (
        <Option  key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

SelectComp.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
}

export default SelectComp;
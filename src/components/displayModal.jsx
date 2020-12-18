import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const DisplayModal = ({title, data, isModalVisible, handleOk, handleCancel}) => {
  return (
    <>
    <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{backgroundColor:"lightgrey"}}><pre>{ JSON.stringify(data, null, 2) }</pre></div>
    </Modal>
    </>
  );
};

DisplayModal.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    isModalVisible: PropTypes.bool.isRequired,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func
}

export default DisplayModal
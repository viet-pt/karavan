import React from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

const KCSModal = ({ isOpenModal, title, content, closeButton, closeModal, confirmButton, confirmAction, size }) => {
  let btn = [
    <Button type="primary" onClick={confirmAction || closeModal} key='ok'>{confirmButton || 'OK'}</Button>
  ]

  if (closeButton) {
    btn = [...btn, <Button onClick={closeModal} key='cancel'>{closeButton}</Button>];
  }

  return (
    <Modal
      className="modal-wrapper"
      title={title || "Notification"}
      open={isOpenModal}
      onCancel={closeModal}
      footer={btn}
      width={size === "xl" ? 1150 : size === "lg" ? 800 : 520}
    >
      {content}
    </Modal>
  );
};

KCSModal.propTypes = {
  title: PropTypes.string,
  isOpenModal: PropTypes.bool.isRequired,
  closeButton: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  confirmButton: PropTypes.string,
  confirmAction: PropTypes.func,
};

KCSModal.defaultProps = {
  isOpenModal: false,
  closeModal: () => { },
};

export default React.memo(KCSModal);

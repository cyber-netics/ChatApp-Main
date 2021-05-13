import React from 'react';
import Modal from 'Components/Modal';

const ModalMenu = ({ modal, toggle }) => (
  <div>
    <Modal
      active={modal.isOpen}
      toggle={toggle}
      title={'Add Friends'}
    >
      <>
        <h2>hello</h2>
      </>
    </Modal>
  </div>
);

export default ModalMenu;

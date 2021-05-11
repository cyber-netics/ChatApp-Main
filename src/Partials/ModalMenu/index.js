import React from 'react';
import Modal from 'Components/Modal';

const ModalMenu = ({ modal, close }) => (
  <div>
    <Modal
      active={modal.isOpen}
      title={'Add Friends'}
      close={close}
    >
      <>
        <h2>hello</h2>
      </>
    </Modal>
  </div>
);

export default ModalMenu;

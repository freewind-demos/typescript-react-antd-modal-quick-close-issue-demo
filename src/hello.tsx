import { Button, Modal } from 'antd';
import React, { useState } from 'react';

export default function Hello() {
  const [open, setOpen] = useState(false);
  return <div>
    <Button type="primary" onClick={() => setOpen(true)}>
      Open Modal
    </Button>
    <Modal
      open={open}
      title="Basic Modal"
      onOk={() => {
        console.log("### onOk")
        setOpen(false)
      }}
      onCancel={() => {
        console.log("### onCancel")
        setOpen(false)
      }}
    >
      <p>Some content</p>
    </Modal>
  </div>
};

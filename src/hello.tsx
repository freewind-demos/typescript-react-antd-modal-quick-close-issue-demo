import { useRequest } from 'ahooks';
import { Button, Flex, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Hello() {
  const [open, setOpen] = useState(false);

  const { run, loading } = useRequest(async () => {
    return new Error('error');
  }, {
    manual: true,
  });

  useEffect(() => {
    if (loading) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [loading]);

  return <div>
    <Flex justify="center" align="center" style={{ height: '100vh' }} vertical>
      <Button type="primary" onClick={run}>
        Click me
      </Button>
      <div>
        <p>Click the button above to open and close modal quickly several times, </p>
        <p>the button will not be clickable anymore,</p>
        <p>seems like there is a transparent modal on the top of the page</p>
      </div>
    </Flex>
    <Modal
      open={open}
      closable={false}
      title="Basic Modal"
      footer={null}
      animation={false}
    >
      <p>Loading ...</p>
    </Modal>
  </div>
};

import React, { useState, useContext } from 'react';
import { ctx } from './index';
import { Dialog } from '../../es';
import '../../css/dialog.css';

export function DialogTest() {
  const [v, setV] = useState(false);
  const { store1 } = useContext(ctx);

  return (
    <>
      value:
      {store1.userAge}
      <button onClick={() => store1.changeUserAge()}>test</button>
      <button onClick={() => setV(!v)}>open dialog</button>
      <Dialog visible={v} onClose={() => setV(false)}>
        i am dialog
      </Dialog>
    </>
  );
}

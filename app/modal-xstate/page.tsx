'use client';
import { useMachine } from '@xstate/react';

import { modalMachine } from './store';

const ModalXstate = () => {
  const [state, send] = useMachine(modalMachine);

  return (
    <div>
      <button
        onClick={() =>
          send({
            type: 'open',
          })
        }
      >
        모달 열기
      </button>
      {state.context.isOpen && (
        <div className="modal">
          <p>모달 내용</p>
          <button
            onClick={() =>
              send({
                type: 'close',
              })
            }
          >
            모달 닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalXstate;

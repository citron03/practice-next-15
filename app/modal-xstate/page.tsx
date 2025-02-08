'use client';
import { useMachine } from '@xstate/react';

import { modalMachine } from './store';
import { todoMachine } from './store/api';

const ModalXstate = () => {
  const [state, send] = useMachine(modalMachine);
  const [apiState, sendApi] = useMachine(todoMachine);
  console.log(apiState);

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
      <div>
        <button
          onClick={() => {
            sendApi({
              type: 'FETCH',
              userId: 1,
            });
          }}
        >
          Call Api
        </button>
        {apiState.value !== 'success' ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>API RESULT</h1>
            <p>{apiState.context.result.title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalXstate;

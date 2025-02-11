import { assign, fromPromise, setup } from 'xstate';

type ApiResult = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fakeApiCall = (userId: number): Promise<ApiResult> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`).then((response) => response.json());

export const todoMachine = setup({
  types: {
    context: {} as {
      result: ApiResult;
      error: unknown;
    },
    // FETCH 이벤트에 userId가 포함되고, RETRY 이벤트도 정의합니다.
    events: {} as { type: 'FETCH'; userId: number } | { type: 'RETRY' },
  },
  actors: {
    // fromPromise를 사용하여 비동기 actor를 정의합니다.
    // 이 actor는 input으로 { userId: number } 타입의 값을 받습니다.
    fetchTodo: fromPromise<unknown, { userId: number }>(async ({ input }) => {
      const user = await fakeApiCall(input.userId);
      return user;
    }),
  },
}).createMachine({
  id: 'todo',
  initial: 'idle',
  context: {
    result: {
      userId: 1,
      id: 0,
      title: '',
      completed: false,
    },
    error: undefined,
  },
  states: {
    idle: {
      on: {
        FETCH: { target: 'loading' },
      },
    },
    loading: {
      invoke: {
        id: 'getTodo',
        src: 'fetchTodo',
        // event.type이 FETCH일 때는 event.userId를 input으로 사용하고, 그렇지 않으면 userId를 1로 사용합니다.
        input: ({ event }) => {
          if (event.type === 'FETCH') {
            return { userId: event.userId };
          }
          return { userId: 1 };
        },
        onDone: {
          target: 'success',
          actions: assign({
            result: ({ event }) => event.output as ApiResult,
          }),
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: ({ event }) => event.error,
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' },
      },
    },
  },
});

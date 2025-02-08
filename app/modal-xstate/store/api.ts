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
  },
  actors: {
    fetchTodo: fromPromise<unknown, { userId: number }>(async ({ input }) => {
      const user = await fakeApiCall(input?.userId);

      return user;
    }),
  },
}).createMachine({
  id: 'user',
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
        input: ({
          context: {
            result: { userId },
          },
        }) => ({ userId }),
        onDone: {
          target: 'success',
          actions: assign({ result: ({ event }) => event.output as ApiResult }),
        },
        onError: {
          target: 'failure',
          actions: assign({ error: ({ event }) => event.error }),
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

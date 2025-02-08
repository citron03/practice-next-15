import { assign, setup } from 'xstate';

export const modalMachine = setup({
  types: {
    context: {} as { isOpen: boolean },
    events: {} as { type: 'close' } | { type: 'open' },
  },
  actions: {
    closed: assign({
      isOpen: ({ context }) => !context.isOpen,
    }),
    opened: assign({
      isOpen: ({ context }) => !context.isOpen,
    }),
  },
}).createMachine({
  context: { isOpen: false },
  on: {
    open: { actions: 'opened' },
    close: { actions: 'closed' },
  },
});

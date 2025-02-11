import { assign, setup } from 'xstate';

export const modalMachine = setup({
  types: {
    context: {} as { isOpen: boolean },
    events: {} as { type: 'close' } | { type: 'open' },
  },
  actions: {
    setOpen: assign({ isOpen: (_ctx, _event) => true }),
    setClose: assign({ isOpen: (_ctx, _event) => false }),
  },
}).createMachine({
  context: { isOpen: false },
  initial: 'closed',
  states: {
    closed: {
      on: { open: { target: 'open', actions: 'setOpen' } },
    },
    open: {
      on: { close: { target: 'closed', actions: 'setClose' } },
    },
  },
});

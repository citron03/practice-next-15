import { style } from '@vanilla-extract/css';

export const swatch = style({
  padding: '5px',
  background: '#fff',
  borderRadius: '1px',
  boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
  display: 'inline-block',
  cursor: 'pointer',
});

export const popover = style({
  position: 'absolute',
  zIndex: 2,
});

export const cover = style({
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
});

export const colorSwatch = style({
  width: '36px',
  height: '14px',
  borderRadius: '2px',
});

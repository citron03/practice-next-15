import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem',
  fontFamily: 'sans-serif',
  backgroundColor: '#f0f0f0',
  height: '100vh',
  gap: '10px',
});

export const button = recipe({
  base: {
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'blue',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'white',
      },
    },
    size: {
      small: {
        fontSize: '12px',
        padding: '6px 12px',
      },
      large: {
        fontSize: '20px',
        padding: '14px 28px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'small',
  },
});

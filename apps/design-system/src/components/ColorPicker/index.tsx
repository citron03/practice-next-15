import { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';

export interface ColorPickerProps {
  color: string;
  onChange: (color: ColorResult) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps): JSX.Element => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const styles = {
    color: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: color,
    },
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    },
    popover: {
      position: 'absolute' as const,
      zIndex: 2,
    },
    cover: {
      position: 'fixed' as const,
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  };

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

'use client';

import { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import * as styles from './index.css';

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

  return (
    <div>
      <div className={styles.swatch} onClick={handleClick}>
        <div className={styles.colorSwatch} style={{ background: color }} />
      </div>
      {displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

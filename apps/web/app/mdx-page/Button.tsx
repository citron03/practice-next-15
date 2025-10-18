import React, { FC, PropsWithChildren } from 'react';

interface ButtonProps {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children }) => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div role="button" onClick={handleClick}>
      {children}
    </div>
  );
};

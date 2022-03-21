import { FC } from 'react';

interface ButtonProps {
  type: 'main' | 'category' | 'alt1' | 'alt2';
  width?: 'standard' | 'form';
}

const Button: FC<ButtonProps> = ({ type, width = 'standard', children }) => {
  const buttonWidth = width === 'form' ? 'w-full' : 'w-40';
  const textColor =
    type === 'category' ? 'black/50' : type === 'alt2' ? 'black' : 'white';
  const textColorHover = type === 'category' ? 'orangeBurnt' : 'white';
  const backgroundColor =
    type === 'main' ? 'orangeBurnt' : type === 'alt1' ? 'black' : 'transparent';
  const backgroundColorHover =
    type === 'main'
      ? 'orangeLight'
      : type === 'category'
      ? 'transparent'
      : type === 'alt1'
      ? 'grayDark'
      : 'black';
  return (
    <button
      className={`${buttonWidth} h-12 text-${textColor} hover:text-${textColorHover} bg-${backgroundColor} hover:bg-${backgroundColorHover}`}
    >
      {children}
    </button>
  );
};

export default Button;

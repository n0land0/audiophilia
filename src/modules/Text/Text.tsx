import { ElementType, FC } from 'react';

interface TextProps {
  as: ElementType;
  type?: 'overline' | 'subtitle' | 'body';
  color?:
    | 'black'
    | 'offBlack'
    | 'white'
    | 'grayLight'
    | 'grayMed'
    | 'orangeLight'
    | 'orangeBurnt';
  darkColor?: string;
}

const Text: FC<TextProps> = ({
  as: Tag,
  type = Tag,
  color = 'black',
  darkColor,
  children,
}) => {
  const fontSize = `text-${type}Mobile sm:text-${type}Tablet lg:text-${type}Desktop `;
  const fontWeight =
    type === 'overline'
      ? 'font-normal '
      : type === 'body'
      ? 'font-medium '
      : 'font-bold ';
  const fontColor = `text-${color} `;
  const fontDarkColor = darkColor && `dark:text-${darkColor} `;
  const fontTransform = type !== 'body' && `uppercase `;
  let computedStyles = fontSize + fontWeight + fontColor;
  if (darkColor) computedStyles += fontDarkColor;
  if (fontTransform) computedStyles += fontTransform;

  return (
    <Tag className={computedStyles} data-testid='text-component'>
      {children}
    </Tag>
  );
};

export default Text;

import { ElementType, FC } from 'react';

interface TextProps {
  as: ElementType;
  style?: 'overline' | 'subtitle' | 'body';
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
  style = Tag,
  color = 'black',
  darkColor,
  children,
}) => {
  const fontSize = `text-${style}Mobile sm:text-${style}Tablet lg:text-${style}Desktop `;
  const fontWeight =
    style === 'overline'
      ? 'font-normal '
      : style === 'body'
      ? 'font-medium '
      : 'font-bold ';
  const fontColor = `text-${color} `;
  const fontDarkColor = darkColor && `dark:text-${darkColor} `;
  const fontTransform = style !== 'body' && `uppercase `;
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

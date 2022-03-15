import { ElementType, FC } from 'react';

interface TextProps {
  as: ElementType;
  style?: 'overline' | 'subtitle' | 'body';
  color: string;
  darkColor?: string;
}

const Text: FC<TextProps> = ({
  as: Tag,
  style = Tag,
  color,
  darkColor,
  children,
}) => {
  const fontSize = `text-${style} `;
  const fontTransform = `${style !== 'body' && 'uppercase'} `;
  const fontWeight =
    style === 'overline'
      ? 'font-normal '
      : style === 'body'
      ? 'font-medium '
      : 'font-bold ';
  const fontColor = `text-${color} `;
  const fontDarkColor = darkColor && `dark:text-${darkColor}`;
  let computedStyles = fontSize + fontTransform + fontWeight + fontColor;
  if (darkColor) computedStyles += fontDarkColor;

  return <Tag className={computedStyles}>{children}</Tag>;
};

export default Text;

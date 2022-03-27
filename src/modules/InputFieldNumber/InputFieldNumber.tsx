import { Dispatch, FC, SetStateAction } from 'react';

interface InputFieldNumberProps {
  fieldValue: number;
  setFieldValue: Dispatch<SetStateAction<number>>;
  fieldName: string;
  size: 'product detail' | 'cart';
}

const InputFieldNumber: FC<InputFieldNumberProps> = ({
  fieldValue,
  setFieldValue,
  fieldName,
  size,
}) => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (+event.target.value >= 0) setFieldValue(+event.target.value);
  // }; -- is this implementation accessible?

  const decrement = () => {
    if (fieldValue > 0) setFieldValue(fieldValue - 1);
  };
  const increment = () => setFieldValue(fieldValue + 1);

  const moduleStyles = `${
    size === 'cart' ? 'w-[96px] h-[32px]' : 'w-[120px] h-[48px]'
  } flex items-center p-[15px] bg-grayMed text-[13px]`;
  const inputStyles = 'flex w-full bg-transparent text-center font-bold';
  const decButtonStyles = `text-black/25 font-bold ${
    fieldValue > 0 ? 'hover:text-orangeBurnt' : 'cursor-not-allowed'
  }`;
  const incButtonStyles = 'text-black/25 font-bold hover:text-orangeBurnt';

  return (
    <div className={moduleStyles}>
      <button className={decButtonStyles} onClick={decrement}>
        -
      </button>
      <input
        className={inputStyles}
        type='number'
        name={fieldName}
        value={fieldValue}
        disabled
      />
      <button className={incButtonStyles} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default InputFieldNumber;

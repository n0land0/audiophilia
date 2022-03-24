import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldNumberProps {
  fieldValue: number;
  setFieldValue: Dispatch<SetStateAction<number>>;
  fieldName: string;
}

const InputFieldNumber: FC<InputFieldNumberProps> = ({
  fieldValue,
  setFieldValue,
  fieldName,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value >= 0) setFieldValue(+event.target.value);
  };
  const decrement = () => {
    if (fieldValue > 0) setFieldValue(fieldValue - 1);
  };
  const increment = () => setFieldValue(fieldValue + 1);

  return (
    <>
      <button onClick={decrement}>-</button>
      <input type='number' name={fieldName} value={fieldValue} disabled />
      <button onClick={increment}>+</button>
    </>
  );
};

export default InputFieldNumber;

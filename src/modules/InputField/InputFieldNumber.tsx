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
    setFieldValue(+event.target.value);
  };

  return (
    <input
      type='number'
      onChange={handleChange}
      name={fieldName}
      value={fieldValue}
    />
  );
};

export default InputFieldNumber;

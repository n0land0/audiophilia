import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldTextProps {
  fieldValue: string;
  setFieldValue: Dispatch<SetStateAction<string>>;
  fieldName: string;
}

const InputFieldText: FC<InputFieldTextProps> = ({
  fieldValue,
  setFieldValue,
  fieldName,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  return (
    <>
      <h6>{fieldName}</h6>
      <input
        type='text'
        onChange={handleChange}
        name={fieldName}
        value={fieldValue}
        placeholder={`Insert your ${fieldName}`}
        required
      />
    </>
  );
};

export default InputFieldText;

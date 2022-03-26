import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldTextProps {
  fieldValue: string;
  setFieldValue: Dispatch<SetStateAction<string>>;
  fieldName: string;
  fieldType?: 'text' | 'tel' | 'email';
}

const InputFieldText: FC<InputFieldTextProps> = ({
  fieldValue,
  setFieldValue,
  fieldName,
  fieldType = 'text',
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const validChars = /^[a-zA-Z0-9- ]*$/;

  const formatWarning = validChars.test(fieldValue) ? null : (
    <p>Wrong format</p>
  );

  return (
    <>
      <h6>{fieldName}</h6>
      {formatWarning && formatWarning}
      <input
        type={fieldType}
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

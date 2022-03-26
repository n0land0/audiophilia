import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';

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
  const [formatError, setFormatError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
    if (validChars.test(event.target.value)) setFormatError(false);
  };

  const handleBlur = () => {
    validChars.test(fieldValue) ? setFormatError(false) : setFormatError(true);
  };

  const validChars =
    fieldType === 'email'
      ? /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
      : fieldType === 'tel'
      ? /^[0-9-]*$/
      : /^[a-zA-Z0-9- ]*$/;

  return (
    <>
      <h6>{fieldName}</h6>
      {formatError && <p>Wrong format</p>}
      <input
        type={fieldType}
        onChange={handleChange}
        onBlur={handleBlur}
        name={fieldName}
        value={fieldValue}
        pattern={`${validChars}`}
        placeholder={`Insert your ${fieldName}`}
        required
      />
    </>
  );
};

export default InputFieldText;

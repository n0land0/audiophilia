import { FC, setState } from 'react';

interface InputFieldTextProps {
  fieldName: string;
  handleChange: () => void;
}

// needs to be a parent form with handle/submit fxns
const InputFieldText: FC<InputFieldTextProps> = ({
  fieldName,
  handleChange,
}) => {
  const [fieldValue, setFieldValue] = setState<string>('');

  return (
    <input
      type='text'
      onChange={handleChange}
      name={fieldName}
      value={fieldValue}
      placeholder={`Insert your ${fieldName}`}
    />
  );
};

export default InputFieldText;

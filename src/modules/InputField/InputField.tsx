import { ChangeEventHandler, FC } from 'react';

interface InputFieldTextProps {
  fieldName: string;
  fieldType: 'text' | 'radio' | 'number';
  fieldValue: string | number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

// needs to be a parent form with handle/submit fxns
const InputFieldText: FC<InputFieldTextProps> = ({
  fieldName,
  fieldType,
  fieldValue,
  handleChange,
}) => {
  return (
    <label htmlFor={fieldName}>
      {fieldName}
      <input
        type={fieldType}
        onChange={handleChange}
        name={fieldName}
        id={fieldName}
        value={fieldValue}
        placeholder={
          fieldType === 'number' ? undefined : `Insert your ${fieldName}`
        }
      />
    </label>
  );
};

export default InputFieldText;

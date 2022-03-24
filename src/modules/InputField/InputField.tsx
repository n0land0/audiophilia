import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldTextProps {
  fieldName: string;
  fieldType: 'text' | 'radio' | 'number';
  fieldValue: string | number;
  setFieldValue: Dispatch<SetStateAction<string | number>>;
}

// needs to be a parent form with handle/submit fxns
const InputFieldText: FC<InputFieldTextProps> = ({
  fieldName,
  fieldType,
  fieldValue,
  setFieldValue,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fieldType === 'radio'
      ? setFieldValue(event.target.id)
      : setFieldValue(event.target.value);
  };

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
        checked={fieldValue === fieldName}
      />
    </label>
  );
};

export default InputFieldText;

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldProps {
  fieldName: string;
  fieldType: 'text' | 'radio' | 'number';
  fieldValue: string | number;
  setFieldValue: Dispatch<SetStateAction<string | number>>;
}

// needs to be a parent form with handle/submit fxns
const InputField: FC<InputFieldProps> = ({
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
    <>
      {fieldType === 'radio' ? (
        <label htmlFor={fieldName}>
          <input
            type={fieldType}
            onChange={handleChange}
            name={fieldName}
            id={fieldName}
            value={fieldValue}
            checked={fieldValue === fieldName}
          />
          {fieldName}
        </label>
      ) : (
        <input
          type={fieldType}
          onChange={handleChange}
          name={fieldName}
          value={fieldValue}
          placeholder={
            fieldType === 'number' ? undefined : `Insert your ${fieldName}`
          }
        />
      )}
    </>
  );
};

export default InputField;

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldRadioProps {
  fieldValue: string;
  setFieldValue: Dispatch<SetStateAction<string>>;
  fieldNames: string[];
}

const InputFieldRadio: FC<InputFieldRadioProps> = ({
  fieldValue,
  setFieldValue,
  fieldNames,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.id);
  };

  const radioElements = fieldNames.map((fieldName: string, index: number) => (
    <label key={index} htmlFor={fieldName}>
      <input
        type='radio'
        onChange={handleChange}
        name={fieldName}
        id={fieldName}
        value={fieldValue}
        checked={fieldValue === fieldName}
      />
      {fieldName}
    </label>
  ));

  return <>{radioElements}</>;
};

export default InputFieldRadio;

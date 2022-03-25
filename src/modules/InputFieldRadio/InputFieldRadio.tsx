import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface InputFieldRadioProps {
  fieldName: string;
  fieldValue: string;
  setFieldValue: Dispatch<SetStateAction<string>>;
  options: string[];
}

const InputFieldRadio: FC<InputFieldRadioProps> = ({
  fieldName,
  fieldValue,
  setFieldValue,
  options,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const radioElements = options.map((option: string, index: number) => (
    <label key={index} htmlFor={option}>
      <input
        type='radio'
        onChange={(event) => handleChange(event)}
        name={fieldName}
        id={option}
        value={option}
        checked={fieldValue === option}
      />
      {option}
    </label>
  ));

  return (
    <>
      <h6>{fieldName}</h6>
      {radioElements}
    </>
  );
};

export default InputFieldRadio;

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

  const radioElements = options.map((option: string, index: number) => {
    const labelStyle = `w-[309px] h-[56px] flex items-center rounded-lg pl-6 text-inputField font-bold ${
      fieldValue === option ? 'border border-orangeBurnt' : 'border'
    } checked:bg-orangeBurnt`;

    const inputStyle = `inline-block w-[20px] h-[20px] mr-4 p-[4px] rounded-full border bg-clip-content ${
      fieldValue === option && 'bg-orangeBurnt'
    }`;

    return (
      <div key={index} className='mb-4'>
        <label htmlFor={option} className={labelStyle}>
          <input
            className={inputStyle}
            type='radio'
            onChange={(event) => handleChange(event)}
            name={fieldName}
            id={option}
            value={option}
            checked={fieldValue === option}
          />
          {option}
        </label>
      </div>
    );
  });

  return (
    <article className='w-full flex justify-center'>
      <h6 className='w-1/2 text-inputFieldHeader font-bold'>{fieldName}</h6>
      <div className='w-1/2 flex flex-col'>{radioElements}</div>
    </article>
  );
};

export default InputFieldRadio;

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

  const validChars =
    fieldType === 'email'
      ? /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
      : fieldType === 'tel'
      ? /^[0-9-]*$/
      : /^[a-zA-Z0-9- ]*$/;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
    if (validChars.test(event.target.value)) setFormatError(false);
  };

  const handleBlur = () => {
    validChars.test(fieldValue) ? setFormatError(false) : setFormatError(true);
  };

  const headerStyle = `text-inputFieldHeader font-bold ${
    formatError && 'text-red'
  }`;
  const inputStyle = `w-full h-[56px] rounded-lg pl-6 text-inputField font-bold ${
    formatError ? 'border-2 border-red' : 'border focus:border-orangeBurnt'
  }`;

  return (
    <article className='w-[309px] mb-4'>
      <div className='w-full flex justify-between pb-[9px]'>
        <h6 className={headerStyle}>{fieldName}</h6>
        {formatError && (
          <p className='text-inputFieldHeader font-medium text-red'>
            Wrong format
          </p>
        )}
      </div>
      <input
        className={inputStyle}
        type={fieldType}
        onChange={handleChange}
        onBlur={handleBlur}
        name={fieldName}
        value={fieldValue}
        pattern={`${validChars}`}
        placeholder={`Insert your ${fieldName}`}
        required
      />
    </article>
  );
};

export default InputFieldText;

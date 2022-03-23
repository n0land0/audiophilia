import { FC, setState } from 'react';

interface FormProps {
  a?: string;
}

const Form: FC<FormProps> = ({ children }) => {
  return <form>{children}</form>;
};

export default Form;

import { useState } from "react";
import s from "./formInputCustom.module.css";

type FormCustomInputProps = {
  input: any;
  meta: any;
  placeholder: string;
  type: "input" | "textarea" | "password"; // добавим тип password
}

export const FormCustomInput: React.FC<FormCustomInputProps> = ({
  input,
  meta: { touched, error },
  placeholder,
  type
}) => {

  const [showPassword, setShowPassword] = useState(false); // флаг для пароля

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  }

  const inputType = showPassword ? 'text' : type; // для пароля type меняем

  return (
    <div className={s.container}>

      <input
        {...input}
        placeholder={placeholder}
        type={inputType}
        className={`${s.input} ${touched && error ? s.inputError : ''}`} 
      />

      {/* кнопка для пароля */}

      {touched && error && (
        <div className={s.errorMessage}>{error}</div>
      )}

    </div>
  )
}

import s from "./formInputCustom.module.css";

type FormCustomInputProps = {
  input: any;
  meta: any;
  placeholder: string;
  type: "input" | "textarea";
};

export const FormCustomInput = ({
  input,
  meta: { touched, error },
  placeholder,
  type,
}: FormCustomInputProps) => {
  const Element = type === "input" ? "input" : "textarea";
  const hasError = touched && error;
  const style = type === "textarea" ? { width: "100%" } : undefined;
  
  return (
    <div className={`${s.container} ${hasError ? s.error : ""}`}>
      <Element
        {...input}
        placeholder={placeholder}
        className={`${s.input} ${hasError ? s.inputError : ""}`}
        style={style}
      />
      {hasError && <div className={s.errorMessage}>{error}</div>}
    </div>
  );
};

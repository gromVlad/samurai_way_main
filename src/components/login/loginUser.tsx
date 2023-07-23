import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { loginOnPageThunk } from "../redusers/reduсer_login";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { Redirect } from "react-router-dom";
import styles from "./loginUser.module.css";
import { FormCustomInput } from "../UI/formInputCustom";

const required = (value: string) => (value ? undefined : "Required");
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength30 = maxLength(30);

const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Password must be at least ${min} characters` : undefined;
const minLength4 = minLength(4);

type LoginUserType = {
  loginOnPageThunk: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
  ) => void;
  resultCode: number;
  captch: null | string;
};

export const LoginUser = (props: LoginUserType) => {
  const { loginOnPageThunk, resultCode, captch } =props

  if (resultCode === 0){
    return <Redirect to={"/dial"} />
  }

  const onSubmitHandler = (values:any) => {
    console.log(values);
    loginOnPageThunk(values.email, values.password, false, values.captch);
  };

  return (
    <div>
      <LoginRormRedux
        onSubmit={onSubmitHandler}
        captchaUrl={captch}
        resultCode={resultCode}
      />
    </div>
  );
};

type PropsLoginForm = {
  captchaUrl: null | string;
  resultCode:number
};

export const LoginForm = ({
  handleSubmit,
  captchaUrl,
  error,
  resultCode
}: PropsLoginForm & InjectedFormProps<FormData , PropsLoginForm>) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component={FormCustomInput}
          type="input"
          id="email"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component={FormCustomInput}
          type="password"
          id="password"
          validate={[required, minLength4]}
        />
      </div>
      <button type="submit">Log In</button>
      <div>{captchaUrl && <img src={captchaUrl} />}</div>
       <div>{captchaUrl && (
        <Field
          name="captch"
          component={FormCustomInput}
          type="password"
          id="captch"
          validate={[required, minLength4]}
        />
      )}</div>
      {error && <p>{error}</p>}
    </form>
  );
};

const LoginRormRedux = reduxForm<FormData, PropsLoginForm>({
  form: "login",
})(LoginForm);

const mapToProps =(store:StateType) => {
  return {
    resultCode:store.login.resultCode,
    captch: store.login.captch
  }
}

export const ContainerLoginUser = connect(mapToProps, { loginOnPageThunk, })(LoginUser);

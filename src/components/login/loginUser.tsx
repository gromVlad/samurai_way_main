import { Field, reduxForm } from "redux-form";
import { loginOnPageThunk } from "../redusers/reduсer_login";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { Redirect } from "react-router-dom";
import styles from "./loginUser.module.css";
import { FormCustomInput } from "../UI/formInputCustom";

const required = (value: string) => (value ? undefined : "Required");
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

type LoginUserType = {
  loginOnPageThunk: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => void;
  resultCode:number
};

export const LoginUser = (props: LoginUserType) => {

  if (props.resultCode === 0){
    return <Redirect to={"/dial"} />
  }

  const onSubmitHandler = (values:any) => {
    props.loginOnPageThunk(values.email, values.password,false);
  };

  return (
    <div>
      <LoginRormRedux onSubmit={onSubmitHandler} />
    </div>
  );
};

export const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component={FormCustomInput}
          type="input"
          id="email"
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component={FormCustomInput}
          type="input"
          id="password"
          validate={[required, maxLength15]}
        />
      </div>
      <button type="submit">Log In</button>
      {props.error && <p>{props.error}</p>}
    </form>
  );
};

const LoginRormRedux = reduxForm({
  //name form
  form: "login",
})(LoginForm);

const mapToProps =(store:StateType) => {
  return {
    resultCode:store.login.resultCode
  }
}


export const ContainerLoginUser = connect(mapToProps, { loginOnPageThunk })(LoginUser);

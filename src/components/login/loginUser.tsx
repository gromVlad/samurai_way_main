import { Field, reduxForm } from "redux-form";
import { loginOnPageThunk } from "../redusers/reduсer_login";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { Redirect } from "react-router-dom";

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
        <Field name="email" component="input" type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component="input"
          type="password"
          id="password"
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

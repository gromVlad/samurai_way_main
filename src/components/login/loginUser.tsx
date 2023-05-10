import { Field, reduxForm } from "redux-form";

export const LoginUser = () => {
  //выведем данные что получили из формы
  const onSubmit = (form:any) => {
    console.log(form);
  }
  //Objectemail: "logim@pas"password: "1234587963"

  return (
    <div>
      <LoginRormRedux onSubmit={onSubmit} />
    </div>
  );
};

export const LoginForm = (props:any) => {
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
    </form>
  );
};


const LoginRormRedux = reduxForm({
  //name form
  form: "login",
})(LoginForm);
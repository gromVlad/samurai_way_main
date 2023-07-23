import s from "./dialogs.module.css";
import { Message } from "./message/message";
import { Users } from "./users/users";
import { StateType } from "../redusers/redux-store";
import { Field, reduxForm, reset } from "redux-form";
import { FormCustomInput } from "../UI/formInputCustom";

const required = (value:string) => (value ? undefined : "Required");
const maxLength = (max:number) => (value:string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

type DialogsType = {
  store: StateType;
  addNewMessage: (text:string) => void;
};

export function Dialogs(props: DialogsType) {

  const arrNames = props.store.names.map((el) => <Users key={el.id} name={el.name} id={el.id} />);
  const arrMessages = props.store.mesOBJ.messages.map((el,index) => <Message key={index}  mes={el.mes} />);

  const addNewMessage = (values:any) => {
    props.addNewMessage(values.textMessage);
  }

  return (
    <main>
      <DialogsForm onSubmit={addNewMessage}  />
      <div className={s.content} >
        <div className={s.content__users}>{arrNames}</div>
        <div className={s.content__messages}>{arrMessages}</div>
      </div>
    </main>
  );
}


const DialogsReduxForm = (props:any) => {

  return (
    <form  onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="textMessage"
          component={FormCustomInput}
          type="input"
          placeholder="Type your message"
          validate={[required, maxLength15]}
        />
      </div>
      <div >
        <button  type="submit">Add message</button>
      </div>
    </form>
  );
}
const DialogsForm = reduxForm({ form: "DialogsForm", onSubmitSuccess: (result, dispatch) => dispatch(reset('DialogsForm')) })(DialogsReduxForm);
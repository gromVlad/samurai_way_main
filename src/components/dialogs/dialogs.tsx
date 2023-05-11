import s from "./dialogs.module.css";
import { Message } from "./message/message";
import { Users } from "./users/users";
import { StateType } from "../redusers/redux-store";
import { Field, reduxForm } from "redux-form";

type DialogsType = {
  store: StateType;
  addNewMessage: (text:string) => void;
};

export function Dialogs(props: DialogsType) {

  const arrNames = props.store.names.map((el) => <Users name={el.name} id={el.id} />);
  const arrMessages = props.store.mesOBJ.messages.map((el:any) => <Message mes={el.mes} />);

  const addNewMessage = (values:any) => {
    props.addNewMessage(values.textMessage);
  }

  return (
    <main>
      <DialogsForm onSubmit={addNewMessage} />
      <div className={s.content}>
        <div className={s.content__users}>{arrNames}</div>
        <div className={s.content__messages}>{arrMessages}</div>
      </div>
    </main>
  );
}

const DialogsReduxForm = (props:any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="textMessage"
          component="input"
          type="text"
          placeholder="Type your message"
        />
      </div>
      <div>
        <button type="submit">Add message</button>
      </div>
    </form>
  );
}
const DialogsForm = reduxForm({ form: "DialogsForm" })(DialogsReduxForm);
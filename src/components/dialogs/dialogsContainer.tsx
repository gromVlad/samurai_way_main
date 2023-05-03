import { addMesActCreator, addTextMesActCreator } from "../redusers/reduсer.messages";
import { StateType } from "../..";
import { Dialogs } from "./dialogs";
import { StoreContext } from "../../context";

type DialogsType = {
  store: StateType;
  dispatch: (action: any) => void;
};

export function DialogsContainer (props: DialogsType) {
  
  const addNewText = (text:string) => {
    props.dispatch(addTextMesActCreator(text));
  };

  const addNewMessage = () => {
    props.dispatch(addMesActCreator());
  }

  return (
    <StoreContext.Consumer>
      {(value) => (
        <Dialogs
      store={props.store} 
      value = {value}
      addNewText={addNewText}
      addNewMessage={addNewMessage}
    />
      )}
    </StoreContext.Consumer>
  );
}

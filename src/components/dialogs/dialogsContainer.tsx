import { compose } from "redux";
import { IsAuthLogin } from "../hok/isAuthLogin";
import { StateType } from "../redusers/redux-store";
import { addMesActCreator, addTextMesActCreator } from "../redusers/reduсer.messages";
import { Dialogs } from "./dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state:StateType) => {
  return {
    store:state
  }
}

const mapDispatchToProps = (dispatch:(action: any) => void) => {
  return {
    addNewText: (text: string) => {
      dispatch(addTextMesActCreator(text));
    },
    addNewMessage: () => {
      dispatch(addMesActCreator());
    },
  };
};

export const DialogsContainer = compose(connect(
  mapStateToProps,
  mapDispatchToProps
),IsAuthLogin)(Dialogs);


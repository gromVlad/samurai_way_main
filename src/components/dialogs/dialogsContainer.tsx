import { compose } from "redux";
import { IsAuthLogin } from "../hok/isAuthLogin";
import { StateType } from "../redusers/redux-store";
import { addMesActCreator} from "../redusers/reduсer.messages";
import { Dialogs } from "./dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state:StateType) => {
  return {
    store:state
  }
}

const mapDispatchToProps = (dispatch:(action: any) => void) => {
  return {
    addNewMessage: (text: string) => {
      dispatch(addMesActCreator(text));
    },
  };
};

export const DialogsContainer = compose(connect(
  mapStateToProps,
  mapDispatchToProps
),IsAuthLogin)(Dialogs);


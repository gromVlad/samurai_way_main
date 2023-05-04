import { connect } from "react-redux";
import { UserUI } from "./usersUi";
import {
  InitState,
  actionFollowFalseAC,
  actionFollowTrueAC,
  actionAddStateAC,
} from "../redusers/reduсer_users";
import { StateType } from "../..";

const mapStateToPropsUS = (state: StateType) => {
  return {
    store: state
  };
};

const mapDispatchToPropsUS = (dispatch: (action: any) => void) => {
  return {
    followfalse: (id: string) => {
      dispatch(actionFollowFalseAC(id));
    },
    followtrue: (id: string) => {
      dispatch(actionFollowTrueAC(id));
    },
    addNewState: (st: InitState) => {
      dispatch(actionAddStateAC(st));
    },
  };
};

export const ContainerUser = connect(
  mapStateToPropsUS,
  mapDispatchToPropsUS
)(UserUI);

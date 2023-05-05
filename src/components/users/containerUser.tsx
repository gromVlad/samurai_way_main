import { connect } from "react-redux";
import { UserUI } from "./usersUi";
import {
  InitState,
  actionFollowFalseAC,
  actionFollowTrueAC,
  actionAddStateAC,
  addCurrentPageAC,
} from "../redusers/reduсer_users";
import { StateType } from "../..";

const mapStateToProps = (store: StateType) => {
  return {
    store: store.usersPage
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    followfalse: (id: number) => {
      dispatch(actionFollowFalseAC(id));
    },
    followtrue: (id: number) => {
      dispatch(actionFollowTrueAC(id));
    },
    addNewState: (st: InitState) => {
      dispatch(actionAddStateAC(st));
    },
    addNewpage: (page: number) => {
      dispatch(addCurrentPageAC(page));
    },
  };
};

export const ContainerUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUI);

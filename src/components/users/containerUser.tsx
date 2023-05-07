import { connect } from "react-redux";
import { UserUI } from "./usersUi";
import {
  actionFollowFalseAC,
  actionFollowTrueAC,
  actionAddStateAC,
  addCurrentPageAC,
  InitState,
} from "../redusers/reduсer_users";
import { StateType } from "../redusers/redux-store";
import { Dispatch } from "redux";

export type AllTypeConnectUser = {
  store: InitState;
} & MapDispatchToPropsType;

type MapStateToPropsType = {
  store: InitState;
};

const mapStateToProps = (store:StateType ): MapStateToPropsType => {
  return {
    store: store.usersPage,
  };
};

type MapDispatchToPropsType = {
  followfalse: (id: number) => void;
  followtrue: (id: number) => void;
  addNewState: (st: InitState) => void;
  addNewpage: (page: number) => void;
};

//обязательно импортируем Dispatch с redux
const mapDispatchToProps = (
  dispatch: Dispatch 
): MapDispatchToPropsType => {
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

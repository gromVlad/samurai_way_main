import { connect } from "react-redux";
import { UserUI } from "./usersUi";
import {
  InitState, actionAddState, actionFollowFalse, actionFollowTrue, actionIsFetching, addCurrentPage,
} from "../redusers/reduсer_users";
import { StateType } from "../redusers/redux-store";
import { Dispatch } from "redux";
import { useEffect } from "react";
import axios from "axios";
import { Preloader } from "../preloader/preloader";

export type AllTypeConnectUser = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
  store: InitState;
};

const mapStateToProps = (store: StateType): MapStateToPropsType => {
  return {
    store: store.usersPage,
  };
};

type MapDispatchToPropsType = {
  actionFollowFalse: (id: number) => void;
  actionFollowTrue: (id: number) => void;
  actionAddState: (st: InitState) => void;
  addCurrentPage: (page: number) => void;
  actionIsFetching: (isFetch: boolean) => void;
};

const UsePreContainerUI = (props: AllTypeConnectUser) => {
  const {
    store,
    actionFollowFalse,
    actionFollowTrue,
    actionAddState,
    addCurrentPage,
    actionIsFetching,
  } = props;
  console.log(props);
  //first load on page
  useEffect(() => {
    actionIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${store.currentPage}&count=${store.pageNumber}`
      )
      .then((user) => {
        actionIsFetching(false);
        actionAddState(user.data);
      });
  }, []);

  //fun add new current page
  const AddNewCurrentPage = (page: number) => {
    addCurrentPage(page);
    actionIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${store.pageNumber}`
      )
      .then((user) => {
        actionIsFetching(false);
        actionAddState(user.data);
      });
  };

  return (
    <>
      {store.isFetching ? (
        <Preloader />
      ) : (
        <UserUI
          AddNewCurrentPage={AddNewCurrentPage}
          followfalse={actionFollowFalse}
          followtrue={actionFollowTrue}
          store={store}
        />
      )}
    </>
  );
};

export const ContainerUser = connect(mapStateToProps, {
  actionFollowFalse,
  actionFollowTrue,
  actionAddState,
  addCurrentPage,
  actionIsFetching,
})(UsePreContainerUI);



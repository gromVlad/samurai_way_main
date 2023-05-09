import { connect } from "react-redux";
import { UserUI } from "./usersUi";
import {
  InitState,
  actionAddState,
  actionFollowFalse,
  actionFollowTrue,
  actionIsFetching,
  actionIsProgressFollow,
  addCurrentPage,
} from "../redusers/reduсer_users";
import { StateType } from "../redusers/redux-store";
import { useEffect } from "react";
import axios from "axios";
import { Preloader } from "../preloader/preloader";
import { userAPI } from "../dalAPI/apiAxios";

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
  actionIsProgressFollow:(isProgressFollow: boolean,id:number) => void
};

const UsePreContainerUI = (props: AllTypeConnectUser) => {
  const {
    store,
    actionFollowFalse,
    actionFollowTrue,
    actionAddState,
    addCurrentPage,
    actionIsFetching,
    actionIsProgressFollow,
  } = props;

  //first load on page
  useEffect(() => {
    actionIsFetching(true);
    userAPI.getUsers(store.currentPage, store.pageNumber).then((data) => {
      actionIsFetching(false);
      actionAddState(data);
    });
  }, []);

  //fun add new current page
  const AddNewCurrentPage = (page: number) => {
    addCurrentPage(page);
    actionIsFetching(true);
    userAPI.getUsers(page, store.pageNumber).then((data) => {
      actionIsFetching(false);
      actionAddState(data);
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
          actionIsProgressFollow={actionIsProgressFollow}
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
  actionIsProgressFollow,
})(UsePreContainerUI);

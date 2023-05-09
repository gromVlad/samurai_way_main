import { connect } from "react-redux";
import { UserUI } from "./usersUi";
import {
  InitState,
  firstLoadUsersThunk,
  followUsersThunk,
  nextLoadUsersThunk,
  unfollowUsersThunk,
} from "../redusers/reduсer_users";
import { StateType } from "../redusers/redux-store";
import { useEffect } from "react";
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
  firstLoadUsersThunk: (currentPage: number, pageNumber: number) => void;
  nextLoadUsersThunk: (page: number, pageNumber: number) => void;
  followUsersThunk: (id: number) => void;
  unfollowUsersThunk: (id: number) => void;
};

const UsePreContainerUI = (props: AllTypeConnectUser) => {
  const {
    store,
    firstLoadUsersThunk,
    nextLoadUsersThunk,
    followUsersThunk,
    unfollowUsersThunk,
  } = props;

  //first load on page
  useEffect(() => {
    firstLoadUsersThunk(store.currentPage, store.pageNumber);
  }, []);

  //fun add new current page
  const AddNewCurrentPage = (page: number) => {
    nextLoadUsersThunk(page, store.pageNumber);
  };

  return (
    <>
      {store.isFetching ? (
        <Preloader />
      ) : (
        <UserUI
          AddNewCurrentPage={AddNewCurrentPage}
          store={store}
          followUsersThunk={followUsersThunk}
          unfollowUsersThunk={unfollowUsersThunk}
        />
      )}
    </>
  );
};

export const ContainerUser = connect(mapStateToProps, {
  firstLoadUsersThunk,
  nextLoadUsersThunk,
  followUsersThunk,
  unfollowUsersThunk
})(UsePreContainerUI);

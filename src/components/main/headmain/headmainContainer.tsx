import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Headmain } from "./headmain";
import { StateType } from "../../redusers/redux-store";
import { DataPostType, ProfileType, addProfileCreator, addProfileThunk, getStatusThunk, updateStatusThunk } from "../../redusers/reduсer_post";
import { useParams } from "react-router-dom";
import { userAPI } from "../../dalAPI/apiAxios";

type ContainerHeadmai = {
  status: null | string;
  store: DataPostType;
  addProfileThunk: (userID: string) => void;
  getStatusThunk: (userID: string) => void;
  updateStatusThunk: (status: string) => void;
};

export const ContainerHeadmain = (props: ContainerHeadmai) => {
  const { store, status, addProfileThunk, getStatusThunk, updateStatusThunk } =
    props;

  interface RouteParams {
    userID: string;
  }

  let { userID } = useParams<RouteParams>();


  useEffect(() => {
    addProfileThunk(userID);
    getStatusThunk(userID);
  }, [userID]);


  return (
    <>
      <Headmain
        store={store}
        status={status}
        updateStatusThunk={updateStatusThunk}
      />
    </>
  );
};

type mapStateToPropsType = {
  store: DataPostType;
  status:null |string
};

const mapStateToProps = (store: StateType): mapStateToPropsType => {
  return {
    store: store.dataPost,
    status: store.dataPost.status
  };
};

export const ConnectContainerHeadmain = connect(mapStateToProps, {
  addProfileThunk,
  getStatusThunk,
  updateStatusThunk
})(ContainerHeadmain);
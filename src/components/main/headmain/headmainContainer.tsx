import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Headmain } from "./headmain";
import { StateType } from "../../redusers/redux-store";
import { DataPostType, ProfileType, addProfileCreator, addProfileThunk } from "../../redusers/reduсer_post";
import { useParams } from "react-router-dom";
import { userAPI } from "../../dalAPI/apiAxios";

type ContainerHeadmai = {
  store: DataPostType;
  addProfileThunk: (userID: string) => void;
};

export const ContainerHeadmain = (props: ContainerHeadmai) => {
  const { store, addProfileThunk } = props;

  interface RouteParams {
    userID: string;
  }

  let { userID } = useParams<RouteParams>();


  useEffect(() => {
    addProfileThunk(userID);
  }, [userID]);


  return (
    <>
      <Headmain store={store}/>
    </>
  );
};

type mapStateToPropsType = {
  store: DataPostType;
};

const mapStateToProps = (store: StateType): mapStateToPropsType => {
  return {
    store: store.dataPost,
  };
};

export const ConnectContainerHeadmain = connect(mapStateToProps, { addProfileThunk })(
  ContainerHeadmain
);
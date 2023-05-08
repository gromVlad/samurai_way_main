import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Headmain } from "./headmain";
import { StateType } from "../../redusers/redux-store";
import { DataPostType, ProfileType, addProfileCreator } from "../../redusers/reduсer_post";
import axios from "axios";
import { useParams } from "react-router-dom";

type ContainerHeadmai = {
  store: DataPostType;
  addProfileCreator: (profile: null | ProfileType) => void
};

export const ContainerHeadmain = (props: ContainerHeadmai) => {
  const { store, addProfileCreator } = props

  interface RouteParams {
    userID: string;
  }

  let { userID } = useParams<RouteParams>();

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((res) => addProfileCreator(res.data));
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

export const ConnectContainerHeadmain = connect(mapStateToProps, {addProfileCreator})(ContainerHeadmain);
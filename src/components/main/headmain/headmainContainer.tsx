import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Headmain } from "./headmain";
import { StateType } from "../../redusers/redux-store";
import { DataPostType, ProfileType, addProfileCreator } from "../../redusers/reduсer_post";
import axios from "axios";

type ContainerHeadmai = {
  store: DataPostType;
  addProfileCreator: (profile: null | ProfileType) => void
};

export const ContainerHeadmain = (props: ContainerHeadmai) => {
  const { store, addProfileCreator } = props

  useEffect(()=>{
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((res) => addProfileCreator(res.data));
  },[])


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
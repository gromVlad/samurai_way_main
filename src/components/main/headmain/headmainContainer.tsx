import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Headmain } from "./headmain";
import { StateType } from "../../redusers/redux-store";
import { DataPostType, addProfileThunk, getStatusThunk, updatePhotoThunk, updateStatusThunk } from "../../redusers/reduсer_post";
import { useParams } from "react-router-dom";

type ContainerHeadmai = {
  status: null | string;
  store: DataPostType;
  addProfileThunk: (userID: string) => void;
  getStatusThunk: (userID: string) => void;
  updateStatusThunk: (status: string) => void;
  updatePhotoThunk: (photo: File) => void;
  myId: null | number;
};

export const ContainerHeadmain = (props: ContainerHeadmai) => {
  const {
    store,
    status,
    addProfileThunk,
    getStatusThunk,
    updateStatusThunk,
    updatePhotoThunk,
    myId,
  } = props;
  
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
        updatePhotoThunk={updatePhotoThunk}
        {...(myId === +userID ? { isMyAccout: true } : { isMyAccout: false })}
      />
    </>
  );
};

type mapStateToPropsType = {
  store: DataPostType;
  status: null | string;
  myId: null | number;
};

const mapStateToProps = (store: StateType): mapStateToPropsType => {
  return {
    store: store.dataPost,
    status: store.dataPost.status,
    myId:store.login.data.id
  };
};

export const ConnectContainerHeadmain = connect(mapStateToProps, {
  addProfileThunk,
  getStatusThunk,
  updateStatusThunk,
  updatePhotoThunk
})(ContainerHeadmain);
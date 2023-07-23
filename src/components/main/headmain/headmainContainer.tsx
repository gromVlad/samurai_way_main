import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Headmain } from "./headmain";
import { StateType } from "../../redusers/redux-store";
import { DataPostType,  addProfileThunk, getStatusThunk, updatePhotoThunk, updateProfileThunk, updateStatusThunk } from "../../redusers/reduсer_post";
import { useParams } from "react-router-dom";

type ContainerHeadmai = {
  status: null | string;
  store: DataPostType;
  addProfileThunk: (userID: string) => void;
  getStatusThunk: (userID: string) => void;
  updateStatusThunk: (status: string) => void;
  updatePhotoThunk: (photo: File) => void;
  myId: null | number;
  updateProfileThunk:(profile: any, userID: string) => void
};

export const ContainerHeadmain = (props: ContainerHeadmai) => {
  
  const {
    store,
    status,
    addProfileThunk,
    getStatusThunk,
    updateStatusThunk,
    updatePhotoThunk,
    updateProfileThunk,
    myId,
  } = props;
  
  interface RouteParams {
    userID: string;
  }

  let { userID } = useParams<RouteParams>();

  useEffect(() => {
    if (userID) {addProfileThunk(userID);
    getStatusThunk(userID)};
  }, [userID]);

  
  return (
    <>
      <Headmain
        store={store}
        status={status}
        updateStatusThunk={updateStatusThunk}
        updatePhotoThunk={updatePhotoThunk}
        updateProfileThunk={updateProfileThunk}
        myId={myId +""}
        {...(myId === store.profile?.userId
          ? { isMyAccout: true }
          : { isMyAccout: false })}
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
  updatePhotoThunk,
  updateProfileThunk
})(ContainerHeadmain);
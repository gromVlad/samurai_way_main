import React, { useEffect } from "react";
import { HeaderAPP } from "./header";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { DataType, isLoginCreator, loginCreatorThunk, logoutOnPageThunk } from "../redusers/reduсer_login";

type ContainerHeaderType = {
  data: DataType;
  resultCode: number;
  loginCreatorThunk: () => void;
  logoutOnPageThunk: () => void;
};

const ContainerHeader = (props: ContainerHeaderType) => {
  const { data, resultCode, loginCreatorThunk, logoutOnPageThunk } = props;

  useEffect(() => {
    loginCreatorThunk()
  },[])  

  return (
    <HeaderAPP
      data={data}
      resultCode={resultCode}
      logoutOnPageThunk={logoutOnPageThunk}
    />
  );
};

type MapStateToPropsType = {
  data: DataType
  resultCode:number
};

const mapStateToProps = (store: StateType): MapStateToPropsType => {
  return {
  data: store.login.data,
  resultCode: store.login.resultCode
}
};

export const ConnectContainerHeader = connect(mapStateToProps, {
  loginCreatorThunk,
  logoutOnPageThunk,
})(ContainerHeader);

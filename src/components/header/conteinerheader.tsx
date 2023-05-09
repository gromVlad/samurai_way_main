import React, { useEffect } from "react";
import { HeaderAPP } from "./header";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { DataType, isLoginCreator } from "../redusers/reduсer_login";
import { userAPI } from "../dalAPI/apiAxios";

type ContainerHeaderType = {
  data: DataType;
  resultCode: number;
  isLoginCreator:(data: DataType, resultCode:number) => void
};

const ContainerHeader = (props: ContainerHeaderType) => {
  const { data, resultCode, isLoginCreator } = props

  useEffect(() => {
    userAPI.loginUser()
    .then(data => {
      if (data.resultCode === 0) {
        isLoginCreator(data.data, data.resultCode);
      }
    }
  )},[])  

  return <HeaderAPP data={data} resultCode={resultCode} />;
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

export const ConnectContainerHeader = connect(mapStateToProps, { isLoginCreator })(
  ContainerHeader
);

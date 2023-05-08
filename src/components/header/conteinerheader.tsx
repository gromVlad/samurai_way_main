import React, { useEffect } from "react";
import { HeaderAPP } from "./header";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { DataType, isLoginCreator } from "../redusers/reduсer_login";
import axios from "axios";

type ContainerHeaderType = {
  data: DataType;
  resultCode: number;
  isLoginCreator:(data: DataType, resultCode:number) => void
};

const ContainerHeader = (props: ContainerHeaderType) => {
  const { data, resultCode, isLoginCreator } = props

  useEffect(() => {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials:true}).then(res => {
      if (res.data.resultCode === 0) {
        isLoginCreator(res.data.data, res.data.resultCode);
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

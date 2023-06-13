import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { Redirect } from "react-router-dom";
import { ComponentType } from "react";

type MapToStateToPropsType = {
  resultCode:number
};

export const IsAuthLogin = (Component: ComponentType<MapToStateToPropsType & any>) => {
  const RedirectComp = (props: MapToStateToPropsType) => {
    if (props.resultCode === 1) {
      return <Redirect to={"/login"} />;
    }
    return <Component {...props} />;
  };

  const mapToStateToProps = (store: StateType): MapToStateToPropsType => {
    return {
      resultCode: store.login.resultCode,
    };
  };

  const ContainerRedirect = connect(mapToStateToProps)(RedirectComp);

  return ContainerRedirect;
};
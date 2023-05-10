import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { Redirect } from "react-router-dom";

type MapToStateToPropsType = {
  resultCode:number
};

const mapToStateToProps = (store: StateType): MapToStateToPropsType => {
  return {
    resultCode: store.login.resultCode
  }
};

export const IsAuthLogin = (Component:any) => {
  const RedirectComp = (props: MapToStateToPropsType) => {
    if (props.resultCode === 1) {
      return <Redirect to={"/login"} />;
    }
    return <Component {...props} />;
  };

  const ContainerRedirect = connect(mapToStateToProps)(RedirectComp);

  return ContainerRedirect 
}
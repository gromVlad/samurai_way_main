import { HeaderAPP } from "./header";
import { connect } from "react-redux";
import { StateType } from "../redusers/redux-store";
import { DataType, logoutOnPageThunk } from "../redusers/reduсer_login";
import { getLogindata, getResultCode } from "../redusers/reselectors";

type ContainerHeaderType = {
  data: DataType;
  resultCode: number;
  logoutOnPageThunk: () => void;
};

const ContainerHeader = (props: ContainerHeaderType) => {
  const { data, resultCode, logoutOnPageThunk } = props;

  return (
    <HeaderAPP
      data={data}
      resultCode={resultCode}
      logoutOnPageThunk={logoutOnPageThunk}
    />
  );
};

type MapStateToPropsType = {
  data: DataType;
  resultCode: number;
};

const mapStateToProps = (store: StateType): MapStateToPropsType => {
  return {
    data: getLogindata(store),
    resultCode: getResultCode(store),
  };
};

export const ConnectContainerHeader = connect(mapStateToProps, {
  logoutOnPageThunk,
})(ContainerHeader);

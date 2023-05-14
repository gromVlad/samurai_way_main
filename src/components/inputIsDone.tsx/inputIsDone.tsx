import { ChangeEvent, useState } from "react";

type InputIsDoneType = {
  status: string;
  newStatus: (newStatus: string) => void;
  keyValue?: string;
};

export const InputIsDone = (props: InputIsDoneType) => {
  const { status, newStatus, keyValue } = props;
  let [isBoolean, setIsBoolean] = useState<boolean>(true);
  let [input, setInput] = useState<string>(status);

  const isChangeBoolean = () => {
    setIsBoolean(!isBoolean);
    setInput(status)
  }

  const onchangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  };

  const addnewStatus =()=>{
    newStatus(input);
    isChangeBoolean()
  }

  return (
    <>
      {isBoolean ? (
        <div onDoubleClick={isChangeBoolean}>
          {keyValue ? keyValue : status}
        </div>
      ) : (
        <input
          autoFocus
          value={input}
          type="text"
          onChange={onchangeInput}
          onBlur={addnewStatus}
        />
      )}
    </>
  );
};

import React, { useState } from "react";

type ToggleSwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const ToggleSwitch = ({ label, checked, onChange }: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <label>{label}</label>
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      </div>
    </div>
  );
};


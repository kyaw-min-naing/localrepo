import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default UsernameInput;

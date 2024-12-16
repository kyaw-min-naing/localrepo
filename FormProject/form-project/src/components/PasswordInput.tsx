import React, { useState } from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const PasswordInput: React.FC<Props> = ({ value, onChange, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="password-container">
      <label>{placeholder}:</label>
      <div className="password-input-wrapper">
        <input
          type={isVisible ? "text" : "password"}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
        />
        <i
          className={`fa ${isVisible ? "fa-eye-slash" : "fa-eye"}`}
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
    </div>
  );
};

export default PasswordInput;

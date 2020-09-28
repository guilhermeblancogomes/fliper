import React from "react";
import ImageError from "../../assets/error.png";
import "./index.scss";

const MessageError: React.FC = () => {
  return (
    <div className="container__error">
      <img src={ImageError} alt="" className="error__image" />
    </div>
  );
};
export default MessageError;

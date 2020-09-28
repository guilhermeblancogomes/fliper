import React from "react";
import ImageError from "../../assets/error.png";
import "./index.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
const MessageError: React.FC = () => {
  return (
    <div className="container__error">
      <img src={ImageError} alt="Mensagem de erro" className="error__image" />
      <a href="https://fliper.app/" className="link__go__home">
        <FaArrowCircleLeft className="icon__back" />
        Ir para Home
      </a>
    </div>
  );
};
export default MessageError;

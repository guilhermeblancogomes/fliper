import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./index.scss";

const Loading: React.FC = () => {
  return (
    <div className="container__loading">
      <ClipLoader size={150} color="#3b5cb8" />
      <p className="loading__title">Carregando seus dados...</p>
    </div>
  );
};

export default Loading;

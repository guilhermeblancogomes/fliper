import React from "react";
import "./index.scss";
import { FaEllipsisV } from "react-icons/fa";

const CardwealthSummary: React.FC = () => {
  return (
    <>
      <div className="container__card--wealth">
        <div className="card--wealth__title__menu">
          <h1 className="card--wealth__title">Seu resumo</h1>
          <FaEllipsisV className="card--wealth__icon__menu" />
        </div>
        <div className="card--wealth__amount--invested">
          <p className="amount--invested__title">Valor investido</p>
          <h2 className="amount--invested__amount">R$ 3.200.876,00</h2>
        </div>
        <div className="card--wealth__informations">
          <div className="informations__container">
            <p className="informations__label">Rentabilidadade/mês</p>
            <p className="informations__values">2,767%</p>
          </div>
          <div className="informations__container">
            <p className="informations__label">CDI</p>
            <p className="informations__values">3,45%</p>
          </div>
          <div className="informations__container">
            <p className="informations__label">Ganho/mês</p>
            <p className="informations__values">R$ 1833,23</p>
          </div>
        </div>
        <div className="card--wealth__button">
          <button className="button__see__more">Ver mais</button>
        </div>
      </div>
    </>
  );
};
export default CardwealthSummary;

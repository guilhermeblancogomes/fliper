import React from "react";
import "./index.scss";
import { FaEllipsisV } from "react-icons/fa";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../Loading/index";
import MessageError from "../MessageError/index";
import { GET_WEALTH_SUMMARY } from "../../service/graphql";
import { formatCurrency, formatNumber } from "../../utils/formatting";

const CardwealthSummary: React.FC = () => {
  const { data, loading, error } = useQuery(GET_WEALTH_SUMMARY);

  if (loading) return <Loading />;
  if (error) return <MessageError />;

  return (
    <>
      <div className="container__card--wealth">
        <div className="card--wealth__title__menu">
          <h1 className="card--wealth__title">Seu resumo</h1>
          <FaEllipsisV className="card--wealth__icon__menu" />
        </div>
        <div className="card--wealth__amount--invested">
          <p className="amount--invested__title">Valor investido</p>
          <h2 className="amount--invested__amount">
            {formatCurrency(data.wealthSummary[0].total)}
          </h2>
        </div>
        <div className="card--wealth__informations">
          <div className="informations__container">
            <p className="informations__label">Rentabilidadade/mês</p>

            <p className="informations__values">
              {formatNumber(data.wealthSummary[0].profitability)}%
            </p>
          </div>
          <div className="informations__container">
            <p className="informations__label">CDI</p>
            <p className="informations__values">
              {formatNumber(data.wealthSummary[0].cdi)}%
            </p>
          </div>
          <div className="informations__container">
            <p className="informations__label">Ganho/mês</p>
            <p className="informations__values">
              {formatCurrency(data.wealthSummary[0].gain)}
            </p>
          </div>
        </div>
        <div className="card--wealth__button">
          <a
            className="button__see__more"
            href="https://fliper.app/"
            rel="noopener"
            target="_blank"
          >
            Ver mais
          </a>
        </div>
      </div>
    </>
  );
};
export default CardwealthSummary;

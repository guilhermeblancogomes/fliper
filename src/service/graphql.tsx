import gql from "graphql-tag";

export const GET_WEALTH_SUMMARY = gql`
  query {
    wealthSummary {
      cdi
      gain
      hasHistory
      id
      profitability
      total
    }
  }
`;

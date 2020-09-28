export const formatNumber = (percentage: any) => {
  const formatingPercentage = percentage.toFixed(2);
  return formatingPercentage;
};
export const formatCurrency = (value: any) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
};

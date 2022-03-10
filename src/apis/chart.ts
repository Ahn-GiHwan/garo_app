import axios from 'axios';

const URL = 'https://garomapserver.herokuapp.com/chart';

export const getBoroughsFetch = async () => {
  const {data} = await axios.get(`${URL}/boroughs`);
  return data;
};

export const getChartDataFetch = async () => {
  const {data} = await axios.get(`${URL}/borough/loadNames/count`);
  return data;
};

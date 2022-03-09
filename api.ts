import axios from 'axios';

const URL = 'https://garomapserver.herokuapp.com';

export const getBoroughNameFetch = async () => {
  const {data} = await axios.get(`${URL}/borough`);
  return data;
};

export const getBoroughInNamesFetch = async () => {
  const {data} = await axios.get(`${URL}/boroughInLoadNames`);
  return data;
};

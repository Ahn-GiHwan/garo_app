import axios from 'axios';

const URL = 'https://garomapserver.herokuapp.com/map';

export const getBoroughsFetch = async () => {
  const {data} = await axios.get(`${URL}/boroughs`);
  return data;
};

export const getBoroughsGeocodeFetch = async (borough: string) => {
  const {data} = await axios.get(`${URL}/geocode/${borough}`);
  return data;
};

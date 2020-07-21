import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.databaseURL;

const getChores = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Chore/`)
    .then((result) => {
      const chore = result.data;
      resolve(chore);
    })
    .catch((err) => reject(err));
});

const addChore = (choreObj) => axios.post(`${baseUrl}/Chore/AddCHore`, choreObj);


export default {
  getChores,
  addChore
};
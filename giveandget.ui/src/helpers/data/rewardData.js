import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.databaseURL;

const getAllRewards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Reward/`)
    .then((result) => {
      const allReward = result.data;
      resolve(allReward);
    })
    .catch((err) => reject(err));
});

const addReward = (rewardObj) => axios.post(`${baseUrl}/Reward`, rewardObj);


export default {
  addReward,
  getAllRewards
};
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

const getAllAvailableRewards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Reward/available`)
    .then((result) => {
      const allavailableReward = result.data;
      resolve(allavailableReward);
    })
    .catch((err) => reject(err));
});

const addReward = (rewardObj) => axios.post(`${baseUrl}/Reward`, rewardObj);

const UpdateRewards = (userId, rewardId) => axios.put(`${baseUrl}/Reward/${rewardId}/user/${userId}`)


export default {
  addReward,
  getAllRewards,
  UpdateRewards,
  getAllAvailableRewards
};
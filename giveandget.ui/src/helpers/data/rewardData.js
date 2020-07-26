import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.databaseURL;

const addReward = (rewardObj) => axios.post(`${baseUrl}/Reward`, rewardObj);


export default {
  addReward
};
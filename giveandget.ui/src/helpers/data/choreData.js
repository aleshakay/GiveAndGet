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

const getChoreById = (singleChoreId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Chore/${singleChoreId}`)
    .then((result) => resolve(result.data))
    .catch((err) => reject(err));
});

const getAllChoresByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Chore/user/${userId}`)
    .then((result) => resolve(result.data))
    .catch((err) => reject(err));
});

const finishedChore = (choreId) => axios.post(`${baseUrl}/Chore/${choreId}`);

const addChore = (choreObj) => axios.post(`${baseUrl}/Chore`, choreObj);

const updateChoreUserId = (choreId, userId) => axios.put(`${baseUrl}/Chore/${choreId}/user/${userId}`)

export default {
  getChores,
  addChore,
  getChoreById,
  updateChoreUserId,
  getAllChoresByUserId,
  finishedChore
};
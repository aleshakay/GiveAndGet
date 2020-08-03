import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.databaseURL;

const getUserById = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/User/${userId}`)
    .then((result) => {
      const user = result.data;
      resolve(user);
    })
    .catch((err) => reject(err));
});

const getAllCCNamesPerFamily = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/User/${userId}/completed`)
    .then((result) => resolve(result.data))
    .catch((err) => reject(err));
});

const getallRoles = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/User/Roles`)
    .then((result) => {
      const allRoles = result.data;
      resolve(allRoles);
    })
    .catch((err) => reject(err));
});

const addUser = (userObj) => axios.post(`${baseUrl}/User`, userObj);

export default {
  getUserById,
  getAllCCNamesPerFamily,
  addUser,
  getallRoles
};
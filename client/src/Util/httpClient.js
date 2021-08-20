import axios from "axios";
const BaseURL = process.env.REACT_APP_API;

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${BaseURL}/api/user`, data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${BaseURL}/api/user`);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${BaseURL}/api/conversation`, data);
  } catch (error) {
    console.log("Error", error);
  }
};

export const getConversation = async (users) => {
  try {
    let response = await axios.post(`${BaseURL}/api/conversation`, users);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${BaseURL}/api/message/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const newMessages = async (data) => {
  try {
    return await axios.post(`${BaseURL}/api/message`, data);
  } catch (error) {
    console.log("Error", error);
  }
};

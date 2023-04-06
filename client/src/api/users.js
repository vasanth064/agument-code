import axios from '../config/axios';

export const getAllUsers = async () => {
  try {
    const data = await axios.get('users/');
    // console.log(data);
  } catch (err) {
    console.error(err.response.data);
  }
};

export const getUser = async (email) => {
  try {
    const data = await axios.post('users/', {
      email,
    });
    // console.log(data);
  } catch (err) {
    console.error(err.response.data);
  }
};

export const deleteUser = async (email) => {
  try {
    const data = await axios.delete('users/', {
      email,
    });
    // console.log(data);
  } catch (err) {
    console.error(err.response.data);
  }
};

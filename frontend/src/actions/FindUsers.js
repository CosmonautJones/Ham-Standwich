import axios from 'axios';

const URL = 'http://localhost:3031';
const w_id = localStorage.getItem('doc_id');
export const findUsers = async searchTerm => {
  try {
    const res = await axios.post(`${URL}/users/find`, {
      w_id: '5ad4cebecb2cb341f09211ee',
      searchTerm,
    });
    return res;
  } catch (error) {}
};

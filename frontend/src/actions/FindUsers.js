import axios from 'axios';

const URL = 'http://localhost:3031';
// const w_id = localStorage.getItem('doc_id');
export const findUsers = async searchTerm => {
  try {
    const res = await axios.post(`${URL}/users/find`, {
      w_id: '5ada4e11ee311e4894b9faae',
      searchTerm,
    });
    return res;
  } catch (error) {}
};

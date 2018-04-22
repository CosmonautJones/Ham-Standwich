import axios from 'axios';

const URL = '';

const w_id = '5ada4e11ee311e4894b9faae';

export const saveConversation = async c => {
  // console.log(c);
  try {
    const res = await axios.post('http://localhost:3031/conversation/create', {
      w_id,
      c,
    });
    alert('saved');
  } catch (error) {}
};

export const findConversation = async c_id => {
  // console.log(c);
  try {
    const res = await axios.post('http://localhost:3031/conversation/find', {
      c_id,
    });
    return res;
    alert('conversation found', res);
  } catch (error) {}
};

export const allConversations = async () => {
  try {
    const res = await axios.post('http://localhost:3031/conversation/all', {
      w_id,
    });
    return res;
  } catch (error) {}
};

export const deleteConversation = async (w_id, c_id) => {
  try {
    await axios.post('http://localhost:3031/conversation/delete', {
      w_id,
      c_id,
    });
  } catch (error) {}
};

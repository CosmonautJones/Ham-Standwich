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

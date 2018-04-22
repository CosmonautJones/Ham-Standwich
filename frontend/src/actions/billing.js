import axios from 'axios';

const URL = '';

const w_id = '5ada4e11ee311e4894b9faae';

// export const saveConversation = async c => {
//   // console.log(c);
//   try {
//     const res = await axios.post('http://localhost:3031/stripe', {
//       w_id,
//       token,
//     });
//     alert('Payment Successful');
//   } catch (error) {}
// };

export const hasActiveSubscription = async w_id => {
  try {
    const res = await axios.post('http://localhost:3031/auth/active', {
      w_id,
    });
    return res;
  } catch (error) {
    console.error;
  }
};

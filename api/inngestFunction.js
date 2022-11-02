const { createScheduledFunction } = require('inngest');
const axios = require('axios');

const job = async () => {
  for (let i = 0; i < 100; i++) {
  await  new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2500);
    })
    const { data } = await axios('https://express-test-chi.vercel.app/count');
    console.log('data:', data);
  }

  return data;
};


module.exports = createScheduledFunction(
  'cron request',
  '*/10 * * * *',
  job
)
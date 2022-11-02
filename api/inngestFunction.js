const { createScheduledFunction } = require('inngest');
const axios = require('axios');

const job = async () => {
  const { data } = await axios('https://express-test-chi.vercel.app/count');
  console.log('data:', data);
  return data; 
};


module.exports = createScheduledFunction(
  'cron request',
  '0/10 * * * * ? ', 
  job 
)
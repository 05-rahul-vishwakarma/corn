// cronJob.js
const cron = require('node-cron');

// Define the cron job. This example runs every minute.
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
  // Add your task logic here
});

console.log('Cron job is set up');

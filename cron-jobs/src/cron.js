import cron from 'node-cron';

export const taskEveryMinute = cron.schedule('* * * * *',() => {
    console.log(`${new Date(Date.now()).getMinutes()}, Sync every minute met`);
})

export const taskEveryFiveSeconds = cron.schedule('*/5 * * * * *',() => {
    console.log(`${new Date(Date.now()).getSeconds()}, Sync every 5 seconds met`);
})

export const taskEverySecond = cron.schedule('* * * * * *',() => {
    console.log(`${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`);
})
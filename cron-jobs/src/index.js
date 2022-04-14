import { taskEverySecond, taskEveryFiveSeconds, taskEveryMinute} from './cron.js';

taskEverySecond.start();
taskEveryFiveSeconds.start();
taskEveryMinute.start();

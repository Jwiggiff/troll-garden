const intervals = new Map();


export default [{
  id: 0,
  type: 'background',
  name: 'Random Discord Notification',
  settings: {
    enabled: false,
  },
  run: () => {
    console.log('Discord notification running...');
    const discordNotificationTimeout = (5 + (Math.random() * 6)) * (60 * 1000);
    const sound = new Audio('../sounds/discord.mp3');
    const intervalId = setInterval(() => {
      console.log('Playing discord notification...');
      sound.currentTime = 0;
      sound.play();
    }, discordNotificationTimeout);
    intervals.set(0, intervalId);
  },
  cleanup: () => {
    clearInterval(intervals.get(0));
  },
}, {
  id: 1,
  type: 'background',
  name: 'Random Slack Notification',
  settings: {
    enabled: false,
  },
  run: () => {
    const slackNotificationTimeout = (7 + (Math.random() * 6)) * (60 * 1000);
    const sound = new Audio('../sounds/slack.mp3');
    const intervalId = setInterval(() => {
      console.log('Playing slack notification...');
      sound.currentTime = 0;
      sound.play();
    }, slackNotificationTimeout);
    intervals.set(1, intervalId);
  },
  cleanup: () => {
    clearInterval(intervals.get(1));
  },
}, {
  id: 2,
  type: 'content',
  name: 'Replace Random Links with Rick Roll',
  settings: {
    enabled: false,
  },
  run: () => {
    console.log('Random Rick Roll inserter running...');
    const rickRoll = () => {
      document.querySelectorAll('a').forEach((anchor) => {
        anchor.addEventListener('click', e => {
          e.preventDefault() // disable the original behavior
          location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        });
      });
    };
    window.addEventListener('DOMContentLoaded', rickRoll);
  },
  cleanup() {

  },
}, {
  id: 51,
  type: 'content',
  name: 'Add a 1px blur on the whole page',
  settings: { 
    enabled: false
  },
  run: () => {
    document.body.style.filter = 'blur(1px)'
  },
  cleanup: () => document.body.style.filter = ''
}];

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'video-player-current-time';
const startPoint = localStorage.getItem(CURRENT_TIME_KEY) ?? 0;

const getCurrentTime = function (videoData) {
  const time = videoData.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(time));
};

player.setCurrentTime(startPoint);
player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setVolume(0.1);
player.setColor('#3289a8'); //set color of seeker
player.setQuality('720p');
// player.setMuted(true)
// console.log(player.getQuality());

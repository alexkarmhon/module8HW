import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

player.on('play', function() {
  console.log('played the video!');
});



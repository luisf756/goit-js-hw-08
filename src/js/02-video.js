// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
const iniTime = localStorage.getItem("videoplayer-current-time");
    
// player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
    
// player.setCurrentTime(iniTime).then().catch((error) => {
//     switch (error.name) {
//         case 'RangeError':
//             console.log('the time was less than 0 or greater than the video’s duration');
//             break;

//         default:
//             console.log('some other error occurred');
//             break;
//     }
// });

// player.on('timeupdate', throttle(() => {
//     player.getCurrentTime().then((seconds) => {
//         localStorage.setItem("videoplayer-current-time", seconds)
//     }).catch((error) => {
//         console.log('Ha ocurrido un error!');
//     });
// }, 1000));

import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

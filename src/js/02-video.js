
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// import { Player } from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const iniTime = localStorage.getItem("videoplayer-current-time");
    
 player.on('play', function() {
         console.log('played the video!');
     });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    
player.setCurrentTime(iniTime).then().catch((error) => {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration');
            break;

        default:
            console.log('some other error occurred');
            break;
    }
});

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem("videoplayer-current-time", seconds)
        // console.log(localStorage.getItem("videoplayer-current-time"))
    }).catch((error) => {
        console.log('Ha ocurrido un error!');
    });
}, 1000));

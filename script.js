const video = document.getElementById('video');
const play = document.getElementById('play');
const stopVid = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & Pause Video
const toggleVideoStatus = () =>{
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

//updates play/pause icon
const updateVideoIcon = () =>{
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//stop Video
const stopVideo = () =>{
    video.currentTime = 0;
    video.pause();
}

//updates progress bar and timestamp
const updateProgressBar = ()=>{
   progress.value = (video.currentTime / video.duration) * 100;

   //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins <10){
        mins = '0' + String(mins);
    } //learn more on floor

    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs <10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML =`${mins}:${secs}`;
}

//updates progress
const changeVideoProgress = ()=>{
    video.currentTime = (+progress.value * video.duration)/100;
}


//Event listeners for functions

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updateVideoIcon);
video.addEventListener('pause', updateVideoIcon);
video.addEventListener('timeupdate', updateProgressBar);

play.addEventListener('click', toggleVideoStatus);

stopVid.addEventListener('click', stopVideo);

progress.addEventListener('change', changeVideoProgress)
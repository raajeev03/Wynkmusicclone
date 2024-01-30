console.log("Welcome to Showbox");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/1.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/2.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/3.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/4.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/5.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/6.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/7.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/8.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/9.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/10.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/11.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/12.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/13.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/14.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/15.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/16.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/17.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/18.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/19.webp"},
    {songName: "Hum Aaye Hain", filePath: "songs/1.mp3", coverPath: "./trending song/20.webp"},
   


]

items.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


  
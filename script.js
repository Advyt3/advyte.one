const cartoonAudio = new Audio('./sound/1.mp3');
const forceAudio = new Audio('./sound/2.mp3');
const squeakyAudio = new Audio('./sound/3.mp3');
const hopeAudio = new Audio('./sound/4.mp3');
const janjiAudio = new Audio('./sound/5.mp3');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: cartoonAudio, audioName: 'Escape From LA (Official Instrumental) - The Weeknd' },
  { ele: forceAudio, audioName: 'Latch - Sam Smith TikTok Remix' },
  { ele: squeakyAudio, audioName: 'The Weeknd - Patient' },
  { ele: hopeAudio, audioName: 'POP IT - Goats Aint Real' },
  { ele: janjiAudio, audioName: 'Is there someone else? (slowed+reverb) - The Weeknd' },
];

var head = document.getElementsByTagName("head")[0];

for (weight of ["regular", "thin", "light", "bold", "fill", "duotone"]) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://unpkg.com/@phosphor-icons/web@2.0.3/src/" + weight + "/style.css";
  head.appendChild(link);
}

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}
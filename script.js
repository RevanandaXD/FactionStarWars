const content = [
  {
    id: 1,
    music: "assets/Themes/Republic.mp3",
    video: "assets/Video/Republic Fleet Arrives - Star Wars Fan Animation.mp4",
    text: "Galatic Republic"
  },
  {
    id: 2,
    music: "assets/Themes/CIS.mp3",
    video: "assets/Video/Separatist Fleet Arrives - Star Wars Fan Animation.mp4",
    text: "Confederacy of Independent Systems"
  },
  {
    id: 3,
    music: "assets/Themes/Empire.mp3",
    video: "assets/Video/Imperial Fleet Arrives - Star Wars Fan Animation.mp4",
    text: "Galatic Empire"
  },
  {
    id: 4,
    music: "assets/Themes/Rebellion.mp3",
    video: "assets/Video/Rebel Fleet Arrives - Star Wars Fan Animation.mp4",
    text: "Rebel Alliance"
  },
];

const faction = document.querySelectorAll('.faction');
const themes = document.querySelectorAll('.music-hover');

let currentAudio = null;
let currentVideo = null;

faction.forEach((e, index) => {
  e.addEventListener('mouseenter', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(content[index].music);
    currentAudio.loop = true;
    currentAudio.play();
  });

  e.addEventListener('mouseleave', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  });
});

const videoPage = document.querySelector('.video-container');
const factionPage = document.querySelector('.faction-container');
const reviewbtn = document.querySelectorAll('.btn-review');
const closebtn = document.querySelector('.close-btn');
const videoReview = document.querySelector('.video');
const question = document.querySelector('.choice');
const titleFaction = document.querySelector('.faction-choose')

reviewbtn.forEach((e, index) => {
  e.addEventListener('click', () => {
    if (content[index].video) {
      currentAudio.pause()
      videoReview.src = content[index].video;
      titleFaction.textContent = content[index].text;
      videoReview.play()
      videoReview.loop = true;
      factionPage.style.display = 'none';
      question.style.display = 'none';
      videoPage.style.display = 'flex'; 
    }
  });
});

closebtn.addEventListener('click', () => {
  if (videoPage.style.display === "flex") {
    videoReview.currentTime = 0;
    videoPage.style.display = 'none';
    question.style.display = 'block';
    factionPage.style.display = 'grid'; 
    videoReview.pause();
  }
});



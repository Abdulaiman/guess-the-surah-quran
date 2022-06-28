const playBtn = document.querySelector(".btn");
const pauseBtn = document.querySelector(".btn-pause");
const reloadBtn = document.querySelector(".btn-reload");
const quranText = document.querySelector(".quran");
const random = (max, min) => {
  return Math.floor(Math.random() * max - min) + (min + 1);
};

const getJson = async (reciter) => {
  const changeValue = () => {
    const random1 = random(100, 60);
    const random2 = random(10, 1);
    return `${random1}:${random2}`;
  };
  const res = await fetch(
    `http://api.alquran.cloud/v1/ayah/${changeValue()}/ar.alafasy`
  );
  // const res = await fetch(`http://api.alquran.cloud/v1/quran/ar.alafasy`);
  const data = await res.json();

  return data;
};
const data = await getJson();
let audio1 = new Audio();

audio1.src = data.data.audio;
console.log(data.data);
playBtn.addEventListener("click", function (e) {
  e.preventDefault();
  audio1.play();

  quranText.textContent = data.data.text;

  // audio1.addEventListener("pause", pause);
  pauseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    audio1.pause();
  });
  reloadBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.location.reload();
  });
});

// reloadBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const mydata = await getJson();

//   const audio2 = new Audio();
//   audio2.src = mydata.data.audio2;
//   console.log(mydata);
//   // audio2.play();
// });

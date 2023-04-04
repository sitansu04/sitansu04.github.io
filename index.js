// window.onscroll = () => {
//     const nav = document.querySelector('#nav-menu');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };

let sidemune = document.querySelector(".nav_inner");

function openmenu() {
  sidemune.style.right = "0";
}
function closemenu() {
  sidemune.style.right = "-200px";
}

GitHubCalendar(".calendar", "sitansu04");

// or enable responsive functionality:
// GitHubCalendar(".calendar", "sitansu04", { responsive: true });

// Use a proxy
// const username = "sitansu04";
// GitHubCalendar(".calendar", "sitansu04", {
//   proxy(username) {
//     return fetch(`https://your-proxy.com/github?user=${username}`);
//   },
// }).then((r) => console.log(r))
// .catch((err)=>console.log(err))
GitHubCalendar(".calendar", "sitansu04", {
  responsive: true,
  global_stats: true,
  tooltips: true,
});

document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1f3iTp0zU24L_MB9LjhszOwHuSaGrb9ca/view?usp=share_link"
  );
};

// document.getElementById("resume-button-2").onclick = () => {
//   window.open(
//     "https://drive.google.com/file/d/1f3iTp0zU24L_MB9LjhszOwHuSaGrb9ca/view?usp=share_link"
//   );
// };


// var typed=new Typed(".variable", {
//   strings: ["Full Stack Web Developer", "Coder", "Problem Solver"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

document.getElementById("resume-link-2").addEventListener("click",()=>{
  window.open("https://drive.google.com/file/d/1f3iTp0zU24L_MB9LjhszOwHuSaGrb9ca/view?usp=share_link", "_black")
})
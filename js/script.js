// Count
var nums = document.querySelectorAll('.stats .container .box h2');
let stats_section = document.querySelector('.stats');
let started = false;
// Skills
let skills_section = document.querySelector('.our-skills');
let span = document.querySelectorAll('.our-skills .progress span');
// up_to_top
let icon_up = document.querySelector('i.up-to-top');

window.onscroll = function() {
  console.log(this.scrollY)
// Count
  if(window.scrollY >= stats_section.offsetTop - 300) { 
    !started ? nums.forEach((num) => startCount(num) ) : null;
    started = true;
  }
// Skills
  if (window.scrollY >= skills_section.offsetTop - 300) {
    span.forEach((s) => s.style.width = s.parentElement.dataset.progress)
  }

  window.scrollY >= 100
  ? icon_up.classList.add('show-up-to-tp')
  : icon_up.classList.remove('show-up-to-tp')
}
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    goal == el.textContent ? clearInterval(count) : null;
  }, 2000 / goal)
}

icon_up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


// Countdown

// End of the Year Date
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date();
  let dateDiff = countDownDate - dateNow;

  // let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  // OR
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

  document.querySelector(".events .unit .days").innerHTML = days;
  document.querySelector(".events .unit .hours").innerHTML = hours;
  document.querySelector(".events .unit .minutes").innerHTML = minutes;
  document.querySelector(".events .unit .seconds").innerHTML = seconds;
}, 1000)





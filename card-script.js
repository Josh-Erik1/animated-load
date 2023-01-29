const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const named = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />';

  title.innerHTML = "Lorem ipsum dolor sit amet.";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellendus!";

  profile_img.innerHTML =
    '<img class="profile-img" src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';

  named.innerHTML = "John Doe";
  date.innerHTML = "Jan 28, 2023";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_text.forEach((bg) => bg.classList.remove("animated-bg-rext"));
}

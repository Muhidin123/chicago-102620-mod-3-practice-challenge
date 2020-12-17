let ul = document.querySelector("section.feedback").querySelector("ul");
let likes = document.querySelector("span");
let div = likes.parentElement;
let likeButton = div.lastElementChild;
let unlikeButton = div.firstElementChild;
const form = document.querySelector("form");
const input = form.firstElementChild;

fetchAll();

function firstPlayer(player) {
  const img = document.querySelector("img");
  img.src = player.image;
  const h2 = document.querySelector("h2");
  h2.textContent = player.name;
  const p = document.querySelector("p");
  p.textContent = player.description;
  player.feedback.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.feedback;
    ul.append(li);
  });
  likes.innerText = player.likes;
}

likeButton.addEventListener("click", (e) => {
  //   like();
  patchFetch(like());
});

unlikeButton.addEventListener("click", (e) => {
  patchFetch(unlike());
});

function like() {
  return (likes.textContent = parseInt(likes.textContent) + 1);
}

function unlike() {
  return (likes.textContent -= 1);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ul.innerHTML += `<li>${input.value}</li>`;
  form.reset();
});

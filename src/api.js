function fetchAll() {
  fetch("http://localhost:3000/dancers/1?_embed=feedback")
    .then((res) => res.json())
    .then((player) => {
      ul.innerHTML = "";
      console.log(player);
      firstPlayer(player);
    });
}

function patchFetch(newLikes) {
  fetch("http://localhost:3000/dancers/1", {
    method: "PATCH",
    body: JSON.stringify({
      likes: newLikes,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      likes.innerText = result.likes;
      console.log(result);
      //   ul.innerHTML += `<li>${result.feedback}</li>`;
    });
}

function postFetch(feedback) {
  fetch("http://localhost:3000/dancers/1", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        feedback: feedback
    }),
  }).then((res) => res.json());
}

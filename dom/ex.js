/// RESOLUÇÃO

function displayUsers(users) {
  // 1
  const div = document.getElementById("app");
  const ul = document.createElement("ul");
  div.appendChild(ul);

  // 2
  users.forEach((el) => {
    // 3
    const newLi = document.createElement("li");

    newLi.innerHTML = el;
    newLi.className = "user-item";
    ul.appendChild(newLi);
  });
}

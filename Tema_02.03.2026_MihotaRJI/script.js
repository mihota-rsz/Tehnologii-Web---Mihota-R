let resources = [];
fetch("data/resources.json")
  .then((response) => response.json())
  .then((data) => {
    resources = data.resources;
    displayResources(resources);
    displayTags(resources);
  })
  .catch((error) => {
    console.log("Eroare la încărcarea JSON:", error);
  });

function displayResources(list) {
  const container = document.getElementById("resources-container");

  container.innerHTML = "";

  list.forEach((resource) => {
    const card = document.createElement("div");

    card.classList.add("resource-card");

    const name = document.createElement("h3");
    name.textContent = resource.name;

    const type = document.createElement("p");
    type.textContent = "Type: " + resource.type;

    const location = document.createElement("p");
    location.textContent = "Location: " + resource.location;

    const program = document.createElement("p");
    program.textContent = "Program: " + resource.program;

    const tags = document.createElement("p");
    tags.textContent = "Tags: " + resource.tags.join(", ");

    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(location);
    card.appendChild(program);
    card.appendChild(tags);

    container.appendChild(card);
  });
}

function filterStudy() {
  const studyPlaces = resources.filter((resource) => resource.type === "study");

  displayResources(studyPlaces);
}

function showAll() {
  displayResources(resources);
}

function displayTags(resources) {
  const tagList = document.getElementById("tags-list");
  const tags = resources.flatMap((resource) => resource.tags);
  const uniqueTags = [...new Set(tags)];

  uniqueTags.forEach((tag) => {
    const li = document.createElement("li");

    li.textContent = tag;

    tagList.appendChild(li);
  });
}

const button = document.getElementById("scrollButton");
if (button) {
  button.addEventListener("click", () => {
    document.getElementById("resources").scrollIntoView();
  });
}

const menuButton = document.getElementById("menuButton");
const phoneMenu = document.getElementById("phonemenu");

menuButton.addEventListener("click", () => {

phoneMenu.classList.toggle("active");

});
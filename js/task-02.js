const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const part = document.createDocumentPart();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  part.appendChild(listItem);
});

list.appendChild(part);

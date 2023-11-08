const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

for (const ingridient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList.add("item");
  list.append(listItem);
}

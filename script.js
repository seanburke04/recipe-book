let recipes = [];

fetch("data/recipes.json")
  .then((response) => response.json())
  .then((data) => {
    recipes = data;
    displayRecipes(recipes);
  });

const searchInput = document.getElementById("searchInput");
const recipeList = document.getElementById("recipeList");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(query) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(query)),
  );

  displayRecipes(filtered);
});

function displayRecipes(recipesToShow) {
  recipeList.innerHTML = "";

  recipesToShow.forEach((recipe) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = recipe.url;
    a.textContent = recipe.title;

    li.appendChild(a);
    recipeList.appendChild(li);
  });
}

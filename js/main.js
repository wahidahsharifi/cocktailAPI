//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
document.querySelector("button").addEventListener("click", () => {
   const input = document.querySelector("input").value;
   const information = document.getElementById("information");
   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json())
      .then((data) => {
         information.innerHTML = '';
         if (data.drinks === null) {
            information.innerHTML = '<li><h2>No cocktail found</h2></li>';
         }
         data.drinks.forEach((drink) => {
            information.innerHTML += `<li>
         <h2>${drink.strDrink}</h2>
         <img src="${drink.strDrinkThumb}">
         <p>${drink.strInstructions}</p>
      </li>`;
         });
      })
      .catch((err) => {
         console.log(`Error: ${err}`);
      });
});
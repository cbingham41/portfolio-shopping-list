import React, { useState, useEffect, useRef } from "react";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
import ShoppingList from "../ShoppingList/ShoppingList";
import RecipeBook from "../RecipeBook/RecipeBook";
import "./AppData.scss";

const AppData = () => {
  //
  // Shopping List
  //
  const [shoppingList, setShoppingList] = useState(
    localStorage.getItem("shoppingList")
      ? JSON.parse(localStorage.getItem("shoppingList"))
      : []
  );

  // Update Shopping List
  const previousShoppingList = useRef(shoppingList);
  useEffect(() => {
    if (
      JSON.stringify(previousShoppingList.current) !==
      JSON.stringify(shoppingList)
    ) {
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
      previousShoppingList.current = [...shoppingList];
    }
  }, [shoppingList]);

  // Add to Shopping List from custom input
  const [customInput, setCustomInput] = useState("");
  const updateItem = (e) => {
    setCustomInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (customInput) {
      setShoppingList([...shoppingList, customInput]);
    }
  };

  // Add to Shopping List from recipe
  const addIngredient = (ingredient) => {
    setShoppingList([...shoppingList, ingredient]);
  };

  // Remove from Shopping List
  const onRemove = (removeIndex) => {
    setShoppingList(
      shoppingList.filter((value, index) => {
        return index !== removeIndex;
      })
    );
  };

  //
  // Recipe API
  //
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({ extendedIngredients: [] });
  const getRandomRecipe = () => {
    console.log("Faking Data");
    fetch(
      "https://api.spoonacular.com/recipes/random?number=1&apiKey=09b869c96bdb441caf49d0bcdbbf2325"
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipe(result.recipes[0]);
      });
  };

  useEffect(() => {
    setIsLoading(false);
    getRandomRecipe();
  }, []);

  //
  // Theme Selection
  //
  const [theme, setTheme] = useState(
    localStorage.getItem("shoppingTheme")
      ? localStorage.getItem("shoppingTheme")
      : "light"
  );
  const toggleTheme = () => {
    theme === "light"
      ? setTheme("dark") && localStorage.setItem("shoppingTheme", "dark")
      : setTheme("light") && localStorage.setItem("shoppingTheme", "light");
  };

  //
  // Render
  //
  return (
    <div className={`appWrapper `}>
      {!isLoading ? (
        <>
          <ThemeSelect theme={theme} toggleTheme={toggleTheme} />
          <main className="mainWrapper">
            <RecipeBook
              theme={theme}
              recipe={recipe}
              addIngredient={addIngredient}
              getRandomRecipe={getRandomRecipe}
            />
            <ShoppingList
              theme={theme}
              shoppingList={shoppingList}
              customInput={customInput}
              updateItem={updateItem}
              onSubmit={onSubmit}
              onRemove={onRemove}
            />
          </main>
        </>
      ) : (
        [<h1 className="isLoading">Loading Recipe API</h1>]
      )}
    </div>
  );
};

export default AppData;

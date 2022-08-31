import React from "react";
import "./RecipeBook.scss";

const RecipeBook = ({ theme, recipe, getRandomRecipe, addIngredient }) => {
  const getDiets = () => {
    var outputString = "Diets: ";
    recipe.diets.forEach((value, index) => {
      outputString += value;
      if (index < recipe.diets.length - 2) outputString += `, `;
      if (index < recipe.diets.length - 1) outputString += ` and `;
    });
    return outputString;
  };

  return (
    <div className={`recipeBook ${theme}-background`}>
      <div className={`recipeHeader ${theme}-secondary`}>
        {recipe.title ? (
          <h1 className={`${theme}-text`}>Recipe Suggestion: {recipe.title}</h1>
        ) : (
          []
        )}
        <button className="recipeButton" onClick={() => getRandomRecipe()}>
          Try a different recipe
        </button>
      </div>
      <div className="recipeWrapper">
        <div className="imageWrapper">
          {recipe.image ? (
            <img
              src={recipe.image}
              width="800px"
              alt=""
              className="recipeImage"
            />
          ) : (
            []
          )}

          {recipe.sourceUrl ? (
            <>
              <p className={`${theme}-text`}>
                {recipe.sourceName ? (
                  <h4 className={`source ${theme}-text `}>
                    Source: {recipe.sourceName}
                  </h4>
                ) : (
                  []
                )}
                <a href={recipe.sourceUrl}>{recipe.sourceUrl}</a>
              </p>
            </>
          ) : (
            []
          )}

          {recipe.diets && recipe.diets.length > 0 ? (
            <div className="recipeDiets">
              <h4 className={`${theme}-text`}>{getDiets()}</h4>
            </div>
          ) : (
            []
          )}

          {recipe.servings > 0 ? (
            <div className="source">
              <h4 className={`${theme}-text`}>Servings: {recipe.servings}</h4>
            </div>
          ) : (
            []
          )}

          {recipe.preparationMinutes > 0 ? (
            <div className="source">
              <h4 className={`${theme}-text`}>
                Preparation: {recipe.preparationMinutes} minutes
              </h4>
            </div>
          ) : (
            []
          )}

          {recipe.cookingMinutes > 0 ? (
            <div className="source">
              <h4 className={`${theme}-text`}>
                Preparation: {recipe.cookingMinutes} minutes
              </h4>
            </div>
          ) : (
            []
          )}

          {recipe.readyInMinutes > 0 ? (
            <div className="source">
              <h4 className={`${theme}-text`}>
                Time until ready: {recipe.readyInMinutes} minutes
              </h4>
            </div>
          ) : (
            []
          )}
        </div>
        <div className="recipeDescriptionWrapper">
          <div className="recipeDescription">
            <h1 className={`${theme}-text`}>About this dish</h1>

            <h3 className={`${theme}-text`}>Ingredients: </h3>
            {recipe.extendedIngredients && recipe.extendedIngredients.length > 0
              ? recipe.extendedIngredients.map((ingredient) => {
                  return (
                    <button
                      key={ingredient.id}
                      className="ingredient"
                      onClick={() => addIngredient(ingredient.name)}
                    >
                      {ingredient.name}
                    </button>
                  );
                })
              : null}

            <h3 className={`${theme}-text`}>Description: </h3>
            {recipe.summary ? (
              <p
                className={`${theme}-text`}
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            ) : (
              []
            )}
          </div>

          <h3 className={`${theme}-text`}>Instructions: </h3>
          {recipe.instructions ? (
            <p
              className={`${theme}-text`}
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            />
          ) : (
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeBook;

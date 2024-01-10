import { useRef } from "react";
import { toast } from "react-toastify";
import { isIncludeItemThisArr } from "../utils/isIncludeItemThisArr";

function Ingredients({ ingredients, setIngredients }) {
  const ingredientInput = useRef(null);
  function addIngredients() {
    let newIngredient = ingredientInput.current.value.toLowerCase().trim();
    newIngredient =
      newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1);
    if (newIngredient.length > 2 && ingredients.length < 20) {
      if (!isIncludeItemThisArr(ingredients, newIngredient)) {
        setIngredients((prev) => [...prev, newIngredient]);
      } else {
        toast.info("This ingredient already exist");
      }
      ingredientInput.current.value = "";
    } else {
      if (!(newIngredient.length > 2)) {
        toast.info("Ingredients name must be at least 3 character");
      } else {
        toast.info("You can not add more than 20 item");
      }
    }
    ingredientInput.current.focus();
  }

  function deleteIngredient(ingredientId) {
    setIngredients((prev) => {
      const ingredients = prev.filter((id) => id !== ingredientId);
      return ingredients;
    });
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex w-full items-end gap-2">
        <label className="flex w-full flex-col items-start">
          <span className="mb-1 font-semibold">Ingredients:</span>
          <input
            className="input input-bordered input-md w-full"
            ref={ingredientInput}
            type="text"
            placeholder="Enter ingredients of meal"
            min="3"
            max="12"
            onKeyDown={({ code }) => code === "Enter" && addIngredients()}
          />
        </label>
        <button
          className="btn btn-accent w-20"
          type="button"
          onClick={addIngredients}
        >
          +
        </button>
      </div>
      <div className="flex items-start gap-2">
        <span>Ingredients: </span>
        {ingredients.length > 0 ? (
          <ul className="flex flex-wrap gap-1">
            {ingredients.map((newIngredient) => {
              return (
                <li key={newIngredient}>
                  <div className="badge badge-info gap-2">
                    <button
                      type="button"
                      onClick={() => deleteIngredient(newIngredient)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-4 w-4 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                    {newIngredient}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="badge badge-outline pointer-events-none self-center">
            ! No ingredients yet
          </div>
        )}
      </div>
    </div>
  );
}

export default Ingredients;

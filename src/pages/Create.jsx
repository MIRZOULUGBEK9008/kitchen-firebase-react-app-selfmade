import { useState } from "react";
import Images from "../components/Images";
import Ingredients from "../components/Ingredients";
import { getFormData } from "../utils/getFormData";
import { dataCollector } from "../utils/dataCollector";
import { toast } from "react-toastify";

function Create() {
  const [ingredients, setIngredients] = useState([]);
  const [images, setImages] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    const ingredientsLength = ingredients.length;
    const imagesLength = images.length;
    if (ingredientsLength > 2 && imagesLength > 0) {
      const createdDate = new Date().toLocaleString();
      const allRecipeData = dataCollector(data, {
        ingredients,
        images,
        createdDate,
      });
    } else {
      if (!(ingredientsLength > 2)) {
        toast.info("You must enter at least 3 ingredients of meal");
      }
      if (!(imagesLength > 0)) {
        toast.info("You must upload at least 1 photo of meal");
      }
    }
  }
  return (
    <div className="mx-auto max-w-xl py-10">
      <h2 className="mb-5 text-center text-2xl font-semibold capitalize">
        Add new recipe
      </h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className="flex flex-col items-start">
          <span className="mb-1 font-semibold">Title:</span>
          <input
            className="input input-bordered input-md w-full"
            name="title"
            type="text"
            placeholder="Enter your meal name"
            min="4"
            max="100"
          />
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1 font-semibold">Cooking time:</span>
          <input
            className="input input-bordered input-md w-full"
            name="time"
            type="number"
            placeholder="Enter preparation time of your meal"
            min="3"
            max="3600"
          />
        </label>
        <Ingredients
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <Images images={images} setImages={setImages} />
        <label className="flex flex-col items-start">
          <span className="mb-1 font-semibold">Method:</span>
          <textarea
            className="textarea textarea-bordered textarea-md min-h-28 w-full"
            name="method"
            placeholder="Enter method of meal"
            minLength="10"
            maxLength="300"
            required
          ></textarea>
        </label>
        <div className="flex w-full justify-between">
          <button className="btn btn-info w-[49%]">Apply</button>
          <button className="btn btn-success w-[49%]" type="button">
            Preview
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;

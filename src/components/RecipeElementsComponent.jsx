import { NavLink } from "react-router-dom";

function RecipeElementsComponent({
  elements: { images, ingredients, cookingTime, title, method },
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="carousel carousel-center space-x-4 rounded-box bg-neutral p-4">
        {images.map((imgURL) => {
          return (
            <div key={imgURL} className="carousel-item">
              <img src={imgURL} className="max-w-sm rounded-box" />
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
        <div className="mb-5 flex items-start gap-2">
          <span className="font-semibold">Ingrediens: </span>
          <ul className="flex flex-wrap gap-2">
            {ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>
                  <div className="badge badge-neutral">{ingredient}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-5">
          <span className="font-semibold">
            Cooking time:
            <span className="ml-2 font-normal">{cookingTime} minutes</span>
          </span>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-xl font-semibold">Method</h3>
          <p className="mb-5">{method}</p>
          <NavLink className="btn btn-secondary ml-auto" to="/">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RecipeElementsComponent;

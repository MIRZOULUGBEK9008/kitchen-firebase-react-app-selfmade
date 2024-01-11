import { getFormData } from "../utils/getFormData";

function Preview({ images, ingredients, recipeForm }) {
  const { title, cookingTime, method } = getFormData(recipeForm);
  return (
    <div className="flex items-start gap-10">
      <div className="carousel carousel-center max-w-xl space-x-4 rounded-box bg-neutral p-4">
        {images &&
          images.map((imgURL) => {
            return (
              <div key={imgURL} className="carousel-item">
                <img
                  src={imgURL}
                  className="rounded-box object-contain"
                  width="400"
                />
              </div>
            );
          })}
      </div>
      <div>
        <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
        <div className="mb-5 flex items-start gap-2">
          <span className="font-semibold">Ingrediens: </span>
          <ul className="flex flex-wrap gap-2">
            {ingredients &&
              ingredients.map((ingredient) => {
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
        <div>
          <h3 className="mb-5 text-xl font-semibold">Method</h3>
          <p>{method}</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;

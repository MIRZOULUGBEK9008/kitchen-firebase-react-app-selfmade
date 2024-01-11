import { getFormData } from "../utils/getFormData";

function Preview({ images, ingredients, recipeForm }) {
  const { title, cookingTime, method } = getFormData(recipeForm);
  return (
    <div className="flex items-start gap-10 max-md:flex-col max-md:gap-5">
      <div className="carousel carousel-center max-w-xl space-x-4 rounded-box bg-neutral p-4 max-lg:max-w-sm max-md:w-full max-md:max-w-full">
        {images &&
          images.map((imgURL) => {
            return (
              <div
                key={imgURL}
                className="carousel-item w-[400px] max-md:w-[300px]"
              >
                <img src={imgURL} className="rounded-box" />
              </div>
            );
          })}
      </div>
      <div>
        <h2 className="mb-5 line-clamp-1 text-2xl font-semibold">{title}</h2>
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
          <p className="line-clamp-5">{method}</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;

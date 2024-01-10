import { isPassed24Hours } from "../utils/isPassed24Hours";
import { sortDescendingByCreatedDate } from "../utils/sortDescendingByCreatedDate";

function Recipes({ recipes }) {
  return recipes.length > 0
    ? sortDescendingByCreatedDate(recipes).map(
        ({ id, title, method, images, cookingTime, createdDate }) => {
          const randomIndex = Math.floor(Math.random() * images.length);
          const checker = isPassed24Hours(createdDate);
          return (
            <li
              key={id}
              className="card cursor-pointer bg-base-100 shadow-md transition hover:opacity-90 hover:shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title line-clamp-2">{title}</h2>
                <p className="mb-2 line-clamp-3">{method}</p>
                <div className="card-actions justify-end">
                  {!checker && (
                    <div className="badge badge-secondary">! NEW</div>
                  )}
                  <div className="badge badge-info">
                    ⌚ {cookingTime} minutes
                  </div>
                </div>
              </div>
              <figure>
                <img
                  className="h-52 w-full object-cover"
                  src={images[randomIndex]}
                  alt={title}
                />
              </figure>
            </li>
          );
        },
      )
    : "No recipe";
}

export default Recipes;

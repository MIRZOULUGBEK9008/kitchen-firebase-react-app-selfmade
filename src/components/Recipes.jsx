import { useNavigate } from "react-router-dom";
import { useDeleteRecipe } from "../hooks/useDeleteRecipe";
import { isPassed24Hours } from "../utils/isPassed24Hours";
import { sortDescendingByCreatedDate } from "../utils/sortDescendingByCreatedDate";

function Recipes({ recipes }) {
  const navigate = useNavigate();
  const { deletedDoc } = useDeleteRecipe();

  function handleDelete(colName, id) {
    confirm("Do you want to delete this recipe ?") && deletedDoc(colName, id);
  }

  function manageNavigate(address) {
    navigate(address);
  }

  return recipes.length > 0
    ? sortDescendingByCreatedDate(recipes).map(
        ({ id, title, method, images, cookingTime, createdDate }) => {
          const randomIndex = Math.floor(Math.random() * images.length);
          const checker = isPassed24Hours(createdDate);
          return (
            <li
              key={id}
              className="card relative cursor-pointer bg-base-100 shadow-md transition hover:opacity-90 hover:shadow-xl"
              onClick={() => manageNavigate(`recipe-elements/${id}`)}
            >
              <div
                className="tooltip tooltip-top  absolute right-2 top-2"
                data-tip="Delete recipe"
              >
                <button
                  className="btn btn-circle btn-ghost btn-sm"
                  onClick={() => handleDelete("recipes", id)}
                >
                  ✕
                </button>
              </div>
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

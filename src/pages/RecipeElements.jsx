import { useParams } from "react-router-dom";
import { useFirebaseDataById } from "../hooks/useFirebaseDataById";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RecipeElementsComponent from "../components/RecipeElementsComponent";

function RecipeElements() {
  const [items, setItems] = useState(null);
  const { id: idParam } = useParams();
  const { getRecipeElements } = useFirebaseDataById();
  useEffect(() => {
    const elements = getRecipeElements("recipes", idParam);
    elements
      .then((res) => {
        setItems(res);
      })
      .catch(({ message }) => {
        toast.error(message);
      });
  }, []);

  return (
    <div className="py-10">
      <h2 className="mb-5 text-2xl font-semibold">Recipe elements</h2>
      {items ? (
        <RecipeElementsComponent elements={items} />
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default RecipeElements;

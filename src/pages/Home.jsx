import Recipes from "../components/Recipes";
import { useFirebaseData } from "../hooks/useFirebaseData";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { user } = useGlobalContext();
  const { documents: recipes } = useFirebaseData("recipes", [
    "uid",
    "==",
    user.uid,
  ]);
  return (
    <div className="py-10">
      <h2 className="mb-5 text-2xl font-semibold">Recipes</h2>
      {recipes ? (
        <ul className="grid grid-cols-4 gap-10 max-[1300px]:grid-cols-3  max-[1000px]:grid-cols-2  max-[650px]:grid-cols-1 max-[650px]:gap-x-0 max-[650px]:gap-y-4">
          <Recipes recipes={recipes} />
        </ul>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Home;

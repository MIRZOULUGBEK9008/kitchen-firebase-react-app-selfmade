import Images from "../components/Images";
import Ingredients from "../components/Ingredients";

function Create() {
  return (
    <div className="mx-auto max-w-xl py-10">
      <h2 className="mb-5 text-center text-2xl font-semibold capitalize">
        Add new recipe
      </h2>
      <form className="flex flex-col gap-3">
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
        <Ingredients />
        <Images />
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

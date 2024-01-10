import { useRef } from "react";
import { toast } from "react-toastify";
import { isIncludeItemThisArr } from "../utils/isIncludeItemThisArr";

function Images({ images, setImages }) {
  const imageInput = useRef(null);
  function addImage() {
    const newUrl = imageInput.current.value.trim();
    if (newUrl.length > 0) {
      try {
        const validURL = new URL(newUrl);
        if (!validURL) throw new Error("You must enter valid URL");
        else {
          if (images.length < 8) {
            const imageURL = validURL.href;
            const imageRegex = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
            if (imageRegex.test(imageURL)) {
              if (!isIncludeItemThisArr(images, imageURL)) {
                setImages((prev) => [...prev, imageURL]);
              } else {
                toast.info("This picture already exist");
              }
            } else {
              toast.warn("It is not valid image URL");
            }
          } else {
            toast.info("You can not upload image more than 8");
          }
          imageInput.current.value = "";
        }
      } catch ({ message }) {
        toast.info(message);
      }
    } else {
      toast.info("Empty input, please fill");
    }
    imageInput.current.focus();
  }

  function deleteImage(imageId) {
    setImages((prev) => {
      const images = prev.filter((id) => id !== imageId);
      return images;
    });
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex w-full items-end gap-2">
        <label className="flex w-full flex-col items-start">
          <span className="mb-1 font-semibold">Image URL:</span>
          <input
            className="input input-bordered input-md w-full"
            ref={imageInput}
            type="url"
            placeholder="Enter image URL"
            onKeyDown={({ code }) => code === "Enter" && addImage()}
          />
        </label>
        <button
          className="btn btn-accent w-20"
          type="button"
          onClick={addImage}
        >
          +
        </button>
      </div>
      <div className="flex items-start gap-2">
        <span>Images: </span>
        {images.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {images.map((imageURL) => {
              return (
                <li key={imageURL} className="avatar relative">
                  <button
                    className="btn btn-circle  btn-xs absolute right-1 top-1"
                    type="button"
                    onClick={() => deleteImage(imageURL)}
                  >
                    ✕
                  </button>
                  <div className="w-24 rounded-xl">
                    <img src={imageURL} />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="badge badge-outline pointer-events-none self-center">
            ! No images yet
          </div>
        )}
      </div>
    </div>
  );
}

export default Images;

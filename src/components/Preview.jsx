function Preview({ images }) {
  return (
    <div className="flex items-start">
      <div className="carousel carousel-center max-w-xl space-x-4 rounded-box bg-neutral p-4">
        {images &&
          images.map((imgURL) => {
            return (
              <div className="carousel-item">
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
        <h2>Nimadurs</h2>
      </div>
    </div>
  );
}

export default Preview;

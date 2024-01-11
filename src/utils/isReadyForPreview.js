export function isReadyForPreview(data) {
  let checker = false;
  const { images, ingredients, title, method, cookingTime } = data;
  if (
    images.length > 0 &&
    ingredients.length > 2 &&
    title.length >= 4 &&
    title.length <= 100 &&
    method.length >= 10 &&
    method.length <= 300 &&
    cookingTime >= 3 &&
    cookingTime <= 3600
  ) {
    checker = true;
    return { checker, data };
  } else {
    return { checker, data };
  }
}

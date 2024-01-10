export function sortDescendingByCreatedDate(array) {
  return array.sort((a, b) => {
    return new Date(b.createdDate) - new Date(a.createdDate);
  });
}

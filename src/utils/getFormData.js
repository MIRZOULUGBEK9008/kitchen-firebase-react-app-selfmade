export function getFormData(formTarget) {
  const form = new FormData(formTarget);
  const data = {};
  for (const [key, value] of form.entries()) {
    data[key] = value;
  }
  return data;
}

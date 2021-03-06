export function handleErrors(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response;
}

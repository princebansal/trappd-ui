export const apiConfig = {
  host: "http://localhost:8080",
};

export function handleErrors(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response;
}

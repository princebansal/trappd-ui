export const apiConfig = {
  host: "https://api.trappd.in",
};

export function handleErrors(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response;
}

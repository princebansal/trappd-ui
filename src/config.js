export const apiConfig = {
  host: "http://trappd-server-elb-1119120693.ap-south-1.elb.amazonaws.com",
};

export function handleErrors(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response;
}

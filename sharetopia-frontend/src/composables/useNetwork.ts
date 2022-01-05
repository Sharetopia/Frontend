import { Auth } from "aws-amplify";

export function useNetwork() {
  const apiCall = async <T extends unknown>(url: string) => {
    const token = (await Auth.currentSession()).getAccessToken();
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.getJwtToken()}`,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  };

  return {
    apiCall,
  };
}

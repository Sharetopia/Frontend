import { Auth } from "aws-amplify";

export function useNetwork() {
  const apiCall = async <T extends unknown>(
    url: string,
    type: string,
    params?: any
  ) => {
    const token = (await Auth.currentSession()).getAccessToken();
    const options: RequestInit = {
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.getJwtToken()}`,
      },
    };
    if (params && "GET" === type) {
      url += "?" + new URLSearchParams(params).toString();
    } else if (params && "POST" === type) {
      options.body = JSON.stringify(params);
    }

    console.log(`Bearer ${token.getJwtToken()}`)
    console.log(options)

    return fetch(url, options).then((response) => {
      if (!response.ok) {
        console.log(response.json())
        throw new Error(response.statusText);
      }
      return response.json();
    });
  };

  return {
    apiCall,
  };
}

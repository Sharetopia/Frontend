import { Auth } from "aws-amplify";

export function useNetwork() {
  const apiCall = async <T extends unknown>(
    urlPath: string,
    type: string,
    params?: any
  ) => {
    let url = process.env.VUE_APP_API_BASE_URL + urlPath;
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
    } else if ((params && "POST" === type) || (params && "PATCH" === type)) {
      options.body = JSON.stringify(params);
    }

    console.log(`Bearer ${token.getJwtToken()}`);
    console.log(options);

    return fetch(url, options).then((response) => {
      if (!response.ok) {
        console.log(response.json());
        throw new Error(response.statusText);
      }
      return response.json();
    });
  };

  return {
    apiCall,
  };
}

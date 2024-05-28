const GET = "GET";
const POST = "POST";
const HEAD = "HEAD";
const SERVER_URL = "http://localhost:8080"

function makeRequestInit(method, body = {}, isForm = false) {
  const requestInit = {
    method: method,
    credentials: 'include',

  }
  if (method !== GET && method !== HEAD) {
    requestInit.body = body
  }

  if (!isForm) {
    requestInit.headers = {'Content-Type': "application/json",};
    return requestInit;
  }
  return requestInit;

}

async function fetchFromServer(path, requestInit) {
  return fetch(SERVER_URL + path, requestInit)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      if (response.status === 500) {
        console.warn(response.json());
        return Promise.reject("Server Error")
      }
      if (response.status < 500) {
        response.json()
          .then(data => {
            console.warn(data);
          })
        return Promise.reject("" + response.status + " " + response.statusText)
      }
    })
}

export async function fetchGET(path) {
  return await fetchFromServer(path, makeRequestInit(GET))
}

export async function fetchPOST(path, body = {}) {
  const stringifyBody = JSON.stringify(body);
  return await fetchFromServer(path, makeRequestInit(POST, stringifyBody))
}

export async function fetchFORM(path, body) {
  return await fetch(SERVER_URL + path, makeRequestInit(POST, body, true))
}


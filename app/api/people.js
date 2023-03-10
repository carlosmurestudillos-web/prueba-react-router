import { API_HOST } from "../utils/constants";  

export async function getPeople() {
  try{
    const url = `${API_HOST}people/?lmit=10&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPeopleDetailsApi(id) {
  try {
    const url = `${API_HOST}/people/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

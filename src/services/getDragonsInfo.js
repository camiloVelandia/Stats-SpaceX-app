const API = "https://api.spacexdata.com/v4/dragons";

export default async function getDragonsInfo() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}


export default async function getOneRocket(id) {
  const API = `https://api.spacexdata.com/v4/rockets/${id}`;
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

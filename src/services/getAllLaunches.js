const API = `https://api.spacexdata.com/v4/launches/past`;
export default async function getAllLaunches() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

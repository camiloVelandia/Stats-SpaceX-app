export default async function getAllpastLaunches(page) {
  const API = `https://api.spacexdata.com/v4/launches/past/`;

  let response = await fetch(API);
  let data = await response.json();
  return data;
}

const API = `https://api.spacexdata.com/v4/launches/upcoming`;
export default async function getUpcomingLaunches() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

const API = "https://api.spacexdata.com/v4/launches/latest";

export default async function getLatestLaunch() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

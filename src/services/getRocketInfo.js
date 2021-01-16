const API = "https://api.spacexdata.com/v4/rockets";

export default async function getRocketInfo() {
  let response = await fetch(API);
  let data = await response.json();
  return data;
}

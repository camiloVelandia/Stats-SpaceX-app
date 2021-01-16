export default async function getAllLaunches(keyword) {
  const API = `https://api.spacexdata.com/v4/launches/query`,
    params = {
      method: "POST",
      body: JSON.stringify({
        query: {
          $text: {
            $search: keyword || '',
          },
        },
        options: {
          sort: {
            date_utc: "desc",
          },
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

  let response = await fetch(API, params);
  let data = await response.json();
  return data;
}

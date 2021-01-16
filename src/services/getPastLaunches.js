export default async function getAllLaunches(page) {
const API = `https://api.spacexdata.com/v4/launches/query`,
params = {
        method: 'POST', 
        body:JSON.stringify( {
        "query":{},
          "options":{
              "limit":10,
              "sort":{
                "date_utc":"desc"
              },
              'page':page
            }        
        } ),    
        headers: new Headers( {
            'Content-Type': 'application/json'
        } )
    };   

  let response = await fetch(API, params);
  let data = await response.json();
  return data;
}

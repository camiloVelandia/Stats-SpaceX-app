const API = "https://api.spacexdata.com/v4/company";

export default async function getCompanyInfo(){
    let response = await fetch(API);
    let data = await response.json()
    return data
}
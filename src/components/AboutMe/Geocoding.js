import axios from "axios";

const geocodingUrl =
  "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";
const CLIENT_ID = "ao4ecp11iw";
const CLIENT_SECRET = "ROvMyUHxNGArJ9B1FOW0u7JW09fswd2ZjVdf6maL";

export async function Geocoding(query) {
  console.log(query);
  const coord = await axios
    .get(`${geocodingUrl}`, {
      params: {
        query,
      },
      headers: {
        "X-NCP-APIGW-API-KEY-ID": `${CLIENT_ID}`,
        "X-NCP-APIGW-API-KEY": `${CLIENT_SECRET}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": true,
        crossorigin: true,
      },
    })
    .then((res) => {
      // TODO: check if response is ok
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      if (data.addresses.length > 1) {
        console.log(`${query}에는 여러 주소가 있어요.`);
      } else if (data.addresses.length === 0) {
        console.log(`${query}에 해당되는 좌표가 없어요.`);
        return [-1, -1];
      }
      return [data.addresses[0].x, data.addresses[0].y];
    });

  console.log(coord);
  return coord;
}

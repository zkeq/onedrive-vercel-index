var axios = require('axios');
var qs = require('qs');

const base_url = process.env.BASE_URL

// Persistent key-value store is provided by Redis, hosted on Upstash
// https://vercel.com/integrations/upstash

export async function getOdAuthTokens(): Promise<{ accessToken: unknown; refreshToken: unknown }> {
  const accessToken = await (await axios.get( base_url +'/get')).data
  console.log("===== get accessToken =====")
  const refreshToken = await (await axios.get(base_url + '/fresh')).data
  console.log("===== get refreshToken =====")

  return {
    accessToken,
    refreshToken,
  }
}

export async function storeOdAuthTokens({
  accessToken,
  accessTokenExpiry,
  refreshToken,
}: {
  accessToken: string
  accessTokenExpiry: number
  refreshToken: string
}): Promise<void> {
  // 提交 access_token
  var access_token_data = qs.stringify({
    'ak': accessToken,
    'name': 'access_token' 
  });
  var _config = {
    method: 'post',
    url: base_url + '/post_ak',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : access_token_data
  };
  axios(_config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });


  // 提交 refreshToken
  var refreshToken_data = qs.stringify({
    'ak': refreshToken,
    'name': 'refresh_token' 
  });
  var _config = {
    method: 'post',
    url: base_url + '/post_ak',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : refreshToken_data
  };
  axios(_config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

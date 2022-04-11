import axios from 'axios'

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
  var post_url = base_url + "/post_ak" + "?ak=" + accessToken + "&name=" + "access_token"
  await axios.get(post_url)
  var post_rk = base_url + "/post_ak" + "?ak=" + refreshToken + "&name=" + "refresh_token"
  await axios.get(post_rk)
}

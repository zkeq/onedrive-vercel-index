/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  clientId: "7cf54f21-f4b2-48da-8132-095496d75cc2",
  obfuscatedClientSecret: "U2FsdGVkX1+oeFIQsUyI6vcnfUMWwJW6G072mzVQVTvQvu+tKN55R+XASVcvOCU9EQ+ge5Kcpke3AKL1BP0HUg==",

  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // The directLinkRegex is used to match the direct link of the file from the response of the API. We originally use this to prevent
  // unauthorised use of the proxied download feature - but that is disabled for now. So you can safely ignore this settings.
  directLinkRegex: 'public[.].*[.]files[.]1drv[.]com',
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}

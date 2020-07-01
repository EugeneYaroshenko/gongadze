const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  '980533385234-cvorh3ijhnfn5l1v7im4hucp4stv0g1t.apps.googleusercontent.com',
  'U4Q7HXcSD3SLcXU7hQ2r1077',
  'https://eugeneyaroshenko.com'
);

async function lol() {
  const tokens = await oauth2Client.getToken('4/1gETb9n61_o7g91AV4x0hh4KOVp7VxhdD9hYHvXQwcoEGOIb_aol0ieFf8Mta6zbsIXdTLwqP6zzjJEsfTjOpLo')

  console.log(tokens)
}

lol()


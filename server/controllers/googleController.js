const consola = require('consola')
const { google } = require('googleapis')
const fs = require('fs')
const Promise = require('bluebird')

const CLIENT_ID = '980533385234-cvorh3ijhnfn5l1v7im4hucp4stv0g1t.apps.googleusercontent.com'
const CLIENT_SECRET = 'U4Q7HXcSD3SLcXU7hQ2r1077'
const REDIRECT_URIS = ['https://eugeneyaroshenko.com', 'http://localhost']
const TOKEN_PATH = './server/token.json'

const readFile = Promise.promisify(fs.readFile)

const authorizeGoogleAPIUser = function () {
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URIS[0]);

  return readFile(TOKEN_PATH).then((token) => {
    oAuth2Client.setCredentials(JSON.parse(token))

    return Promise.resolve(oAuth2Client)
  }).catch((error) => {
    return consola.info('Error while authorizing user: ', error)
  })
}

exports.saveEmail = function (req, res) {
  const email = req.body.email
  return authorizeGoogleAPIUser().then((auth) => {
    const sheets = google.sheets({ version: 'v4', auth })
    const appendValuesAsync = Promise.promisify(sheets.spreadsheets.values.append.bind(sheets))

    return appendValuesAsync(
      {
        spreadsheetId: '1EZeG1fKcqR9epo4f6SheSFNSN0G8-89g1gpswieTU9I',
        range: 'Emails!A1:Z',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [ [ email ] ]
        },
      }
    ).then(() => {
      consola.info('Success saving email')
    }).catch((error) => {
      consola.info('The API returned an error: ', error)
      return res.status(400).send({ error: error })
    })
  })
}

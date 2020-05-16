const consola = require('consola')
const axios = require('axios')

exports.posts = async function (req, res) {
  try {
    const request = await axios.get('https://admin.gongadzeprize.org/index.php/wp-json/posts/v1/post')

    consola.success(`posts were retrieved successfully`)
    return res.status(200).send({ data: request.data })
  } catch (err) {
    consola.error(`$error retrieving posts: ${err}`)
    return res.status(400).send({ error: err })
  }
}

const router = require('express').Router()
const postController = require('./controllers/postController')

router.route('/posts')
  .get(postController.posts)

module.exports = router

const router = require('express').Router()
const postController = require('./controllers/postController')

router.route('/posts')
  .get(postController.posts)

router.route('/categories')
.get(postController.categories)

module.exports = router

const router = require('express').Router()
const postController = require('./controllers/postController')
const googleController = require('./controllers/googleController')

router.route('/posts')
  .get(postController.posts)

router.route('/categories')
.get(postController.categories)

router.route('/email')
.post(googleController.saveEmail)


module.exports = router

const router = require('express').Router();

const userRoutes = require('./users-routes.js');
const postRoutes = require('./posts-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
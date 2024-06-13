const {Router} = require('express')
const router= Router()
const {createPost, getPosts, getPost, getCatPosts, getUserPosts, editPost, deletePost} = require('../controllers/postController')
const authMiddleware= require('../middlewares/authMiddleware')


router.post('/', authMiddleware, createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.patch('/:id', authMiddleware, editPost)
router.delete('/:id', authMiddleware, deletePost)
router.get('/categories/:category', getCatPosts)
router.get('/users/:id', getUserPosts)

module.exports = router
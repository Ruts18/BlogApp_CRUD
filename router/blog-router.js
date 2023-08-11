const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog-controller');
    
router.post('/', blogController.createBlog);

router.get('/', blogController.getAllBlogs);

router.put('/update/:id', blogController.updateBlog);

router.delete('/delete/:id', blogController.deleteBlog);

module.exports = router;

//blog-router contains the routes related to blog CRUD 
//body-parser is used to parse incoming JSON data.
//The code sets up the routes using the myRouter imported from blog-router. The routes are defined for 
//creating, reading, updating, and deleting blog entries.
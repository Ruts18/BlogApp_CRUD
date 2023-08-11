const blogModel = require("../models/blog-model");

exports.createBlog = (req, res) => {
    const {name, information, image, date} = req.body;
    blogModel.create(name, information, image, date, (err, data) => {
        if(err)
        {
            console.log(err);
        }
        console.log('Blog Created:', data);
        return res.status(200).json({ message: 'Blog created successfully' });
    });
};

exports.getAllBlogs = (req, res) => {
    blogModel.getAll((err, data) => {
        if(err)
        {
            console.log(err);
        }
        console.log('Blogs:', data);
        return res.status(200).json(data);
    });
};

exports.updateBlog = (req, res) => {
    const {id} = req.params;
    const {name, information, image, date,} = req.body;
    blogModel.update(id,name, information, image, date, (err, data) => {
        if(err)
        {
            console.log(err);
        }
        console.log(data);
        return res.status(200).json({ message: 'Blog updated successfully' });
    });
};
exports.deleteBlog = (req, res) => {
    const {id} = req.params;
    blogModel.delete(id, (err, data) => {
        if(err)
        {
            console.log(err);
        }
        console.log('Blog Deleted:', data);
        return res.status(200).json({ message: 'Blog deleted successfully' });
    });
};

//This module exports functions to handle HTTP requests related to blog CRUD operations.
//Each function in this module interacts with the 
//blog-model to perform the corresponding CRUD operation on the MySQL database.


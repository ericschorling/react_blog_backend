'use strict'
const express = require('express'),
    router = express.Router();
const Blogs = require('../models/getBlogs')

router.get('/:name?', async (req, res)=> {
    const id = req.params.name
    const blogPost = await Blogs.getABlog(id)
    const comments = await Blogs.getComments(id)
    console.log(blogPost, comments)
    const commentArr = comments.map(comment => comment.comment)
    const returnObj = [blogPost, commentArr]
    console.log(returnObj)
    res.json(returnObj).status(200)
})

module.exports = router;
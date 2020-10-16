'use strict'

const express = require('express'),
    router = express.Router();
const Blogs = require('../models/getBlogs')

router.post('/', async (req, res) => {
    await Blogs.postComment(req.body.blog_id, req.body.comment)
})

module.exports = router
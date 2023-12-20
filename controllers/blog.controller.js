import BlogPost from '../models/blog.model.js';

export const createBlog = async (req, res, next) => {
    const { title, content, author } = req.body;
    const blogPost = new BlogPost({ title, content, author});

    try {
        await blogPost.save();
        res.status(200).json('Blog created successfully!');
    } catch (error) {
        next(error);
    }
};
import BlogPost from '../models/blog.model.js';
import { errorHandler } from '../utils/error.js';

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

export const readBlog = async (req, res, next) => {
    try {
        const blogPosts = await BlogPost.find();
        if(blogPosts.length === 0) {
            return next(errorHandler(404, "No blogs found!"));
        }
        res.status(200).json(blogPosts);
    } catch (error) {
        next(error);
    }
};

export const getBlog = async (req, res, next) => {
    try {
        const blog = await BlogPost.findById(req.params.id);
        if(!blog) {
            return next(errorHandler(404, "Blog not foun!"));
        }
        res.status(200).json(blog);
    } catch (error) {
        next(error);
    }
};

export const deleteBlog = async (req, res, next) => {
    const blog = await BlogPost.findById(req.params.id);
    if(!blog) {
        return next(errorHandler(404, "Blog not found!"));
    }
    try {
        await BlogPost.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog has been deleted successfully!");
    } catch (error) {
        next(error);
    }
};

export const updateBlog = async (req, res, next) => {
    const blog = await BlogPost.findById(req.params.id);
    if(!blog) {
        return next(errorHandler(404, "Blog not found!"));
    }
    try {
        const updatedBlog = await BlogPost.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updatedBlog);
    } catch (error) {
        next(error);
    }
};
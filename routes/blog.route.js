import express from 'express';
import {createBlog, readBlog, getBlog, deleteBlog, updateBlog} from '../controllers/blog.controller.js';

const router = express.Router();

router.post(`/create`, createBlog);
router.get(`/read`, readBlog);
router.get(`/read/:id`, getBlog);
router.delete('/delete/:id', deleteBlog);
router.post(`/update/:id`, updateBlog);
export default router;
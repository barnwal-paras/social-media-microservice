import express, { Router, Request, Response } from "express";
import { createPost, getPostAnalysis } from "../controller/postController";
import { validationMiddleware } from "../middleware/validation";
import { PostRequestDTO } from "../model/dto/postRequest";

export const postRouter: Router = express.Router()
postRouter.use(express.json())


postRouter.post('/api/v1/posts',  validationMiddleware(PostRequestDTO),createPost)
postRouter.get('/api/v1/posts/:id/analysis/', getPostAnalysis)




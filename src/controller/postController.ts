import {Request, Response} from "express";
import  {GetPostAnalysis, createNewPost} from "../service/postService"
import { Post } from "../model/post";


export const createPost = async (req: Request, res: Response)=>{
    const body: Post = req.body;
    try{
        await createNewPost(body);
        res.status(201).send();
    }catch(error){
        res.status(500).send(error)
    }
    
}


export const getPostAnalysis = async (req: Request, res: Response) => {
    var id: string = req.params.id;
    try{
        var result = await GetPostAnalysis(id);
        if(result == null){
            return res.status(404).send();
        }
        return res.status(200).send(result);
    }catch(error){
        res.status(500).send(error)
    }
}


